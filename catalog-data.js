/* Generat des de data/packs/ amb node tools/build-data.cjs. */
globalThis.EXERCISE_CATALOG = {
  "schemaVersion": 1,
  "pack": {
    "id": "fil-i-compte",
    "title": "Banc de problemes contextualitzats",
    "language": "ca",
    "version": 3,
    "authorship": "Contingut original creat per a aquest projecte",
    "review": "bloc-01.json: Càlculs comprovats i problemes validats en la revisió del projecte. bloc-02.json: Càlculs, etiquetes i coherència revisats abans de publicar. Validació docent de l'usuari pendent, prevista després de la publicació."
  },
  "exercises": [
    {
      "id": "P001",
      "version": 1,
      "title": "Les pomes de l'hort",
      "context": "hort",
      "structure": "canvis",
      "level": "mitja",
      "difficulty": 1,
      "status": "validat",
      "statement": "A l'hort de l'escola han omplert 4 cistells amb 6 pomes cadascun. Per preparar el berenar, n'agafen 7 en total.",
      "question": "Quantes pomes queden als cistells?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "4 × 6 − 7 = 17",
        "calculation": [
          "sub",
          [
            "mul",
            4,
            6
          ],
          7
        ],
        "answer": 17,
        "unit": "pomes",
        "response": "Queden 17 pomes als cistells.",
        "steps": [
          "Hi havia 4 × 6 = 24 pomes.",
          "En traiem 7: 24 − 7 = 17."
        ],
        "visual": {
          "type": "objects",
          "groups": 4,
          "perGroup": 6,
          "removed": 7,
          "caption": "Cada cercle representa una poma. Ratllem les 7 que hem agafat; en queden 17."
        },
        "note": "També pots dibuixar les pomes i comptar les que queden."
      }
    },
    {
      "id": "P002",
      "version": 1,
      "title": "Llibres que van i venen",
      "context": "biblioteca",
      "structure": "canvis",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "La biblioteca té 168 llibres disponibles. Rep 4 paquets de 18 llibres cadascun i després en deixa 57 en préstec.",
      "question": "Quants llibres hi queden disponibles?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "168 + 4 × 18 − 57 = 183",
        "calculation": [
          "sub",
          [
            "add",
            168,
            [
              "mul",
              4,
              18
            ]
          ],
          57
        ],
        "answer": 183,
        "unit": "llibres",
        "response": "Hi queden 183 llibres disponibles.",
        "steps": [
          "Arriben 4 × 18 = 72 llibres.",
          "168 + 72 = 240; després, 240 − 57 = 183."
        ],
        "note": "Una línia amb els canvis +72 i −57 també ajuda a seguir el recompte."
      }
    },
    {
      "id": "P003",
      "version": 1,
      "title": "Autocars per a la sortida",
      "context": "sortida",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "A una sortida s'hi han apuntat 156 alumnes. Finalment, 24 no hi poden anar. La resta es reparteix a parts iguals entre 6 autocars. El trajecte dura 45 minuts.",
      "question": "Quants alumnes viatgen en cada autocar?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "distractors"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "(156 − 24) ÷ 6 = 22",
        "calculation": [
          "div",
          [
            "sub",
            156,
            24
          ],
          6
        ],
        "answer": 22,
        "unit": "alumnes per autocar",
        "response": "Viatgen 22 alumnes en cada autocar.",
        "steps": [
          "Hi van 156 − 24 = 132 alumnes.",
          "132 ÷ 6 = 22 alumnes per autocar."
        ],
        "note": "Els 45 minuts no intervenen en el repartiment. Els parèntesis indiquen què calculem primer si ho escrivim en una sola expressió."
      }
    },
    {
      "id": "P004",
      "version": 1,
      "title": "Els pots de la cooperativa",
      "context": "cooperativa",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Una cooperativa prepara 18 caixes amb 24 pots de melmelada cadascuna. Reserva 36 pots per a una fira i reparteix tots els altres, a parts iguals, entre 6 botigues.",
      "question": "Quants pots rep cada botiga?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "(18 × 24 − 36) ÷ 6 = 66",
        "calculation": [
          "div",
          [
            "sub",
            [
              "mul",
              18,
              24
            ],
            36
          ],
          6
        ],
        "answer": 66,
        "unit": "pots per botiga",
        "response": "Cada botiga rep 66 pots.",
        "steps": [
          "En total hi ha 18 × 24 = 432 pots.",
          "Per repartir: 432 − 36 = 396 pots.",
          "396 ÷ 6 = 66 pots per botiga."
        ],
        "note": "Comprovació: 6 × 66 + 36 = 432 pots."
      }
    },
    {
      "id": "P005",
      "version": 1,
      "title": "El berenar compartit",
      "context": "berenar",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Per al berenar hi ha 32 entrepans. Durant el primer torn es mengen tres quartes parts (3/4) dels entrepans.",
      "question": "Quants entrepans queden per al segon torn?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "32 − 32 ÷ 4 × 3 = 8",
        "calculation": [
          "sub",
          32,
          [
            "mul",
            [
              "div",
              32,
              4
            ],
            3
          ]
        ],
        "answer": 8,
        "unit": "entrepans",
        "response": "Queden 8 entrepans per al segon torn.",
        "steps": [
          "Cada quart són 32 ÷ 4 = 8 entrepans.",
          "Se'n mengen 3 × 8 = 24; en queden 32 − 24 = 8."
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 3,
          "total": 32,
          "caption": "La barra sencera són 32 entrepans. S'han menjat 3 parts de 8; queda una part de 8."
        },
        "note": "També pots calcular directament el quart que queda: 32 ÷ 4 = 8."
      }
    },
    {
      "id": "P006",
      "version": 1,
      "title": "Aigua per al planter",
      "context": "hort",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un dipòsit té una capacitat de 150 litres i està ple fins a dues cinquenes parts (2/5) de la seva capacitat. Hi afegim 45 litres d'aigua.",
      "question": "Quants litres d'aigua hi ha ara al dipòsit?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "150 ÷ 5 × 2 + 45 = 105",
        "calculation": [
          "add",
          [
            "mul",
            [
              "div",
              150,
              5
            ],
            2
          ],
          45
        ],
        "answer": 105,
        "unit": "litres",
        "response": "Ara hi ha 105 litres d'aigua al dipòsit.",
        "steps": [
          "Cada cinquena part són 150 ÷ 5 = 30 litres.",
          "Inicialment hi ha 2 × 30 = 60 litres.",
          "Després d'afegir-ne: 60 + 45 = 105 litres."
        ],
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 2,
          "total": 150,
          "caption": "Situació inicial: 2 parts plenes, de 30 litres cadascuna. Després hi afegim 45 litres."
        },
        "note": "105 litres és menys que la capacitat de 150 litres: el dipòsit no vessa."
      }
    },
    {
      "id": "P007",
      "version": 1,
      "title": "La motxilla rebaixada",
      "context": "compres",
      "structure": "descompte",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una motxilla costa 80 €. La botiga hi aplica un descompte del 25 %. Si la comprem per internet, el transport costa 6 € i no té descompte.",
      "question": "Quant pagarem en total per la motxilla i el transport?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "80 − 80 × 25 ÷ 100 + 6 = 66",
        "calculation": [
          "add",
          [
            "sub",
            80,
            [
              "div",
              [
                "mul",
                80,
                25
              ],
              100
            ]
          ],
          6
        ],
        "answer": 66,
        "unit": "euros",
        "response": "Pagarem 66 € en total.",
        "steps": [
          "El descompte és 80 × 25 ÷ 100 = 20 €.",
          "La motxilla rebaixada costa 80 − 20 = 60 €.",
          "Amb el transport: 60 + 6 = 66 €."
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 80,
          "caption": "El 25 % és una de quatre parts iguals: 20 € de descompte. Les altres tres parts sumen 60 €."
        },
        "note": "La barra és una estratègia alternativa; també es pot resoldre amb el càlcul del percentatge."
      }
    },
    {
      "id": "P008",
      "version": 1,
      "title": "Més inscripcions al casal",
      "context": "casal",
      "structure": "augment",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "L'any passat al casal hi havia 240 infants inscrits. Aquest any el nombre d'inscripcions ha augmentat un 15 % respecte de l'any passat.",
      "question": "Quants infants hi ha inscrits aquest any?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "240 + 240 × 15 ÷ 100 = 276",
        "calculation": [
          "add",
          240,
          [
            "div",
            [
              "mul",
              240,
              15
            ],
            100
          ]
        ],
        "answer": 276,
        "unit": "infants",
        "response": "Aquest any hi ha 276 infants inscrits.",
        "steps": [
          "L'augment és 240 × 15 ÷ 100 = 36 infants.",
          "240 + 36 = 276 infants."
        ],
        "note": "També pots trobar el 10 % (24 infants) i el 5 % (12 infants): l'augment és 24 + 12 = 36."
      }
    },
    {
      "id": "P009",
      "version": 1,
      "title": "El canvi del mercat",
      "context": "compres",
      "structure": "compra-canvi",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Al mercat comprem 2,4 kg de pomes a 3,50 €/kg i 1,5 kg de peres a 2,20 €/kg. Paguem amb un bitllet de 20 €.",
      "question": "Quin canvi ens han de tornar?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "expression": "20 − (2,4 × 3,50 + 1,5 × 2,20) = 8,30",
        "calculation": [
          "sub",
          20,
          [
            "add",
            [
              "mul",
              2.4,
              3.5
            ],
            [
              "mul",
              1.5,
              2.2
            ]
          ]
        ],
        "answer": 8.3,
        "unit": "euros",
        "response": "Ens han de tornar 8,30 €.",
        "steps": [
          "Les pomes costen 2,4 × 3,50 = 8,40 €.",
          "Les peres costen 1,5 × 2,20 = 3,30 €.",
          "La compra costa 11,70 €; el canvi és 20 − 11,70 = 8,30 €."
        ],
        "note": "En euros, expressem la resposta amb dues xifres decimals."
      }
    },
    {
      "id": "P010",
      "version": 1,
      "title": "Una volta al circuit",
      "context": "esport",
      "structure": "mesura",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Un circuit té forma de rectangle: fa 12,5 metres de llarg i 7,5 metres d'ample. La Jana hi fa una volta completa amb passes de 0,8 metres, totes de la mateixa llargada.",
      "question": "Quantes passes necessita per fer una volta completa?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "2 × (12,5 + 7,5) ÷ 0,8 = 50",
        "calculation": [
          "div",
          [
            "mul",
            2,
            [
              "add",
              12.5,
              7.5
            ]
          ],
          0.8
        ],
        "answer": 50,
        "unit": "passes",
        "response": "Necessita 50 passes per fer una volta completa.",
        "steps": [
          "La volta mesura 2 × (12,5 + 7,5) = 40 metres.",
          "40 ÷ 0,8 = 50 passes."
        ],
        "visual": {
          "type": "rectangle",
          "widthLabel": "12,5 m",
          "heightLabel": "7,5 m",
          "caption": "Recorrem els quatre costats del rectangle. Esquema orientatiu."
        },
        "note": "Comprovació: 50 passes de 0,8 m fan 40 m."
      }
    },
    {
      "id": "P011",
      "version": 1,
      "title": "El mosaic del passadís",
      "context": "escola",
      "structure": "quadrats",
      "level": "eso",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un mosaic quadrat està format per 8 files de 8 rajoles cadascuna. Durant una reparació es retiren 12 rajoles.",
      "question": "Quantes rajoles queden col·locades? Escriu el nombre inicial de rajoles amb una potència.",
      "features": [
        "suma-resta",
        "combinades",
        "potencies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "8² − 12 = 52",
        "calculation": [
          "sub",
          [
            "pow",
            8,
            2
          ],
          12
        ],
        "answer": 52,
        "unit": "rajoles",
        "response": "Queden 52 rajoles col·locades. Inicialment n'hi havia 8² = 64.",
        "steps": [
          "El quadrat té 8² = 8 × 8 = 64 rajoles.",
          "Després de retirar-ne 12: 64 − 12 = 52."
        ],
        "visual": {
          "type": "grid",
          "side": 8,
          "removed": 12,
          "caption": "El quadrat conté 8 × 8 rajoles. Les 12 ratllades són les que es retiren."
        },
        "note": "La potència expressa les 8 files de 8 rajoles; després fem la resta."
      }
    },
    {
      "id": "P012",
      "version": 1,
      "title": "La tanca de l'hort quadrat",
      "context": "hort",
      "structure": "mesura",
      "level": "eso",
      "difficulty": 3,
      "status": "validat",
      "statement": "Un hort quadrat té una superfície de 144 m². Volem posar una tanca a tot el voltant, excepte en una obertura de 3 metres per a la porta.",
      "question": "Quants metres de tanca necessitem?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "arrels"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "4 × √144 − 3 = 45",
        "calculation": [
          "sub",
          [
            "mul",
            4,
            [
              "sqrt",
              144
            ]
          ],
          3
        ],
        "answer": 45,
        "unit": "metres de tanca",
        "response": "Necessitem 45 metres de tanca.",
        "steps": [
          "El costat fa √144 = 12 m, perquè 12 × 12 = 144.",
          "El perímetre és 4 × 12 = 48 m.",
          "Descomptem la porta: 48 − 3 = 45 m."
        ],
        "visual": {
          "type": "square",
          "sideLabel": "12 m",
          "areaLabel": "144 m²",
          "gapLabel": "porta de 3 m",
          "caption": "Primer trobem el costat del quadrat i després el seu contorn. La porta queda sense tanca."
        },
        "note": "La superfície és en m²; el costat i la tanca es mesuren en metres."
      }
    },
    {
      "id": "P013",
      "version": 1,
      "title": "Dos dies de teatre",
      "context": "teatre",
      "structure": "composicio",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Per a l'obra de teatre de l'escola s'han venut 186 entrades per a divendres i 247 per a dissabte.",
      "question": "Quantes entrades s'han venut entre els dos dies?",
      "features": [
        "suma-resta"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "186 + 247 = 433",
        "calculation": [
          "add",
          186,
          247
        ],
        "answer": 433,
        "unit": "entrades",
        "response": "S'han venut 433 entrades en total.",
        "steps": [
          "Ajuntem les vendes dels dos dies: 186 + 247 = 433 entrades."
        ],
        "note": "Pots representar els dos dies amb dues barres i buscar-ne el total."
      }
    },
    {
      "id": "P014",
      "version": 1,
      "title": "Places lliures al concert",
      "context": "concert",
      "structure": "complement",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Una sala de concerts té 525 seients. Quan comença el concert hi ha 378 seients ocupats.",
      "question": "Quants seients queden lliures?",
      "features": [
        "suma-resta"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "525 − 378 = 147",
        "calculation": [
          "sub",
          525,
          378
        ],
        "answer": 147,
        "unit": "seients",
        "response": "Queden 147 seients lliures.",
        "steps": [
          "Restem els seients ocupats dels que té la sala: 525 − 378 = 147."
        ],
        "note": "També pots comptar quant falta de 378 fins a 525 amb una recta numèrica."
      }
    },
    {
      "id": "P015",
      "version": 1,
      "title": "Cartells per a les escoles",
      "context": "impremta",
      "structure": "grups-iguals",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una impremta prepara 18 cartells per a cadascuna de les 24 escoles que participen en una campanya.",
      "question": "Quants cartells ha de preparar en total?",
      "features": [
        "multiplicacio-divisio"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "24 × 18 = 432",
        "calculation": [
          "mul",
          24,
          18
        ],
        "answer": 432,
        "unit": "cartells",
        "response": "Ha de preparar 432 cartells.",
        "steps": [
          "Hi ha 24 grups de 18 cartells: 24 × 18 = 432 cartells."
        ],
        "note": "Un esquema amb 24 grups iguals ajuda a identificar la multiplicació."
      }
    },
    {
      "id": "P016",
      "version": 1,
      "title": "Sobres de llavors",
      "context": "jardineria",
      "structure": "repartiment",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenim 336 llavors i les repartim a parts iguals entre 8 sobres, sense que en sobri cap. El paquet de llavors ha costat 12 €.",
      "question": "Quantes llavors posem a cada sobre?",
      "features": [
        "multiplicacio-divisio",
        "distractors"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "336 ÷ 8 = 42",
        "calculation": [
          "div",
          336,
          8
        ],
        "answer": 42,
        "unit": "llavors per sobre",
        "response": "Posem 42 llavors a cada sobre.",
        "steps": [
          "Repartim les 336 llavors entre els 8 sobres: 336 ÷ 8 = 42."
        ],
        "note": "El preu de 12 € no intervé en el repartiment de les llavors."
      }
    },
    {
      "id": "P017",
      "version": 1,
      "title": "El camí fins al mirador",
      "context": "excursio",
      "structure": "composicio",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Una ruta va de l'escola a la font i després de la font al mirador. El primer tram fa 2,75 km i el segon fa 1,6 km.",
      "question": "Quants quilòmetres fa la ruta de l'escola al mirador?",
      "features": [
        "suma-resta",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "expression": "2,75 + 1,6 = 4,35",
        "calculation": [
          "add",
          2.75,
          1.6
        ],
        "answer": 4.35,
        "unit": "quilòmetres",
        "response": "La ruta fa 4,35 km.",
        "steps": [
          "Sumem els dos trams: 2,75 + 1,60 = 4,35 km."
        ],
        "note": "En una suma vertical, alinea les comes i les xifres que tenen el mateix valor posicional."
      }
    },
    {
      "id": "P018",
      "version": 1,
      "title": "Cintes per a les medalles",
      "context": "esport",
      "structure": "mesura",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Disposem d'una cinta de 12,6 metres. Per a cada medalla tallem un tros de 0,35 metres, sense perdre cinta en els talls.",
      "question": "Quants trossos complets de 0,35 metres podem obtenir?",
      "features": [
        "multiplicacio-divisio",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "12,6 ÷ 0,35 = 36",
        "calculation": [
          "div",
          12.6,
          0.35
        ],
        "answer": 36,
        "unit": "trossos",
        "response": "Podem obtenir 36 trossos, sense que sobri cinta.",
        "steps": [
          "Busquem quants trossos de 0,35 m caben en 12,6 m: 12,6 ÷ 0,35 = 36."
        ],
        "note": "També pots passar-ho a centímetres: repartir 1.260 cm en trossos de 35 cm dona el mateix nombre de trossos."
      }
    },
    {
      "id": "P019",
      "version": 1,
      "title": "Anar a l'escola amb bicicleta",
      "context": "mobilitat",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una enquesta han participat 240 alumnes. Tres cinquenes parts (3/5) diuen que van a l'escola amb bicicleta.",
      "question": "Quants dels alumnes enquestats van a l'escola amb bicicleta?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "240 ÷ 5 × 3 = 144",
        "calculation": [
          "mul",
          [
            "div",
            240,
            5
          ],
          3
        ],
        "answer": 144,
        "unit": "alumnes",
        "response": "144 dels alumnes enquestats van a l'escola amb bicicleta.",
        "steps": [
          "Una cinquena part són 240 ÷ 5 = 48 alumnes.",
          "Tres cinquenes parts són 48 × 3 = 144 alumnes."
        ],
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 3,
          "total": 240,
          "caption": "La barra representa els 240 alumnes. Cada part són 48 alumnes; les 3 parts ratllades en representen 144."
        },
        "note": "Divideix una barra en cinc parts iguals i assenyala'n tres."
      }
    },
    {
      "id": "P020",
      "version": 1,
      "title": "Els abonaments del museu",
      "context": "museu",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Aquest matí han entrat 150 persones al museu. El 30 % d'aquestes persones tenen abonament anual.",
      "question": "Quantes persones de les que han entrat aquest matí tenen abonament anual?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "percentatges"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "150 × 30 ÷ 100 = 45",
        "calculation": [
          "div",
          [
            "mul",
            150,
            30
          ],
          100
        ],
        "answer": 45,
        "unit": "persones",
        "response": "45 persones tenen abonament anual.",
        "steps": [
          "Calculem el 30 % de 150: 150 × 30 ÷ 100 = 45 persones."
        ],
        "visual": {
          "type": "fraction",
          "parts": 10,
          "filled": 3,
          "total": 150,
          "caption": "Cada desena part representa el 10 %: 15 persones. Tres parts, el 30 %, representen 45 persones."
        },
        "note": "Una altra via és trobar el 10 % (15 persones) i multiplicar-lo per 3. La barra és un suport opcional."
      }
    },
    {
      "id": "P021",
      "version": 1,
      "title": "Entrades per a les associacions",
      "context": "teatre",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un teatre ofereix 3 funcions de 96 places cadascuna. A cada funció reserva 18 places per als intèrprets i les seves famílies. Totes les entrades restants de les tres funcions es reparteixen a parts iguals entre 6 associacions.",
      "question": "Quantes entrades rep cada associació en total?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "3 × (96 − 18) ÷ 6 = 39",
        "calculation": [
          "div",
          [
            "mul",
            3,
            [
              "sub",
              96,
              18
            ]
          ],
          6
        ],
        "answer": 39,
        "unit": "entrades per associació",
        "response": "Cada associació rep 39 entrades en total.",
        "steps": [
          "De cada funció es poden repartir 96 − 18 = 78 entrades.",
          "De les tres funcions: 3 × 78 = 234 entrades.",
          "Cada associació rep 234 ÷ 6 = 39 entrades."
        ],
        "note": "Un esquema amb tres grups de 96 places permet separar les 18 reservades de cada funció."
      }
    },
    {
      "id": "P022",
      "version": 1,
      "title": "Material per al taller",
      "context": "compres",
      "structure": "compra-canvi",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Per a un taller comprem 3 carpetes a 4,75 € cadascuna i 2 capses de retoladors a 6,40 € cadascuna. Paguem amb 40 €.",
      "question": "Quin canvi ens han de tornar?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "expression": "40 − (3 × 4,75 + 2 × 6,40) = 12,95",
        "calculation": [
          "sub",
          40,
          [
            "add",
            [
              "mul",
              3,
              4.75
            ],
            [
              "mul",
              2,
              6.4
            ]
          ]
        ],
        "answer": 12.95,
        "unit": "euros",
        "response": "Ens han de tornar 12,95 €.",
        "steps": [
          "Les carpetes costen 3 × 4,75 = 14,25 €.",
          "Els retoladors costen 2 × 6,40 = 12,80 €.",
          "La compra costa 14,25 + 12,80 = 27,05 €.",
          "El canvi és 40 − 27,05 = 12,95 €."
        ],
        "note": "Pots organitzar la compra en una taula amb el producte, la quantitat, el preu unitari i el subtotal."
      }
    },
    {
      "id": "P023",
      "version": 1,
      "title": "Una clau de colors",
      "context": "codis",
      "structure": "combinacions",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una clau té 4 caselles ordenades. A cada casella podem posar vermell, blau o groc. Un mateix color es pot repetir, i canviar els colors de posició pot donar una clau diferent.",
      "question": "Quantes claus diferents podem formar? Expressa el càlcul amb una potència.",
      "features": [
        "potencies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "3⁴ = 81",
        "calculation": [
          "pow",
          3,
          4
        ],
        "answer": 81,
        "unit": "claus",
        "response": "Podem formar 81 claus diferents: 3⁴ = 81.",
        "steps": [
          "Cada una de les 4 caselles té 3 opcions independents: 3⁴ = 81 claus."
        ],
        "note": "Un arbre de possibilitats amb quatre nivells i tres branques a cada pas representa totes les claus."
      }
    },
    {
      "id": "P024",
      "version": 1,
      "title": "El costat de la vela",
      "context": "navegacio",
      "structure": "mesura",
      "level": "eso",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "En una maqueta de vaixell, una vela és quadrada i té una superfície de 196 cm².",
      "question": "Quants centímetres mesura cada costat de la vela?",
      "features": [
        "arrels"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "expression": "√196 = 14",
        "calculation": [
          "sqrt",
          196
        ],
        "answer": 14,
        "unit": "centímetres",
        "response": "Cada costat de la vela mesura 14 cm.",
        "steps": [
          "El costat del quadrat és l'arrel quadrada de la superfície: √196 = 14 cm."
        ],
        "note": "Dibuixa un quadrat i busca el nombre que, multiplicat per ell mateix, dona 196: 14 × 14 = 196. La superfície és en cm² i el costat en cm."
      }
    }
  ]
};
