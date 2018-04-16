cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-media.MediaError",
    "file": "plugins/cordova-plugin-media/www/MediaError.js",
    "pluginId": "cordova-plugin-media",
    "clobbers": [
      "window.MediaError"
    ]
  },
  {
    "id": "cordova-plugin-media.Media",
    "file": "plugins/cordova-plugin-media/www/Media.js",
    "pluginId": "cordova-plugin-media",
    "clobbers": [
      "window.Media"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognition",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognition.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognition"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionError",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionError.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionError"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionAlternative",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionAlternative.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionAlternative"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResult",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResult.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionResult"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResultList",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResultList.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionResultList"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionEvent",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionEvent.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionEvent"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechGrammar",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammar.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechGrammar"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechGrammarList",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammarList.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechGrammarList"
    ]
  },
  {
    "id": "cordova-plugin-sms.SMS",
    "file": "plugins/cordova-plugin-sms/www/SMS.js",
    "pluginId": "cordova-plugin-sms",
    "clobbers": [
      "window.SMS"
    ]
  },
  {
    "id": "cordova-sms-plugin.Sms",
    "file": "plugins/cordova-sms-plugin/www/sms.js",
    "pluginId": "cordova-sms-plugin",
    "clobbers": [
      "window.sms"
    ]
  },
  {
    "id": "nodejs-mobile-cordova.nodejs",
    "file": "plugins/nodejs-mobile-cordova/www/nodejs_apis.js",
    "pluginId": "nodejs-mobile-cordova",
    "clobbers": [
      "nodejs"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-push": "2.1.3",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-media": "5.0.2",
  "phonegap-plugin-speech-recognition": "0.3.0",
  "cordova-plugin-sms": "1.0.5",
  "cordova-sms-plugin": "0.1.11",
  "nodejs-mobile-cordova": "0.1.4"
};
// BOTTOM OF METADATA
});