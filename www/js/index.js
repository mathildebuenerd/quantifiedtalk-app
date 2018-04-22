"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manageSMS_1 = require("./manageSMS");
var sentimentAnalysis_1 = require("./sentimentAnalysis");
var translate = require("./../../hooks/translate");
var CordovaApp = (function () {
    function CordovaApp() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    CordovaApp.prototype.onDeviceReady = function () {
        console.profile();
        console.log("The device is ready");
        console.log('localStorage');
        console.log(localStorage);
        var sms = new manageSMS_1.SMSManager({
            box: 'sent',
            maxCount: 2000,
        });
        var analysis = new sentimentAnalysis_1.SentimentAnalysis('en');
        var allSMS;
        document.querySelector('#loadSMS').addEventListener('click', function () {
            sms.getAllSMS().then(function (allSMS) {
                console.group("getAllSMS");
                console.log('je suis dans then getAllSMS');
                console.log('typeof allSMS : ' + typeof allSMS);
                console.log(allSMS);
                console.groupEnd();
                document.querySelector('#translateSMS').addEventListener('click', function () {
                    console.group("translate");
                    console.log(allSMS);
                    var _loop_1 = function (contact) {
                        console.log(allSMS[contact]);
                        var _loop_2 = function (smsID) {
                            console.log(allSMS[contact][smsID].body.fr);
                            translate(allSMS[contact][smsID].body.fr, { to: 'en' }).then(function (translatedText) {
                                var text = translatedText;
                                if (translatedText.indexOf('&#39;') !== -1) {
                                    text = translatedText.replace('&#39;', "'");
                                }
                                allSMS[contact][smsID].body.en = text;
                            });
                        };
                        for (var smsID in allSMS[contact]) {
                            _loop_2(smsID);
                        }
                    };
                    for (var contact in allSMS) {
                        _loop_1(contact);
                    }
                    console.log('Mes traductions :');
                    console.log(allSMS);
                    console.groupEnd();
                    document.querySelector('#addToStorage').addEventListener('click', function () {
                        console.log('Storage');
                        localStorage.removeItem('allSMS');
                        localStorage.setItem("allSMS", JSON.stringify(allSMS));
                        var storageSMS = localStorage.getItem("allSMS");
                        console.log("Mon local storage :");
                        console.log(JSON.parse(storageSMS));
                        console.groupEnd();
                    });
                });
            }).catch(function (error) { return console.error("la promesse concernant getAllSMS a échoué"); });
        });
        function analyze(translatedSMS) {
            console.log('analyze');
            var stats = [];
            for (var i = 0; i < 20; i++) {
                stats[i] = analysis.analyze(translatedSMS[i], 'en');
            }
            console.log('stats');
            console.log(stats);
        }
    };
    return CordovaApp;
}());
exports.CordovaApp = CordovaApp;
var instance = new CordovaApp();
//# sourceMappingURL=index.js.map