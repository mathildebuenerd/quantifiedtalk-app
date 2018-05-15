import * as getData from "./getData";
const installation = new getData.Installation();
import * as score from "./calculateScores";
const calculate = new score.CalculateScore();
import * as writingInterface from "./writingInterface";
const writingAssistant = new writingInterface.WritingInterface();
import set = Reflect.set;

import * as translate from "./../../hooks/translate";
import * as keys from './apiKeys';
import {TextAnalysis} from "./sentimentAnalysis";
const text = new TextAnalysis();
const Keys = new keys.Keys();
translate.key = Keys.API_KEY;
translate.from ='fr';

export class CordovaApp {
    constructor() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    }

    onDeviceReady() {

        // localStorage.removeItem('smsData');

        // s'il n'y a pas de smsData, ça veut dire qu'on a pas encore installé l'application
        if (localStorage.getItem('smsData') === null) {
            installation.start();
        }



        let smsData = JSON.parse(localStorage.getItem('smsData'));

        // for (const contact in smsData) {
        //     for (const type in smsData[contact]) { // type = inbox | sent | name
        //         if (type !== 'name') { // on ne boucle que dans inbox et sent
        //             for (const singleSMS in smsData[contact][type]) {
        //                 const englishSMS = smsData[contact][type][singleSMS].text.en;
        //                 const originalSMS = smsData[contact][type][singleSMS].text.original;
        //                 smsData[contact][type][singleSMS].analysis.sentiment = {};
        //                 smsData[contact][type][singleSMS].analysis.sentimentFr = {};
        //                 smsData[contact][type][singleSMS].analysis.sentimentFr = text.sentimentAnalysis(originalSMS, 'fr');
        //                 smsData[contact][type][singleSMS].analysis.sentiment = text.sentimentAnalysis(englishSMS, 'en', originalSMS)
        //             }
        //         }
        //     }
        // }

        console.log(`smsData:`);
        console.log(smsData);
        document.querySelector('#addThisToStorage').addEventListener('click', () => {
            let str = JSON.stringify(smsData);
            // localStorage.removeItem('allSMS');
            // localStorage.removeItem('allSMSanalyzed');
            localStorage.setItem('smsData', str);
            console.log(localStorage);
        });

        // let triad_ = text.darktriadAnalysis("What a woman! She's so strange.");
        // console.log(`triad:`);
        // console.log(triad_);


        for (const contact in smsData) {
            for (const type in smsData[contact]) { // type = inbox | sent | name
                if (type !== 'name') { // on ne boucle que dans inbox et sent
                    for (const singleSMS in smsData[contact][type]) {
                        const englishSMS = smsData[contact][type][singleSMS].text.en;
                        const analysis = smsData[contact][type][singleSMS].analysis;
                        const darktriad_m = text.darktriadAnalysis(englishSMS, {"output": "matches"});
                        analysis.darktriad = {};
                        analysis.darktriad.machiavellianism = {};
                        analysis.darktriad.narcissism = {};
                        analysis.darktriad.psychopathy = {};
                        analysis.darktriad.triad = {};
                        for (const trait in darktriad_m) {// trait is machiavelllianism or narcissism or psychopathy or triad
                            analysis.darktriad[trait].score = 0;
                            analysis.darktriad[trait].words = {
                                "positive": [],
                                "negative": []
                            };
                            if (darktriad_m[trait] !== []) {
                                for (const word in darktriad_m[trait]) {
                                    analysis.darktriad[trait].score += darktriad_m[trait][word][3]; // word[3] c'est la valeur du mot
                                    if (darktriad_m[trait][word][3] > 0) { // le mot peut soit faire augmenter, soit faire baisser un certain trait de personnalité, il faut donc classifier les mots
                                        analysis.darktriad[trait].words.positive.push(darktriad_m[trait][word][0]); // word[0] c'est le mot qui a matché
                                    } else {
                                        analysis.darktriad[trait].words.negative.push(darktriad_m[trait][word][0]); // word[0] c'est le mot qui a matché
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }



        console.log(`smsData après darktriad:`);
        console.log(smsData);
        //
        //
        // let bigfive_m = text.personalityAnalysis('I am always so tired...', {"output": "matches"});
        // console.log(`big five matched:`);
        // console.log(bigfive_m);
        //
        // let bigfive_ = text.personalityAnalysis("I am always so tired...");
        // console.log(`big five:`);
        // console.log(bigfive_);



        // detect("Je viens demain").then(lang => {
        //     console.log(`lang: ${lang}`);
        // });

        // let myscore = calculate.scoreWithContact('0675611341', 'sent');
        // let momscore = calculate.scoreWithContact('0675611341', 'inbox');
        // let clemence = calculate.scoreWithContact('0783094512', 'inbox');
        // let samy = calculate.scoreWithContact('0638768915', 'inbox');

        // let wordsMom = calculate.getMostUsedWords("positive", "0783094512", "inbox", "fr");
        // let wordsMe = calculate.getMostUsedWords("positive", "0783094512", "sent", "fr");
        // let wordsMomNeg = calculate.getMostUsedWords("negative", "0783094512", "inbox", "fr");
        // let wordsMeNeg = calculate.getMostUsedWords("negative", "0783094512", "sent", "fr");
        //
        // console.log(`wordsMe:`);
        // console.log(wordsMe);
        // console.log(`wordsMom:`);
        // console.log(wordsMom);
        // console.log(`wordsMeNeg:`);
        // console.log(wordsMeNeg);
        // console.log(`wordsMomNeg:`);
        // console.log(wordsMomNeg);

        //
        // console.group("Résultats des scores");
        // console.log('my score:');
        // console.log(myscore);
        // console.log('mom score:');
        // console.log(momscore);
        // console.log('clemence:');
        // console.log(clemence);
        // console.log('samy:');
        // console.log(samy);
        // console.groupEnd();

        // let test = text.sentimentAnalysis("The team has just finished. So we can meet now?", "en");
        // console.log(`test:`);
        // console.log(test);

        // console.log(text.sentimentAnalysis())

        // writingAssistant.startAssistance();




    }

}

let instance = new CordovaApp();
