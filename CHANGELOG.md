# Historial de canvis

## 0.13.0 · Quin és el tot?

- Revisió del quart bloc: nou problemes de CS i ESO passen a pregunta única, sense demanar els càlculs intermedis com a apartats. Es conserva el guiatge de CM: el bloc té ara 16 preguntes.
- P0040 compara directament les ofertes; P0041 demana el resultat final amb potències; P0045 integra els intercanvis en la mateixa resolució. P0043 compara dues persones que reben els descomptes del 10 % i del 25 % en ordre invers: totes dues paguen 54 €.
- P0047 utilitza quatre pots de 2,5 litres, tres vuitens per al fons i 1,25 litres per als detalls; en repartir el sobrant en quatre recipients, corresponen 1,25 litres a cadascun. Versions dels nou exercicis revisats incrementades i revisió docent incorporada al bloc.
- Nou bloc P0049–P0060, «Quin és el tot?»: dotze problemes, onze de pregunta única i un de doble amb un canvi d'enfocament. Fraccions de quantitats, fraccions del restant, recuperació del total, percentatges de grups desiguals, canvi d'ordre, ambigüitat expressa i dades insuficients.
- Solucions amb justificacions, exemples de les diferents interpretacions i dues barres de fraccions. Les justificacions úniques tenen dues línies de resposta, com les dels problemes amb apartats. El catàleg arriba a 60 problemes.
- Criteris d'autoria ampliats: apartats addicionals amb un nou enfocament a CS i ESO, capacitats comercials habituals i ambigüitats amb interpretacions raonades al solucionari.

## 0.12.0 · Connecta les dades

- Quart bloc de 12 problemes, P0037–P0048: nou de dobles i tres de triples, amb 27 apartats. El catàleg arriba als 48 problemes.
- Contextos de ràdio, refugi d'animals, música, bicicleta, arxiu fotogràfic, jardineria, compres, cromos, cinema, pintura i lliga esportiva. Operacions combinades en tot el bloc i cinc problemes amb dades per despistar.
- Fraccions d'una quantitat restant, intercanvis, comparació d'ofertes, descomptes successius, agrupacions amb potències i diferència d'àrees amb arrels. Dues representacions de fraccions noves.
- Solucions numèriques i justificacions comprovades amb referències independents. Publicació per a la validació docent posterior al web, sense modificar els primers 36 exercicis.

## 0.11.2 · El fil que emmarca

- Nova marca vectorial pròpia: el fil forma el contorn obert d'un quadrat inclinat −12°, amb un petit bucle i una suma al centre.
- Logo de capçalera i favicon unificats. El favicon conserva la geometria amb un contorn lleugerament més gruixut per llegir-lo a 16 px i un verd més clar en tema fosc.
- Recursos locals a `assets/brand/`, sense dependències ni fonts externes.

## 0.11.1 · Revisió docent i peu adaptable

- P0026 b) remet als minibusos previstos sense avançar la resposta d'a). P0027 elimina l'afegit d'altres despeses i P0029 c) evita repetir el pressupost.
- P0031 passa a CS intermedi. P0032 utilitza 2,25 m², costats d'1,5 m, 6 m de cinta i un rotlle de 5,5 m; etiqueta i comprovacions de decimals actualitzades.
- P0035 passa a CS repte i planteja si l'aigua sobra o falta, sense donar per feta la suficiència a l'enunciat. Solució i pregunta a) coherents amb aquesta reformulació.
- Versions dels sis exercicis modificats incrementades. Revisió docent del tercer bloc incorporada; els dotze registres passen a validats.
- Versió breu al peu, sense «Novetats». Una sola fila també en tauleta; en mòbil, cercles damunt dels textos de navegació. Menú JSON amb icona a totes les mides i menú d'impressió compacte en tauleta i mòbil.
- El cercador s'obre buit en visitar o recarregar, encara que la sessió anterior tingui un rang desat. Els rangs continuen funcionant durant la sessió i en importar explícitament una tria.
- Criteri d'autoria documentat: unitats de mesura habituals en el context, evitant submúltiples o múltiples intermedis sense ús quotidià.

## 0.11.0 · Problemes amb diversos apartats

- Tercer bloc de 12 problemes, P0025–P0036: set amb dues preguntes i cinc amb tres, amb 29 apartats en total. Inclou comparació de compres, pressupostos, capacitats, fraccions, percentatges, potències, arrels i justificacions.
- Model de catàleg 2 amb `parts`: cada apartat conté pregunta i solució. Es conserven els blocs i els 24 exercicis anteriors sense modificar el seu contingut. El lector i l'esquema admeten també el model 1.
- Les justificacions tenen una resposta textual i evidències numèriques comprovables. La cerca i els filtres tenen en compte totes les preguntes i els continguts necessaris en qualsevol apartat.
- Apartats a), b), c) al banc, a les fitxes i al solucionari. Espai de treball compartit i respostes separades, amb dues línies quan cal justificar.
- Documents de revisió generats per apartats i proves ampliades a totes les respostes, evidències i esquemes, incloent-hi la prohibició de barrejar els dos models en un mateix exercici.

## 0.10.0 · Codis de quatre xifres i rangs d'impressió

- Cerca de codis exactes i de rangs inclusius: `-4`, `5-7,9-10`, `13-`, amb P opcional i espais admesos. S'admeten unions, superposicions i codis de més de quatre xifres; els límits es comparen numèricament.
- Els codis i rangs limiten el banc, la proposta automàtica i la compatibilitat de la tria. Es conserven al navegador i a les exportacions. La cerca textual continua sent exploratòria i substitueix el rang en editar el cercador.
- Ajuda superposada al botó ? amb exemples clicables, més explicació a «Com funciona». Els errors de sintaxi es mostren a l'estat buit i al peu fix; impedeixen proposar i revisar sense moure la matriu amb banners.
- Migració a P0001–P0024 en fonts, catàleg, targetes, documents i impressió. Els identificadors de tres xifres es normalitzen en recuperar tries, mantenint-ne l'ordre i detectant duplicats després de normalitzar.
- Exportacions en format 3 amb rangs; importació compatible amb formats 1, 2 i 3. La comparació dels exercicis admet el canvi de farciment amb zeros i continua rebutjant canvis reals de contingut o versió.

## 0.9.1 · Equivalències entre nivell i dificultat

- Nivell i dificultat es combinen en una matriu orientativa de cinc franges. Avançar un cicle equival a avançar un grau de dificultat: CM repte = CS intermedi = inici d'ESO accessible; CS repte = inici d'ESO intermedi.
- Si només es concreta un camp, s'admet la unió de les franges corresponents a les opcions de l'altre. Sense cap dels dos camps, no es limita l'orientació. Les etiquetes originals dels problemes es conserven.
- Mateixa compatibilitat al banc, la proposta automàtica, els seleccionats i l'accés a la revisió. Es mantenen les exclusions i els obligatoris, tant al conjunt com a cada problema.
- Dificultat identificada com a orientativa al selector i equivalències explicades a l'ajuda, sense afegir controls ni alçada al sidebar.
- Proves de les nou caselles contra les setze combinacions dels selectors, equivalències, límits de franja, proposta amb candidats d'altres cicles i respecte dels continguts.

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
