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

## Vora de les targetes · 0.8.2 · 21 d'octubre de 2026

- Comprovació local de les quatre targetes seleccionades: gruix de vora idèntic als quatre costats i cap ombra interior. Es conserva la mateixa ombra exterior subtil de les targetes normals.
- Comprovada la sintaxi del registre de versions i el diff. Canvi només visual: no s'han repetit les proves matemàtiques ni modificat la gestió de selecció i avisos.
- Captura a `vista-previa-v082.jpg` (no versionada). Sense comprovacions remotes.

## Estat fix i consulta de la tria · 0.8.3 · 21 d'octubre de 2026

- Superats els 15 grups de comprovacions, la sintaxi de JavaScript i la revisió del diff. Cap error ni avís a la consola local.
- Amb quatre problemes seleccionats, les altres vuit caselles estan inhabilitades i les targetes tenen un fons apagat, mantenint la llegibilitat. Desmarcar-ne un activa les altres caselles i desactiva la revisió; completar la tria fa el canvi invers i atenua l'estat del peu.
- A 1280 × 900, comparades les coordenades del banc, del títol, del botó de revisió i de l'estat entre tres i quatre seleccionats: cap desplaçament. No hi ha missatges inserits sobre la matriu.
- La llista superposada mostra els títols en ordre de selecció. Treure un problema conserva la llista oberta i situa el focus en el botó següent o anterior; buidar-la mostra l'estat buit i el focus passa a X. Provats X, Esc amb retorn al botó i clic exterior.
- Excloses les fraccions: el problema seleccionat que desapareix del banc continua a la tria, indicat com a incompatible, i es pot treure. Una cerca de «mosaic» conserva els quatre seleccionats a la llista sense marcar-los com a incompatibles; la cerca continua sent exploratòria.
- Excloses les operacions combinades: zero candidats, estat buit al banc i proposta i revisió inhabilitades. Configurades 24 places amb 12 candidats: estat fix de candidats insuficients i proposta inhabilitada.
- Tria completa de 12 problemes amb desplaçament intern a la llista, comprovada en escriptori i mòbil. Revisades les amplades de 1280, 1024, 768, 390 i 320 px; sense desbordament horitzontal dels controls nous. A 320 px el botó es redueix a «Tria» per conservar el títol visible.
- Entrada a revisió amb dues pàgines i les dues impressions disponibles; la navegació conserva la posició i reserva l'espai de l'estat ocult. Reprovats els diàlegs d'ajuda i historial, amb la 0.8.3 visible. Restaurades les opcions de dues pàgines de dos i la tria de mostra.
- Captura a `vista-previa-v083.jpg` (no versionada). No s'ha obert el diàleg d'impressió ni fet cap comprovació remota.

## Segon bloc · 0.9.0 · 22 d'octubre de 2026

- Superats 16 grups de comprovacions: esquemes dels dos blocs i del catàleg, 24 identificadors únics, coincidència entre fonts i fitxers generats, 24 respostes contrastades amb referències numèriques, càlculs exactes, etiquetes, representacions, filtres, migració de tries i distribució de pàgines.
- Comparats els primers dotze registres amb el catàleg de la 0.8.3: són idèntics. Repetida la preparació dels blocs sense modificar fonts: els hashes dels quatre fitxers generats no canvien.
- P013–P024 seleccionats manualment i comprovats en quatre pàgines de tres problemes. Tots els enunciats i solucionaris hi caben; els espais d'escriptura mesuren entre 102 i 144 px CSS a mida nativa. Les dues barres noves es mostren amb el total, les parts i els valors corresponents.
- Generades sis pàgines en quadrícula amb els 24 problemes, sense repeticions. Comprovats exercicis i solucionaris: cap problema desborda el seu espai; espai d'escriptura mínim de 237 px CSS. Els solucionaris mostren les nou representacions del catàleg.
- Excloses les operacions combinades: vuit candidats (P013–P018, P023 i P024). Proposta completa de dues pàgines de quatre problemes i accés al solucionari, amb els vuit resultats.
- Cerca de P019 amb un únic resultat correcte. Lema «24 problemes -i sumant- per pensar, practicar i aprendre» amb guions curts, revisat a 1280 i 320 px; en mòbil ocupa dues línies dins de la capçalera, sense desbordament horitzontal.
- Cap error ni avís a la consola local. Sintaxi de JavaScript i diff comprovats. Captura a `vista-previa-v090.jpg` (no versionada). No s'ha obert el diàleg d'impressió ni comprovat el web remot.
- Segon bloc publicat amb `pendent-docent` per autorització expressa de l'usuari, que el validarà després de publicar. La comprovació numèrica i de coherència s'ha fet abans; no es declara una validació docent ja completada.

## Nivell i dificultat orientatius · 0.9.1 · 22 d'octubre de 2026

- Superats 18 grups de comprovacions. Provades les nou caselles de la matriu contra les setze combinacions dels selectors (inclosos Tots/Totes), amb una taula explícita de les franges esperades. Comprovats els límits: CS intermedi inclou CM repte i ESO accessible, però no CM accessible ni ESO intermedi.
- Amb un catàleg de prova, la proposta completa una fitxa a partir de CM repte i CS intermedi mantenint un contingut obligatori i excloent les fraccions. Comprovat també que l'obligatori en cada problema continua descartant candidats que no el treballen.
- Al navegador local, CS intermedi mostra nou candidats: P002, P003, P005, P006, P007, P008, P019, P020 i P024. CM repte mostra els mateixos. Una fitxa amb P002 i P024 entra a revisió i té la impressió disponible; excloure arrels amaga P024 i inhabilita la revisió.
- CS repte mostra vuit candidats, inclosos els dos d'ESO intermedi P011 i P023. La proposta de dues pàgines en quadrícula selecciona els vuit i accedeix a la revisió amb tots els problemes.
- Només CS, amb totes les dificultats, ofereix 20 candidats; tots els nivells amb dificultat intermèdia també en mostren 20. Netejar els filtres torna als 24 problemes.
- Explicació d'equivalències comprovada al diàleg d'ajuda en escriptori i a 320 × 640. El contingut nou és accessible amb el desplaçament intern. El selector de dificultat conserva els 27 px de la seva etiqueta i no es modifica l'alçada dels controls del lateral. Sense desbordament horitzontal ni errors o avisos de consola.
- Captura a `vista-previa-v091.jpg` (no versionada), amb CS intermedi i el problema P024 d'ESO accessible compatible. No s'han modificat els exercicis ni la maquetació impresa. Comprovacions exclusivament locals.

## Codis i rangs · 0.10.0 · 22 d'octubre de 2026

- Superats 21 grups de comprovacions. Codis exactes nous i antics, rangs inclusius, unions, superposicions, espais, extrems oberts, absència de resultats, ordre numèric fins a P10000 i errors de sintaxi. Comprovat també que una llista de codis curta que s'allarga en normalitzar es pot recuperar sense alterar-ne el significat.
- La preparació exigeix codis canònics positius i evita àlies duplicats. Migració dels 24 registres a quatre xifres, amb les versions dels exercicis conservades. Comparats tots amb el catàleg anterior: la comparació de contingut continua acceptant-los i rebutjant canvis reals.
- Executat el validador real de la interfície en un entorn de prova amb tries antigues de `count:4` i amb `pageCount`/`perPage`. Ordre conservat en convertir P002–P005 a P0002–P0005. Comprovats el rang normalitzat, el rebuig de rangs invàlids i de duplicats P013/P0013. No s'ha automatitzat el diàleg natiu d'importació de fitxers.
- Al navegador, la tria prèvia de quatre codis de tres xifres reapareix amb els quatre codis nous, seleccionats i en el mateix ordre. L'exemple clicable `13-` mostra P0013–P0024 i torna el scroll del banc al principi. La proposta només selecciona candidats d'aquest interval, manté el rang visible i permet revisar la fitxa.
- Recarregada la pàgina: rang i selecció conservats. Provats `5-7,9-10`, `-4` i l'àlies exacte `P013`. Un rang invertit `7-5` assenyala l'error i inhabilita proposta i revisió, amb la matriu a la mateixa coordenada vertical. Escriure «pomes» elimina el rang, manté la proposta disponible i la cerca textual continua sent exploratòria.
- Ajuda superposada amb exemples, X i Esc, amb retorn de focus; aplicació d'exemple amb retorn al cercador. Comprovada a 1280 × 900 i 320 × 640: popup dins del viewport, sense desbordament horitzontal. El cercador conserva l'alçada i el botó d'ajuda no afegeix files al banc.
- Revisats els 24 problemes en sis pàgines de quadrícules: els codis de quatre xifres apareixen correctament i no hi ha desbordaments en exercicis ni solucionaris. Cap error ni avís de consola.
- Captura a `vista-previa-v0100.jpg` (no versionada). Restaurada la tria inicial amb els codis nous i cercador buit. Cap comprovació remota ni obertura del diàleg d'impressió.

## Tercer bloc i diversos apartats · 0.11.0 · 22 d'octubre de 2026

- Superats 22 grups de comprovacions. Esquemes 1 i 2 compatibles, 36 identificadors únics, 29 apartats nous (set problemes dobles i cinc de triples), resultats numèrics i evidències de justificació contrastats amb referències independents. El validador rebutja barrejar el model d'una pregunta amb `parts`, preguntes sense solució i codis invàlids.
- Comprovats etiquetes i tipus numèrics de tots els càlculs i evidències, no només del primer apartat. L'etiqueta de combinades s'aplica si una resolució conté diverses operacions, sense inferir-la només del nombre de preguntes. Els dibuixos nous corresponen a 3/4 de 12 km i a 49 rajoles amb 12 retirades.
- Comparats els 24 exercicis anteriors amb la versió 0.10.0: són idèntics. La preparació repetida produeix exactament els mateixos fitxers del catàleg i els tres documents de revisió.
- Rang `25-`: dotze problemes, 29 preguntes i 29 zones de resposta. Set justificacions amb dues línies. Quatre pàgines de tres problemes: cap desbordament en exercicis ni solucionaris; espais de treball de 46 a 126 px CSS a mida nativa.
- Rang mixt `1-4,25-`: quatre pàgines en quadrícula amb els dotze problemes nous i quatre dels anteriors. Cap desbordament; 29 resolucions d'apartat, i espais de treball dels problemes nous de 151 a 263 px CSS. Els problemes antics conserven la pregunta i resposta úniques.
- Sis pàgines de dos problemes amb tot el bloc nou: espai de treball mínim de 201 px CSS. Revisada visualment també una fitxa de dues pàgines amb quatre problemes triples: dotze apartats i dotze respostes, lletres a), b), c) coherents, línies de justificació de 33 px CSS i solucionari separat per lletres.
- Cerca «70 %» troba P0036 pel tercer apartat. Excloure percentatges dins del tercer bloc elimina P0029 i P0036. La pregunta triple es llegeix a 320 × 640 sense desbordament horitzontal.
- Cap error ni avís a la consola local. Sintaxi de JavaScript i diff comprovats. Captura a `vista-previa-v0110.jpg` (no versionada). Restaurats dos problemes per pàgina, dues pàgines, la tria inicial i els filtres buits.
- Tercer bloc publicat amb `pendent-docent`, seguint la validació posterior a la publicació autoritzada per l'usuari. No s'ha obert el diàleg d'impressió ni fet cap comprovació remota.

## Revisió docent i peu compacte · 0.11.1 · 22 d'octubre de 2026

- Superats els 22 grups de comprovacions. P0032 comprovat amb aritmètica exacta: √2,25 = 1,5 m, perímetre de 6 m i manca de 0,5 m respecte d'un rotlle de 5,5 m. Etiquetes i tipus numèrics actualitzats.
- Contrastades les revisions amb el catàleg anterior: només P0026, P0027, P0029, P0031, P0032 i P0035 canvien de contingut o orientació, tots amb versió 2. Els 24 registres dels primers dos blocs són idèntics; els altres sis del tercer bloc només canvien d'estat editorial. Revisió docent del tercer bloc incorporada.
- Peu comprovat en amplades de 1280, 1120, 1024, 768, 562, 390 i 320 px. Una sola fila de quadrícula en tots els casos; navegació amb cercles damunt dels textos en mòbil i cap desbordament horitzontal. També comprovat al pas de revisió: alçada estable de 66 px CSS en tauleta i de 86 px en mòbil.
- Menú JSON amb les tres accions disponibles; X i Esc funcionen amb retorn del focus al botó. Camp d'importació únic i connectat a la seva etiqueta. Menú d'impressió amb les dues opcions en mòbil i tauleta; botons directes visibles en escriptori. No s'ha obert el diàleg natiu d'importació ni el d'impressió.
- Corregit el cas de 1120 px en què els dos botons d'impressió s'apilaven: també fa servir el menú compacte. Historial accessible des de «v0.11.1», sense text afegit al peu.
- Aplicat el rang `25-` i recarregada la pàgina: el cercador queda buit, es mostren els 36 problemes i es conserven els quatre seleccionats. El rang continua funcionant quan s'introdueix explícitament durant la sessió.
- Revisat tot el tercer bloc en quatre pàgines de tres problemes, exercicis i solucionaris sense desbordament. Zona de treball mínima de 46 px CSS. Solució de P0032 llegida al preview amb totes les unitats en metres.
- Captures locals a `vista-previa-v0111-tablet.jpg` i `vista-previa-v0111-mobil.jpg` (no versionades). Cap error ni avís de consola. Sintaxi i diff comprovats; HTML sense identificadors duplicats. Estat final amb cercador i filtres buits, dues pàgines de dos problemes i la tria inicial.
- Comprovacions exclusivament locals; la comprovació del web publicat correspon a l'usuari.

## Marca Fil que emmarca · 0.11.2 · 22 d'octubre de 2026

- Marca vectorial aplicada a la capçalera i al favicon, amb la mateixa geometria i inclinació de −12°. Contorn del favicon reforçat per a mides petites i color adaptatiu al tema del navegador.
- Capçalera comprovada a 1280 × 720 i 320 × 640: recurs carregat correctament, mida de 36 px en escriptori i 30 px en mòbil, sense desbordament horitzontal. El cercador es manté buit i la versió visible és 0.11.2.
- Superats els 22 grups de comprovacions existents. Cap error ni avís a la consola local. Captura a `vista-previa-v0112.jpg` (no versionada).
- Comprovacions exclusivament locals; el web remot el revisarà l'usuari.
