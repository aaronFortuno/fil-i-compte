# Historial de canvis

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
