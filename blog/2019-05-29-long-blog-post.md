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

![test](/img/5.png)

Ebenso werden die Intents mithilfe von “Lämpchen” (grün,gelb,rot) eingestuft. Rote Lämpchen sollten vollumfänglich vermieden werden. Berühren des Lämpchens mit dem Mauszeiger zeigt den Score und weitere Anmerkungen an.

![test](/img/6.png)

### Wie erstelle ich einen Intent?
**Hinweis**: Änderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.
Innerhalb eines Flows muss in der Leiste oben **NLU** ausgewählt werden.
Über den “Neuer Intent”-Button kann ein neuer Intent erstellt werden, dessen Name definiert werden muss.

![test](/img/7.png)

Anschließend können Beispielsätze in den Intent geschrieben werden.

Neben einer normalen Textausgabe, kann in der Node auch beispielsweise ein Button oder ein Bild mitausgegeben werden. Über den Ausgabetyp nach anklicken der entsprechenden Node, kann der gewünschte Fall ausgewählt werden.

![test](/img/8.png)

![test](/img/9.png)

Für einen Button muss der Ausgabetyp „Text with Buttons“ gewählt werden. Durch Betätigen der „Neuer Button“-Oberfläche kann ein Button definiert werden. Dieser kann dem Bot beispielsweise einen Wert zurückweisen („Postback-value) oder an eine URL verweisen.

![test](/img/10.png)

Zusätzlich gibt es die Möglichkeit für vorgefertigte Antworten („Quick Replies“). Diese können ebenso einen Wert an den Bot zurückgeben und sind beispielsweise sinnvoll bei Ja/Nein-Fragen oder wenn die Anzahl möglicher Antworten beschränkt ist.

### Wie trainiere ich einen Intent?

**Hinweis**: Änderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.

Nach der Erstellung eines Intents oder nach **jeder** Änderung eines bestehenden Intents muss der Chatbot aktualisiert werden. Dies geschieht über den **Model bauen**-Button.

![test](/img/11.png)

Nach der Bot-Aktualisierung erscheint sowohl neben dem Intent, als auch neben jedem Beispielssatz das Lämpchen, was die Güte der Änderung beschreibt.
![test](/img/12.png)

![test](/img/13.png)

Mit Hilfe des **Intenttrainer** kann man optional noch den Intent verbessern.

![test](/img/14.png)

![test](/img/15.png)

## Wie erstelle ich einen neuen Gesprächsverlauf?
Innerhalb eines Flows werden die Gesprächshandlungen nach Intents aufgeteilt. Mittels der Lookup-Node wird geschaut, welcher Intent erkannt wurde.

![test](/img/16.png)

![test](/img/17.png)

Nun kann für jeden einzelnen Intent ein Gesprächsverlauf erstellt werden.
Dazu muss innerhalb des Lookups ein Intent durch Klicken auf das Case-Symbol ausgewählt werden.
Wird kein Intent erkannt, dann wird der Default-Strang ausgeführt.
Mittels des Plus-Symbols „+“ können jegliche Funktionen in den Gesprächsverlauf eingefügt werden
Neben der Say-Node kann mittels der Question-Node durch den Chatbot eine Frage an den Nutzer gestellt werden, um dessen Anliegen zu spezifizieren. Im Gegensatz zur Say-Node wird hier auf die Eingabe des Nutzers gewartet.

![test](/img/18.png)

Hierbei muss der Fragentyp spezifiziert werden. Mit „Text“ werden jegliche Antworten akzeptiert, während „Ja/Nein“ eine entsprechende Ja/Nein-Antwort erwartet.

In der Menüoption „Reprompt Optionen“ sollte noch der Text geändert werden, der angezeigt wird, wenn der Fragentyp nicht erfüllt wurde von der Nutzereingabe. Dies kann z.B. auftreten, wenn der Fragentyp „Ja/Nein“ ist, und der/die Nutzer:in etwas anderes eintippt als „Ja“ oder „Nein“ (Welche Wörter genau zu „Ja“ und zu „Nein“ gehören, kann später in den Einstellungen festgelegt werden). Weiterhin sollte überlegt werden, ob es bei dieser Frage sinnvoll ist, dass sie bei einer falschen Antwort noch einmal gestellt wird. Je nach Wunsch muss dann der Regler „Fragen wiederholen“ aktiviert werden oder nicht.

![test](/img/19.png)