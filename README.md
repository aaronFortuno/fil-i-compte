# Fil i compte

Banc inicial de 12 problemes estàtics en català i compositor de fitxes de dues pàgines A4. Prototip local, sense dependències, comptes, API, analítica ni recursos externs. Encara no s'ha publicat.

## Obrir i utilitzar

Obre **index.html** fent-hi doble clic. El web funciona sense servidor ni connexió. També es pot previsualitzar amb `node tools/serve.cjs` a l'adreça que mostra el servidor.

Per revisar el contingut seguit, obre **BLOC-01.md**: inclou els 12 enunciats, les solucions, les etiquetes i la descripció dels suports visuals.

1. Tria 4, 5 o 6 problemes, nivell orientatiu i dificultat.
2. Per a cada contingut, indica **Permès**, **Obligatori** o **Exclòs**. Els obligatoris poden aplicar-se al conjunt del full o a cada problema; les exclusions sempre afecten tots els problemes.
3. Prem **Proposa una fitxa**, o treu i afegeix problemes manualment. **Fixa** conserva un problema quan proposes una altra fitxa. La cerca només ajuda a explorar el banc; no restringeix la proposta automàtica.
4. Prem **Revisa la fitxa**. Pots canviar el títol i el grup i veure els exercicis o el solucionari.
5. Imprimeix cada document per separat o tria **Desa com a PDF** al diàleg del navegador. Paper A4, escala 100 %, sense capçaleres ni peus del navegador; el disseny ja inclou marges. Exercicis a doble cara, gir per la vora llarga. Cada document té dues pàgines.

Els exercicis deixen espai per a dibuixos, esquemes, operacions i una resposta amb unitats. El solucionari mostra una possible resolució breu, sense imposar un únic procediment. Els gràfics tenen explicació textual i trames o ratllats que funcionen també en blanc i negre.

La tria es conserva en aquest navegador quan l'emmagatzematge local està disponible. **Desa la tria** descarrega un fitxer que es pot recuperar amb **Recupera-la**. Inclou el contingut dels problemes per detectar canvis de versió: es rebutja la recuperació si el catàleg actual no coincideix amb els exercicis desats. No s'importa contingut executable.

## Què conté el primer bloc

| ID | Problema | Contingut destacat | Resposta |
| --- | --- | --- | --- |
| P001 | Les pomes de l'hort | Agrupació i resta; dibuix simbòlic | 17 pomes |
| P002 | Llibres que van i venen | Multiplicació, suma i resta | 183 llibres |
| P003 | Autocars per a la sortida | Repartiment, parèntesis i dada irrellevant | 22 alumnes/autocar |
| P004 | Els pots de la cooperativa | Repartiment en tres passos | 66 pots/botiga |
| P005 | El berenar compartit | Fracció d'una quantitat; barra de quarts | 8 entrepans |
| P006 | Aigua per al planter | Fracció i augment; barra de cinquens | 105 litres |
| P007 | La motxilla rebaixada | Descompte i despesa addicional; barra | 66 € |
| P008 | Més inscripcions al casal | Augment percentual | 276 infants |
| P009 | El canvi del mercat | Productes amb decimals i canvi | 8,30 € |
| P010 | Una volta al circuit | Perímetre i divisió decimal; esquema | 50 passes |
| P011 | El mosaic del passadís | Potència i resta; quadrícula | 52 rajoles |
| P012 | La tanca de l'hort quadrat | Arrel quadrada, perímetre i porta; esquema | 45 m de tanca |

**Estat editorial: pendent de revisió docent.** Les respostes s'han contrastat amb càlculs exactes i s'han revisat enunciats, unitats i coherència. Els nivells i la dificultat són orientatius; cal contrastar-los amb el grup. El bloc és deliberadament divers i algunes combinacions de filtres encara no tenen 4 candidats. El compositor explica aquestes limitacions i no relaxa filtres silenciosament. Aquesta versió mostra tots els exercicis del bloc, inclosos els pendents; encara no és un catàleg públic de material validat.

## Model i ampliació

- **data/catalog.json**: font de veritat. Conté el paquet, els 12 enunciats fixos, etiquetes, resolucions i representacions.
- **data/catalog.schema.json**: esquema versionat del format. El comprovador inclòs valida els termes de JSON Schema que utilitza aquest esquema.
- **catalog-data.js**: còpia generada perquè el web pugui obrir-se amb doble clic sense les restriccions de càrrega local de JSON. No s'edita manualment.
- **core.js**: filtres, cobertura de continguts, selecció i aritmètica racional exacta per comprovar les respostes.
- **app.js / styles.css**: interfície, dibuixos SVG, emmagatzematge i impressió.

Cada exercici té identificador i versió; enunciat i pregunta; context i estructura matemàtica; nivell i dificultat; estat editorial; continguts; tipus numèrics de dades, intermedis i resultat; i solució amb expressió llegible, càlcul estructurat, resposta, unitats, passos, nota i dibuix opcional.

`solution.calculation` és un arbre de càlcul amb `add`, `sub`, `mul`, `div`, `pow` i `sqrt`, sense executar expressions de text. Serveix per comprovar un exercici fix, no per generar variants. Les etiquetes pedagògiques continuen necessitant revisió humana: el codi no pot deduir si un enunciat és ambigu ni totes les estratègies que pot emprar un alumne. En particular, «Parèntesis» indica que formen part de l'expressió prevista, sense impedir una resolució per passos; una barra de fraccions usada com a suport opcional per a un percentatge no converteix l'exercici en obligatòriament fraccionari.

Representacions inicials: `objects` (grups de cercles i elements ratllats), `fraction` (barra de parts iguals), `grid` (quadrat de rajoles), `rectangle` i `square` (amb obertura per a una porta). Els límits de mida estan explicitats a l'esquema per mantenir la llegibilitat. Es poden afegir nous tipus quan un problema concret ho demani.

Per ampliar: redacta un bloc de 10–15 problemes amb solucions, revisa'l i incorpora els registres al catàleg amb identificadors nous. Incrementa la versió d'un exercici quan canviïs el contingut. Després executa:

```text
node tools/build-data.cjs
node tools/check.cjs
```

El comprovador actual també fixa les respostes dels 12 exercicis del bloc inicial. Quan s'afegeixi un nou paquet caldrà ampliar aquesta referència independent i adaptar la comprovació de mida; no només acceptar el resultat de l'arbre de càlcul.

Abans de donar per bo un nou bloc: revisió numèrica, lingüística i docent, revisió de les etiquetes i comprovació local dels fulls de 4, 5 i 6 exercicis. L'algorisme de selecció actual està pensat per al catàleg inicial; caldrà revisar-ne el rendiment quan hi hagi centenars de registres.
