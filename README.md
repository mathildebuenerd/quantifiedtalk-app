# Quantified Talk

_(français en dessous)_

## Description
Quantified Talk is an Android mobile app that allows people to quantify the way they talk, in order to help them to deal with their social relationships.

The app analyzes the valence of the user’s text messages, and gives clues about the contacts who are the most positive and the most negative. It compares the positivity of the messages sent and received, in order to see if there’s a loss of balance between the two people’s writing. It also looks at the personality of these contacts, to show which kind of personality is the most compatible with the user. Finally, it looks at the positivity of the messages depending on the weekdays/hours they were sent, in order, for example, to recommend people to avoid sending messages on certain days/hours, or on the contrary, to nudge them to do so. 

The app also contains an interactive writing interface, which analyses in real time the quality of messages about to be sent, in order to help the user to be more positive.

## Plugins used
As sentiment analysis is far more developped for the English language, all text messages are translated to english before being analyzed.

Then, several analysis are done :
- Positivity/Négativity with [ml-sentiment](https://www.npmjs.com/package/ml-sentiment)
- Dark Triad with [darktriad](https://www.npmjs.com/package/darktriad)
- Big Five personality traits with [bigfive](https://www.npmjs.com/package/bigfive)

-----

## Description
Quantified Talk est une application de messagerie pour Android qui aide à la gestion des relations sociales par l'analyse du comportement verbal.

L'application analyse les sentiments des SMS reçus, et peut ainsi déceler les contacts les plus positifs et les plus négatifs. Elle analyse aussi les SMS envoyés, de manière à identifier les jours de la semaine et moments de la journée durant lesquels l'usager est le plus positif.

Enfin, l'application possède une interface d'écriture de SMS interactive, qui permet d'analyser en temps réel la qualité des messages que l'usager s'apprête à envoyer, et ainsi lui conseiller des pistes d'amélioration.

## Fonctionnement et plugins
L'analyse de sentiment étant largement plus développée pour la langue anglaise que les autres langues, tous les SMS sont traduits vers l'anglais avant d'être analysés.

Plusieurs analyses sont ensuite effectuées :
- Positivité/Négativité avec [ml-sentiment](https://www.npmjs.com/package/ml-sentiment)
- Triade noire avec [darktriad](https://www.npmjs.com/package/darktriad)
- Big Five (personnalité) avec [bigfive](https://www.npmjs.com/package/bigfive)



