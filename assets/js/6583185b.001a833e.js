"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[425],{4938:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Cognigy Dokumentation","metadata":{"permalink":"/cognigy-documetation/Cognigy Dokumentation","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Cognigy Dokumentation","description":"---","date":"2019-05-29T00:00:00.000Z","tags":[{"label":"Cognigy","permalink":"/cognigy-documetation/tags/cognigy"},{"label":"Dokumentation","permalink":"/cognigy-documetation/tags/dokumentation"}],"readingTime":13.76,"hasTruncateMarker":false,"authors":[{"name":"Sara Salha","title":"Werkstudentin","url":"https://de.linkedin.com/in/sara-salha-9a6a09230","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"Cognigy Dokumentation","title":"Cognigy Dokumentation","authors":{"name":"Sara Salha","title":"Werkstudentin","url":"https://de.linkedin.com/in/sara-salha-9a6a09230","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["Cognigy","Dokumentation"]},"unlisted":false},"content":"---\\n## Wie registriere ich mich bei Cognigy?\\nUm sich bei Cognigy zu registrieren, kontaktiere bitte einen Admin. Bitte registriere dich NICHT \xfcber andere Wege auf deren Homepage.  \\n\\n## Wie melde ich mich bei Cognigy an?\\nEs gibt keinen allgemeinen Link, wo man sich bei Cognigy anmelden kann. Melde Dich bitte \xfcber den Link Deiner Organisation an. Dieser kann wie folgt aussehen: https://app.cognigy.ai/login?organisationId=1234567890abc. \\n\\nFalls Du den Link nicht hast, wende Dich bitte an einen Admin. \\n\\n## Wie finde ich eine \xdcbersicht der bestehenden Chatbots? \\n### Weg zur \xdcbersicht \\nNach der Anmeldung befindet sich auf der linken Seite eine Spalte mit \u201cAgents\u201d, welche die bestehenden Bots auflistet. \\nDurch das Symbol in der oberen linken Ecke gelangt man zur\xfcck zur Startseite. \\n\\n## Auflistung bestehender Chatbots\\n| Agent  1 | Umgebung | Links    |\\n|----------|----------|----------|\\n| Tonibot  | Produktiv | Link zu Teams|\\n| Tonibot Test| Test   | Direktlink zum Chat|\\n| Tonibot DEV| Entwicklung | Direktlink zum Chat|\\n\\n## Wie erhalte ich Zugriff auf einen Chatbot? (Rechte f\xfcr Chatbots zuweisen) \\nDurch  das Benutzermen\xfc aufrufen und zu Zugriffberechtigungen navigieren. Danach den eigenen Nutzer ausw\xe4hlen und unter Zugewiesene Agents durch \u201e+\u201c einen neuen Bot hinzuf\xfcgen. \\n\\n## Wie kann ich eine bestehende Antwort \xe4ndern? \\n**Hinweis**: \xc4nderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen. \\n\\nHandlungsschritte des Bots sind in speziellen Funktionen, den sogenannten **Nodes** gespeichert. Um eine bestehende Antwort des Bots zu \xe4ndern, muss entweder auf die Say-Node oder die Question-Node zugegriffen werden.\\n\\n![test](/img/3.png)\\n\\n## Was ist ein Flow?\\nEin Flow ist die visuelle Darstellung von Konversationsabl\xe4ufen innerhalb eines Chatbots, welche den Bot in Themenbereiche gliedern. \\n\\nHier wird der Austausch zwischen dem Chatbot und den Nutzer:innen entworfen. \\n\\nDie Nodes innerhalb eines Flows definieren die auszuf\xfchrenden Aktionen (Antwort geben, Nachfrage stellen,\u2026). \\n\\nNach der Auswahl der Flow-\xdcbersicht \xfcber das Kontextmen\xfc Bauen -> Flows kann ein neuer Flow angelegt werden.\\n\\n![test](/img/4.png)\\n\\n## Wie kann ich eine bestehende Antwort \xe4ndern?\\nKlicke innerhalb eines Flows auf eine **Node**, diese sind durch einen blauen Unterstrich gekennzeichnet und passe im Textfeld die Antwort an. Abschlie\xdfend muss auf den **Node Speichern** Button gedr\xfcckt werden. \\n\\n## Wie kann ich eine weitere Antwort einpflegen?\\nDurch das Plus-Symbol innerhalb eines Flows kann eine weitere Antwort eingepflegt werden. Dort kann die **Say-Node** ausgew\xe4hlt werden, um eine weitere Antwort einzupflegen. Neben der Say-Node existieren dort alle weiteren Funktionen zur Erweiterung des Chatbots. Die Abl\xe4ufe innerhalb eines Flows werden chronologisch von oben nach unten durchlaufen. \\n\\n## Wie kann ich eine neue Antwort einpflegen?\\n### Was ist ein Intent? \\nDurch Intents (Absicht), k\xf6nnen beachsichte Handlungen eines Chatbot-Nutzers erkannt werden. Jeder Intent definiert sich durch Beispielss\xe4tze, die dem Bot bei der Erkennung helfen. \\n\\nIntents werden immer nur innerhalb eines Flows definiert. \\n\\nFragt der Nutzer beispielsweise danach, seine Zahlungsart zu wechseln, so wird der Intent \u201e02-zahlungsart-wechseln\u201c aktiviert und der Chatbot f\xfchrt eine entsprechende Handlung aus. \\n\\n\\n### Wof\xfcr eignen sich Intents, wof\xfcr nicht? (Optimaler Aufbau)\\nIntents helfen dabei, das Nutzeranliegen zu erkennen.  \\nIntents sollten nicht direkt aus dem Monitoring \xfcbernommen werden, sich jedoch daran orientieren.\\nBeachten: \\n-     In den einzupflegenden Beispiels\xe4tzen sollte sich auf die wichtigsten Informationen beschr\xe4nkt werden \\n-     Zwei verschiedene Nutzeranliegen, die jedoch auf den gleichen Intent abzielen, sollten in zwei unterschiedlichen Beispiels\xe4tzen verpackt werden.\\n-     Es sollte darauf geachtet werden, diese grammatikalisch korrekt auszuf\xfchren. \\n-     Thematische \xdcberschneidungen mit anderen Intents sollten vermieden werden \\n-     Mindestens zehn Beispiels\xe4tze sollten formuliert werden \\nIn Cognigy werden die Intents anhand eines Scores von 0 bis 1 bewertet. Ein hoher Score ist erstrebenswert.\\nEbenso werden die Intents mithilfe von \u201cL\xe4mpchen\u201d (gr\xfcn,gelb,rot) eingestuft. Rote L\xe4mpchen sollten vollumf\xe4nglich vermieden werden. Ber\xfchren des L\xe4mpchens mit dem Mauszeiger zeigt den Score und weitere Anmerkungen an. \\n\\n![test](/img/5.png)\\n\\nEbenso werden die Intents mithilfe von \u201cL\xe4mpchen\u201d (gr\xfcn,gelb,rot) eingestuft. Rote L\xe4mpchen sollten vollumf\xe4nglich vermieden werden. Ber\xfchren des L\xe4mpchens mit dem Mauszeiger zeigt den Score und weitere Anmerkungen an.\\n\\n![test](/img/6.png)\\n\\n### Wie erstelle ich einen Intent?\\n**Hinweis**: \xc4nderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.\\nInnerhalb eines Flows muss in der Leiste oben **NLU** ausgew\xe4hlt werden.\\n\xdcber den \u201cNeuer Intent\u201d-Button kann ein neuer Intent erstellt werden, dessen Name definiert werden muss.\\n\\n![test](/img/7.png)\\n\\nAnschlie\xdfend k\xf6nnen Beispiels\xe4tze in den Intent geschrieben werden.\\n\\nNeben einer normalen Textausgabe, kann in der Node auch beispielsweise ein Button oder ein Bild mitausgegeben werden. \xdcber den Ausgabetyp nach anklicken der entsprechenden Node, kann der gew\xfcnschte Fall ausgew\xe4hlt werden.\\n\\n![test](/img/8.png)\\n\\n![test](/img/9.png)\\n\\nF\xfcr einen Button muss der Ausgabetyp \u201eText with Buttons\u201c gew\xe4hlt werden. Durch Bet\xe4tigen der \u201eNeuer Button\u201c-Oberfl\xe4che kann ein Button definiert werden. Dieser kann dem Bot beispielsweise einen Wert zur\xfcckweisen (\u201ePostback-value) oder an eine URL verweisen.\\n\\n![test](/img/10.png)\\n\\nZus\xe4tzlich gibt es die M\xf6glichkeit f\xfcr vorgefertigte Antworten (\u201eQuick Replies\u201c). Diese k\xf6nnen ebenso einen Wert an den Bot zur\xfcckgeben und sind beispielsweise sinnvoll bei Ja/Nein-Fragen oder wenn die Anzahl m\xf6glicher Antworten beschr\xe4nkt ist.\\n\\n### Wie trainiere ich einen Intent?\\n\\n**Hinweis**: \xc4nderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.\\n\\nNach der Erstellung eines Intents oder nach **jeder** \xc4nderung eines bestehenden Intents muss der Chatbot aktualisiert werden. Dies geschieht \xfcber den **Model bauen**-Button.\\n\\n![test](/img/11.png)\\n\\nNach der Bot-Aktualisierung erscheint sowohl neben dem Intent, als auch neben jedem Beispielssatz das L\xe4mpchen, was die G\xfcte der \xc4nderung beschreibt.\\n\\n![test](/img/12.png)\\n\\n![test](/img/13.png)\\n\\nMit Hilfe des **Intenttrainer** kann man optional noch den Intent verbessern.\\n\\n![test](/img/14.png)\\n\\n![test](/img/15.png)\\n\\n## Wie erstelle ich einen neuen Gespr\xe4chsverlauf?\\nInnerhalb eines Flows werden die Gespr\xe4chshandlungen nach Intents aufgeteilt. Mittels der Lookup-Node wird geschaut, welcher Intent erkannt wurde.\\n\\n![test](/img/16.png)\\n\\n![test](/img/17.png)\\n\\nNun kann f\xfcr jeden einzelnen Intent ein Gespr\xe4chsverlauf erstellt werden.\\nDazu muss innerhalb des Lookups ein Intent durch Klicken auf das Case-Symbol ausgew\xe4hlt werden.\\nWird kein Intent erkannt, dann wird der Default-Strang ausgef\xfchrt.\\nMittels des Plus-Symbols \u201e+\u201c k\xf6nnen jegliche Funktionen in den Gespr\xe4chsverlauf eingef\xfcgt werden\\nNeben der Say-Node kann mittels der Question-Node durch den Chatbot eine Frage an den Nutzer gestellt werden, um dessen Anliegen zu spezifizieren. Im Gegensatz zur Say-Node wird hier auf die Eingabe des Nutzers gewartet.\\n\\n![test](/img/18.png)\\n\\nHierbei muss der Fragentyp spezifiziert werden. Mit \u201eText\u201c werden jegliche Antworten akzeptiert, w\xe4hrend \u201eJa/Nein\u201c eine entsprechende Ja/Nein-Antwort erwartet.\\n\\nIn der Men\xfcoption \u201eReprompt Optionen\u201c sollte noch der Text ge\xe4ndert werden, der angezeigt wird, wenn der Fragentyp nicht erf\xfcllt wurde von der Nutzereingabe. Dies kann z.B. auftreten, wenn der Fragentyp \u201eJa/Nein\u201c ist, und der/die Nutzer:in etwas anderes eintippt als \u201eJa\u201c oder \u201eNein\u201c (Welche W\xf6rter genau zu \u201eJa\u201c und zu \u201eNein\u201c geh\xf6ren, kann sp\xe4ter in den Einstellungen festgelegt werden). Weiterhin sollte \xfcberlegt werden, ob es bei dieser Frage sinnvoll ist, dass sie bei einer falschen Antwort noch einmal gestellt wird. Je nach Wunsch muss dann der Regler \u201eFragen wiederholen\u201c aktiviert werden oder nicht.\\n\\n![test](/img/19.png)\\n\\nIn der Men\xfcoption \u201eErgebnis Speicherung\u201c der Question-Node kann die Eingabe des Nutzers gespeichert werden, um zu einem sp\xe4teren Zeitpunkt darauf zuzugreifen. Dazu muss dem Kontext ein Name zur Speicherung zugeordnet werden (hier Zahlung). Der durch den Nutzer gegeben wird dadurch in der Variable context.Zahlung gespeichert.\\n\\n![test](/img/20.png)\\n\\nMit der eingef\xfchrten Lookup-Node kann entsprechend dieses Kontext-Wertes weiterf\xfchrend verzweigt werden. Dazu wird in dem Men\xfc der Lookup-Node \u201eCognigyScript\u201c ausgew\xe4hlt und im Operator die definierte Variable ausgew\xe4hlt. Tippt der Nutzer in dem hier gew\xe4hlten Beispiel also \u201eeMail\u201c ein, so wird entsprechend verzweigt und die Node Say(6) wird ausgef\xfchrt.\\n\\n![test](/img/21.png)\\n\\nMittels der **Go To-Node** kann zu anderen Intents oder in andere Flows gesprungen werden, die dann ausgef\xfchrt werden sollen.\\nMit einem Rechtsklick auf einen Intent-Case oder eine Node, kann ein Einsprungspunkt gesetzt werden, um diese in einer Go To-Node ausw\xe4hlen zu k\xf6nnen.\\nZu Flows (anders als bei den Intents) kann in der Go To-Node auch ohne extra Einsprungspunkt navigiert werden.\\n\\n![test](/img/22.png)\\n\\nDurch die **If-Node** wird eine Bedingung evaluiert und entsprechend verzweigt. Wird die Bedingung erf\xfcllt, f\xe4hrt der Gespr\xe4chsverlauf mit \u201ethen\u201c fort. Bei Nicht-Erf\xfcllung mit \u201eelse\u201c. In diesem Beispiel k\xf6nnen durch das Klicken von \u201eAI\u201c an der rechten Seite des Textfeldes Variablen aufgerufen werden, die bereits von Cognigy oder im Vorhinein selber definiert wurden. Die Variable \u201eLetzte Frage Ergebnis\u201c ist eine von Cognigy erstellte Standard-Variable und gibt einem die Antwort des/der Nutzer:in auf die letze Frage zur\xfcck.\\n\\n![test](/img/23.png)\\n\\n## Wie kann der Chatbot bestimmte Schl\xfcsselw\xf6rter oder Synonyme besser verstehen?\\n\\n### Was ist ein Lexicon?\\n\\nEin Lexikon kann als ein W\xf6rterbuch betrachtet werden, welches dem Chatbot erm\xf6glicht, bestimmte W\xf6rter (Keyphrases) zu \\"verstehen\\", wie z. B. Automarken, Produktgruppen oder auch Synonyme, wie z.B. Lastschriftverfahren, LSV usw.\\n\\n![test](/img/24.png)\\n\\n### Aufbau von Lexicons\\nEs gibt verschiedene Arten ein Lexicon aufzubauen, dabei gibt es nicht eine richtige Variante, sondern ist stark vom Kontext abh\xe4ngig und kann auch gemischt werden. Je nach Gr\xf6\xdfe des Lexicons kann generell entweder ein Lexicon **f\xfcr alle Begriffe** oder **je nach Themenbereich** (z.B. St\xe4dte) erstellt werden.\\n\\nWeiterhin muss man unterscheiden, ob die Begriffe von einem Wort (Keyphrase) eher Gruppen (z.B. Zahlungsverfahren, wie LSV, Paypal) sind oder wirkliche Synonyme (Lastschriftverfahren & LSV).\\n\\nBei Gruppen:  \\nHier sollte ein \xdcberbegriff in der Spalte Keyphrase und die Auspr\xe4gungen dieses Begriffs als Synonyme festgelegt werden.\\n\\n![test](/img/25.png)\\n\\nBei Synonymen:  \\nHier kann der (meist genutzte) Hauptbegriff eines Begriffs in der Spalte \u201eKeywords\u201c und die jeweiligen Synonyme in der Spalte \u201eSynonyme\u201c eingetragen werden.\\n\\n![test](/img/26.png)\\n\\n### Wof\xfcr eignen sich Lexicons, wof\xfcr nicht? (Optimaler Aufbau)\\nLexicons\\nk\xf6nnen grundlegend zwei verschiedene Funktionen haben. Zum\\neinen k\xf6nnen Sie zur besseren Erkennung der Absichten (Intents) dienen und\\nzum anderen , dass der Gespr\xe4chsverlauf nat\xfcrlicher gemacht wird.\\n\\n**Verbesserung der Absichten:**  \\nLexicons dienen zur Verbesserung der Absichten, indem nicht mehrere\\nAusdr\xfccke (Expressions) f\xfcr den g leichen Satz ve rwendet werden m\xfcssen,\\nwenn nur verschiedene Synonyme eines Worts sich \xe4ndern (z.B. LSV &\\n\u201c).\\n![test](/img/27.png)\\n\\nUm dies in einem Ausdruck umzusetzen, muss das Wort bzw. die W\xf6rter\\neinfach markiert werden. Anschlie\xdfend muss rechts auf das \u201c+\u201d geklickt\\nwerden. Es \xf6ffnet sich unterhalb des Ausdrucks ein neue Zeile Dort muss\\ndann zun\xe4chst \u201cLexicon Slot \u201d ausgew\xe4hlt und schlie\xdflich noch der Name des\\nSlots eingetragen werden. Der Name des Slots ist der Wert, der bei der\\nErstellung des Worts (Keyphrase) in der Spalte \u201cSlots\u201d eingetragen Hier\\nk\xf6nnen auch mehrere W\xf6rter eingetragen werden, falls ein bestimmt es Wort\\n(Keyphrase) in mehreren verschiedenen Kontexten verwendet werden soll.\\n\\n![test](/img/28.png)\\n\\n## Gespr\xe4chsverlauf nat\xfcrlicher gestalten:\\n\\nDies wird zum besseren Verst\xe4ndnis an einem Beispiel erkl\xe4rt. Eine Nutzer:in\\nfragt nach dem Wetter. Dabei soll ber\xfccksichtigt werden, dass gefragt wird\\n\u201cWie ist das Wetter?\u201d. Falls diese Absicht erkannt wird, soll der Chatbot nach\\nde r Stadt fragen, von welcher die Nutzer:in das Wetter wissen m\xf6chte. Falls\\ndie Nutzer:in dann mit einer Stadt anwortet, soll der Chatbot mit de m Wetter\\nantworten. Hier kann es grundlegend zu drei Schwierigkeiten kommen.\\n\\n- Wie geht man mit St\xe4dten, um die verschieden genannt werden (z.B.\\nNRW und Nord Rhein Westphalen)\\n- Wie findet man die Stadt, wenn die Nutzer:in in einem ganzen Satz\\nantwortet (z.B. \u201cVon Hamburg\u201c)\\n- Was passiert, wenn die Nutzer:in direkt nach der Stadt fragt (z.B. \u201cWie\\nist das Wetter in Hamburg?\u201d)?\\n\\nUm diese Fragen zu L\xf6sen, kann ein Lexikon mit allen gro\xdfen St\xe4dten erstellt\\nwerden (dies e k\xf6nnen auch mit einer csv Datei importiert werden, damit man\\nnicht alles h\xe4ndisch ein ge tragen werden muss)\\n\\n![test](/img/29.png)\\n\\nF\xfcr den ersten **Fall** , , k\xf6nnen f\xfcr jede Stadt Synonyme erstellt werden (\u201cSpalte Synonyme\u201c). Diese werden dann im sp\xe4teren Verlauf genauso wie eine\\nKeyphrase behandelt.\\n\\n![test](/img/30.png)\\n\\nDiese\\nk\xf6nnen erstellt werden, um in jeder Nutzereingabe, nach bestimmten\\nSlots zu suchen (also die W\xf6rter , die in der Spalte \u201cSlots\u201d bei Lexicons stehen)\\nund diese im Kontext zu speichern Dies k\xf6nnen wir uns zunutze machen, in\\ndem wir jeder Stadt, die wir zuvor importiert haben , den gleichen Slot\\nzuweisen.\\nAnschlie\xdfend kann ein neuer Slot Filler \xfcber den Button Neuer Slot Filler\u201d\\nerstellt werden. Dort m\xfcssen folgende Felder gef\xfcllt werden:\\n- \u201cName\u201d ist der Name des Slot Fillers und kann frei gew\xe4hlt werden\\n- \u201cSlot Name\u201d ist der Name des Slots in dem Lexi con in der Spalte \u201cSlots\u201d\\n- \u201cContext Key\u201d ist der Name, unter welchem schlussendlich der Name\\nder Stadt im Kontext gespeichert werden soll\\n\\n![test](/img/31.png)\\n\\nNun wird dieser Slot bei jeder Nutzereingabe gesucht. \xdcber input.slots.stadt oder context.stadt kann nun auf die jeweilige Stadt zugegriffen werden. So k\xf6nnen bestimmte W\xf6rter, wie in **Fall zwei** aus einer Antwort rausgefiltert werden.\\n\\nUm **Fall drei** schlussendlich noch umzusetzen, muss man lediglich die Option \u201e\xdcberspringen, wenn Antwort im Context vorhanden\u201c einer Question-Node aktivieren. Nun wird diese Frage automatisch \xfcbersprungen, wenn in der Nachricht der Nutzer:in eine Stadt erkannt wurde. Die Nutzer:in kann also entweder direkt nach dem Wetter in einer Stadt fragen oder allgemein fragen und aufgefordert werden, eine Stadt zu nennen. So wird ein nat\xfcrlicher Gespr\xe4chsverlauf hergestellt.\\n\\n![test](/img/32.png)\\n\\n## Wie ber\xfccksichtige ich Lexicons in der Antwort vom Chatbot?\\n\\n**Hinweis:** \xc4nderungen werden immer auf dem Entwicklungs-Chatbot vorgenommen.\\n\\nMit der Nutzung von Lexicons kann man jederzeit pr\xfcfen, ob ein bestimmtes\\nWort genannt wurde . Falls ein Wort er kannt wurde, wird dieses in einer Liste pro Slot gespeichert . Bei der Nutzereingabe \u201cIch habe eine Frage zum\\nLastschriftverfahren. Ich m\xf6che das LSV drucken\u201c h\xe4tte die Liste zwei\\nE intr\xe4ge. Einmal \u201cLastschriftverfahrens\u201d und \u201cLSV\u201d, weil diese beiden Begriffe\\nim Lexicon hinterlegt sind (einmal als Keyphrase und als Synonym). Nun kann\\nman auf die beiden Begriffe mit ***input.slots .lsv[0]*** (f\xfcr den Begriff\\n\u201cLastschriftverfahrens\u201d) ***input.slots.lsv[1]*** (f\xfcr den Begriff \u201cLSV\u201d)\\nzugreifen Dort gibt es verschiedene Parameter, die man sich abrufen lassen\\nkann. Die wichtigsten sind folgende:\\n- \u201c.synonym\\": Hier steht das Wort, welches im Text erkannt wurde, z.B.\\n***input.slots.lsv[1].synonym***\\n- \u201c.neg\u201d: Dieser Parameter gibt an, ob das Wort negiert wurde, da dies\\ndie Bedeutung des Wortes stark ver\xe4ndern k\xf6nnte (z.B. \u201cIch habe eine\\nFrage zum Lastschriftverfahren. Ich m\xf6che das LSV nicht drucken.)\\n  - Dieser Parameter kann entweder **true** oder **false** sein\\n\\n## Wie kann ich den Chatbot (und meine \xc4nderungen) testen?\\n\\nIn der oberen rechten Ecke eines Bots befindet sich das \u201cMit Agent Chatten\u201d-\\nSymbol, wo vorgenommene \xc4nderungen \xfcberpr\xfcft werden k\xf6nnen.  \\n**Bedenke:** bei \xc4nderungen an Intents muss zun\xe4chst der Chatbot neu trainiert werden.\\n\\n![test](/img/32.png)\\n\\nNach Klicken des Symbols \xf6ffnet sich ein Chatfenster. Dort muss neben der aktuellen Version des Bots auch der zu testende Flow ausgew\xe4hlt werden.\\n\\nDie Chatsession kann durch Bet\xe4tigen der drei Punkte neben der Flowsauswahl zur\xfcckgesetzt werden.\\nBei Auswahl der \u201cInfo\u201d-Schaltfl\xe4che k\xf6nnen Infos \xfcber die Erkennung des Intents eingesehen werden. So wird dort beispielsweise der/die erkannte(n) Intent(s) mit Punktzahl (0 wenig \xdcbereinstimmung, 1 volle \xdcbereinstimmung) angezeigt.\\n\\n![test](/img/34.png)\\n\\n![test](/img/35.png)\\n\\n## Wie erstelle ich automatische Tests?\\n### Was ist ein Playbook?\\nPlaybooks in Cognigy k\xf6nnen benutzt werden, um das Flow-Testen zu\\nerleichtern. Handlungsabl\xe4ufe aus Flows k\xf6nnen gespeichert und abgespielt\\nwerden, ohne den ganzen Chatverlauf manuell zu wiederholen. Das kann vor\\nallem bei \xc4nderungen vor neuen Versionen n\xfctzlich sein\\n### Wof\xfcr eignen sich Playbooks, wof\xfcr nicht? (Optimaler Aufbau)\\nWird nachgereicht.\\n### Wie erstelle ich ein Playbook?\\nZun\xe4chst muss das Testchat-Fenster ge\xf6ffnet werden. Neben der\\nFlowauswahl auf die drei Punkte klicken und \\"create Playbook ausw\xe4hlen\\".\\n\\n### Wie bediene ich ein Playbook?\\nDas Playbook erscheint dann unter dem Men\xfcpunkt Test. Nach Auswahl des\\nentsprechenden Erz\xe4hlschritts, k\xf6nnen unter \\"Add Assertion\\" Bedingungen,\\ndie beim Durchlaufen des Playbooks \xfcberpr\xfcft werden sollen.\\n\\n![test](/img/36.png)\\n\\nFolgende stehen zur Auswahl:  \\n![test](/img/37.png)\\n\\nDiese Assertions bezeichnen Bedingungen, die beim Durchlaufen eines Tests\\n\xfcberpr\xfcft werden sollen. So \xfcberpr\xfcft \u201eIntent assertions\u201c bspw., ob ein\\ngew\xfcnschter Intent aktiviert wurde (durch Ausw\xe4hlen der entsprechenden\\nAssertion erscheint eine Kurzbeschreibung in Cogingy).\\nUm den Verlauf nun zu testen, muss im Testchat unten das Playbooksymbol\\nund das entsprechende Playbook ausgew\xe4hlt werden.\\n\\n![test](/img/38.png)\\n\\n## Wie wird der Chatbot auf eine Website eingebunden?\\nEndpoints werden verwendet, um externe Kan\xe4le, wie WhatsApp, Teams,\\nAlexa und viele andere, mit dem Chatbot zu verbinden. In Cognigy hat dies\\nden Vorteil, dass man einen Chatbot nur einmal entwickeln muss und ihn\\ndanach auf verschiedenen Kan\xe4len anbinden kann.\\nNachdem im Kontextmen\xfc unter **Einsetzen** -> **Endpoints** gew\xe4hlt wurde,\\nkann ein Endpoint definiert werden\\n\\n![test](/img/39.png)\\n\\n![test](/img/40.png)\\n\\n![test](/img/41.png)\\n\\n## Wie l\xe4uft die Produktivsetzung ab?\\nIn Kl\xe4rung.\\n\\n![test](/img/42.png)\\n\\n## Wie erstelle ich eine neue Version vom Chatbot?\\nSnapshots sind Versionen zu verschiedenen Zeitpunkten des Chatbots.\\nSnapshots k\xf6nnen im Nachhinein nicht mehr ge\xe4ndert werden. Deswegen\\neignen Sie sich gut, um im Produktivsystem eingesetzt zu werden.\\n\\n![test](/img/43.png)\\n\\n## Wie finde ich das Monitoring?\\n\\n![test](/img/44.png)\\n\\n![test](/img/45.png)\\n\\n## Best practices beim Monitoring\\n## Wie finde ich Kennzahlen und Metriken?\\n\\n![test](/img/46.png)\\n\\n![test](/img/47.png)\\n\\n## Was bedeuten die Kennzahlen und Metriken im Detail?\\nAlle Kennzahlen sind genau dokumentiert auf Cognigys Website:  \\nhttps://docs.cognigy.com/de/insights/dashboard-nlu-performance/\\n\\n![test](/img/48.png)\\n\\n![test](/img/49.png)\\n\\nMan kann au\xdferdem eine Art eigene \u201cKennzahlen\u201d in Cognigy implementieren. Daf\xfcr werden\\nsog. \u201cGoals\u201d benutzt. Diese k\xf6nnen durch eine \u201cComplete Goal\u201d-Node in einen beliebigen\\nFlow eingesetzt werden. Wenn dann im Flow diese Node erreicht wird, wird in den Statistiken\\nein Goal gesetzt.\\n\\n![test](/img/50.png)\\n\\nMan kann in den Insights dann nach diesen Goals filtern und sich z.B. alle Konversationen in\\ndenen dieses Goal erreicht wurde oder die H\xe4ufigkeit eines bestimmten Goals anzeigen\\nlassen.\\n\\n![test](/img/50.png)\\n\\n![test](/img/51.png)\\n\\n**Wichtig:** Goals werden nicht \xfcber eine ID o.\xc4. identifiziert, sondern einfach nach dem\\nNamen. Wenn der Name von zwei Goals identisch ist, werden diese als ein Goal gewertet"}]}')}}]);