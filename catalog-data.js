/* Generat des de data/catalog.json amb node tools/build-data.cjs. */
globalThis.EXERCISE_CATALOG = {
  "schemaVersion": 1,
  "pack": {
    "id": "primer-bloc",
    "title": "Dotze maneres de pensar",
    "language": "ca",
    "version": 1,
    "authorship": "Contingut original creat per a aquest projecte",
    "review": "Càlculs comprovables automàticament. Revisió docent pendent."
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
      "status": "pendent-docent",
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
    }
  ]
};
