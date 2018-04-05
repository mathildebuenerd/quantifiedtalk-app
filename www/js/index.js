var mybody = document.querySelector('body');
var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        console.log("The device is ready");
        var recognition = new SpeechRecognition();
        recognition.lang = "fr-FR";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;
        var recognizing = false;
        var mybutton = document.querySelector('#startSpeechRecognition');
        mybutton.addEventListener('click', restartRecognition);
        recognition.start();
        recognition.onstart = function () {
            mybody.style.backgroundColor = "blue";
            recognizing = true;
        };
        recognition.onresult = function (event) {
            var sentence = '';
            for (var i = 0; i < event.results.length; i++) {
                sentence += event.results[i][0].transcript + ' ';
            }
            mybody.textContent = sentence;
            console.log(sentence);
            if ((sentence.split(' ')).length > 10) {
                restartRecognition();
            }
        };
        recognition.onend = function () {
            mybody.style.backgroundColor = "red";
            restartRecognition();
        };
        function restartRecognition() {
            recognition.stop();
            recognition.start();
        }
    }
};
app.initialize();
//# sourceMappingURL=index.js.map