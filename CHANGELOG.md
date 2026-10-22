# Historial de canvis

## 0.9.0 · Segona bateria: 24 problemes -i sumant-

- Afegits P013–P024: suma, resta, multiplicació, divisió, decimals, fraccions, percentatges, parèntesis, potències i arrels. Vuit són d'una sola operació i quatre de diversos passos; dos solucionaris incorporen barres de parts iguals.
- Càlculs exactes i etiquetes comprovats abans de publicar. El segon bloc queda internament com a `pendent-docent`, d'acord amb la validació posterior a la publicació autoritzada per l'usuari. El banc no afegeix avisos editorials a les targetes.
- Fonts separades en `data/packs/bloc-01.json` i `bloc-02.json`. La preparació genera el catàleg únic del web i els documents BLOC-01.md i BLOC-02.md. Es conserven els dotze problemes anteriors sense canvis de contingut.
- Comprovacions ampliades als 24 resultats, coherència entre blocs i catàleg, absència d'identificadors duplicats i composició sense operacions combinades.
- Lema amb recompte dinàmic i «-i sumant-», amb guions curts.

## 0.8.3 · La tria, sempre a mà

- Estat fix al peu, al costat de «Revisa la fitxa», amb recompte i indicació breu. Es manté l'espai reservat: completar la tria, desmarcar o netejar filtres no desplaça la matriu. Quan la selecció és vàlida, la indicació queda atenuada i s'activa la revisió.
- En arribar al màxim, les caselles no seleccionades queden inhabilitades i les seves targetes adopten un fons lleugerament més apagat, mantenint el text llegible. Desmarcar un problema les torna a activar.
- «Veure la tria» al subheader obre una llista superposada, amb títols i botons per treure problemes. Mostra també els seleccionats que els filtres o la cerca oculten, i identifica els incompatibles. Es tanca amb X, Esc o clic exterior.
- Els avisos de les accions es mostren al mateix espai fix del peu. La llista de selecció no ocupa espai permanent al banc i queda fora de la impressió.

## 0.8.2 · Vora uniforme a les targetes

- Eliminat el ressalt interior de 3 px a l'esquerra de les targetes seleccionades del banc. La vora verda conserva el mateix gruix als quatre costats, coherent amb l'exemple de l'ajuda.

## 0.8.1 · Selecció vàlida i ajuda visual

- Adoptat el botó de canvi rotatiu a les dues columnes, amb el nom complet i una sola icona d'estat. Es manté l'amplada del lateral.
- Padding vertical reduït de 8 a 4 px i alçada mínima de 34 px per equilibrar les etiquetes i recuperar espai.
- Retirats el selector directe de comparació, els seus estils i les instruccions associades. Els estats desats continuen funcionant.
- «Revisa la fitxa» només s'activa per a una selecció completa que compleix tots els filtres i continguts obligatoris. La navegació també comprova aquesta condició abans d'entrar a la revisió.
- Eliminats els avisos amb identificadors del lateral i de la previsualització. Sense candidats només es mostra l'estat buit del banc; els altres casos mostren una indicació neutra al banc. La proposta automàtica s'inhabilita quan no hi ha prou candidats.
- Impressió disponible des de la revisió vàlida, amb comprovació interna conservada. No s'introdueixen avisos ni desplaçaments addicionals al sidebar.
- «Com funciona» passa a un diàleg centrat, amb el mateix comportament que l'historial: X, clic exterior, Esc, focus i animació compartits.
- Exemple real de problema amb casella destacada i filtre demostratiu amb animació de clic, estats explicats i interacció manual. Els exemples són independents de la tria; l'animació s'atura en interactuar o tancar i respecta el moviment reduït.

## 0.8.0 · Comparació de filtres en etiquetes

- Substituïts els cercles separats per etiquetes amb nom, fons i símbol coherents amb l'estat: punt per a permès, marca per a obligatori i aspa per a exclòs.
- A l'esquerra, botons amb rotació permès → obligatori → exclòs → permès. A la dreta, selector intern de tres icones per triar l'estat directament, sense rotació en clicar l'etiqueta.
- Dues columnes conservades. En espais estrets el selector directe passa sota el nom per evitar partir les paraules.
- Accés amb teclat, noms accessibles amb l'estat actual, anunci dels canvis i desament dels mateixos valors de filtratge. Retirats els estils dels selectors anteriors.

## 0.7.0 · Pàgines i distribució configurables

- Separats el nombre de pàgines (1, 2, 4 o 6) i els problemes per pàgina (2 o 3 en columna, 4 en quadrícula 2 × 2), en una fila amb columnes iguals. Mateix equilibri per a nivell i dificultat.
- Composició sense problemes repetits per a totes les quantitats admeses. Les configuracions que superen els candidats disponibles mostren el límit del catàleg.
- Paginació, numeració, espais de treball i solucionaris adaptats. El visor organitza les pàgines en un màxim de dues columnes i les ajusta en conjunt.
- Tries exportades en format 2 amb la nova configuració; migració de les tries antigues de 4, 5 i 6 problemes, també en l'emmagatzematge del navegador.
- Filtres de tres estats en una línia amb controls circulars més baixos; es conserva el funcionament amb teclat i els noms accessibles.
- Passos 1 i 2 al peu; eliminada la xifra duplicada del lateral de revisió.
- «BLOC 01» substituït per un lema en cursiva amb el recompte calculat a partir del catàleg, també visible en mòbil.

## 0.6.0 · Banc compacte, filtres directes i navegació estable

- Eliminades la indicació de marcar problemes, el recompte duplicat i la fila d'avís i descàrrega del catàleg. El recompte general es manté a la capçalera.
- Tres columnes de problemes en escriptori; dues en pantalles mitjanes i una en pantalles estretes.
- Filtres distribuïts en dues columnes amb controls de tres posicions: exclòs, permès i obligatori. Selecció amb un clic, fletxes del teclat i noms accessibles.
- Peu amb versió a l'esquerra, passos 01/02 connectats al centre i eines JSON a la dreta. La navegació conserva la posició entre passos i la revisió manté els botons d'impressió al peu.
- Eliminats els resums redundants del peu. Els problemes de selecció es comuniquen al lateral, només quan n'hi ha.
- Eines reanomenades per explicitar l'exportació o importació JSON. «Proposa una fitxa nova» sense text auxiliar.
- Els 12 problemes passen a l'estat editorial validat per indicació de l'usuari. Les tries anteriors continuen admetent-se si només ha canviat aquest estat; els canvis d'enunciat o solució continuen rebutjant-se.

## 0.5.0 · Versions visibles i publicació a GitHub Pages

- Número de versió al peu compartit del banc i la revisió, amb un diàleg d'historial resumit de totes les iteracions.
- Historial accessible amb teclat, tancament amb Esc o clic a fora, desplaçament intern i animació de 220 ms; exclòs de la impressió.
- `releases.js` és la font del número de versió i dels resums que mostra el web.
- Remot `aaronFortuno/fil-i-compte` i publicació estàtica des de `main` amb `.nojekyll`, sense dependències ni compilació.

## 0.4 · Visor directe i fulls configurables

- Arrossegament per moure el document i roda per fer zoom al voltant del punter, amb controls flotants de més/menys i ajust a baix a la dreta.
- Icona d'ajust original de Lucide inclosa localment amb la llicència; suport SVG al servidor de previsualització.
- Títol i marca impresa opcionals. Sense títol no es dibuixa el seu separador; sense tots dos, s'elimina tota la capçalera.
- Eliminats la línia, el text i la llista de codis del peu imprès. Es manté el codi al costat de cada problema.
- Problemes reordenables al lateral amb controls de pujar/baixar, amb animació de posició i actualització de les dues pàgines i del solucionari.
- Desament de l'ordre i l'opció de marca, compatible amb tries anteriors.
- Animacions unificades a 220 ms i respectuoses amb moviment reduït. Eliminades les anotacions d'impressió i de zoom del lateral.

## 0.3.1 · Focus estable durant les transicions

- El contenidor dels passos retalla el contingut sense convertir-se en una zona desplaçable: el focus i la navegació ràpida no poden moure'l ni retallar la part superior del visor.

## 0.3 · Navegació per passos i revisió en paral·lel

- Capçalera i peu comuns als dos passos, amb tornada al banc i impressió al peu.
- Transició horitzontal entre selecció i revisió; la selecció i els filtres es conserven. El pas inactiu no rep focus ni interaccions i es respecta la preferència de moviment reduït.
- Configuració de la revisió en un panell a l'esquerra, amb el mateix estil que el panell del banc.
- Dues pàgines A4 en paral·lel, ajustades automàticament a la finestra, amb zoom del 5 % al 200 %, controls de més/menys i botó de reajust.
- El zoom només transforma la previsualització: els documents d'impressió mantenen la mida A4 original.
- En pantalles estretes, la configuració passa a la part superior i el peu continua visible.

## 0.2 · Compositor compacte

- Capçalera de 62 px i eliminació del banner inicial.
- Configuració a la dreta i llistat central amb desplaçament independent. El botó de proposta i la barra de selecció queden fora de les zones que es desplacen.
- Targetes amb identificador, nivell abreujat (CM, CS, ESO), dificultat i continguts a la capçalera.
- Caselles per incloure o excloure problemes, també accionables des del títol. Eliminats «Fixa», la fila de botons i les resolucions del banc.
- Solucions i dibuixos disponibles a la previsualització del solucionari i a la impressió.
- Fulls de 4 o 6 problemes. Les tries antigues de cinc es recuperen amb sis places, conservant els cinc exercicis.
- Repositori local amb una primera versió del prototip original i un segon canvi per a aquesta iteració.

## 0.1 · Primer prototip

- Bloc inicial de 12 problemes, etiquetes, càlculs exactes, solucionaris i dibuixos SVG.
- Filtres, proposta automàtica, selecció, desament/recuperació i impressió A4.
