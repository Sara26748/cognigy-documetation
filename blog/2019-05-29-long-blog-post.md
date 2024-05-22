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

In der Menüoption „Ergebnis Speicherung“ der Question-Node kann die Eingabe des Nutzers gespeichert werden, um zu einem späteren Zeitpunkt darauf zuzugreifen. Dazu muss dem Kontext ein Name zur Speicherung zugeordnet werden (hier Zahlung). Der durch den Nutzer gegeben wird dadurch in der Variable context.Zahlung gespeichert.

![test](/img/20.png)

Mit der eingeführten Lookup-Node kann entsprechend dieses Kontext-Wertes weiterführend verzweigt werden. Dazu wird in dem Menü der Lookup-Node „CognigyScript“ ausgewählt und im Operator die definierte Variable ausgewählt. Tippt der Nutzer in dem hier gewählten Beispiel also „eMail“ ein, so wird entsprechend verzweigt und die Node Say(6) wird ausgeführt.

![test](/img/21.png)

Mittels der **Go To-Node** kann zu anderen Intents oder in andere Flows gesprungen werden, die dann ausgeführt werden sollen.
Mit einem Rechtsklick auf einen Intent-Case oder eine Node, kann ein Einsprungspunkt gesetzt werden, um diese in einer Go To-Node auswählen zu können.
Zu Flows (anders als bei den Intents) kann in der Go To-Node auch ohne extra Einsprungspunkt navigiert werden.

![test](/img/22.png)

Durch die **If-Node** wird eine Bedingung evaluiert und entsprechend verzweigt. Wird die Bedingung erfüllt, fährt der Gesprächsverlauf mit „then“ fort. Bei Nicht-Erfüllung mit „else“. In diesem Beispiel können durch das Klicken von „AI“ an der rechten Seite des Textfeldes Variablen aufgerufen werden, die bereits von Cognigy oder im Vorhinein selber definiert wurden. Die Variable „Letzte Frage Ergebnis“ ist eine von Cognigy erstellte Standard-Variable und gibt einem die Antwort des/der Nutzer:in auf die letze Frage zurück.

![test](/img/23.png)

## Wie kann der Chatbot bestimmte Schlüsselwörter oder Synonyme besser verstehen?

### Was ist ein Lexicon?

Ein Lexikon kann als ein Wörterbuch betrachtet werden, welches dem Chatbot ermöglicht, bestimmte Wörter (Keyphrases) zu "verstehen", wie z. B. Automarken, Produktgruppen oder auch Synonyme, wie z.B. Lastschriftverfahren, LSV usw.

![test](/img/24.png)

### Aufbau von Lexicons
Es gibt verschiedene Arten ein Lexicon aufzubauen, dabei gibt es nicht eine richtige Variante, sondern ist stark vom Kontext abhängig und kann auch gemischt werden. Je nach Größe des Lexicons kann generell entweder ein Lexicon **für alle Begriffe** oder **je nach Themenbereich** (z.B. Städte) erstellt werden.

Weiterhin muss man unterscheiden, ob die Begriffe von einem Wort (Keyphrase) eher Gruppen (z.B. Zahlungsverfahren, wie LSV, Paypal) sind oder wirkliche Synonyme (Lastschriftverfahren & LSV).

Bei Gruppen:  
Hier sollte ein Überbegriff in der Spalte Keyphrase und die Ausprägungen dieses Begriffs als Synonyme festgelegt werden.

![test](/img/25.png)

Bei Synonymen:  
Hier kann der (meist genutzte) Hauptbegriff eines Begriffs in der Spalte „Keywords“ und die jeweiligen Synonyme in der Spalte „Synonyme“ eingetragen werden.

![test](/img/26.png)

### Wofür eignen sich Lexicons, wofür nicht? (Optimaler Aufbau)
Lexicons
können grundlegend zwei verschiedene Funktionen haben. Zum
einen können Sie zur besseren Erkennung der Absichten (Intents) dienen und
zum anderen , dass der Gesprächsverlauf natürlicher gemacht wird.

**Verbesserung der Absichten:**  
Lexicons dienen zur Verbesserung der Absichten, indem nicht mehrere
Ausdrücke (Expressions) für den g leichen Satz ve rwendet werden müssen,
wenn nur verschiedene Synonyme eines Worts sich ändern (z.B. LSV &
“).
![test](/img/27.png)

Um dies in einem Ausdruck umzusetzen, muss das Wort bzw. die Wörter
einfach markiert werden. Anschließend muss rechts auf das “+” geklickt
werden. Es öffnet sich unterhalb des Ausdrucks ein neue Zeile Dort muss
dann zunächst “Lexicon Slot ” ausgewählt und schließlich noch der Name des
Slots eingetragen werden. Der Name des Slots ist der Wert, der bei der
Erstellung des Worts (Keyphrase) in der Spalte “Slots” eingetragen Hier
können auch mehrere Wörter eingetragen werden, falls ein bestimmt es Wort
(Keyphrase) in mehreren verschiedenen Kontexten verwendet werden soll.

![test](/img/28.png)

## Gesprächsverlauf natürlicher gestalten:

Dies wird zum besseren Verständnis an einem Beispiel erklärt. Eine Nutzer:in
fragt nach dem Wetter. Dabei soll berücksichtigt werden, dass gefragt wird
“Wie ist das Wetter?”. Falls diese Absicht erkannt wird, soll der Chatbot nach
de r Stadt fragen, von welcher die Nutzer:in das Wetter wissen möchte. Falls
die Nutzer:in dann mit einer Stadt anwortet, soll der Chatbot mit de m Wetter
antworten. Hier kann es grundlegend zu drei Schwierigkeiten kommen.

- Wie geht man mit Städten, um die verschieden genannt werden (z.B.
NRW und Nord Rhein Westphalen)
- Wie findet man die Stadt, wenn die Nutzer:in in einem ganzen Satz
antwortet (z.B. “Von Hamburg“)
- Was passiert, wenn die Nutzer:in direkt nach der Stadt fragt (z.B. “Wie
ist das Wetter in Hamburg?”)?

Um diese Fragen zu Lösen, kann ein Lexikon mit allen großen Städten erstellt
werden (dies e können auch mit einer csv Datei importiert werden, damit man
nicht alles händisch ein ge tragen werden muss)

![test](/img/29.png)

Für den ersten **Fall** , , können für jede Stadt Synonyme erstellt werden (“Spalte Synonyme“). Diese werden dann im späteren Verlauf genauso wie eine
Keyphrase behandelt.

![test](/img/30.png)

Diese
können erstellt werden, um in jeder Nutzereingabe, nach bestimmten
Slots zu suchen (also die Wörter , die in der Spalte “Slots” bei Lexicons stehen)
und diese im Kontext zu speichern Dies können wir uns zunutze machen, in
dem wir jeder Stadt, die wir zuvor importiert haben , den gleichen Slot
zuweisen.
Anschließend kann ein neuer Slot Filler über den Button Neuer Slot Filler”
erstellt werden. Dort müssen folgende Felder gefüllt werden:
- “Name” ist der Name des Slot Fillers und kann frei gewählt werden
- “Slot Name” ist der Name des Slots in dem Lexi con in der Spalte “Slots”
- “Context Key” ist der Name, unter welchem schlussendlich der Name
der Stadt im Kontext gespeichert werden soll

![test](/img/31.png)

Nun wird dieser Slot bei jeder Nutzereingabe gesucht. Über input.slots.stadt oder context.stadt kann nun auf die jeweilige Stadt zugegriffen werden. So können bestimmte Wörter, wie in **Fall zwei** aus einer Antwort rausgefiltert werden.

Um **Fall drei** schlussendlich noch umzusetzen, muss man lediglich die Option „Überspringen, wenn Antwort im Context vorhanden“ einer Question-Node aktivieren. Nun wird diese Frage automatisch übersprungen, wenn in der Nachricht der Nutzer:in eine Stadt erkannt wurde. Die Nutzer:in kann also entweder direkt nach dem Wetter in einer Stadt fragen oder allgemein fragen und aufgefordert werden, eine Stadt zu nennen. So wird ein natürlicher Gesprächsverlauf hergestellt.

![test](/img/32.png)

## Wie berücksichtige ich Lexicons in der Antwort vom Chatbot?

**Hinweis:** Änderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.

Mit der Nutzung von Lexicons kann man jederzeit prüfen, ob ein bestimmtes
Wort genannt wurde . Falls ein Wort er kannt wurde, wird dieses in einer Liste pro Slot gespeichert . Bei der Nutzereingabe “Ich habe eine Frage zum
Lastschriftverfahren. Ich möche das LSV drucken“ hätte die Liste zwei
E inträge. Einmal “Lastschriftverfahrens” und “LSV”, weil diese beiden Begriffe
im Lexicon hinterlegt sind (einmal als Keyphrase und als Synonym). Nun kann
man auf die beiden Begriffe mit ***input.slots .lsv[0]*** (für den Begriff
“Lastschriftverfahrens”) ***input.slots.lsv[1]*** (für den Begriff “LSV”)
zugreifen Dort gibt es verschiedene Parameter, die man sich abrufen lassen
kann. Die wichtigsten sind folgende:
- “.synonym": Hier steht das Wort, welches im Text erkannt wurde, z.B.
***input.slots.lsv[1].synonym***
- “.neg”: Dieser Parameter gibt an, ob das Wort negiert wurde, da dies
die Bedeutung des Wortes stark verändern könnte (z.B. “Ich habe eine
Frage zum Lastschriftverfahren. Ich möche das LSV nicht drucken.)
  - Dieser Parameter kann entweder **true** oder **false** sein

## Wie kann ich den Chatbot (und meine Änderungen) testen?

In der oberen rechten Ecke eines Bots befindet sich das “Mit Agent Chatten”-
Symbol, wo vorgenommene Änderungen überprüft werden können.  
**Bedenke:** bei Änderungen an Intents muss zunächst der Chatbot neu trainiert werden.

![test](/img/32.png)

Nach Klicken des Symbols öffnet sich ein Chatfenster. Dort muss neben der aktuellen Version des Bots auch der zu testende Flow ausgewählt werden.

Die Chatsession kann durch Betätigen der drei Punkte neben der Flowsauswahl zurückgesetzt werden.
Bei Auswahl der “Info”-Schaltfläche können Infos über die Erkennung des Intents eingesehen werden. So wird dort beispielsweise der/die erkannte(n) Intent(s) mit Punktzahl (0 wenig Übereinstimmung, 1 volle Übereinstimmung) angezeigt.

![test](/img/34.png)

![test](/img/35.png)

## Wie erstelle ich automatische Tests?
### Was ist ein Playbook?
Playbooks in Cognigy können benutzt werden, um das Flow-Testen zu
erleichtern. Handlungsabläufe aus Flows können gespeichert und abgespielt
werden, ohne den ganzen Chatverlauf manuell zu wiederholen. Das kann vor
allem bei Änderungen vor neuen Versionen nützlich sein
### Wofür eignen sich Playbooks, wofür nicht? (Optimaler Aufbau)
Wird nachgereicht.
### Wie erstelle ich ein Playbook?
Zunächst muss das Testchat-Fenster geöffnet werden. Neben der
Flowauswahl auf die drei Punkte klicken und "create Playbook auswählen".

### Wie bediene ich ein Playbook?
Das Playbook erscheint dann unter dem Menüpunkt Test. Nach Auswahl des
entsprechenden Erzählschritts, können unter "Add Assertion" Bedingungen,
die beim Durchlaufen des Playbooks überprüft werden sollen.

![test](/img/36.png)

Folgende stehen zur Auswahl:  
![test](/img/37.png)

Diese Assertions bezeichnen Bedingungen, die beim Durchlaufen eines Tests
überprüft werden sollen. So überprüft „Intent assertions“ bspw., ob ein
gewünschter Intent aktiviert wurde (durch Auswählen der entsprechenden
Assertion erscheint eine Kurzbeschreibung in Cogingy).
Um den Verlauf nun zu testen, muss im Testchat unten das Playbooksymbol
und das entsprechende Playbook ausgewählt werden.

![test](/img/38.png)

## Wie wird der Chatbot auf eine Website eingebunden?
Endpoints werden verwendet, um externe Kanäle, wie WhatsApp, Teams,
Alexa und viele andere, mit dem Chatbot zu verbinden. In Cognigy hat dies
den Vorteil, dass man einen Chatbot nur einmal entwickeln muss und ihn
danach auf verschiedenen Kanälen anbinden kann.
Nachdem im Kontextmenü unter **Einsetzen** -> **Endpoints** gewählt wurde,
kann ein Endpoint definiert werden

![test](/img/39.png)

![test](/img/40.png)

![test](/img/41.png)

## Wie läuft die Produktivsetzung ab?
In Klärung.

![test](/img/42.png)

## Wie erstelle ich eine neue Version vom Chatbot?
Snapshots sind Versionen zu verschiedenen Zeitpunkten des Chatbots.
Snapshots können im Nachhinein nicht mehr geändert werden. Deswegen
eignen Sie sich gut, um im Produktivsystem eingesetzt zu werden.

![test](/img/43.png)

## Wie finde ich das Monitoring?

![test](/img/44.png)

![test](/img/45.png)

## Best practices beim Monitoring
## Wie finde ich Kennzahlen und Metriken?

![test](/img/46.png)

![test](/img/47.png)

## Was bedeuten die Kennzahlen und Metriken im Detail?
Alle Kennzahlen sind genau dokumentiert auf Cognigys Website:  
https://docs.cognigy.com/de/insights/dashboard-nlu-performance/

![test](/img/48.png)

![test](/img/49.png)

Man kann außerdem eine Art eigene “Kennzahlen” in Cognigy implementieren. Dafür werden
sog. “Goals” benutzt. Diese können durch eine “Complete Goal”-Node in einen beliebigen
Flow eingesetzt werden. Wenn dann im Flow diese Node erreicht wird, wird in den Statistiken
ein Goal gesetzt.

![test](/img/50.png)

Man kann in den Insights dann nach diesen Goals filtern und sich z.B. alle Konversationen in
denen dieses Goal erreicht wurde oder die Häufigkeit eines bestimmten Goals anzeigen
lassen.

![test](/img/50.png)

![test](/img/51.png)

**Wichtig:** Goals werden nicht über eine ID o.Ä. identifiziert, sondern einfach nach dem
Namen. Wenn der Name von zwei Goals identisch ist, werden diese als ein Goal gewertet

![test](/img/52.png)








