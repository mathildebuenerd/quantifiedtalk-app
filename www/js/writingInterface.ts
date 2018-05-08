/**
 * Created by mathi on 05/05/2018.
 */
import * as SMS from "./manageSMS";
import getPrototypeOf = Reflect.getPrototypeOf;
const sms = new SMS.SMSManager();
import {TextAnalysis} from "./sentimentAnalysis";
const textAnalysis: TextAnalysis = new TextAnalysis();


export class WritingInterface {


    startAssistance= () => {
        const textArea = <HTMLTextAreaElement>document.querySelector('#smsContent');
        textArea.addEventListener('keyup', this.analyzeText); // keypress ne fontionne pas avec le clavier android, il faut utiliser keyup
    }

    public changeSidebarColor= (color: string) => {
        let sidebar = <HTMLElement>document.querySelector('#feedback');
        sidebar.style.backgroundColor = '#' + color;
    };


    public analyzeText=() => {
        const language = 'fr';
        const textArea = <HTMLTextAreaElement>document.querySelector('#smsContent');
        const text = textArea.value;
        console.log(`text: ${text}`);
        const allWordsExceptLast = new RegExp(/.+ /, 'gim'); // récupère tous les mots suivits d'un espace (tous sauf celui qui est en train d'être écrit)
        const sentence = text.match(allWordsExceptLast); // match renvoie un tableau de correspondances, mais avec la regex il n'est sensé renvoyer qu'un seul tableau
        const letters = new RegExp(/[a-z]/, 'i');

        if (letters.test(sentence[0])) { // sentence[0] est parfois égal à plein d'espaces ('     '), pour être sûr qu'il y a bien du texte, on vérifie qu'il y ai une lettre
            console.log(`Sentence existe, voici son analyse:`);

            // let analysis = {};
            let score = 0;
            let colors = {
                "a5f31b": 8,
                "a4ed2b": 7,
                "a2e739": 6,
                "a1dc52": 5,
                "a1d16b": 4,
                "a1c087": 3,
                "a1b595": 2,
                "a1a69f": 1,
                "a39ba1": 0,
                "ae849b": -1,
                "b57794": -2,
                "c26185": -3,
                "cf4c74": -4,
                "db3863": -5,
                "e82551": -6,
                "f21542": -7,
                "fb0736": -8
            };
            const analysis = textAnalysis.sentimentAnalysis(sentence[0], language);
            console.log(`analysis:`);
            console.dir(analysis);
            console.log(`analysis['score']`);
            console.log(analysis['score']);
            console.log(`for in loop`);

            if (analysis['score'] !== undefined) {
                console.log(`analysis['score'] existe`);
                console.dir(analysis['score']);
                score += analysis['score'];
            } else {
                console.log(`analysis['score'] n'existe pas`);
                for (const object in analysis) {
                    console.dir(analysis[object]['score']);
                    score += analysis[object]['score'];
                }
            }
            console.log(`colors: ${colors}`);
            console.log(`score: ${score}`);
            let color = this.getColor(colors, score);
            this.changeSidebarColor(color);
            console.log(`score: ${score}`);


            // const languages = sms.detectLanguage(String(sentence));
            // console.log(`languages: `);
            // console.log(languages);
        } else {
            console.warn(`sentence n'existe pas, elle est égale à ${sentence} et est de type ${typeof sentence}`);
        }
    };

    public getColor= (object: object, value: number): string => {
        if (value > 8) {
            value = 8;
        } else if (value < -8) {
            value = -8;
        }
        return Object.keys(object).find(key => object[key] === value);
    };


}