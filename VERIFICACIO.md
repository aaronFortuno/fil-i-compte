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
