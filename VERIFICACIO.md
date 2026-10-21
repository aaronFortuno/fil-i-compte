# Comprovació local · 20 d'octubre de 2026

## Prototip original · 0.1

- 12 grups de comprovacions automàtiques superats: esquema del catàleg, identificadors, 12 respostes amb aritmètica exacta, etiquetes, intermedis, dibuixos, sincronització de dades, exclusions, obligatoris per problema o per full, seleccions impossibles, problemes fixats i distribució en dues pàgines.
- Provat al navegador amb servidor local: càrrega del banc, filtres, proposta de fitxa, fixació, selecció manual, previsualització i canvi entre exercicis i solucionaris.
- Provat el desament a fitxer i la recuperació: mateixos identificadors, continguts, filtres i problema fixat.
- Revisada la maquetació dels formats 4, 5 i 6. Els 12 problemes s'han revisat en dos grups de 6: els solucionaris no desborden les caixes; els exercicis deixen espai de treball. També s'ha provat un títol llarg i un grup.
- Revisió visual d'escriptori i de mòbil; sense desbordament horitzontal del banc en la prova de mòbil. La previsualització A4 conserva la mida del paper i es pot desplaçar horitzontalment en pantalles estretes.
- Sense errors de consola en la comprovació del navegador.
- El botó d'impressió obre el diàleg del navegador. No s'ha completat una impressió física ni s'ha exportat i revisat un PDF final. La comprovació de cabuda s'ha fet sobre la previsualització A4.
- L'obertura directa de `index.html` amb doble clic està prevista amb recursos locals clàssics, sense càrrega de JSON per xarxa. No s'ha pogut provar aquest accés al navegador integrat perquè la seva política només admet HTTP/HTTPS i bloqueja `file://`.
- Pendent: revisió docent del contingut, adequació al grup i prova d'impressió/PDF al navegador habitual de l'usuari.

No s'ha publicat ni s'han fet comprovacions remotes.

## Compositor compacte · 0.2

- Superats els 12 grups de comprovacions actualitzats. Només s'accepten propostes de 4 o 6 exercicis; una nova proposta substitueix la selecció anterior.
- Comprovades les caselles natives, la selecció des del títol de la targeta i l'avís quan s'intenta superar el nombre de places. El banc no inclou resolucions ni botons de fixació.
- Comprovada la recuperació real d'un fitxer antic de cinc exercicis: es conserven els cinc identificadors i s'ofereixen sis places, amb avís que en falta un.
- A 1264 × 720, capçalera de 62 px, configuració a la dreta i dues zones amb desplaçament intern independent. La configuració i el botó de proposta conserven la posició quan es desplaça el banc.
- A 1264 × 600, el botó de proposta continua dins del panell visible; el document manté l'alçada de la finestra i tots dos panells es poden desplaçar.
- A 390 px d'amplada, sense desbordament horitzontal del banc; la configuració passa a la part superior amb desplaçament intern i el banc queda a sota.
- Comprovades la previsualització de 4 i 6 exercicis, l'accés al solucionari i la tornada al banc. Els sis solucionaris de la tria de prova no desborden les seves caixes A4.
- Repositori Git local inicialitzat: es conserva el prototip original abans d'aquesta iteració. El remot de GitHub queda pendent per indicació de l'usuari.
- Les proves d'aquesta iteració s'han fet només en local. Continua pendent la prova final d'impressió/PDF al navegador habitual.

## Navegació i revisió · 0.3 · 21 d'octubre de 2026

- Superats els 12 grups de comprovacions existents i la comprovació de sintaxi.
- Comprovat el pas al preview i la tornada: capçalera i peu compartits, transició horitzontal de 380 ms i mateixos identificadors seleccionats després de tornar al banc.
- A 1264 × 720, les dues pàgines caben en paral·lel, sense desbordament del visor en mode ajustat. A 1264 × 600, es reajusten automàticament i el peu queda dins de la finestra.
- A 390 × 844, sense desbordament horitzontal del document: controls a dalt, visor amb dues pàgines i navegació/impressió visibles al peu.
- Comprovats els controls de zoom: augment/disminució, lliscador al mínim del 5 % i màxim del 200 %, desactivació dels botons als límits i reajust posterior sense barres de desplaçament sobrants.
- Les pàgines mantenen les dimensions natives A4, aproximadament 794 × 1123 píxels CSS, independentment del zoom. La transformació de pantalla queda limitada als embolcalls del visor; la impressió genera fulls sense aquests embolcalls.
- Canvis de títol i grup reflectits a les dues pàgines. Comprovats els solucionaris de quatre i sis exercicis, sense desbordament a les caixes de resolució.
- Els dos botons d'impressió són al peu i el pas inactiu queda marcat com a inert. Navegació interna amb focus al pas actiu i enllaç de salt adaptat al pas.
- Sense errors ni avisos a la consola durant les proves. No s'ha completat una impressió física ni una exportació PDF en aquesta iteració.
- Totes les comprovacions s'han fet en local. GitHub continua pendent.

### Correcció 0.3.1

- Detectat i corregit un desplaçament del contenidor dels passos provocat pel focus o per l'entrada ràpida als controls durant la transició. El contenidor utilitza `overflow: clip`; els panells interns i el visor mantenen els seus propis desplaçaments.
- Reprovada la seqüència ràpida revisió → zoom màxim → reajust → banc → revisió: el contenidor conserva `scrollTop = 0` i no retalla les pàgines.
- Reprovat l'accés al control de reajust en mòbil: la capçalera del pas es manté a la seva posició i el peu continua dins de la finestra.

## Visor i configuració del full · 0.4 · 21 d'octubre de 2026

- Superats els 12 grups de comprovacions existents i la comprovació de sintaxi.
- Comprovat el zoom amb la roda dins del visor, el límit del 200 % i el reajust. Controls flotants amb icona Lucide carregada correctament des del projecte (24 × 24).
- Comprovat l'arrossegament real del document ampliat: un moviment del punter de 130 × 70 px desplaça el document aproximadament 130 × 70 px, en sentit contrari als valors de desplaçament del visor. El cursor torna a l'estat normal en deixar anar el ratolí.
- Sense títol: cap títol substitutiu i cap línia de separació. Sense títol ni marca: zero capçaleres impreses, zero peus i codis només al costat de cada problema. En la tria de quatre problemes, treure la capçalera incrementa 39 px (aproximadament 10 mm) cada espai de treball.
- Comprovat el moviment d'un problema entre la primera i la segona pàgina. Una recàrrega conserva l'ordre escollit, el títol buit i la marca desactivada. Restaurada després la selecció inicial de quatre problemes.
- Comprovats els fulls de sis problemes sense capçalera ni peu: 3 + 3, sense desbordament, i els sis solucionaris corresponents també sense desbordament.
- A 390 × 844, controls dins de la cantonada inferior dreta del visor, peu dins de la finestra i document sense desbordament horitzontal.
- Transició entre passos de 0,22 s observada al navegador. Controls, zoom, aparició de targetes i reordenació comparteixen la durada de 220 ms; la configuració de moviment reduït continua prevista.
- Sense errors ni avisos de consola en la comprovació final. La disposició comprovada és la mateixa que utilitza el generador d'impressió; no s'ha completat una impressió física ni s'ha exportat un PDF final.
- Totes les comprovacions del projecte són locals. Cap publicació ni comprovació remota.

## Historial de versions · 0.5.0 · 21 d'octubre de 2026

- Superats els 12 grups de comprovacions del catàleg i compositor, sintaxi de JavaScript i consistència bàsica de les sis entrades de l'historial.
- Número `v0.5.0` visible al peu del banc i de la revisió. El diàleg mostra les versions en ordre descendent i destaca l'actual.
- Comprovades l'obertura des dels dos passos, el tancament amb botó, Esc i clic a fora, el focus inicial al botó de tancament i el retorn del focus al botó de versió. La tecla Tab permet arribar a l'àrea de desplaçament.
- Comprovat el diàleg a 1280 × 900 i 390 × 844, amb capçalera fixa i contingut desplaçable; el peu mòbil queda dins de la finestra i no hi ha desbordament horitzontal. Comprovada també la vista estreta de 320 px.
- L'historial està exclòs de la impressió per la regla de mitjà corresponent; les plantilles dels fulls es mantenen iguals. No s'ha exportat un PDF nou en aquesta iteració.
- Sense errors ni avisos a la consola del navegador local. Captura de revisió local a `vista-previa-v05.jpg` (no versionada).
- Cap comprovació del web remot: la validació de la publicació de GitHub Pages correspon a l'usuari.

## Banc i navegació compactes · 0.6.0 · 21 d'octubre de 2026

- Superats 14 grups de comprovacions: els 12 anteriors, validació de l'estat editorial del catàleg publicat i compatibilitat de tries amb canvis només d'estat. Aquesta última comprova també que es rebutgin canvis d'enunciat, resposta o versió del problema.
- Comprovada la sintaxi de JavaScript i la regeneració del catàleg a partir del JSON original. Els 12 problemes tenen estat `validat` i el paquet passa a la versió 2 sense modificar els enunciats ni les solucions.
- A 1280 × 900: tres columnes de problemes, filtres de dos en dos i totes les opcions del lateral visibles sense desplaçament quan no hi ha incidències (615 px de contingut en 615 px disponibles).
- Comprovats els tres estats dels filtres amb clic i fletxes del teclat. Excloure fraccions elimina P005 i P006 del banc i avisa si encara formen part de la selecció. Fer-les obligatòries en cada problema deixa precisament aquests dos candidats. Estat dels controls i àmbit conservats després d'una recàrrega.
- Comprovada la cerca, la recuperació dels 12 problemes en buidar-la i l'avís de selecció incompleta en passar de quatre a sis places. La impressió continua bloquejada fins a completar una selecció vàlida.
- Mesurada la mateixa posició i mida de la navegació abans i després de canviar de pas en escriptori i en mòbils de 390 i 320 px. El focus passa al títol de la pantalla activa i el pas actual queda indicat amb `aria-current="step"`.
- Comprovats els peus a 1280, 1024, 768, 390 i 320 px, sense desbordament horitzontal. Les eines i els botons d'impressió comparteixen una alçada reservada per evitar salts en canviar de pantalla.
- Sense errors ni avisos a la consola durant la revisió local. Captura a `vista-previa-v06.jpg` (no versionada). Les plantilles d'impressió no s'han modificat en aquesta iteració.
- Sense comprovacions remotes; la revisió de la publicació correspon a l'usuari.

## Pàgines i distribució · 0.7.0 · 21 d'octubre de 2026

- Superats 15 grups de comprovacions. Les 12 combinacions de pàgines i distribució es proven amb un catàleg de mostra prou ampli: nombre exacte, problemes únics i ordre conservat entre pàgines. També es comproven els límits del catàleg real, les configuracions invàlides i la migració de les tries antigues.
- Recuperada en el navegador una tria anterior de quatre problemes com a dues pàgines de dos; comprovada després la persistència de quatre pàgines de tres problemes en recarregar.
- Comprovats una pàgina de tres problemes, una pàgina en quadrícula de quatre, dues pàgines en quadrícula, quatre pàgines de tres i sis pàgines de dos. Numeració i quantitat de pàgines correctes; impressió habilitada quan la tria és completa.
- Comprovats els 12 solucionaris en quadrícula, amb títol i marca, sense desbordaments. Comprovada també la maquetació dels 12 solucionaris en columna. En les quadrícules d'exercicis revisades, els espais de treball fan entre 256 i 293 píxels CSS a mida nativa A4.
- Sis pàgines de quatre problemes demanen 24 places: el compositor informa que només hi ha 12 problemes compatibles i no en repeteix cap per omplir-les.
- El visor disposa quatre pàgines en dues files i sis en tres, amb dues columnes; l'ajust automàtic respecta el conjunt. Una sola pàgina es centra i s'ajusta a l'alçada disponible.
- Columnes dels quatre camps superiors d'amplada igual. Filtres circulars de 22 px dins d'àrees de selecció de 30 × 28 px; clic i fletxes del teclat provats amb els estats d'exclusió i permès.
- Lema i recompte del catàleg visibles en escriptori i mòbil. Revisió de les mides de 1280, 1024, 768, 390 i 320 px, sense desbordament horitzontal.
- Revisió local de la mateixa estructura HTML i CSS que utilitza la impressió; no s'ha obert el diàleg d'impressió ni exportat un PDF en aquesta iteració. Cap comprovació del web remot.

## Comparació d'etiquetes de filtratge · 0.8.0 · 21 d'octubre de 2026

- Superades les 15 comprovacions existents i la sintaxi de JavaScript. La lògica de filtratge i les dades dels problemes es mantenen.
- Cinc etiquetes de rotació a la columna esquerra i cinc grups de selecció directa a la dreta. Color i símbol es corresponen amb l'estat actual.
- Comprovat el cicle complet de fraccions amb clic i espai: permès → obligatori → exclòs → permès. L'exclusió elimina P005 i P006 del banc. Provades també les fletxes i Enter sense perdre el focus del botó.
- Selecció directa de potències com a excloses des de permès, sense passar per obligatori. El banc elimina P011. Un segon clic a l'opció activa conserva l'estat; la fletxa esquerra selecciona obligatori i una recàrrega conserva tant el valor com la icona ressaltada.
- «Neteja filtres» restaura els deu continguts a permès i marca correctament els cinc selectors directes. Les proves acaben amb els filtres inicials i la mateixa tria de quatre problemes.
- Dues columnes a 1280, 768, 390 i 320 px, sense desbordament horitzontal dels controls. En els espais estrets el selector directe queda sota el nom per no tallar les paraules.
- Noms accessibles, instruccions de teclat i anunci dels canvis d'estat. Sense errors ni avisos a la consola local.
- Captura de comparació a `vista-previa-v08.jpg` (no versionada), amb exemples dels tres estats. No s'ha comprovat el web remot.

## Etiquetes rotatives compactes · 0.8.1 · 21 d'octubre de 2026

- Superades les 15 comprovacions existents i la comprovació de sintaxi. Deu botons rotatius i cap selector directe al banc.
- Padding vertical de 4 px i alçada mínima de 34 px. A 1280 × 900, el bloc de filtres ocupa 205 px, davant dels 268 px de la comparació anterior, sense ampliar el lateral.
- Provat el canvi de potències amb clic, espai i fletxes: l'exclusió elimina P011 i es conserva després de recarregar. Comprovats també els botons de l'esquerra i restaurats els filtres inicials després de les proves.
- Dues columnes i noms sense desbordaments a 768, 390 i 320 px. Sense errors ni avisos a la consola local.
- Captura a `vista-previa-v081.jpg` (no versionada). Sense comprovació remota.

### Ampliació de la mateixa 0.8.1 · Revisió vàlida i ajuda visual

- Superades les 15 comprovacions existents i la sintaxi. Provat al navegador el cas d'excloure operacions combinades: zero candidats, només l'estat buit al banc, revisió i proposta inhabilitades. El lateral manté 615 px de contingut en 615 px disponibles, igual que abans d'excloure.
- Provat el bloqueig de revisió per selecció incompleta, candidats insuficients, problemes seleccionats incompatibles i continguts obligatoris absents. Els avisos del banc són neutres i no mostren identificadors de problemes. En completar una tria vàlida s'entra a la revisió i les dues impressions estan disponibles.
- La cerca del banc continua sent només exploratòria: una cerca sense resultats no invalida una tria completa que compleix els filtres.
- Eliminats els avisos del sidebar i de la previsualització. Es manté una comprovació interna d'impressió amb text genèric per a una impressió directa del navegador sobre una tria invàlida.
- Ajuda centrada comprovada amb X, Esc i clic exterior, amb retorn del focus al botó d'ajuda. Reprovat també l'historial després de compartir el comportament dels diàlegs.
- Observat el pas automàtic del filtre d'exemple de permès a obligatori. Comprovats la casella i el canvi manual d'estat; els filtres reals i els quatre problemes seleccionats es conserven. L'animació es cancel·la en interactuar o tancar; s'omet amb moviment reduït.
- Ajuda comprovada a 1280 × 900, 390 × 844 i 320 × 640. Sense desbordament horitzontal; a 320 px hi ha desplaçament intern i es pot arribar al filtre d'exemple amb teclat.
- Captures locals a `vista-previa-v081-validacio.jpg` i `vista-previa-v081-ajuda.jpg` (no versionades). Cap comprovació remota. Es conserva la numeració 0.8.1 i s'afegeix un commit sense moure l'etiqueta ja publicada.
