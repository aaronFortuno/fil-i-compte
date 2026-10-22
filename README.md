# Fil i compte

Banc de 36 problemes estàtics en català, organitzats en tres blocs, i compositor de fitxes d’1, 2, 4 o 6 pàgines A4. Hi ha preguntes úniques i problemes amb dos o tres apartats, incloses justificacions. Funciona en local o a GitHub Pages, sense dependències, comptes, API, analítica ni recursos externs durant l'ús.

## Obrir i utilitzar

Obre **index.html** fent-hi doble clic. El web funciona sense servidor ni connexió. També es pot previsualitzar amb `node tools/serve.cjs` a l'adreça que mostra el servidor.

Per revisar el contingut seguit, obre **BLOC-01.md**, **BLOC-02.md** o **BLOC-03.md**: cada document inclou 12 enunciats, totes les preguntes i solucions, les etiquetes i la descripció dels suports visuals. Escriu `25-` al cercador del web per revisar directament el tercer bloc.

1. Tria **Nombre de pàgines** (1, 2, 4 o 6) i **Problemes per pàgina** (2 o 3 en columna, o 4 en quadrícula 2 × 2). El total és el producte dels dos camps. A sota, tria nivell orientatiu i dificultat. La configuració queda a la dreta i es pot desplaçar independentment del banc central en pantalles d'escriptori.
2. Els continguts es mostren de dos en dos, en etiquetes amb fons i símbol: **· Permès**, **✓ Obligatori** i **× Exclòs**. Un clic a qualsevol etiqueta fa rotar l’estat entre permès, obligatori i exclòs. Els botons admeten Enter, espai i les fletxes esquerra i dreta. Els obligatoris poden aplicar-se al conjunt del full o a cada problema; les exclusions sempre afecten tots els problemes.
3. Marca les caselles dels problemes que vols incloure o prem **Proposa una fitxa nova** per substituir la selecció per una altra proposta. Quan el full és ple, desmarca un problema abans d'afegir-ne un altre. La cerca textual explora el banc; els codis i rangs també restringeixen la proposta automàtica. Els nivells de les targetes s'abreugen com a **CM**, **CS** i **ESO**; el nom complet es manté al desplegable i al text d'ajuda de l'abreviatura.
4. El pas **2 · Revisa la fitxa**, al centre del peu, només s’activa quan la tria és completa i compleix els filtres i els continguts obligatoris. A l'esquerra pots canviar el títol, la marca impresa, el grup, el document (exercicis o solucionari) i l'ordre dels problemes amb les fletxes de pujar/baixar. Les pàgines es mostren en una o dues columnes, segons la quantitat configurada. **Arrossega** per desplaçar el document i fes servir la **roda del ratolí** per ampliar o allunyar al voltant del punter. Els botons de més, menys i ajust estan flotant a la cantonada inferior dreta del visor. La icona de quatre cantonades torna a ajustar totes les pàgines. El zoom de pantalla no modifica la mida d'impressió.
5. El peu es manté visible durant els dos passos. El pas **1 · Banc** conserva la selecció i els filtres; **Imprimeix fitxa / PDF** i **Imprimeix solucionari / PDF** obren el diàleg del navegador per al document corresponent. Paper A4, escala 100 %, sense capçaleres ni peus del navegador; el disseny ja inclou marges. Cada document té el nombre de pàgines configurat. Per imprimir a doble cara, fes servir el gir per la vora llarga.

L'estat de la tria ocupa un espai fix al peu, al costat de **Revisa la fitxa**, sense desplaçar les targetes. Quan la tria és vàlida, el text queda atenuat i s'activa la revisió. En arribar al màxim, les caselles no seleccionades es desactiven i les targetes canvien lleugerament de fons, mantenint-se llegibles. **Veure la tria**, al costat del títol del banc, obre una llista superposada amb els problemes seleccionats i permet treure'n qualsevol, encara que els filtres o la cerca l'hagin amagat. La llista es tanca amb X, Esc o clic exterior.

Si no hi ha candidats, el banc mostra el missatge de combinació no disponible. La proposta automàtica queda inhabilitada quan no hi ha prou candidats. A la revisió només s’hi arriba amb una selecció vàlida i els botons d’impressió estan disponibles.

**Nivell i dificultat orientatius.** Els dos selectors es combinen segons aquesta matriu. Les caselles amb el mateix número formen una franja equivalent; és una convenció editorial inicial, no una mesura calibrada del rendiment de l'alumnat.

| Nivell | Accessible | Intermedi | Repte |
| --- | ---: | ---: | ---: |
| Cicle mitjà | 1 | 2 | 3 |
| Cicle superior | 2 | 3 | 4 |
| Inici d'ESO | 3 | 4 | 5 |

Per exemple, **CS intermedi** admet també **CM repte** i **inici d'ESO accessible**; **CS repte** admet **inici d'ESO intermedi**. Quan es deixa un camp a Tots/Totes, s'inclou la unió de les seves franges: CS amb totes les dificultats admet les franges 2, 3 i 4; tots els nivells amb dificultat intermèdia també admeten aquestes tres franges. Sense cap dels dos camps, s'admeten totes. Les etiquetes originals de les targetes es conserven. El banc, la proposta, la tria i la revisió fan servir el mateix criteri. Les exclusions de continguts i els obligatoris es mantenen, també quan s'inclou un problema d'un altre cicle.

**Cerca per codi o rang.** El botó **?** del cercador mostra exemples que es poden aplicar amb un clic. La sintaxi és la dels rangs d'impressió, amb límits inclusius i P opcional:

| Cerca | Resultat |
| --- | --- |
| `P0013` o `13` | Només P0013; també s'admet l'antic `P013`. |
| `-4` | P0001–P0004. |
| `5-7,9-10` | P0005, P0006, P0007, P0009 i P0010. |
| `13-` o `P0013-` | Des de P0013 fins a l'últim disponible. |
| `P0013-P0024` | Del P0013 al P0024. |

Els rangs es combinen amb els filtres de continguts i orientació, i s'apliquen també a la proposta i revisió. Per evitar repetir els primers cent problemes, escriu `101-`. Els seleccionats que en quedin fora es poden treure des de «Veure la tria» o substituir amb una proposta nova. Esborrar el cercador o escriure text elimina el rang; «Neteja filtres» també el buida. La cerca de text no limita la proposta. El rang es conserva en recarregar i en exportar la tria. Els rangs invertits o incomplets, com `7-5` o `5,,7`, mostren una indicació i bloquegen la proposta i revisió fins a corregir-los.

**Com funciona** obre un popup centrat amb un problema d’exemple i la casella de selecció destacada, un filtre animat que també es pot provar manualment, les equivalències i els rangs de cerca. Els exemples de selecció i continguts no modifiquen la tria. Es tanca amb X, clic exterior o Esc; l’animació s’atura en interactuar o tancar i respecta el moviment reduït.

Els exercicis deixen espai per a dibuixos, esquemes, operacions i una resposta amb unitats. El solucionari mostra una possible resolució breu, sense imposar un únic procediment. Els gràfics tenen explicació textual i trames o ratllats que funcionen també en blanc i negre.

El títol és opcional: un camp buit no imprimeix cap títol. La marca **fil i compte** es pot desmarcar de manera independent. Si tots dos estan desactivats, desapareix tota la capçalera impresa; si només hi ha marca, no es dibuixa el separador del títol. Els fulls no tenen peu amb instruccions ni llista de codis: cada problema ja conserva el seu codi. L'espai recuperat s'assigna al treball de l'alumnat. L'ordre, el títol i l'opció de marca queden guardats amb la tria; les tries antigues sense aquesta opció mantenen la marca activada.

Les animacions comparteixen una durada de **220 ms** i respecten la preferència de moviment reduït. L'arrossegament respon directament al punter. La icona d'ajust de [Lucide](https://lucide.dev/icons/scan) i la seva llicència són a **assets/lucide/**, sense peticions externes durant l'ús del web.

La tria es conserva en aquest navegador quan l'emmagatzematge local està disponible. **Exporta tria JSON** descarrega un fitxer que es pot recuperar amb **Importa tria JSON**. **Exporta catàleg JSON** descarrega tots els problemes del catàleg. Aquestes eines són a la dreta del peu del banc; la versió queda a l’esquerra i els passos de navegació al centre. Inclou el contingut dels problemes per detectar canvis de versió: es rebutja la recuperació si el contingut actual no coincideix amb els exercicis desats. Un canvi únicament de l’estat editorial no invalida una tria. No s'importa contingut executable.

Les noves exportacions fan servir el format 3, amb `pageCount`, `perPage` i el rang opcional `filters.codes`; s'importen també els formats 1 i 2. Les tries anteriors de quatre problemes es recuperen amb dues pàgines de dos problemes; les de sis, amb dues de tres. Les tries antigues de cinc problemes es recuperen en dues pàgines de tres places; es conserven els cinc problemes i s'indica que falta completar la selecció. Els antics problemes fixats es tracten com a seleccionats normals. Els codis antics, com `P013`, es converteixen a `P0013` sense canviar el contingut ni la versió de l'exercici. Es rebutgen els duplicats encara que facin servir dos farciments del mateix codi. Les targetes del banc només mostren l'enunciat; les resolucions es consulten al solucionari.

La capçalera mostra un lema amb el nombre real de problemes del catàleg i «-i sumant-». El compositor mai no repeteix problemes per omplir places: si una configuració en demana més dels que hi ha disponibles amb els filtres actuals, ho indica i conserva la tria. Amb els 36 problemes actuals, es poden omplir les 24 places màximes sense filtres. Excloent les operacions combinades hi ha 8 candidats.

## Què conté el primer bloc

| ID | Problema | Contingut destacat | Resposta |
| --- | --- | --- | --- |
| P0001 | Les pomes de l'hort | Agrupació i resta; dibuix simbòlic | 17 pomes |
| P0002 | Llibres que van i venen | Multiplicació, suma i resta | 183 llibres |
| P0003 | Autocars per a la sortida | Repartiment, parèntesis i dada irrellevant | 22 alumnes/autocar |
| P0004 | Els pots de la cooperativa | Repartiment en tres passos | 66 pots/botiga |
| P0005 | El berenar compartit | Fracció d'una quantitat; barra de quarts | 8 entrepans |
| P0006 | Aigua per al planter | Fracció i augment; barra de cinquens | 105 litres |
| P0007 | La motxilla rebaixada | Descompte i despesa addicional; barra | 66 € |
| P0008 | Més inscripcions al casal | Augment percentual | 276 infants |
| P0009 | El canvi del mercat | Productes amb decimals i canvi | 8,30 € |
| P0010 | Una volta al circuit | Perímetre i divisió decimal; esquema | 50 passes |
| P0011 | El mosaic del passadís | Potència i resta; quadrícula | 52 rajoles |
| P0012 | La tanca de l'hort quadrat | Arrel quadrada, perímetre i porta; esquema | 45 m de tanca |

**Primer bloc: validat.** Els nivells i la dificultat són orientatius. Algunes combinacions de filtres encara no tenen prou candidats: el compositor explica aquestes limitacions i no relaxa filtres silenciosament.

## Què conté el segon bloc

| ID | Problema | Contingut destacat | Resposta |
| --- | --- | --- | --- |
| P0013 | Dos dies de teatre | Suma | 433 entrades |
| P0014 | Places lliures al concert | Resta | 147 seients |
| P0015 | Cartells per a les escoles | Multiplicació | 432 cartells |
| P0016 | Sobres de llavors | Divisió i dada irrellevant | 42 llavors/sobre |
| P0017 | El camí fins al mirador | Suma decimal | 4,35 km |
| P0018 | Cintes per a les medalles | Divisió decimal exacta | 36 trossos |
| P0019 | Anar a l'escola amb bicicleta | Fracció d'una quantitat; barra | 144 alumnes |
| P0020 | Els abonaments del museu | Percentatge; barra | 45 persones |
| P0021 | Entrades per a les associacions | Agrupació, parèntesis i repartiment | 39 entrades/associació |
| P0022 | Material per al taller | Compra i canvi amb decimals | 12,95 € |
| P0023 | Una clau de colors | Potència i combinacions | 81 claus |
| P0024 | El costat de la vela | Arrel quadrada exacta | 14 cm |

**Segon bloc: càlculs i coherència comprovats, validació docent pendent.** L'usuari ha autoritzat publicar-lo per validar-lo directament al web. Els registres conserven `pendent-docent` fins a aquesta revisió, sense afegir avisos a la interfície. Els dos blocs passen les comprovacions numèriques i d'etiquetes abans de publicar.

## Model i ampliació

El tercer bloc, **Calcula, compara i justifica**, afegeix P0025–P0036: set problemes dobles i cinc de triples, amb 29 apartats. Les preguntes numèriques tenen resultat i càlcul propi; les justificacions tenen una resposta textual breu i evidències numèriques. Hi ha una barra de quarts i una quadrícula de rajoles noves. Com en el segon bloc, els càlculs es comproven abans de publicar i la validació docent de l'usuari és posterior.

Els apartats apareixen com a), b), c) al banc i al paper. La fitxa conserva una zona de treball comuna i una resposta per apartat; les justificacions disposen de dues línies. El solucionari separa les resolucions amb les mateixes lletres. Cada problema continua comptant com una sola plaça de la fitxa.

- **data/packs/bloc-XX.json**: fonts de veritat, un fitxer per bateria. Contenen les metadades, els enunciats fixos, etiquetes, resolucions i representacions.
- **data/catalog.json**: catàleg únic generat a partir dels blocs; no s'edita manualment.
- **data/catalog.schema.json**: esquema versionat del format. El comprovador inclòs valida els termes de JSON Schema que utilitza aquest esquema.
- **catalog-data.js**: còpia generada perquè el web pugui obrir-se amb doble clic sense les restriccions de càrrega local de JSON. No s'edita manualment.
- **core.js**: filtres, cobertura de continguts, selecció i aritmètica racional exacta per comprovar les respostes.
- **app.js / styles.css**: interfície, dibuixos SVG, emmagatzematge i impressió.

Cada exercici té identificador i versió; enunciat i pregunta; context i estructura matemàtica; nivell i dificultat; estat editorial; continguts; tipus numèrics de dades, intermedis i resultat; i solució amb expressió llegible, càlcul estructurat, resposta, unitats, passos, nota i dibuix opcional.

El model 2 afegeix l'alternativa `parts`, amb dos o tres elements `{question, solution}`. No es barreja amb els camps únics `question` i `solution` del model 1, que es continuen admetent. Una solució numèrica conserva els camps anteriors; una justificació fa servir `kind: "justification"`, `response`, `steps`, `note` i `evidence`, amb càlcul i resultat per a cada evidència. Els tipus numèrics i les etiquetes del problema cobreixen tots els apartats: una exclusió descarta el problema si qualsevol apartat necessita aquell contingut. Diverses preguntes independents d'una sola operació no impliquen, per si soles, l'etiqueta d'operacions combinades.

`solution.calculation` és un arbre de càlcul amb `add`, `sub`, `mul`, `div`, `pow` i `sqrt`, sense executar expressions de text. Serveix per comprovar un exercici fix, no per generar variants. Les etiquetes pedagògiques continuen necessitant revisió humana: el codi no pot deduir si un enunciat és ambigu ni totes les estratègies que pot emprar un alumne. En particular, «Parèntesis» indica que formen part de l'expressió prevista, sense impedir una resolució per passos; una barra de fraccions usada com a suport opcional per a un percentatge no converteix l'exercici en obligatòriament fraccionari.

Representacions inicials: `objects` (grups de cercles i elements ratllats), `fraction` (barra de parts iguals), `grid` (quadrat de rajoles), `rectangle` i `square` (amb obertura per a una porta). Els límits de mida estan explicitats a l'esquema per mantenir la llegibilitat. Es poden afegir nous tipus quan un problema concret ho demani.

Per ampliar: redacta un bloc de 10–15 problemes amb solucions en un fitxer nou `data/packs/bloc-XX.json`, amb identificadors nous. Revisa'l i registra'n l'estat editorial; publica abans de la validació docent només si l'usuari ho autoritza. Incrementa la versió d'un exercici i la del seu bloc quan canviïs el contingut. Després executa:

```text
node tools/build-data.cjs
node tools/check.cjs
```

La preparació agrega els blocs, comprova identificadors duplicats i genera el catàleg del web, la còpia per a ús sense servidor i un document BLOC-XX.md per cada bateria. El comprovador valida l'esquema de tots els blocs i la coincidència del catàleg generat. També contrasta els resultats de tots els apartats i les evidències de les justificacions amb referències independents. Quan s'afegeixi un nou paquet caldrà ampliar aquestes referències, el recompte i l'estat editorial esperat; no només acceptar el resultat de l'arbre de càlcul.

Abans de donar per bo un nou bloc: revisió numèrica, lingüística i docent, revisió de les etiquetes i comprovació local de les distribucions de 2, 3 i 4 problemes per pàgina. L'algorisme de selecció actual està pensat per al catàleg inicial; caldrà revisar-ne el rendiment quan hi hagi centenars de registres.

## Versions

El projecte té repositori Git propi dins d'aquesta carpeta. La branca principal és `main`. El prototip original es conserva al primer commit i les iteracions posteriors es documenten a **CHANGELOG.md**.

El número de versió es mostra al peu dels dos passos. En prémer-lo s'obre l'historial resumit de novetats. **releases.js** és la font d'aquest número: la primera entrada correspon a la versió actual. En cada iteració cal afegir-hi el resum, actualitzar **CHANGELOG.md** i crear l'etiqueta Git `vX.Y.Z` corresponent. La versió indica el contingut carregat al navegador. Si s’amplia una versió amb el mateix número per indicació de l’usuari, s’actualitza la seva entrada i s’afegeix un commit, sense moure les etiquetes ja publicades.

## Publicació a GitHub Pages

Repositori: [aaronFortuno/fil-i-compte](https://github.com/aaronFortuno/fil-i-compte). Adreça del web: [aaronfortuno.github.io/fil-i-compte](https://aaronfortuno.github.io/fil-i-compte/).

GitHub Pages publica la branca **main**, carpeta **/ (root)**. El fitxer **.nojekyll** permet servir els fitxers estàtics directament. Els enllaços i els recursos són relatius perquè funcionin també dins de `/fil-i-compte/` i obrint **index.html** en local. No cal cap procés de compilació ni secrets de publicació.

Abans de pujar una iteració, comprova-la en local amb `node tools/check.cjs` i revisa la interfície. Després puja el commit de `main` i la seva etiqueta de versió a `origin`; GitHub Pages iniciarà la publicació automàticament. La comprovació del web remot la fa l'usuari. Si el navegador encara mostra la versió anterior, recarrega la pàgina després que GitHub hagi acabat de publicar.
