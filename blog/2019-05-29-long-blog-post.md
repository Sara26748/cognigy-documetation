---
slug: Cognigy Dokumentation 
title: Cognigy Dokumentation 
authors: 
  name: Sara Salha
  title: Werkstudentin
  url: https://de.linkedin.com/in/sara-salha-9a6a09230
  image_url: https://github.com/wgao19.png
tags: [Cognigy, Dokumentation]
---
---
## Wie registriere ich mich bei Cognigy?
Um sich bei Cognigy zu registrieren, kontaktiere bitte einen Admin. Bitte registriere dich NICHT über andere Wege auf deren Homepage.  

## Wie melde ich mich bei Cognigy an?
Es gibt keinen allgemeinen Link, wo man sich bei Cognigy anmelden kann. Melde Dich bitte über den Link Deiner Organisation an. Dieser kann wie folgt aussehen: https://app.cognigy.ai/login?organisationId=1234567890abc. 

Falls Du den Link nicht hast, wende Dich bitte an einen Admin. 

## Wie finde ich eine Übersicht der bestehenden Chatbots? 
### Weg zur Übersicht 
Nach der Anmeldung befindet sich auf der linken Seite eine Spalte mit “Agents”, welche die bestehenden Bots auflistet. 
Durch das Symbol in der oberen linken Ecke gelangt man zurück zur Startseite. 

## Auflistung bestehender Chatbots
| Agent  1 | Umgebung | Links    |
|----------|----------|----------|
| Tonibot  | Produktiv | Link zu Teams|
| Tonibot Test| Test   | Direktlink zum Chat|
| Tonibot DEV| Entwicklung | Direktlink zum Chat|

## Wie erhalte ich Zugriff auf einen Chatbot? (Rechte für Chatbots zuweisen) 
Durch  das Benutzermenü aufrufen und zu Zugriffberechtigungen navigieren. Danach den eigenen Nutzer auswählen und unter Zugewiesene Agents durch „+“ einen neuen Bot hinzufügen. 

## Wie kann ich eine bestehende Antwort ändern? 
**Hinweis**: Änderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen. 

Handlungsschritte des Bots sind in speziellen Funktionen, den sogenannten **Nodes** gespeichert. Um eine bestehende Antwort des Bots zu ändern, muss entweder auf die Say-Node oder die Question-Node zugegriffen werden.

![test](/img/3.png)

## Was ist ein Flow?
Ein Flow ist die visuelle Darstellung von Konversationsabläufen innerhalb eines Chatbots, welche den Bot in Themenbereiche gliedern. 

Hier wird der Austausch zwischen dem Chatbot und den Nutzer:innen entworfen. 

Die Nodes innerhalb eines Flows definieren die auszuführenden Aktionen (Antwort geben, Nachfrage stellen,…). 

Nach der Auswahl der Flow-Übersicht über das Kontextmenü Bauen -> Flows kann ein neuer Flow angelegt werden.

![test](/img/4.png)

## Wie kann ich eine bestehende Antwort ändern?
Klicke innerhalb eines Flows auf eine **Node**, diese sind durch einen blauen Unterstrich gekennzeichnet und passe im Textfeld die Antwort an. Abschließend muss auf den **Node Speichern** Button gedrückt werden. 

## Wie kann ich eine weitere Antwort einpflegen?
Durch das Plus-Symbol innerhalb eines Flows kann eine weitere Antwort eingepflegt werden. Dort kann die **Say-Node** ausgewählt werden, um eine weitere Antwort einzupflegen. Neben der Say-Node existieren dort alle weiteren Funktionen zur Erweiterung des Chatbots. Die Abläufe innerhalb eines Flows werden chronologisch von oben nach unten durchlaufen. 

## Wie kann ich eine neue Antwort einpflegen?
### Was ist ein Intent? 
Durch Intents (Absicht), können beachsichte Handlungen eines Chatbot-Nutzers erkannt werden. Jeder Intent definiert sich durch Beispielssätze, die dem Bot bei der Erkennung helfen. 

Intents werden immer nur innerhalb eines Flows definiert. 

Fragt der Nutzer beispielsweise danach, seine Zahlungsart zu wechseln, so wird der Intent „02-zahlungsart-wechseln“ aktiviert und der Chatbot führt eine entsprechende Handlung aus. 


### Wofür eignen sich Intents, wofür nicht? (Optimaler Aufbau)
Intents helfen dabei, das Nutzeranliegen zu erkennen.  
Intents sollten nicht direkt aus dem Monitoring übernommen werden, sich jedoch daran orientieren.
Beachten: 
-     In den einzupflegenden Beispielsätzen sollte sich auf die wichtigsten Informationen beschränkt werden 
-     Zwei verschiedene Nutzeranliegen, die jedoch auf den gleichen Intent abzielen, sollten in zwei unterschiedlichen Beispielsätzen verpackt werden.
-     Es sollte darauf geachtet werden, diese grammatikalisch korrekt auszuführen. 
-     Thematische Überschneidungen mit anderen Intents sollten vermieden werden 
-     Mindestens zehn Beispielsätze sollten formuliert werden 
In Cognigy werden die Intents anhand eines Scores von 0 bis 1 bewertet. Ein hoher Score ist erstrebenswert.
Ebenso werden die Intents mithilfe von “Lämpchen” (grün,gelb,rot) eingestuft. Rote Lämpchen sollten vollumfänglich vermieden werden. Berühren des Lämpchens mit dem Mauszeiger zeigt den Score und weitere Anmerkungen an. 