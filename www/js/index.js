"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manageSMS_1 = require("./manageSMS");
var sentimentAnalysis_1 = require("./sentimentAnalysis");
var translate = require("./../../hooks/translate");
require("./visualEffects");
var CordovaApp = (function () {
    function CordovaApp() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    CordovaApp.prototype.onDeviceReady = function () {
        installTheApp();
        function installTheApp() {
            var sms = new manageSMS_1.SMSManager();
            var textAnalysis = new sentimentAnalysis_1.TextAnalysis();
            var smsData = {};
            var install = document.querySelector("#installTheApp");
            var getReceivedMessages = install.querySelector("#getReceivedMessages");
            getReceivedMessages.addEventListener('click', function () {
                sms.getAllSMS({
                    box: 'inbox',
                    maxCount: 10000,
                }).then(function (allSMS) {
                    smsData = allSMS;
                    console.log(smsData);
                }).catch(function (error) { return console.error("la promesse concernant getAllSMS a échoué"); });
            });
            var getSentMessages = document.querySelector("#getSentMessages");
            getSentMessages.addEventListener('click', function () {
                sms.getAllSMS({
                    box: 'sent',
                    maxCount: 10000,
                }).then(function (allSMS) {
                    for (var contact in smsData) {
                        Object.assign(smsData[contact], allSMS[contact]);
                    }
                }).catch(function (error) { return console.error("la promesse concernant getAllSMS a échoué"); });
            });
            var translateMessagesToEnglish = install.querySelector("#translateMessages");
            translateMessagesToEnglish.addEventListener('click', function () {
                var _loop_1 = function (contact) {
                    console.log(smsData[contact]);
                    var _loop_2 = function (type) {
                        var _loop_3 = function (smsID) {
                            console.log(smsData[contact][type][smsID].text.fr);
                            translate(smsData[contact][type][smsID].text.fr, { to: 'en' }).then(function (translatedText) {
                                var text = translatedText;
                                if (translatedText.indexOf('&#39;') !== -1) {
                                    text = translatedText.replace('&#39;', "'");
                                }
                                smsData[contact][type][smsID].text.en = text;
                            });
                        };
                        for (var smsID in smsData[contact][type]) {
                            _loop_3(smsID);
                        }
                    };
                    for (var type in smsData[contact]) {
                        _loop_2(type);
                    }
                };
                for (var contact in smsData) {
                    _loop_1(contact);
                }
                console.log("avec traduction");
                console.log(smsData);
            });
            var sentimentAnalysis = install.querySelector("#analyzeSentiment");
            sentimentAnalysis.addEventListener('click', function () {
                for (var contact in smsData) {
                    for (var type in smsData[contact]) {
                        if (type !== 'name') {
                            for (var singleSMS in smsData[contact][type]) {
                                var englishSMS = smsData[contact][type][singleSMS].text.fr;
                                smsData[contact][type][singleSMS].analysis = {};
                                smsData[contact][type][singleSMS].analysis.sentiment = {};
                                smsData[contact][type][singleSMS].analysis.sentiment = textAnalysis.sentimentAnalysis(englishSMS);
                            }
                        }
                    }
                }
                console.log('smsData after analysis');
                console.log(smsData);
            });
            var darktriadAnalysis = install.querySelector("#analyzeDarktriad");
            darktriadAnalysis.addEventListener('click', function () {
            });
            var bigfiveAnalysis = install.querySelector("#analyzePersonality");
            bigfiveAnalysis.addEventListener('click', function () {
            });
            var genderPrediction = install.querySelector("#analyzeGender");
            genderPrediction.addEventListener('click', function () {
            });
            var temporalOrientation = install.querySelector("#analyzeTemporalOrientation");
            genderPrediction.addEventListener('click', function () {
            });
            var getContactNames = install.querySelector("#getContactNames");
            getContactNames.addEventListener('click', function () {
                sms.findContactsName(smsData).then(function (smsDataWithNames) {
                    smsData = smsDataWithNames;
                }, function (error) {
                    console.error(error);
                });
                console.group("Get contact names");
                console.log(smsData);
                console.groupEnd();
            });
            var getCurrentDate = install.querySelector("#getCurrentDate");
            getCurrentDate.addEventListener('click', function () {
                var today = new Date();
                console.log(typeof today);
                localStorage.setItem('installation', JSON.stringify(today));
            });
        }
        var userData;
        userData = {
            firstUsage: true,
            lastSynchro: '',
            smsLoaded: false,
            smsTranslated: false,
            smsAnalyzed: {
                darktriad: false,
                sentiment: false
            }
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    };
    return CordovaApp;
}());
exports.CordovaApp = CordovaApp;
var instance = new CordovaApp();
//# sourceMappingURL=index.js.map