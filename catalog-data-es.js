/* Generat des de data/packs/ i data/translations/es/ amb node tools/build-data.cjs. */
globalThis.EXERCISE_CATALOG = {
  "schemaVersion": 2,
  "pack": {
    "id": "fil-i-compte",
    "title": "Banco de problemas contextualizados",
    "language": "es",
    "version": 26,
    "authorship": "Contenido original creado para este proyecto",
    "review": "Traducción del catálogo catalán."
  },
  "exercises": [
    {
      "id": "P0001",
      "version": 1,
      "title": "Las manzanas del huerto",
      "context": "hort",
      "structure": "canvis",
      "level": "mitja",
      "difficulty": 1,
      "status": "validat",
      "statement": "En el huerto de la escuela han llenado 4 cestas con 6 manzanas en cada una. Para preparar la merienda, sacan 7 en total.",
      "question": "¿Cuántas manzanas quedan en las cestas?",
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
        "unit": "manzanas",
        "response": "Quedan 17 manzanas en las cestas.",
        "steps": [
          "Había 4 × 6 = 24 manzanas.",
          "Sacamos 7. Quedan 24 − 7 = 17."
        ],
        "visual": {
          "type": "objects",
          "groups": 4,
          "perGroup": 6,
          "removed": 7,
          "caption": "Cada círculo representa una manzana. Tachamos las 7 que hemos sacado y quedan 17."
        },
        "note": "También puedes dibujar las manzanas y contar las que quedan."
      }
    },
    {
      "id": "P0002",
      "version": 1,
      "title": "Libros que van y vienen",
      "context": "biblioteca",
      "structure": "canvis",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "La biblioteca tiene 168 libros disponibles. Recibe 4 paquetes de 18 libros cada uno y después presta 57.",
      "question": "¿Cuántos libros quedan disponibles?",
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
        "unit": "libros",
        "response": "Quedan 183 libros disponibles.",
        "steps": [
          "Llegan 4 × 18 = 72 libros.",
          "168 + 72 = 240. Después, 240 − 57 = 183."
        ],
        "note": "Una línea con los cambios +72 y −57 también ayuda a seguir la cuenta."
      }
    },
    {
      "id": "P0003",
      "version": 1,
      "title": "Autocares para la excursión",
      "context": "sortida",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Se han apuntado 156 alumnos a una excursión. Al final, 24 no pueden ir. El resto se reparte a partes iguales entre 6 autocares. El trayecto dura 45 minutos.",
      "question": "¿Cuántos alumnos viajan en cada autocar?",
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
        "unit": "alumnos por autocar",
        "response": "Viajan 22 alumnos en cada autocar.",
        "steps": [
          "Van 156 − 24 = 132 alumnos.",
          "132 ÷ 6 = 22 alumnos por autocar."
        ],
        "note": "Los 45 minutos no intervienen en el reparto. Si escribimos el cálculo en una sola expresión, los paréntesis indican qué se calcula primero."
      }
    },
    {
      "id": "P0004",
      "version": 1,
      "title": "Los tarros de la cooperativa",
      "context": "cooperativa",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Una cooperativa prepara 18 cajas con 24 tarros de mermelada cada una. Reserva 36 tarros para una feria y reparte los demás a partes iguales entre 6 tiendas.",
      "question": "¿Cuántos tarros recibe cada tienda?",
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
        "unit": "tarros por tienda",
        "response": "Cada tienda recibe 66 tarros.",
        "steps": [
          "En total hay 18 × 24 = 432 tarros.",
          "Quedan 432 − 36 = 396 tarros para repartir.",
          "396 ÷ 6 = 66 tarros por tienda."
        ],
        "note": "Podemos comprobarlo con 6 × 66 + 36 = 432 tarros."
      }
    },
    {
      "id": "P0005",
      "version": 1,
      "title": "La merienda compartida",
      "context": "berenar",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Para la merienda hay 32 bocadillos. Durante el primer turno se comen tres cuartas partes (3/4) de los bocadillos.",
      "question": "¿Cuántos bocadillos quedan para el segundo turno?",
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
        "unit": "bocadillos",
        "response": "Quedan 8 bocadillos para el segundo turno.",
        "steps": [
          "Cada cuarto equivale a 32 ÷ 4 = 8 bocadillos.",
          "Se comen 3 × 8 = 24 y quedan 32 − 24 = 8."
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 3,
          "total": 32,
          "caption": "La barra entera representa los 32 bocadillos. Se han comido 3 partes de 8 y queda una parte de 8."
        },
        "note": "También puedes calcular directamente el cuarto que queda con 32 ÷ 4 = 8."
      }
    },
    {
      "id": "P0006",
      "version": 1,
      "title": "Agua para el semillero",
      "context": "hort",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un depósito tiene una capacidad de 150 litros y está lleno hasta dos quintas partes (2/5) de su capacidad. Añadimos 45 litros de agua.",
      "question": "¿Cuántos litros de agua hay ahora en el depósito?",
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
        "unit": "litros",
        "response": "Ahora hay 105 litros de agua en el depósito.",
        "steps": [
          "Cada quinta parte equivale a 150 ÷ 5 = 30 litros.",
          "Al principio hay 2 × 30 = 60 litros.",
          "Tras añadir el agua, hay 60 + 45 = 105 litros."
        ],
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 2,
          "total": 150,
          "caption": "Al principio hay 2 partes llenas, de 30 litros cada una. Después añadimos 45 litros."
        },
        "note": "105 litros es menos que la capacidad de 150 litros, así que el depósito no se desborda."
      }
    },
    {
      "id": "P0007",
      "version": 1,
      "title": "La mochila rebajada",
      "context": "compres",
      "structure": "descompte",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una mochila cuesta 80 €. La tienda aplica un descuento del 25 %. Si la compramos por internet, el envío cuesta 6 € y no tiene descuento.",
      "question": "¿Cuánto pagaremos en total por la mochila y el envío?",
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
        "response": "Pagaremos 66 € en total.",
        "steps": [
          "El descuento es de 80 × 25 ÷ 100 = 20 €.",
          "La mochila rebajada cuesta 80 − 20 = 60 €.",
          "Con el envío, el total es de 60 + 6 = 66 €."
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 80,
          "caption": "El 25 % es una de cuatro partes iguales. Son 20 € de descuento. Las otras tres partes suman 60 €."
        },
        "note": "Podemos usar la barra o calcular el porcentaje."
      }
    },
    {
      "id": "P0008",
      "version": 1,
      "title": "Más inscripciones en el casal",
      "context": "casal",
      "structure": "augment",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "El año pasado se inscribieron 240 niños en el casal. Este año, el número de inscripciones ha aumentado un 15 % respecto al año pasado.",
      "question": "¿Cuántos niños se han inscrito este año?",
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
        "unit": "niños",
        "response": "Este año se han inscrito 276 niños.",
        "steps": [
          "El aumento es de 240 × 15 ÷ 100 = 36 niños.",
          "240 + 36 = 276 niños."
        ],
        "note": "También puedes calcular el 10 % (24 niños) y el 5 % (12 niños). El aumento es 24 + 12 = 36."
      }
    },
    {
      "id": "P0009",
      "version": 1,
      "title": "El cambio del mercado",
      "context": "compres",
      "structure": "compra-canvi",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "En el mercado compramos 2,4 kg de manzanas a 3,50 €/kg y 1,5 kg de peras a 2,20 €/kg. Pagamos con un billete de 20 €.",
      "question": "¿Cuánto nos tienen que devolver?",
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
        "response": "Nos tienen que devolver 8,30 €.",
        "steps": [
          "Las manzanas cuestan 2,4 × 3,50 = 8,40 €.",
          "Las peras cuestan 1,5 × 2,20 = 3,30 €.",
          "La compra cuesta 11,70 €. El cambio es de 20 − 11,70 = 8,30 €."
        ],
        "note": "En euros, expresamos la respuesta con dos cifras decimales."
      }
    },
    {
      "id": "P0010",
      "version": 1,
      "title": "Una vuelta al circuito",
      "context": "esport",
      "structure": "mesura",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Un circuito tiene forma rectangular. Mide 12,5 metros de largo y 7,5 metros de ancho. Jana da una vuelta completa con pasos de 0,8 metros, todos de la misma longitud.",
      "question": "¿Cuántos pasos necesita para dar una vuelta completa?",
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
        "unit": "pasos",
        "response": "Necesita 50 pasos para dar una vuelta completa.",
        "steps": [
          "La vuelta mide 2 × (12,5 + 7,5) = 40 metros.",
          "40 ÷ 0,8 = 50 pasos."
        ],
        "visual": {
          "type": "rectangle",
          "widthLabel": "12,5 m",
          "heightLabel": "7,5 m",
          "caption": "Recorremos los cuatro lados del rectángulo. Esquema orientativo."
        },
        "note": "Lo comprobamos multiplicando. 50 pasos de 0,8 m suman 40 m."
      }
    },
    {
      "id": "P0011",
      "version": 1,
      "title": "El mosaico del pasillo",
      "context": "escola",
      "structure": "quadrats",
      "level": "eso",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un mosaico cuadrado está formado por 8 filas de 8 baldosas cada una. Durante una reparación se retiran 12 baldosas.",
      "question": "¿Cuántas baldosas quedan colocadas? Escribe el número inicial de baldosas como una potencia.",
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
        "unit": "baldosas",
        "response": "Quedan 52 baldosas colocadas. Al principio había 8² = 64.",
        "steps": [
          "El cuadrado tiene 8² = 8 × 8 = 64 baldosas.",
          "Tras retirar 12, quedan 64 − 12 = 52."
        ],
        "visual": {
          "type": "grid",
          "side": 8,
          "removed": 12,
          "caption": "El cuadrado contiene 8 × 8 baldosas. Las 12 tachadas son las que se retiran."
        },
        "note": "La potencia representa las 8 filas de 8 baldosas. Después hacemos la resta."
      }
    },
    {
      "id": "P0012",
      "version": 1,
      "title": "La valla del huerto cuadrado",
      "context": "hort",
      "structure": "mesura",
      "level": "eso",
      "difficulty": 3,
      "status": "validat",
      "statement": "Un huerto cuadrado tiene una superficie de 144 m². Queremos poner una valla alrededor, dejando un hueco de 3 metros para la puerta.",
      "question": "¿Cuántos metros de valla necesitamos?",
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
        "unit": "metros de valla",
        "response": "Necesitamos 45 metros de valla.",
        "steps": [
          "El lado mide √144 = 12 m, porque 12 × 12 = 144.",
          "El perímetro es de 4 × 12 = 48 m.",
          "Descontamos la puerta. 48 − 3 = 45 m."
        ],
        "visual": {
          "type": "square",
          "sideLabel": "12 m",
          "areaLabel": "144 m²",
          "gapLabel": "porta de 3 m",
          "caption": "Primero calculamos el lado del cuadrado y después su perímetro. El hueco de la puerta queda sin valla."
        },
        "note": "La superficie se mide en m². El lado y la valla se miden en metros."
      }
    },
    {
      "id": "P0013",
      "version": 1,
      "title": "Dos días de teatro",
      "context": "teatre",
      "structure": "composicio",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Para la obra de teatro de la escuela se han vendido 186 entradas para el viernes y 247 para el sábado.",
      "question": "¿Cuántas entradas se han vendido entre los dos días?",
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
        "unit": "entradas",
        "response": "Se han vendido 433 entradas en total.",
        "steps": [
          "Sumamos las ventas de los dos días. 186 + 247 = 433 entradas."
        ],
        "note": "Puedes representar los dos días con dos barras y calcular el total."
      }
    },
    {
      "id": "P0014",
      "version": 1,
      "title": "Asientos libres en el concierto",
      "context": "concert",
      "structure": "complement",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Una sala de conciertos tiene 525 asientos. Al comenzar el concierto, hay 378 asientos ocupados.",
      "question": "¿Cuántos asientos quedan libres?",
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
        "unit": "asientos",
        "response": "Quedan 147 asientos libres.",
        "steps": [
          "Restamos los asientos ocupados del total de la sala. 525 − 378 = 147."
        ],
        "note": "También puedes calcular cuánto falta desde 378 hasta 525 en una recta numérica."
      }
    },
    {
      "id": "P0015",
      "version": 1,
      "title": "Carteles para las escuelas",
      "context": "impremta",
      "structure": "grups-iguals",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una imprenta prepara 18 carteles para cada una de las 24 escuelas que participan en una campaña.",
      "question": "¿Cuántos carteles tiene que preparar en total?",
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
        "unit": "carteles",
        "response": "Tiene que preparar 432 carteles.",
        "steps": [
          "Hay 24 grupos de 18 carteles. 24 × 18 = 432 carteles."
        ],
        "note": "Un esquema con 24 grupos iguales ayuda a identificar la multiplicación."
      }
    },
    {
      "id": "P0016",
      "version": 1,
      "title": "Sobres de semillas",
      "context": "jardineria",
      "structure": "repartiment",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos 336 semillas y las repartimos a partes iguales en 8 sobres, sin que sobre ninguna. El paquete de semillas ha costado 12 €.",
      "question": "¿Cuántas semillas ponemos en cada sobre?",
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
        "unit": "semillas por sobre",
        "response": "Ponemos 42 semillas en cada sobre.",
        "steps": [
          "Repartimos las 336 semillas entre los 8 sobres. 336 ÷ 8 = 42."
        ],
        "note": "El precio de 12 € no interviene en el reparto de las semillas."
      }
    },
    {
      "id": "P0017",
      "version": 1,
      "title": "El camino hasta el mirador",
      "context": "excursio",
      "structure": "composicio",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Una ruta va de la escuela a la fuente y luego de la fuente al mirador. El primer tramo mide 2,75 km y el segundo mide 1,6 km.",
      "question": "¿Cuántos kilómetros mide la ruta de la escuela al mirador?",
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
        "unit": "kilómetros",
        "response": "La ruta mide 4,35 km.",
        "steps": [
          "Sumamos los dos tramos. 2,75 + 1,60 = 4,35 km."
        ],
        "note": "En una suma en vertical, alinea las comas y las cifras que tienen el mismo valor posicional."
      }
    },
    {
      "id": "P0018",
      "version": 1,
      "title": "Cintas para las medallas",
      "context": "esport",
      "structure": "mesura",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos una cinta de 12,6 metros. Para cada medalla cortamos un trozo de 0,35 metros, sin desperdiciar cinta en los cortes.",
      "question": "¿Cuántos trozos completos de 0,35 metros podemos obtener?",
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
        "unit": "trozos",
        "response": "Podemos obtener 36 trozos, sin que sobre cinta.",
        "steps": [
          "Buscamos cuántos trozos de 0,35 m caben en 12,6 m. 12,6 ÷ 0,35 = 36."
        ],
        "note": "También puedes pasar las medidas a centímetros. Repartir 1.260 cm en trozos de 35 cm da el mismo número de trozos."
      }
    },
    {
      "id": "P0019",
      "version": 1,
      "title": "Ir a la escuela en bicicleta",
      "context": "mobilitat",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una encuesta han participado 240 alumnos. Tres quintas partes (3/5) dicen que van a la escuela en bicicleta.",
      "question": "¿Cuántos de los alumnos encuestados van a la escuela en bicicleta?",
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
        "unit": "alumnos",
        "response": "144 de los alumnos encuestados van a la escuela en bicicleta.",
        "steps": [
          "Una quinta parte equivale a 240 ÷ 5 = 48 alumnos.",
          "Tres quintas partes son 48 × 3 = 144 alumnos."
        ],
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 3,
          "total": 240,
          "caption": "La barra representa a los 240 alumnos. Cada parte equivale a 48 alumnos y las 3 partes sombreadas representan a 144."
        },
        "note": "Divide una barra en cinco partes iguales y señala tres."
      }
    },
    {
      "id": "P0020",
      "version": 1,
      "title": "Los abonos del museo",
      "context": "museu",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Esta mañana han entrado 150 personas en el museo. El 30 % de estas personas tiene abono anual.",
      "question": "¿Cuántas de las personas que han entrado esta mañana tienen abono anual?",
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
        "unit": "personas",
        "response": "45 personas tienen abono anual.",
        "steps": [
          "Calculamos el 30 % de 150. 150 × 30 ÷ 100 = 45 personas."
        ],
        "visual": {
          "type": "fraction",
          "parts": 10,
          "filled": 3,
          "total": 150,
          "caption": "Cada décima parte equivale al 10 %, es decir, 15 personas. Tres partes, el 30 %, representan a 45 personas."
        },
        "note": "Otra forma es calcular el 10 % (15 personas) y multiplicarlo por 3. La barra puede servir de apoyo."
      }
    },
    {
      "id": "P0021",
      "version": 1,
      "title": "Entradas para las asociaciones",
      "context": "teatre",
      "structure": "repartiment",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un teatro ofrece 3 funciones de 96 plazas cada una. En cada función reserva 18 plazas para los intérpretes y sus familias. Las entradas restantes de las tres funciones se reparten a partes iguales entre 6 asociaciones.",
      "question": "¿Cuántas entradas recibe cada asociación en total?",
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
        "unit": "entradas por asociación",
        "response": "Cada asociación recibe 39 entradas en total.",
        "steps": [
          "De cada función se pueden repartir 96 − 18 = 78 entradas.",
          "Entre las tres funciones hay 3 × 78 = 234 entradas para repartir.",
          "Cada asociación recibe 234 ÷ 6 = 39 entradas."
        ],
        "note": "Un esquema con tres grupos de 96 plazas permite separar las 18 reservadas de cada función."
      }
    },
    {
      "id": "P0022",
      "version": 1,
      "title": "Material para el taller",
      "context": "compres",
      "structure": "compra-canvi",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para un taller compramos 3 carpetas a 4,75 € cada una y 2 cajas de rotuladores a 6,40 € cada una. Pagamos con 40 €.",
      "question": "¿Cuánto nos tienen que devolver?",
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
        "response": "Nos tienen que devolver 12,95 €.",
        "steps": [
          "Las carpetas cuestan 3 × 4,75 = 14,25 €.",
          "Los rotuladores cuestan 2 × 6,40 = 12,80 €.",
          "La compra cuesta 14,25 + 12,80 = 27,05 €.",
          "El cambio es 40 − 27,05 = 12,95 €."
        ],
        "note": "Puedes organizar la compra en una tabla con el producto, la cantidad, el precio unitario y el subtotal."
      }
    },
    {
      "id": "P0023",
      "version": 1,
      "title": "Una clave de colores",
      "context": "codis",
      "structure": "combinacions",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una clave tiene 4 casillas ordenadas. En cada casilla podemos poner rojo, azul o amarillo. Un mismo color se puede repetir, y cambiar los colores de posición puede dar una clave distinta.",
      "question": "¿Cuántas claves distintas podemos formar? Expresa el cálculo con una potencia.",
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
        "unit": "claves",
        "response": "Podemos formar 81 claves distintas, porque 3⁴ = 81.",
        "steps": [
          "Cada una de las 4 casillas tiene 3 opciones independientes. 3⁴ = 81 claves."
        ],
        "note": "Un árbol de posibilidades con cuatro niveles y tres ramas en cada paso representa todas las claves."
      }
    },
    {
      "id": "P0024",
      "version": 1,
      "title": "El lado de la vela",
      "context": "navegacio",
      "structure": "mesura",
      "level": "eso",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "En la maqueta de un barco, una vela es cuadrada y tiene una superficie de 196 cm².",
      "question": "¿Cuántos centímetros mide cada lado de la vela?",
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
        "unit": "centímetros",
        "response": "Cada lado de la vela mide 14 cm.",
        "steps": [
          "El lado del cuadrado es la raíz cuadrada de la superficie. √196 = 14 cm."
        ],
        "note": "Dibuja un cuadrado y busca el número que, multiplicado por sí mismo, da 196. 14 × 14 = 196. La superficie se mide en cm² y el lado, en cm."
      }
    },
    {
      "id": "P0025",
      "version": 1,
      "title": "Vasos para la fiesta",
      "context": "festa",
      "structure": "suficiencia",
      "level": "mitja",
      "difficulty": 2,
      "status": "validat",
      "statement": "Para una fiesta hay 6 paquetes de 12 vasos reutilizables. Participarán 65 personas y cada una necesitará un vaso.",
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
      "parts": [
        {
          "question": "¿Cuántos vasos tenemos en total?",
          "solution": {
            "expression": "6 × 12 = 72",
            "calculation": [
              "mul",
              6,
              12
            ],
            "answer": 72,
            "unit": "vasos",
            "response": "Tenemos 72 vasos.",
            "steps": [
              "Hay 6 grupos de 12 vasos. 6 × 12 = 72."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Hace falta comprar más vasos? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Hay un vaso para cada persona y sobran 7, así que tenemos suficientes.",
            "steps": [
              "Comparamos los vasos con las personas. Sobran 72 − 65 = 7 vasos."
            ],
            "evidence": [
              {
                "calculation": [
                  "sub",
                  [
                    "mul",
                    6,
                    12
                  ],
                  65
                ],
                "answer": 7
              }
            ],
            "note": "También puedes representar las personas y los vasos con dos barras."
          }
        }
      ]
    },
    {
      "id": "P0026",
      "version": 2,
      "title": "Minibuses para el encuentro",
      "context": "transport",
      "structure": "suficiencia",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "A un encuentro irán 87 alumnos y 9 adultos. Cada minibús tiene 24 plazas para pasajeros, además de la del conductor.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Cuántos minibuses necesitan al principio?",
          "solution": {
            "expression": "(87 + 9) ÷ 24 = 4",
            "calculation": [
              "div",
              [
                "add",
                87,
                9
              ],
              24
            ],
            "answer": 4,
            "unit": "minibuses",
            "response": "Al principio necesitan 4 minibuses.",
            "steps": [
              "Van 87 + 9 = 96 personas. 96 ÷ 24 = 4 minibuses."
            ],
            "note": ""
          }
        },
        {
          "question": "Si se apuntan 6 alumnos más, ¿siguen siendo suficientes los minibuses previstos? Explícalo.",
          "solution": {
            "kind": "justification",
            "response": "Haría falta un quinto minibús, porque habría 102 pasajeros y solo 96 plazas.",
            "steps": [
              "Con los nuevos alumnos son 96 + 6 = 102 personas. Cuatro minibuses ofrecen 4 × 24 = 96 plazas."
            ],
            "evidence": [
              {
                "calculation": [
                  "add",
                  [
                    "add",
                    87,
                    9
                  ],
                  6
                ],
                "answer": 102
              },
              {
                "calculation": [
                  "mul",
                  4,
                  24
                ],
                "answer": 96
              }
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0027",
      "version": 2,
      "title": "Dos ofertas de cuadernos",
      "context": "compres",
      "structure": "comparacio",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Necesitamos 12 cuadernos. En la tienda A, un paquete de 4 cuesta 6,80 €. En la tienda B, cada cuaderno cuesta 1,90 €.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "parts": [
        {
          "question": "¿Cuánto cuestan los 12 cuadernos en la tienda A?",
          "solution": {
            "expression": "12 ÷ 4 × 6,80 = 20,40",
            "calculation": [
              "mul",
              [
                "div",
                12,
                4
              ],
              6.8
            ],
            "answer": 20.4,
            "unit": "euros",
            "response": "En la tienda A cuestan 20,40 €.",
            "steps": [
              "Hacen falta 3 paquetes. 3 × 6,80 = 20,40 €."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuánto cuestan en la tienda B?",
          "solution": {
            "expression": "12 × 1,90 = 22,80",
            "calculation": [
              "mul",
              12,
              1.9
            ],
            "answer": 22.8,
            "unit": "euros",
            "response": "En la tienda B cuestan 22,80 €.",
            "steps": [
              "Multiplicamos el precio unitario por 12."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Qué tienda conviene más y cuánto dinero ahorramos?",
          "solution": {
            "expression": "22,80 − 20,40 = 2,40",
            "calculation": [
              "sub",
              22.8,
              20.4
            ],
            "answer": 2.4,
            "unit": "euros de ahorro",
            "response": "Conviene la tienda A. Ahorramos 2,40 €.",
            "steps": [
              "Para comparar el precio del paquete con el precio por unidad, calculamos el coste total de todos los cuadernos en cada tienda."
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0028",
      "version": 1,
      "title": "El tramo de la carrera",
      "context": "esport",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una carrera tiene un recorrido de 12 km. Laia ya ha completado tres cuartas partes (3/4) del recorrido.",
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
      "parts": [
        {
          "question": "¿Cuántos kilómetros ha recorrido?",
          "solution": {
            "expression": "12 ÷ 4 × 3 = 9",
            "calculation": [
              "mul",
              [
                "div",
                12,
                4
              ],
              3
            ],
            "answer": 9,
            "unit": "kilómetros",
            "response": "Ha recorrido 9 km.",
            "steps": [
              "Cada cuarto mide 3 km y tres cuartos suman 9 km."
            ],
            "visual": {
              "type": "fraction",
              "parts": 4,
              "filled": 3,
              "total": 12,
              "caption": "Cada parte representa 3 km. Las tres partes sombreadas son los 9 km recorridos."
            },
            "note": ""
          }
        },
        {
          "question": "¿Cuántos kilómetros le faltan para terminar?",
          "solution": {
            "expression": "12 − 9 = 3",
            "calculation": [
              "sub",
              12,
              9
            ],
            "answer": 3,
            "unit": "kilómetros",
            "response": "Le faltan 3 km.",
            "steps": [
              "Queda un cuarto del recorrido, que son 3 km."
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0029",
      "version": 2,
      "title": "Entradas con descuento",
      "context": "cinema",
      "structure": "descompte",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Una entrada de cine cuesta 18 €. Hoy todas las entradas tienen un descuento del 25 %. Un grupo quiere comprar 3 entradas y dispone de 40 €.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "parts": [
        {
          "question": "¿Qué descuento, en euros, tiene cada entrada?",
          "solution": {
            "expression": "18 × 25 ÷ 100 = 4,50",
            "calculation": [
              "div",
              [
                "mul",
                18,
                25
              ],
              100
            ],
            "answer": 4.5,
            "unit": "euros",
            "response": "Cada entrada tiene 4,50 € de descuento.",
            "steps": [
              "Calculamos el 25 % de 18 €."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuánto cuesta una entrada rebajada?",
          "solution": {
            "expression": "18 − 4,50 = 13,50",
            "calculation": [
              "sub",
              18,
              4.5
            ],
            "answer": 13.5,
            "unit": "euros",
            "response": "Una entrada rebajada cuesta 13,50 €.",
            "steps": [
              "Restamos el descuento al precio inicial."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Pueden comprar las 3 entradas? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Les faltan 0,50 €, porque las tres entradas cuestan 40,50 €.",
            "steps": [
              "3 × 13,50 = 40,50 €, que supera los 40 € disponibles."
            ],
            "evidence": [
              {
                "calculation": [
                  "mul",
                  3,
                  13.5
                ],
                "answer": 40.5
              },
              {
                "calculation": [
                  "sub",
                  40.5,
                  40
                ],
                "answer": 0.5
              }
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0030",
      "version": 1,
      "title": "El presupuesto de la biblioteca",
      "context": "biblioteca",
      "structure": "pressupost",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "La biblioteca tiene 450 € para comprar material. Compra 6 libros a 32 € cada uno y 8 cómics a 18 € cada uno.",
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
      "parts": [
        {
          "question": "¿Cuánto ha gastado en total?",
          "solution": {
            "expression": "6 × 32 + 8 × 18 = 336",
            "calculation": [
              "add",
              [
                "mul",
                6,
                32
              ],
              [
                "mul",
                8,
                18
              ]
            ],
            "answer": 336,
            "unit": "euros",
            "response": "Ha gastado 336 €.",
            "steps": [
              "Los libros cuestan 192 € y los cómics, 144 €. Juntos suman 336 €."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuánto dinero le queda?",
          "solution": {
            "expression": "450 − (6 × 32 + 8 × 18) = 114",
            "calculation": [
              "sub",
              450,
              [
                "add",
                [
                  "mul",
                  6,
                  32
                ],
                [
                  "mul",
                  8,
                  18
                ]
              ]
            ],
            "answer": 114,
            "unit": "euros",
            "response": "Le quedan 114 €.",
            "steps": [
              "Restamos el gasto total al presupuesto."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Puede comprar además 4 juegos de 28 € cada uno sin superar el presupuesto? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Sí, porque los juegos cuestan 112 € y todavía sobrarán 2 €.",
            "steps": [
              "4 × 28 = 112 €. Los 114 € que quedan son suficientes."
            ],
            "evidence": [
              {
                "calculation": [
                  "mul",
                  4,
                  28
                ],
                "answer": 112
              },
              {
                "calculation": [
                  "sub",
                  114,
                  112
                ],
                "answer": 2
              }
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0031",
      "version": 2,
      "title": "El mural de baldosas",
      "context": "art",
      "structure": "quadrats",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un mural cuadrado tiene 7 filas de 7 baldosas. Durante una reparación se retiran 12 baldosas.",
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
      "parts": [
        {
          "question": "¿Cuántas baldosas tenía al principio? Escríbelo con una potencia.",
          "solution": {
            "expression": "7² = 49",
            "calculation": [
              "pow",
              7,
              2
            ],
            "answer": 49,
            "unit": "baldosas",
            "response": "Al principio tenía 7² = 49 baldosas.",
            "steps": [
              "La potencia representa las 7 filas de 7 baldosas."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuántas baldosas quedan colocadas?",
          "solution": {
            "expression": "7² − 12 = 37",
            "calculation": [
              "sub",
              [
                "pow",
                7,
                2
              ],
              12
            ],
            "answer": 37,
            "unit": "baldosas",
            "response": "Quedan 37 baldosas colocadas.",
            "steps": [
              "Restamos las 12 baldosas retiradas de las 49 iniciales."
            ],
            "visual": {
              "type": "grid",
              "side": 7,
              "removed": 12,
              "caption": "Tachamos 12 de las 49 baldosas y quedan 37."
            },
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0032",
      "version": 2,
      "title": "La alfombra cuadrada",
      "context": "decoracio",
      "structure": "mesura",
      "level": "eso",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una alfombra cuadrada tiene una superficie de 2,25 m². Queremos coser una cinta a lo largo de todo el borde, sin añadir cinta para las uniones.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "arrels",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "parts": [
        {
          "question": "¿Cuánto mide cada lado?",
          "solution": {
            "expression": "√2,25 = 1,5",
            "calculation": [
              "sqrt",
              2.25
            ],
            "answer": 1.5,
            "unit": "metros",
            "response": "Cada lado mide 1,5 m.",
            "steps": [
              "1,5 × 1,5 = 2,25. Por lo tanto, √2,25 = 1,5 m."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuántos metros de cinta necesitamos?",
          "solution": {
            "expression": "4 × √2,25 = 6",
            "calculation": [
              "mul",
              4,
              [
                "sqrt",
                2.25
              ]
            ],
            "answer": 6,
            "unit": "metros",
            "response": "Necesitamos 6 m de cinta.",
            "steps": [
              "Sumamos los cuatro lados iguales. 4 × 1,5 = 6 m."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Es suficiente un rollo de 5,5 m? Explica por qué.",
          "solution": {
            "kind": "justification",
            "response": "Faltan 0,5 m de cinta.",
            "steps": [
              "Necesitamos 6 m y solo tenemos 5,5. 6 − 5,5 = 0,5 m."
            ],
            "evidence": [
              {
                "calculation": [
                  "sub",
                  6,
                  5.5
                ],
                "answer": 0.5
              }
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0033",
      "version": 1,
      "title": "Las bolas de colores",
      "context": "joc",
      "structure": "part-total",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "En una piscina de juego hay 240 bolas. Del total, 2/5 son rojas y 3/8 son azules. Las demás son de otros colores.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Cuántas bolas rojas hay?",
          "solution": {
            "expression": "240 ÷ 5 × 2 = 96",
            "calculation": [
              "mul",
              [
                "div",
                240,
                5
              ],
              2
            ],
            "answer": 96,
            "unit": "bolas",
            "response": "Hay 96 bolas rojas.",
            "steps": [
              "Cada quinta parte equivale a 48 bolas y dos partes suman 96."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuántas bolas hay de otros colores?",
          "solution": {
            "expression": "240 − (96 + 240 ÷ 8 × 3) = 54",
            "calculation": [
              "sub",
              240,
              [
                "add",
                96,
                [
                  "mul",
                  [
                    "div",
                    240,
                    8
                  ],
                  3
                ]
              ]
            ],
            "answer": 54,
            "unit": "bolas",
            "response": "Hay 54 bolas de otros colores.",
            "steps": [
              "Hay 240 ÷ 8 × 3 = 90 bolas azules.",
              "Quitamos las rojas y las azules. 240 − 186 = 54."
            ],
            "note": "Las dos fracciones se refieren al total de 240 bolas."
          }
        }
      ]
    },
    {
      "id": "P0034",
      "version": 1,
      "title": "Las fotografías del taller",
      "context": "fotografia",
      "structure": "suficiencia",
      "level": "mitja",
      "difficulty": 3,
      "status": "validat",
      "statement": "Tenemos 156 fotografías para colocar en un álbum. En cada página caben 12 fotografías.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Cuántas páginas llenamos con las 156 fotografías?",
          "solution": {
            "expression": "156 ÷ 12 = 13",
            "calculation": [
              "div",
              156,
              12
            ],
            "answer": 13,
            "unit": "páginas",
            "response": "Llenamos 13 páginas.",
            "steps": [
              "Repartimos las 156 fotografías en grupos de 12."
            ],
            "note": ""
          }
        },
        {
          "question": "Si llegan 18 fotografías más, ¿cabrán todas en 14 páginas? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Necesitamos una decimoquinta página, porque seis fotografías se quedarían sin sitio.",
            "steps": [
              "Tendremos 174 fotografías y en 14 páginas solo caben 168. La diferencia es 6."
            ],
            "evidence": [
              {
                "calculation": [
                  "sub",
                  [
                    "add",
                    156,
                    18
                  ],
                  [
                    "mul",
                    14,
                    12
                  ]
                ],
                "answer": 6
              }
            ],
            "note": "Puedes dibujar las páginas como grupos de 12 espacios."
          }
        }
      ]
    },
    {
      "id": "P0035",
      "version": 2,
      "title": "El agua de las cantimploras",
      "context": "excursio",
      "structure": "mesura",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Tenemos 7,2 litros de agua y queremos llenar por completo 8 cantimploras de 0,75 litros cada una. Después haremos una ruta de 5 km.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "distractors",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "parts": [
        {
          "question": "¿Cuántos litros necesitamos para llenar todas las cantimploras?",
          "solution": {
            "expression": "8 × 0,75 = 6",
            "calculation": [
              "mul",
              8,
              0.75
            ],
            "answer": 6,
            "unit": "litros",
            "response": "Necesitamos 6 litros en total.",
            "steps": [
              "Multiplicamos la capacidad de una cantimplora por 8."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Sobrará o faltará agua? ¿Cuántos litros? Justifica la respuesta con un cálculo.",
          "solution": {
            "expression": "7,2 − 8 × 0,75 = 1,2",
            "calculation": [
              "sub",
              7.2,
              [
                "mul",
                8,
                0.75
              ]
            ],
            "answer": 1.2,
            "unit": "litros",
            "response": "El agua es suficiente y sobran 1,2 litros.",
            "steps": [
              "Restamos los 6 litros necesarios de los 7,2 disponibles. El resultado positivo indica que sobra agua."
            ],
            "note": "Los 5 km de la ruta no intervienen en estos cálculos."
          }
        }
      ]
    },
    {
      "id": "P0036",
      "version": 1,
      "title": "La venta de camisetas",
      "context": "venda",
      "structure": "percentatge-acumulat",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Tenemos 150 camisetas para vender. El primer día vendemos el 40 % del total inicial y el segundo día vendemos 30 camisetas más.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Cuántas camisetas vendemos el primer día?",
          "solution": {
            "expression": "150 × 40 ÷ 100 = 60",
            "calculation": [
              "div",
              [
                "mul",
                150,
                40
              ],
              100
            ],
            "answer": 60,
            "unit": "camisetas",
            "response": "El primer día vendemos 60 camisetas.",
            "steps": [
              "Calculamos el 40 % de las 150 camisetas iniciales."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Qué porcentaje del total inicial hemos vendido entre los dos días?",
          "solution": {
            "expression": "(60 + 30) × 100 ÷ 150 = 60",
            "calculation": [
              "div",
              [
                "mul",
                [
                  "add",
                  60,
                  30
                ],
                100
              ],
              150
            ],
            "answer": 60,
            "unit": "porcentaje",
            "response": "Hemos vendido el 60 % del total inicial.",
            "steps": [
              "En total vendemos 90 camisetas. 90 de 150 equivalen al 60 %."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Es correcto sumar 40 % + 30 % y decir que hemos vendido el 70 %? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "El 30 indica una cantidad de camisetas. Equivale al 20 % del total. 40 % + 20 % = 60 %.",
            "steps": [
              "Convertimos las 30 camisetas en porcentaje. 30 × 100 ÷ 150 = 20 %."
            ],
            "evidence": [
              {
                "calculation": [
                  "div",
                  [
                    "mul",
                    30,
                    100
                  ],
                  150
                ],
                "answer": 20
              },
              {
                "calculation": [
                  "add",
                  40,
                  20
                ],
                "answer": 60
              }
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0037",
      "version": 1,
      "title": "El programa de radio",
      "context": "radio",
      "structure": "durada",
      "level": "mitja",
      "difficulty": 3,
      "status": "validat",
      "statement": "Una clase de 24 alumnos prepara un programa de radio de una hora. Quieren incluir 5 entrevistas de 6 minutos, 4 piezas musicales de 3 minutos y una presentación de 8 minutos.",
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
      "parts": [
        {
          "question": "¿Cuántos minutos ocupan los contenidos previstos?",
          "solution": {
            "expression": "5 × 6 + 4 × 3 + 8 = 50",
            "calculation": [
              "add",
              [
                "add",
                [
                  "mul",
                  5,
                  6
                ],
                [
                  "mul",
                  4,
                  3
                ]
              ],
              8
            ],
            "answer": 50,
            "unit": "minutos",
            "response": "Los contenidos ocupan 50 minutos.",
            "steps": [
              "Las entrevistas ocupan 30 minutos y la música, 12. Añadimos los 8 de la presentación."
            ],
            "note": "El número de alumnos no determina la duración del programa."
          }
        },
        {
          "question": "¿Cuántos minutos quedan para añadir otros contenidos?",
          "solution": {
            "expression": "60 − (5 × 6 + 4 × 3 + 8) = 10",
            "calculation": [
              "sub",
              60,
              [
                "add",
                [
                  "add",
                  [
                    "mul",
                    5,
                    6
                  ],
                  [
                    "mul",
                    4,
                    3
                  ]
                ],
                8
              ]
            ],
            "answer": 10,
            "unit": "minutos",
            "response": "Quedan 10 minutos disponibles.",
            "steps": [
              "Una hora son 60 minutos. Restamos los 50 que ya están previstos."
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0038",
      "version": 2,
      "title": "La comida del refugio",
      "context": "animals",
      "structure": "suficiencia",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "En el refugio hay 18 perros. Cada uno come 0,35 kg de pienso al día. Hay que preparar la comida para 3 días. En el almacén quedan 2,1 kg y quieren comprar 5 sacos de 3 kg cada uno.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "Con la compra prevista, ¿tendrán suficiente pienso para los tres días? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Necesitan 18,9 kg y tendrán 17,1 kg. Les faltarán 1,8 kg.",
        "steps": [
          "Los perros necesitan 18 × 0,35 × 3 = 18,9 kg.",
          "Entre el almacén y los sacos hay 2,1 + 5 × 3 = 17,1 kg. Faltan 1,8 kg."
        ],
        "note": "",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "mul",
                18,
                0.35
              ],
              3
            ],
            "answer": 18.9
          },
          {
            "calculation": [
              "add",
              2.1,
              [
                "mul",
                5,
                3
              ]
            ],
            "answer": 17.1
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                [
                  "mul",
                  18,
                  0.35
                ],
                3
              ],
              [
                "add",
                2.1,
                [
                  "mul",
                  5,
                  3
                ]
              ]
            ],
            "answer": 1.8
          }
        ]
      }
    },
    {
      "id": "P0039",
      "version": 2,
      "title": "El ensayo del grupo",
      "context": "musica",
      "structure": "fraccio-del-restant",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Un grupo de 14 músicos dispone de 90 minutos de ensayo. Dedica un tercio (1/3) del tiempo a calentar y después dos quintas partes (2/5) del tiempo que queda a trabajar la técnica. El resto lo dedica a tocar las piezas.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "distractors",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos minutos pueden dedicar a tocar las piezas?",
      "solution": {
        "expression": "(90 − 90 ÷ 3) ÷ 5 × 3 = 36",
        "calculation": [
          "mul",
          [
            "div",
            [
              "sub",
              90,
              [
                "div",
                90,
                3
              ]
            ],
            5
          ],
          3
        ],
        "answer": 36,
        "unit": "minutos",
        "response": "Pueden tocar las piezas durante 36 minutos.",
        "steps": [
          "Calentar ocupa 30 minutos y quedan 60.",
          "La técnica ocupa dos quintos del tiempo restante. Los otros tres quintos son 36 minutos."
        ],
        "note": "Los 2/5 se calculan sobre el tiempo que queda. Los 14 músicos no intervienen en el cálculo.",
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 2,
          "total": 60,
          "caption": "Quintos de 12 minutos. Dos se dedican a la técnica y tres a las piezas."
        }
      }
    },
    {
      "id": "P0040",
      "version": 2,
      "title": "El recambio de la bicicleta",
      "context": "compres",
      "structure": "comparacio",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una tienda vende un recambio de bicicleta por 120 €, con un descuento del 20 %. El montaje cuesta 18 € más y no tiene descuento. Otra tienda ofrece el mismo recambio, con el montaje incluido, por 108 €.",
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
      "question": "¿Qué oferta es más barata y cuánto ahorramos si la elegimos?",
      "solution": {
        "expression": "120 − 120 × 20 ÷ 100 + 18 − 108 = 6",
        "calculation": [
          "sub",
          [
            "add",
            [
              "sub",
              120,
              [
                "div",
                [
                  "mul",
                  120,
                  20
                ],
                100
              ]
            ],
            18
          ],
          108
        ],
        "answer": 6,
        "unit": "euros de ahorro",
        "response": "La segunda tienda es más barata. Ahorramos 6 €.",
        "steps": [
          "La primera tienda cobra 96 € por el recambio y 18 € por el montaje. Son 114 € en total.",
          "La segunda cobra 108 € con el montaje. La diferencia es de 6 €."
        ],
        "note": ""
      }
    },
    {
      "id": "P0041",
      "version": 2,
      "title": "El archivo de fotografías",
      "context": "fotografia",
      "structure": "agrupacions-successives",
      "level": "superior",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un archivo tiene 4 álbumes, cada uno con 4 páginas y 4 fotografías por página. Hay 7 copias repetidas que deben retirarse. Después se incorporan 17 fotografías nuevas, todas diferentes de las que ya había.",
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
      "question": "¿Cuántas fotografías tendrá el archivo después de los cambios? Expresa el cálculo con una potencia.",
      "solution": {
        "expression": "4³ − 7 + 17 = 74",
        "calculation": [
          "add",
          [
            "sub",
            [
              "pow",
              4,
              3
            ],
            7
          ],
          17
        ],
        "answer": 74,
        "unit": "fotografías",
        "response": "El archivo tendrá 74 fotografías.",
        "steps": [
          "Las tres agrupaciones de cuatro dan 4³ = 64 fotografías.",
          "Retiramos siete copias e incorporamos diecisiete fotografías. 64 − 7 + 17 = 74."
        ],
        "note": ""
      }
    },
    {
      "id": "P0042",
      "version": 2,
      "title": "El camino del jardín",
      "context": "jardineria",
      "structure": "diferencia-arees",
      "level": "eso",
      "difficulty": 2,
      "status": "validat",
      "statement": "Un jardín cuadrado de césped tiene una superficie de 64 m². Alrededor se construye un camino de 1 m de ancho por fuera, también en las esquinas. El contorno exterior del conjunto es cuadrado.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "potencies",
        "arrels"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué superficie ocupa solo el camino?",
      "solution": {
        "expression": "(√64 + 2 × 1)² − 64 = 36",
        "calculation": [
          "sub",
          [
            "pow",
            [
              "add",
              [
                "sqrt",
                64
              ],
              [
                "mul",
                2,
                1
              ]
            ],
            2
          ],
          64
        ],
        "answer": 36,
        "unit": "metros cuadrados",
        "response": "El camino ocupa 36 m².",
        "steps": [
          "El lado exterior mide 8 + 1 + 1 = 10 m, porque añadimos camino en ambos extremos.",
          "El conjunto ocupa 100 m². Restamos los 64 m² de césped."
        ],
        "note": "Un dibujo de dos cuadrados, uno dentro del otro, ayuda a contar también las esquinas."
      }
    },
    {
      "id": "P0043",
      "version": 2,
      "title": "Las dos rebajas",
      "context": "compres",
      "structure": "descomptes-successius",
      "level": "eso",
      "difficulty": 2,
      "status": "validat",
      "statement": "Jana y Nil compran la misma chaqueta, de 80 €. A Jana le aplican un 10 % de descuento y después un 25 %. A Nil, primero un 25 % y después un 10 %. Cada descuento se aplica al precio ya rebajado.",
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
      "question": "¿Quién ha pagado más por la chaqueta? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Han pagado lo mismo, 54 € cada uno.",
        "steps": [
          "A Jana, el primer 10 % le deja el precio en 72 €. El 25 % de 72 € son 18 €, así que paga 54 €.",
          "A Nil, el primer 25 % le deja el precio en 60 €. El 10 % de 60 € son 6 €, así que paga 54 €."
        ],
        "note": "Cambiar el orden de los dos descuentos no cambia el precio final.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "sub",
                80,
                [
                  "div",
                  [
                    "mul",
                    80,
                    10
                  ],
                  100
                ]
              ],
              [
                "div",
                [
                  "mul",
                  [
                    "sub",
                    80,
                    [
                      "div",
                      [
                        "mul",
                        80,
                        10
                      ],
                      100
                    ]
                  ],
                  25
                ],
                100
              ]
            ],
            "answer": 54
          },
          {
            "calculation": [
              "sub",
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
              [
                "div",
                [
                  "mul",
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
                  10
                ],
                100
              ]
            ],
            "answer": 54
          }
        ]
      }
    },
    {
      "id": "P0044",
      "version": 2,
      "title": "Las vueltas al parque",
      "context": "esport",
      "structure": "recorregut",
      "level": "superior",
      "difficulty": 1,
      "status": "validat",
      "statement": "Un circuito de bicicleta tiene un primer tramo de 3,6 km y un segundo de 2,4 km, que vuelve al punto de salida. Jana da 3 vueltas completas. Entre vuelta y vuelta se para 8 minutos. Su objetivo es recorrer 20 km.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "decimals",
        "distractors"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Ha alcanzado el objetivo? Indica cuántos kilómetros le faltan o por cuánto lo ha superado.",
      "solution": {
        "expression": "20 − (3,6 + 2,4) × 3 = 2",
        "calculation": [
          "sub",
          20,
          [
            "mul",
            [
              "add",
              3.6,
              2.4
            ],
            3
          ]
        ],
        "answer": 2,
        "unit": "kilómetros",
        "response": "Aún le faltan 2 km para alcanzar el objetivo.",
        "steps": [
          "Cada vuelta mide 6 km. Con tres vueltas recorre 18 km.",
          "Comparamos esta distancia con los 20 km del objetivo."
        ],
        "note": "Las pausas no añaden distancia al recorrido."
      }
    },
    {
      "id": "P0045",
      "version": 2,
      "title": "El intercambio de cromos",
      "context": "colleccionisme",
      "structure": "intercanvi",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Pol tiene 156 cromos. Un cuarto (1/4) son copias repetidas y los demás son todos diferentes. Va a un encuentro de 90 minutos donde puede cambiar cada grupo de 3 copias repetidas por 2 cromos que no tiene. Todos los que recibe son distintos entre sí.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "distractors"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos cromos distintos tendrá después de hacer todos los intercambios posibles?",
      "solution": {
        "expression": "156 − 156 ÷ 4 + 156 ÷ 4 ÷ 3 × 2 = 143",
        "calculation": [
          "add",
          [
            "sub",
            156,
            [
              "div",
              156,
              4
            ]
          ],
          [
            "mul",
            [
              "div",
              [
                "div",
                156,
                4
              ],
              3
            ],
            2
          ]
        ],
        "answer": 143,
        "unit": "cromos distintos",
        "response": "Después de los intercambios tendrá 143 cromos distintos.",
        "steps": [
          "Al separar las 39 copias repetidas, quedan 117 cromos distintos en la colección.",
          "Puede hacer 13 intercambios y recibir 26 cromos nuevos. 117 + 26 = 143."
        ],
        "note": "Los 90 minutos no intervienen en el cálculo.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 156,
          "caption": "Un cuarto son 39 copias repetidas. Los otros 117 cromos se conservan."
        }
      }
    },
    {
      "id": "P0046",
      "version": 1,
      "title": "La sala de proyecciones",
      "context": "cinema",
      "structure": "suficiencia",
      "level": "mitja",
      "difficulty": 2,
      "status": "validat",
      "statement": "Una sala tiene 7 filas de 12 asientos. Reservan 9 para la organización y los demás son para el público. Quieren entrar 42 niños y 24 adultos. La película dura 52 minutos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "distractors"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Cuántos asientos hay disponibles para el público?",
          "solution": {
            "expression": "7 × 12 − 9 = 75",
            "calculation": [
              "sub",
              [
                "mul",
                7,
                12
              ],
              9
            ],
            "answer": 75,
            "unit": "asientos",
            "response": "Hay 75 asientos disponibles para el público.",
            "steps": [
              "La sala tiene 84 asientos. Restamos los nueve reservados."
            ],
            "note": "La duración de la película no cambia el número de asientos."
          }
        },
        {
          "question": "¿Cabrán todos? Indica cuántos asientos sobran o faltan.",
          "solution": {
            "expression": "75 − 42 − 24 = 9",
            "calculation": [
              "sub",
              [
                "sub",
                75,
                42
              ],
              24
            ],
            "answer": 9,
            "unit": "asientos",
            "response": "Caben las 66 personas del público y sobran 9 asientos.",
            "steps": [
              "Comparamos las 75 plazas disponibles con los 42 niños y 24 adultos."
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0047",
      "version": 2,
      "title": "La pintura del mural",
      "context": "art",
      "structure": "consum-repartiment",
      "level": "superior",
      "difficulty": 3,
      "status": "validat",
      "statement": "Tenemos 4 botes de 2,5 litros de pintura cada uno. Para pintar el fondo de un mural gastamos tres octavos (3/8) de toda la pintura. Para los detalles gastamos 1,25 litros más. Repartiremos lo que quede en 4 recipientes iguales.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "decimals"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Cuántos litros de pintura pondremos en cada recipiente?",
      "solution": {
        "expression": "(4 × 2,5 − (4 × 2,5 ÷ 8 × 3 + 1,25)) ÷ 4 = 1,25",
        "calculation": [
          "div",
          [
            "sub",
            [
              "mul",
              4,
              2.5
            ],
            [
              "add",
              [
                "mul",
                [
                  "div",
                  [
                    "mul",
                    4,
                    2.5
                  ],
                  8
                ],
                3
              ],
              1.25
            ]
          ],
          4
        ],
        "answer": 1.25,
        "unit": "litros por recipiente",
        "response": "Pondremos 1,25 litros en cada recipiente.",
        "steps": [
          "Tenemos 10 litros. Los 3/8 del fondo son 3,75 litros.",
          "Con los detalles gastamos 5 litros y quedan 5. Al repartirlos entre cuatro, sale 1,25 litros por recipiente."
        ],
        "note": ""
      }
    },
    {
      "id": "P0048",
      "version": 1,
      "title": "La liga del barrio",
      "context": "esport",
      "structure": "puntuacio",
      "level": "mitja",
      "difficulty": 3,
      "status": "validat",
      "statement": "En una liga se dan 3 puntos por victoria, 1 por empate y ninguno por derrota. Después de 12 partidos, el equipo A tiene 7 victorias, 3 empates y 2 derrotas. El equipo B tiene 8 victorias, ningún empate y 4 derrotas.",
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
      "parts": [
        {
          "question": "¿Cuántos puntos tiene el equipo A?",
          "solution": {
            "expression": "7 × 3 + 3 = 24",
            "calculation": [
              "add",
              [
                "mul",
                7,
                3
              ],
              3
            ],
            "answer": 24,
            "unit": "puntos",
            "response": "El equipo A tiene 24 puntos.",
            "steps": [
              "Las victorias aportan 21 puntos y los empates, 3. Las derrotas no suman."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuál de los dos equipos tiene más puntos? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Están empatados a 24 puntos, aunque tienen distinto número de victorias.",
            "steps": [
              "El equipo B suma 8 × 3 = 24 puntos, la misma puntuación que el A."
            ],
            "evidence": [
              {
                "calculation": [
                  "mul",
                  8,
                  3
                ],
                "answer": 24
              }
            ],
            "note": ""
          }
        },
        {
          "question": "Si el equipo A hubiera ganado uno de los partidos que empató, ¿cuántos puntos tendría?",
          "solution": {
            "expression": "24 − 1 + 3 = 26",
            "calculation": [
              "add",
              [
                "sub",
                24,
                1
              ],
              3
            ],
            "answer": 26,
            "unit": "puntos",
            "response": "Tendría 26 puntos.",
            "steps": [
              "Quitamos el punto del empate y añadimos los tres de la victoria. Gana dos puntos, no tres."
            ],
            "note": ""
          }
        }
      ]
    },
    {
      "id": "P0049",
      "version": 1,
      "title": "Dos cajas de rotuladores",
      "context": "material-escolar",
      "structure": "comparacio-de-totals",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "La caja A tiene 24 rotuladores y un tercio (1/3) son rojos. La caja B tiene 36 rotuladores y una cuarta parte (1/4) son rojos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué caja tiene más rotuladores rojos y cuántos más?",
      "solution": {
        "expression": "36 ÷ 4 − 24 ÷ 3 = 1",
        "calculation": [
          "sub",
          [
            "div",
            36,
            4
          ],
          [
            "div",
            24,
            3
          ]
        ],
        "answer": 1,
        "unit": "rotulador rojo de diferencia",
        "response": "La caja B tiene un rotulador rojo más. Tiene nueve y la A tiene ocho.",
        "steps": [
          "Calculamos cada fracción sobre su propia caja. 1/3 de 24 son 8 y 1/4 de 36 son 9."
        ],
        "note": "Una fracción menor puede corresponder a una cantidad mayor si el total es distinto."
      }
    },
    {
      "id": "P0050",
      "version": 1,
      "title": "El depósito del patio",
      "context": "aigua",
      "structure": "canvi-de-referencia",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un depósito de 240 litros de capacidad está lleno hasta tres cuartas partes (3/4). Para regar, sacamos un tercio (1/3) del agua que contiene.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Qué fracción de la capacidad del depósito queda ocupada por agua? Justifica la respuesta.",
      "solution": {
        "expression": "(180 − 180 ÷ 3) ÷ 240 = 1/2",
        "calculation": [
          "div",
          [
            "sub",
            [
              "mul",
              [
                "div",
                240,
                4
              ],
              3
            ],
            [
              "div",
              [
                "mul",
                [
                  "div",
                  240,
                  4
                ],
                3
              ],
              3
            ]
          ],
          240
        ],
        "answer": 0.5,
        "unit": "de la capacidad",
        "response": "Queda ocupada la mitad (1/2) de la capacidad, es decir, 120 litros.",
        "steps": [
          "Había 180 litros. Sacamos un tercio, que son 60 litros.",
          "Los 120 litros restantes son la mitad de los 240 litros de capacidad."
        ],
        "note": "El tercio se refiere al agua que había. La respuesta se refiere a la capacidad.",
        "visual": {
          "type": "fraction",
          "parts": 2,
          "filled": 1,
          "total": 240,
          "caption": "El total es la capacidad de 240 litros. Cada mitad representa 120 litros."
        }
      }
    },
    {
      "id": "P0051",
      "version": 1,
      "title": "La mitad de las entradas",
      "context": "concert",
      "structure": "afirmacio-referencia",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un auditorio tiene 180 localidades. Se reserva un tercio (1/3) para invitaciones. Se vende la mitad de las entradas que quedaban disponibles. Un organizador dice: «Hemos vendido la mitad del aforo».",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Tiene razón el organizador? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Se han vendido 60 entradas, un tercio del aforo. La mitad del aforo serían 90.",
        "steps": [
          "Se reservan 60 localidades y quedan 120 disponibles. La mitad son 60.",
          "La mitad de 180 son 90, una cantidad distinta."
        ],
        "note": "Hay que distinguir el total de localidades de las entradas disponibles para la venta.",
        "evidence": [
          {
            "calculation": [
              "div",
              [
                "sub",
                180,
                [
                  "div",
                  180,
                  3
                ]
              ],
              2
            ],
            "answer": 60
          },
          {
            "calculation": [
              "div",
              180,
              2
            ],
            "answer": 90
          }
        ]
      }
    },
    {
      "id": "P0052",
      "version": 1,
      "title": "Porciones de pizza",
      "context": "alimentacio",
      "structure": "unitats-diferents",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Dos pizzas son del mismo tamaño. Una se corta en 8 porciones iguales y la otra, en 12. Jan come 3 porciones de la primera y Laia, 4 de la segunda.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Quién ha comido más pizza? Justifica la respuesta con un dibujo o con números.",
      "solution": {
        "kind": "justification",
        "response": "Jan ha comido más. 3/8 equivalen a 9/24, mientras que 4/12 equivalen a 8/24.",
        "steps": [
          "Dividimos cada pizza en 24 partes. Cada octavo equivale a 3 partes y cada doceavo, a 2.",
          "Jan come 9 y Laia, 8. La diferencia es 1/24 de pizza."
        ],
        "note": "Dibuja dos pizzas iguales. Las porciones de la primera son más grandes.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              [
                "div",
                24,
                8
              ]
            ],
            "answer": 9
          },
          {
            "calculation": [
              "mul",
              4,
              [
                "div",
                24,
                12
              ]
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0053",
      "version": 1,
      "title": "La cosecha que queda",
      "context": "hort",
      "structure": "fraccio-del-restant",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una cosecha de tres horas se han recogido 120 kg de tomates. Se dona un cuarto (1/4) a un comedor y se venden dos quintas partes (2/5) de lo que queda. El resto se guarda.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "distractors",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos kilogramos de tomates se guardan?",
      "solution": {
        "expression": "(120 − 120 ÷ 4) ÷ 5 × 3 = 54",
        "calculation": [
          "mul",
          [
            "div",
            [
              "sub",
              120,
              [
                "div",
                120,
                4
              ]
            ],
            5
          ],
          3
        ],
        "answer": 54,
        "unit": "kilogramos",
        "response": "Se guardan 54 kg de tomates.",
        "steps": [
          "Después de donar 30 kg, quedan 90.",
          "Se venden dos quintos de 90. Los otros tres quintos son 54 kg."
        ],
        "note": "Los 2/5 se refieren a los 90 kg que quedan. Las tres horas no intervienen en el cálculo."
      }
    },
    {
      "id": "P0054",
      "version": 1,
      "title": "El libro empezado",
      "context": "lectura",
      "structure": "recuperar-el-total",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El lunes, Àlex lee tres quintas partes (3/5) de un libro. El martes lee la mitad de las páginas que le quedaban. Todavía le quedan 24 páginas por leer.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas páginas tiene el libro?",
      "solution": {
        "expression": "24 × 2 ÷ (5 − 3) × 5 = 120",
        "calculation": [
          "mul",
          [
            "div",
            [
              "mul",
              24,
              2
            ],
            [
              "sub",
              5,
              3
            ]
          ],
          5
        ],
        "answer": 120,
        "unit": "páginas",
        "response": "El libro tiene 120 páginas.",
        "steps": [
          "Antes de leer el martes quedaban 48 páginas, el doble de las 24 finales.",
          "Estas 48 páginas son 2/5 del libro. Un quinto son 24 páginas y cinco quintos son 120."
        ],
        "note": ""
      }
    },
    {
      "id": "P0055",
      "version": 1,
      "title": "Las clases que van en bicicleta",
      "context": "mobilitat",
      "structure": "ponderacio-de-totals",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En la clase A hay 20 alumnos y tres quintas partes (3/5) vienen en bicicleta. En la clase B hay 30 alumnos y dos quintas partes (2/5) vienen en bicicleta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué porcentaje del conjunto de las dos clases viene en bicicleta?",
      "solution": {
        "expression": "(20 ÷ 5 × 3 + 30 ÷ 5 × 2) × 100 ÷ (20 + 30) = 48",
        "calculation": [
          "div",
          [
            "mul",
            [
              "add",
              [
                "mul",
                [
                  "div",
                  20,
                  5
                ],
                3
              ],
              [
                "mul",
                [
                  "div",
                  30,
                  5
                ],
                2
              ]
            ],
            100
          ],
          [
            "add",
            20,
            30
          ]
        ],
        "answer": 48,
        "unit": "porcentaje",
        "response": "El 48 % del alumnado de las dos clases viene en bicicleta.",
        "steps": [
          "En cada clase vienen 12 alumnos en bicicleta. Son 24 de un total de 50.",
          "24 × 100 ÷ 50 = 48 %."
        ],
        "note": "Las clases tienen tamaños distintos. No se puede hacer la media simple de las fracciones."
      }
    },
    {
      "id": "P0056",
      "version": 1,
      "title": "La nota del taller",
      "context": "taller",
      "structure": "ambiguitat-explicita",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un taller hay una cuerda de 18 m. Primero se corta un tercio (1/3). La nota de la siguiente tarea solo dice: «Corta una cuarta parte (1/4)», sin precisar de qué longitud.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Podemos saber exactamente cuánta cuerda quedará? Calcula y explica las dos interpretaciones.",
      "solution": {
        "kind": "justification",
        "response": "Falta precisar la longitud de referencia. Quedarían 7,5 m si el cuarto se calcula sobre la cuerda inicial, o 9 m si se calcula sobre la que queda.",
        "steps": [
          "Después del primer corte quedan 12 m.",
          "Un cuarto de 18 m son 4,5 m, así que quedarían 7,5 m. Un cuarto de 12 m son 3 m, así que quedarían 9 m."
        ],
        "note": "La ambigüedad forma parte de la pregunta. Hay que justificar las dos interpretaciones.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "sub",
                18,
                [
                  "div",
                  18,
                  3
                ]
              ],
              [
                "div",
                18,
                4
              ]
            ],
            "answer": 7.5
          },
          {
            "calculation": [
              "sub",
              [
                "sub",
                18,
                [
                  "div",
                  18,
                  3
                ]
              ],
              [
                "div",
                [
                  "sub",
                  18,
                  [
                    "div",
                    18,
                    3
                  ]
                ],
                4
              ]
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0057",
      "version": 1,
      "title": "La caja de piezas",
      "context": "construccio",
      "structure": "recuperar-el-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De una caja de piezas de construcción retiramos una cuarta parte (1/4) y después añadimos 9 piezas. Ahora la caja contiene 45.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas piezas había al principio?",
      "solution": {
        "expression": "(45 − 9) ÷ 3 × 4 = 48",
        "calculation": [
          "mul",
          [
            "div",
            [
              "sub",
              45,
              9
            ],
            3
          ],
          4
        ],
        "answer": 48,
        "unit": "piezas",
        "response": "Al principio había 48 piezas.",
        "steps": [
          "Antes de añadir las nueve piezas había 36. Son los tres cuartos que habían quedado.",
          "Cada cuarto son 12 piezas. Los cuatro cuartos suman 48."
        ],
        "note": "",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 3,
          "total": 48,
          "caption": "Los tres cuartos sombreados son las 36 piezas que quedaban antes de añadir nueve."
        }
      }
    },
    {
      "id": "P0058",
      "version": 1,
      "title": "La receta ampliada",
      "context": "cuina",
      "structure": "proporcionalitat-fraccionaria",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una receta para 6 personas necesita 3/4 de litro de leche. La preparamos para 10 personas manteniendo las proporciones. Tenemos dos botellas llenas de 1 litro cada una.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Cuánta leche quedará después de preparar la receta?",
      "solution": {
        "expression": "2 − (3/4 ÷ 6 × 10) = 3/4",
        "calculation": [
          "sub",
          2,
          [
            "mul",
            [
              "div",
              [
                "div",
                3,
                4
              ],
              6
            ],
            10
          ]
        ],
        "answer": 0.75,
        "unit": "litros",
        "response": "Quedarán 3/4 de litro de leche.",
        "steps": [
          "Por persona hace falta 1/8 de litro. Para diez personas hacen falta 10/8, es decir, 5/4 de litro.",
          "Tenemos 2 litros, que son 8/4. Al restar 5/4, quedan 3/4."
        ],
        "note": ""
      }
    },
    {
      "id": "P0059",
      "version": 1,
      "title": "La terraza compartida",
      "context": "espais",
      "structure": "ordre-i-referencia",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una terraza de 96 m² se reserva un tercio (1/3) para plantas y una cuarta parte (1/4) de la superficie que queda para un camino. El resto se destina a mesas.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "parts": [
        {
          "question": "¿Qué superficie queda para las mesas?",
          "solution": {
            "expression": "(96 − 96 ÷ 3) − (96 − 96 ÷ 3) ÷ 4 = 48",
            "calculation": [
              "sub",
              [
                "sub",
                96,
                [
                  "div",
                  96,
                  3
                ]
              ],
              [
                "div",
                [
                  "sub",
                  96,
                  [
                    "div",
                    96,
                    3
                  ]
                ],
                4
              ]
            ],
            "answer": 48,
            "unit": "metros cuadrados",
            "response": "Quedan 48 m² para las mesas.",
            "steps": [
              "Las plantas ocupan 32 m². De los 64 m² restantes, el camino ocupa 16 y quedan 48 m²."
            ],
            "note": ""
          }
        },
        {
          "question": "Si reserváramos primero 1/4 de toda la terraza para el camino y después 1/3 de lo que queda para plantas, ¿el reparto sería el mismo? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Las plantas y el camino ocuparían 24 m² cada uno, en vez de 32 y 16. Las mesas conservarían los 48 m².",
            "steps": [
              "El camino ocuparía 96 ÷ 4 = 24 m². Las plantas ocuparían un tercio de los 72 restantes, es decir, 24 m².",
              "El espacio para las mesas sería el mismo, pero cambiarían los espacios de las plantas y del camino."
            ],
            "note": "",
            "evidence": [
              {
                "calculation": [
                  "div",
                  [
                    "sub",
                    96,
                    [
                      "div",
                      96,
                      4
                    ]
                  ],
                  3
                ],
                "answer": 24
              },
              {
                "calculation": [
                  "div",
                  96,
                  4
                ],
                "answer": 24
              },
              {
                "calculation": [
                  "sub",
                  [
                    "sub",
                    96,
                    [
                      "div",
                      96,
                      4
                    ]
                  ],
                  [
                    "div",
                    [
                      "sub",
                      96,
                      [
                        "div",
                        96,
                        4
                      ]
                    ],
                    3
                  ]
                ],
                "answer": 48
              }
            ]
          }
        }
      ]
    },
    {
      "id": "P0060",
      "version": 1,
      "title": "Las dos campañas",
      "context": "solidaritat",
      "structure": "dades-insuficients",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "La campaña A ha recaudado tres cuartas partes (3/4) de su objetivo económico. La campaña B ha recaudado dos terceras partes (2/3) del suyo. Los objetivos de las dos campañas son distintos y no conocemos los importes.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Podemos saber qué campaña ha recaudado más euros? Justifica la respuesta con ejemplos.",
      "solution": {
        "kind": "justification",
        "response": "Para saberlo, además de las fracciones, necesitamos conocer los objetivos en euros.",
        "steps": [
          "Si los objetivos fueran 100 € para A y 180 € para B, habrían recaudado 75 € y 120 €, respectivamente. Ganaría B.",
          "Si fueran 200 € para A y 180 € para B, habrían recaudado 150 € y 120 €, respectivamente. Ganaría A."
        ],
        "note": "Los importes de los ejemplos son posibles objetivos. El enunciado no da esos importes.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                100,
                4
              ],
              3
            ],
            "answer": 75
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                180,
                3
              ],
              2
            ],
            "answer": 120
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                200,
                4
              ],
              3
            ],
            "answer": 150
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                180,
                3
              ],
              2
            ],
            "answer": 120
          }
        ]
      }
    },
    {
      "id": "P0061",
      "version": 1,
      "title": "Dos caminos a pie",
      "context": "mobilitat",
      "structure": "fraccio-conjunta",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En la escuela del Norte hay 48 alumnos de sexto y la mitad llega a pie. En la escuela del Sur hay 32 alumnos de sexto y una cuarta parte llega a pie.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Qué fracción del alumnado de sexto de las dos escuelas juntas llega a pie? Exprésala en su forma irreducible.",
      "solution": {
        "expression": "(48 ÷ 2 + 32 ÷ 4) ÷ (48 + 32) = 2/5",
        "calculation": [
          "div",
          [
            "add",
            [
              "div",
              48,
              2
            ],
            [
              "div",
              32,
              4
            ]
          ],
          [
            "add",
            48,
            32
          ]
        ],
        "answer": 0.4,
        "unit": "del total de alumnos",
        "response": "Dos quintos (2/5) del alumnado llega a pie.",
        "steps": [
          "En la escuela del Norte llegan a pie 24 alumnos y, en la del Sur, 8.",
          "En total son 32 alumnos de 80. Simplificamos 32/80 dividiendo el numerador y el denominador entre 16."
        ],
        "note": "La mitad y la cuarta parte se calculan sobre escuelas distintas. La fracción final se calcula sobre 80 alumnos.",
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 2,
          "total": 80,
          "caption": "Cada quinta parte representa a 16 alumnos. Los 32 que llegan a pie ocupan dos partes."
        }
      }
    },
    {
      "id": "P0062",
      "version": 1,
      "title": "Los carteles de la feria",
      "context": "fira",
      "structure": "reconstruccio-de-dos-totals",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El lunes se cuelgan dos quintos (2/5) de los carteles de una feria. El martes se cuelga una cuarta parte de los que aún quedaban por colgar. Al final del martes quedan 27 por colgar.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos carteles se habían impreso?",
      "solution": {
        "expression": "27 ÷ 3 × 4 ÷ 3 × 5 = 60",
        "calculation": [
          "mul",
          [
            "div",
            [
              "mul",
              [
                "div",
                27,
                3
              ],
              4
            ],
            3
          ],
          5
        ],
        "answer": 60,
        "unit": "carteles",
        "response": "Se habían impreso 60 carteles.",
        "steps": [
          "Los 27 carteles son tres cuartas partes de los que quedaban después del lunes. Una cuarta parte son 9, así que después del lunes quedaban 36.",
          "Esos 36 son tres quintas partes de todos los carteles. Una quinta parte son 12 y las cinco partes suman 60."
        ],
        "note": "Si empezamos con 60, el lunes se cuelgan 24 y el martes 9. Quedan 27."
      }
    },
    {
      "id": "P0063",
      "version": 1,
      "title": "La inscripción en los talleres",
      "context": "tallers",
      "structure": "grups-amb-solapament",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De las 48 personas inscritas en una jornada, la mitad se ha apuntado al taller de cocina y un tercio al de cerámica. Una sexta parte de todas las personas inscritas se ha apuntado a los dos talleres.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas personas inscritas no se han apuntado a ninguno de los dos talleres?",
      "solution": {
        "expression": "48 − (48 ÷ 2 + 48 ÷ 3 − 48 ÷ 6) = 16",
        "calculation": [
          "sub",
          48,
          [
            "sub",
            [
              "add",
              [
                "div",
                48,
                2
              ],
              [
                "div",
                48,
                3
              ]
            ],
            [
              "div",
              48,
              6
            ]
          ]
        ],
        "answer": 16,
        "unit": "personas",
        "response": "16 personas no se han apuntado a ninguno de los dos talleres.",
        "steps": [
          "En cocina hay 24 personas, en cerámica 16 y en ambos talleres 8.",
          "La suma 24 + 16 cuenta dos veces a las 8 personas que hacen ambos talleres. Hay 32 personas en al menos un taller y las otras 16 no hacen ninguno."
        ],
        "note": "Un diagrama de dos círculos superpuestos permite separar a las 16 personas que solo hacen cocina, las 8 que solo hacen cerámica y las 8 que hacen ambos talleres."
      }
    },
    {
      "id": "P0064",
      "version": 1,
      "title": "Los libros del vestíbulo",
      "context": "biblioteca",
      "structure": "suma-amb-dada-irrellevant",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "El lunes llegan 138 libros a la biblioteca de la escuela y el martes llegan 76 más. De los que llegan el martes, 24 son cómics.",
      "features": [
        "suma-resta",
        "distractors"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos libros han llegado entre el lunes y el martes?",
      "solution": {
        "expression": "138 + 76 = 214",
        "calculation": [
          "add",
          138,
          76
        ],
        "answer": 214,
        "unit": "libros",
        "response": "Han llegado 214 libros.",
        "steps": [
          "Sumamos los libros recibidos los dos días."
        ],
        "note": "Los 24 cómics ya están incluidos en los 76 libros del martes."
      }
    },
    {
      "id": "P0065",
      "version": 1,
      "title": "Las mesas de la comida",
      "context": "menjador",
      "structure": "minim-amb-capacitat",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "A la comida de fin de curso asisten 53 personas. En cada mesa se pueden sentar como máximo 8 personas.",
      "features": [
        "multiplicacio-divisio",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas mesas hay que preparar como mínimo? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Hacen falta al menos 7 mesas.",
        "steps": [
          "Con 6 mesas hay 48 plazas y todavía quedan personas de pie.",
          "Con 7 mesas hay 56 plazas y se puede sentar todo el mundo."
        ],
        "note": "Al comparar las dos capacidades, comprobamos que siete mesas son suficientes y que seis se quedan cortas.",
        "evidence": [
          {
            "calculation": [
              "mul",
              6,
              8
            ],
            "answer": 48
          },
          {
            "calculation": [
              "mul",
              7,
              8
            ],
            "answer": 56
          }
        ]
      }
    },
    {
      "id": "P0066",
      "version": 1,
      "title": "La compra en la frutería",
      "context": "mercat",
      "structure": "canvi-amb-preus-per-quilo",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En la frutería compramos 3 kg de peras a 2,75 € el kilo y 2 kg de manzanas a 1,85 € el kilo. Pagamos con un billete de 20 €.",
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
      "question": "¿Cuánto nos tienen que devolver?",
      "solution": {
        "expression": "20 − (3 × 2,75 + 2 × 1,85) = 8,05",
        "calculation": [
          "sub",
          20,
          [
            "add",
            [
              "mul",
              3,
              2.75
            ],
            [
              "mul",
              2,
              1.85
            ]
          ]
        ],
        "answer": 8.05,
        "unit": "€",
        "response": "Nos tienen que devolver 8,05 €.",
        "steps": [
          "Las peras cuestan 8,25 € y las manzanas, 3,70 €. En total son 11,95 €.",
          "Restamos el precio total de los 20 € que hemos dado."
        ],
        "note": ""
      }
    },
    {
      "id": "P0067",
      "version": 1,
      "title": "El precio antes de las rebajas",
      "context": "comerc",
      "structure": "percentatge-invers",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una tienda han rebajado un 20 % el precio de una mochila. El precio rebajado que aparece en la etiqueta es de 72 €.",
      "features": [
        "multiplicacio-divisio",
        "decimals",
        "percentatges",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿Qué precio tenía antes de las rebajas?",
      "solution": {
        "expression": "72 ÷ 0,8 = 90",
        "calculation": [
          "div",
          72,
          0.8
        ],
        "answer": 90,
        "unit": "€",
        "response": "Antes de las rebajas, la mochila costaba 90 €.",
        "steps": [
          "Después de la rebaja, pagamos el 80 % del precio inicial.",
          "Si 72 € son el 80 %, el precio completo es 72 ÷ 0,8."
        ],
        "note": "Lo comprobamos calculando el 20 % de 90 €, que son 18 €. Al restar 18 € de 90 €, quedan 72 €."
      }
    },
    {
      "id": "P0068",
      "version": 1,
      "title": "La valla del huerto",
      "context": "hort",
      "structure": "perimetre-des-de-l-area",
      "level": "eso",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "El huerto comunitario es cuadrado y tiene una superficie de 196 m². Se quiere delimitar todo el perímetro con cordel.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "arrels"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos metros de cordel hacen falta si dejamos aparte lo que se usa en los nudos?",
      "solution": {
        "expression": "4 × √196 = 56",
        "calculation": [
          "mul",
          4,
          [
            "sqrt",
            196
          ]
        ],
        "answer": 56,
        "unit": "m",
        "response": "Hacen falta 56 metros de cordel.",
        "steps": [
          "El lado mide 14 m porque 14 × 14 = 196.",
          "El perímetro es la longitud de los cuatro lados."
        ],
        "note": ""
      }
    },
    {
      "id": "P0069",
      "version": 1,
      "title": "Las baldosas alrededor de la fuente",
      "context": "placa",
      "structure": "diferencia-de-quadrats",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "El plano de un pavimento cuadrado tiene 9 filas de 9 casillas. Cada casilla representa una baldosa. La fuente ocupa en el centro un cuadrado de 5 filas de 5 casillas.",
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
      "question": "¿Cuántas baldosas hacen falta para cubrir todo el pavimento fuera de la fuente? Escribe una expresión con potencias que represente el cálculo.",
      "solution": {
        "expression": "9² − 5² = 56",
        "calculation": [
          "sub",
          [
            "pow",
            9,
            2
          ],
          [
            "pow",
            5,
            2
          ]
        ],
        "answer": 56,
        "unit": "baldosas",
        "response": "Hacen falta 56 baldosas.",
        "steps": [
          "El cuadrado completo tiene 81 casillas y la fuente ocupa 25.",
          "Restamos las casillas de la fuente de las del cuadrado completo."
        ],
        "note": ""
      }
    },
    {
      "id": "P0070",
      "version": 1,
      "title": "Llegada al planetario",
      "context": "sortida",
      "structure": "marge-de-temps",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "La visita al planetario empieza a las 10:30 y dura 45 minutos. El grupo sale de la escuela a las 9:20, tarda 35 minutos en autobús y, una vez en la entrada, necesita 12 minutos para repartir las entradas y llegar a la sala.",
      "features": [
        "suma-resta",
        "combinades",
        "parentesis",
        "distractors"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Con cuántos minutos de margen llegará el grupo a la sala antes de que empiece la visita?",
      "solution": {
        "expression": "70 − (35 + 12) = 23",
        "calculation": [
          "sub",
          70,
          [
            "add",
            35,
            12
          ]
        ],
        "answer": 23,
        "unit": "minutos",
        "response": "El grupo llegará a la sala con 23 minutos de margen.",
        "steps": [
          "De las 9:20 a las 10:30 hay 70 minutos.",
          "El grupo necesita 47 minutos para llegar a la sala. Estará allí a las 10:07."
        ],
        "note": "Los 45 minutos son lo que dura la visita una vez que ha empezado."
      }
    },
    {
      "id": "P0071",
      "version": 1,
      "title": "Material para los estuches",
      "context": "material-escolar",
      "structure": "cost-i-repartiment-maxim",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para preparar estuches de préstamo, la escuela compra 36 pinceles a 0,75 € la unidad y 48 lápices a 0,25 € la unidad.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "parts": [
        {
          "question": "¿Cuánto ha costado toda la compra?",
          "solution": {
            "expression": "36 × 0,75 + 48 × 0,25 = 39",
            "calculation": [
              "add",
              [
                "mul",
                36,
                0.75
              ],
              [
                "mul",
                48,
                0.25
              ]
            ],
            "answer": 39,
            "unit": "€",
            "response": "La compra ha costado 39 €.",
            "steps": [
              "Los 36 pinceles cuestan 27 € y los 48 lápices, 12 €. Sumamos los dos importes."
            ],
            "note": ""
          }
        },
        {
          "question": "¿Cuál es el máximo número de estuches idénticos que se pueden preparar si se quiere usar todo el material? Justifica la respuesta.",
          "solution": {
            "kind": "justification",
            "response": "Se pueden preparar como máximo 12 estuches, con 3 pinceles y 4 lápices en cada uno.",
            "steps": [
              "El número de estuches debe ser divisor de 36 y de 48. Por tanto, también debe ser divisor de su diferencia, 12, y no puede superar 12.",
              "Podemos hacer 12 estuches. En cada uno ponemos 3 pinceles y 4 lápices."
            ],
            "note": "También se puede buscar el máximo común divisor haciendo una lista de los divisores de 36 y de 48.",
            "evidence": [
              {
                "calculation": [
                  "sub",
                  48,
                  36
                ],
                "answer": 12
              },
              {
                "calculation": [
                  "div",
                  36,
                  12
                ],
                "answer": 3
              },
              {
                "calculation": [
                  "div",
                  48,
                  12
                ],
                "answer": 4
              }
            ]
          }
        }
      ]
    },
    {
      "id": "P0072",
      "version": 1,
      "title": "Volver al caudal de siempre",
      "context": "aigua",
      "structure": "variacio-percentual-amb-nova-base",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "El sistema de riego de un invernadero vertía 60 litros de agua por hora. Después de un ajuste, ahora vierte 48 por hora.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿En qué porcentaje hay que aumentar el caudal actual para volver al caudal inicial? Justifica sobre qué cantidad calculas el porcentaje.",
      "solution": {
        "expression": "(60 − 48) × 100 ÷ 48 = 25",
        "calculation": [
          "div",
          [
            "mul",
            [
              "sub",
              60,
              48
            ],
            100
          ],
          48
        ],
        "answer": 25,
        "unit": "%",
        "response": "Hay que aumentar el caudal actual un 25 %.",
        "steps": [
          "Tenemos que añadir 12 litros por hora a los 48 actuales.",
          "Dividimos el aumento (12) entre el caudal actual (48) y multiplicamos por 100 para obtener el porcentaje."
        ],
        "note": "El aumento se calcula a partir del caudal actual. Los mismos 12 litros por hora serían el 20 % del caudal inicial."
      }
    },
    {
      "id": "P0073",
      "version": 1,
      "title": "El mural del pasillo",
      "context": "art",
      "structure": "equivalencia-tres-registres",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "La clase ha pintado 3/8 del mural. En la hoja de seguimiento, una alumna apunta 0,375 del mural y en el tablón del pasillo otro alumno escribe «37,5 % pintado».",
      "features": [
        "multiplicacio-divisio",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Coinciden las dos anotaciones con la parte que se ha pintado? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Sí. Las tres expresiones indican la misma parte del mural.",
        "steps": [
          "Dividimos 3 entre 8 y obtenemos 0,375.",
          "Multiplicamos 0,375 por 100 y obtenemos 37,5 %."
        ],
        "note": "Todas las anotaciones toman el mural completo como unidad.",
        "evidence": [
          {
            "calculation": [
              "div",
              3,
              8
            ],
            "answer": 0.375
          },
          {
            "calculation": [
              "mul",
              0.375,
              100
            ],
            "answer": 37.5
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 3,
          "total": 1000,
          "caption": "Las tres partes pintadas representan 375 milésimas del mural, es decir, 0,375 o 37,5 %."
        }
      }
    },
    {
      "id": "P0074",
      "version": 1,
      "title": "Cuándo se enciende el indicador",
      "context": "energia",
      "structure": "llindar-inclusiu",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En un aparato se enciende un indicador cuando queda un 15 % de batería o menos. En tres comprobaciones se ha anotado la proporción de carga que quedaba. El lunes quedaba 0,16, el martes 3/20 y el miércoles 0,14.",
      "features": [
        "multiplicacio-divisio",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿En qué comprobaciones tenía que estar encendido el indicador? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "El martes y el miércoles.",
        "steps": [
          "El martes, 3/20 equivale a 0,15, es decir, 15 %.",
          "El lunes quedaba un 16 %, por encima del umbral. El miércoles quedaba un 14 %, por debajo."
        ],
        "note": "El indicador también se enciende cuando la batería alcanza el valor exacto del umbral.",
        "evidence": [
          {
            "calculation": [
              "mul",
              0.16,
              100
            ],
            "answer": 16
          },
          {
            "calculation": [
              "div",
              3,
              20
            ],
            "answer": 0.15
          },
          {
            "calculation": [
              "mul",
              0.14,
              100
            ],
            "answer": 14
          }
        ]
      }
    },
    {
      "id": "P0075",
      "version": 1,
      "title": "El error en el boletín",
      "context": "comunicacio",
      "structure": "diagnostic-valor-posicional",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De cada 100 respuestas a una encuesta del barrio, 8 piden más aparcamientos para bicicletas. El borrador del boletín dice: «Un 8 % de las respuestas lo pide, es decir, 0,8 del total».",
      "features": [
        "multiplicacio-divisio",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "fraccions"
      },
      "question": "¿Cómo corregirías la equivalencia del boletín? Expresa la proporción como porcentaje, decimal y fracción irreducible.",
      "solution": {
        "kind": "justification",
        "response": "La proporción es 8 % = 0,08 = 2/25.",
        "steps": [
          "Ocho de cada cien es 8/100. Dividimos 8 entre 100 para escribirlo como decimal.",
          "Simplificamos 8/100 dividiendo el numerador y el denominador entre 4."
        ],
        "note": "El decimal 0,8 representa ocho décimas, que equivalen al 80 %.",
        "evidence": [
          {
            "calculation": [
              "div",
              8,
              100
            ],
            "answer": 0.08
          },
          {
            "calculation": [
              "mul",
              0.8,
              100
            ],
            "answer": 80
          }
        ]
      }
    },
    {
      "id": "P0076",
      "version": 1,
      "title": "Espacio para el jardín",
      "context": "hort",
      "structure": "complement-de-dues-parts",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En un terreno comunitario, 1/4 de toda la superficie se destinará a flores y 0,35 del total a hortalizas. Las dos zonas están separadas. El resto se destinará a una zona de descanso.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "El plano dice que la zona de descanso ocupa el 40 % del terreno. ¿Es correcto? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Sí. La zona de descanso ocupa 0,40 del terreno, es decir, un 40 %.",
        "steps": [
          "Un cuarto del terreno equivale a 0,25. Las flores y las hortalizas ocupan juntas 0,60 del total.",
          "De la unidad entera queda 0,40."
        ],
        "note": "La fracción y los decimales del problema se refieren al mismo terreno.",
        "evidence": [
          {
            "calculation": [
              "div",
              1,
              4
            ],
            "answer": 0.25
          },
          {
            "calculation": [
              "sub",
              1,
              [
                "add",
                [
                  "div",
                  1,
                  4
                ],
                0.35
              ]
            ],
            "answer": 0.4
          }
        ]
      }
    },
    {
      "id": "P0077",
      "version": 1,
      "title": "Dos secciones de la biblioteca",
      "context": "biblioteca",
      "structure": "mateixa-proporcio-totals-diferents",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En la sección infantil, 3/5 de los 150 libros están en catalán. En la sección juvenil, 0,60 de los 200 libros están en catalán. En ambas secciones, el cartel indica «60 % de libros en catalán».",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Es correcto el cartel? Explica si eso significa que las dos secciones tienen la misma cantidad de libros en catalán.",
      "solution": {
        "kind": "justification",
        "response": "El cartel es correcto. Hay 90 libros en catalán en la sección infantil y 120 en la juvenil.",
        "steps": [
          "Tres quintos equivalen a 0,60 y a 60 %.",
          "Aplicamos la proporción a cada total. 0,60 de 150 son 90 y 0,60 de 200 son 120."
        ],
        "note": "Las dos secciones tienen la misma proporción, pero parten de totales distintos.",
        "evidence": [
          {
            "calculation": [
              "div",
              3,
              5
            ],
            "answer": 0.6
          },
          {
            "calculation": [
              "mul",
              150,
              [
                "div",
                3,
                5
              ]
            ],
            "answer": 90
          },
          {
            "calculation": [
              "mul",
              200,
              0.6
            ],
            "answer": 120
          }
        ]
      }
    },
    {
      "id": "P0078",
      "version": 1,
      "title": "Una copia más grande",
      "context": "impressio",
      "structure": "factor-superior-a-la-unitat",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una lámina mide 24 cm de ancho. La fotocopiadora permite ampliarla al 125 % de su tamaño original. En el manual, ese mismo ajuste aparece como factor 1,25.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "Una compañera dice que el ajuste multiplica la anchura por 5/4. ¿Tiene razón? Indica qué anchura tendrá la copia.",
      "solution": {
        "expression": "24 × 5 ÷ 4 = 30",
        "calculation": [
          "div",
          [
            "mul",
            24,
            5
          ],
          4
        ],
        "answer": 30,
        "unit": "cm",
        "response": "Sí. El factor es 5/4 y la copia medirá 30 cm de ancho.",
        "steps": [
          "El 125 % de la anchura original equivale a multiplicar por 1,25.",
          "El factor 1,25 es 125/100, que se simplifica a 5/4. Aplicamos el factor a 24 cm."
        ],
        "note": "El 125 % incluye el 100 % original y una cuarta parte más."
      }
    },
    {
      "id": "P0079",
      "version": 1,
      "title": "El aforo del concierto",
      "context": "musica",
      "structure": "recuperacio-del-total",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Al abrirse la venta de entradas, se reservan 35 para los músicos. La hoja de control dice que son el 17,5 % de las localidades. El programa de venta indica que la parte reservada es 0,175 del total.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas localidades hay en total? Justifica la respuesta a partir de una fracción equivalente a la parte reservada.",
      "solution": {
        "expression": "35 ÷ 7 × 40 = 200",
        "calculation": [
          "mul",
          [
            "div",
            35,
            7
          ],
          40
        ],
        "answer": 200,
        "unit": "localidades",
        "response": "Hay 200 localidades en total.",
        "steps": [
          "El 17,5 % equivale a 0,175, es decir, 175/1000. Esta fracción se simplifica a 7/40.",
          "Si 7 partes son 35 localidades, cada parte son 5 localidades. El total tiene 40 partes."
        ],
        "note": "Lo comprobamos con 200 × 0,175 = 35."
      }
    },
    {
      "id": "P0080",
      "version": 1,
      "title": "El gráfico redondeado",
      "context": "escola",
      "structure": "equivalencia-exacta-i-arrodoniment",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una jornada deportiva, 5/8 de los participantes han terminado el circuito. En la hoja de cálculo, la proporción es 0,625. Un gráfico redondea los porcentajes al entero más cercano, hacia arriba si queda justo entre dos, y muestra 63 %.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Cuál es el porcentaje exacto y cuántos puntos porcentuales lo separan del que muestra el gráfico?",
      "solution": {
        "expression": "63 − 5 ÷ 8 × 100 = 0,5",
        "calculation": [
          "sub",
          63,
          [
            "mul",
            [
              "div",
              5,
              8
            ],
            100
          ]
        ],
        "answer": 0.5,
        "unit": "puntos porcentuales",
        "response": "El porcentaje exacto es 62,5 %. El gráfico muestra 0,5 puntos porcentuales de más.",
        "steps": [
          "La fracción 5/8 da el decimal 0,625, que equivale a 62,5 %.",
          "La diferencia entre 63 % y 62,5 % es de 0,5 puntos porcentuales."
        ],
        "note": "El 63 % es una aproximación que sigue la regla de redondeo del gráfico."
      }
    },
    {
      "id": "P0081",
      "version": 1,
      "title": "La comisión del pago",
      "context": "comerc",
      "structure": "percentatge-menor-que-u",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una plataforma cobra una comisión del 0,5 % sobre un pago de 800 €. El contrato también la expresa como 1/200 del importe. En la hoja de cálculo alguien ha escrito 0,05 como factor.",
      "features": [
        "multiplicacio-divisio",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿Qué factor decimal es correcto y qué comisión se tiene que cobrar?",
      "solution": {
        "expression": "800 × 0,005 = 4",
        "calculation": [
          "mul",
          800,
          0.005
        ],
        "answer": 4,
        "unit": "€",
        "response": "El factor correcto es 0,005 y la comisión es de 4 €.",
        "steps": [
          "Dividimos el porcentaje entre 100. 0,5 ÷ 100 = 0,005. La fracción 1/200 también vale 0,005.",
          "Multiplicamos el importe por este factor."
        ],
        "note": "El factor 0,05 representa un 5 %."
      }
    },
    {
      "id": "P0082",
      "version": 1,
      "title": "Más alumnado en el coro",
      "context": "musica",
      "structure": "variacio-relativa-i-punts",
      "level": "eso",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El trimestre pasado, 2/5 del alumnado de un grupo cantaba en el coro. Este trimestre canta 0,50 del mismo grupo. En la revista de la escuela quieren escribir «La proporción de alumnos que cantan en el coro ha aumentado un 10 %».",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "suma-resta",
        "fraccions",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿Cómo reescribirías la frase para distinguir el aumento en puntos porcentuales del aumento relativo?",
      "solution": {
        "kind": "justification",
        "response": "La participación ha pasado del 40 % al 50 %. Ha subido 10 puntos porcentuales, un 25 % respecto a la proporción anterior.",
        "steps": [
          "Dos quintos son 0,40, es decir, un 40 %. El decimal 0,50 equivale a un 50 %.",
          "La diferencia es de 10 puntos porcentuales. Respecto al 40 % inicial, el cociente 10/40 es 0,25, es decir, 25 %."
        ],
        "note": "Para calcular el aumento relativo, la referencia es la proporción inicial.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                2,
                5
              ],
              100
            ],
            "answer": 40
          },
          {
            "calculation": [
              "sub",
              50,
              40
            ],
            "answer": 10
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                [
                  "sub",
                  50,
                  40
                ],
                40
              ],
              100
            ],
            "answer": 25
          }
        ]
      }
    },
    {
      "id": "P0083",
      "version": 1,
      "title": "Las fichas de la tómbola",
      "context": "joc",
      "structure": "comparacio-amb-llindar",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una tómbola, todas las fichas de una bolsa tienen la misma probabilidad de salir. En la bolsa A, 9 de las 20 fichas tienen premio. En la bolsa B, la probabilidad de obtener premio es 0,40. La organización quiere elegir una bolsa que dé premio con una probabilidad mínima del 42 %.",
      "features": [
        "multiplicacio-divisio",
        "fraccions",
        "percentatges",
        "decimals"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Qué bolsa cumple el requisito? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Solo la bolsa A cumple el requisito.",
        "steps": [
          "En la bolsa A, la fracción 9/20 da 0,45, que equivale al 45 %.",
          "En la bolsa B, 0,40 equivale al 40 %. Solo el 45 % alcanza el mínimo del 42 %."
        ],
        "note": "Para comparar las probabilidades, podemos expresarlas todas en porcentajes.",
        "evidence": [
          {
            "calculation": [
              "div",
              9,
              20
            ],
            "answer": 0.45
          },
          {
            "calculation": [
              "mul",
              0.45,
              100
            ],
            "answer": 45
          },
          {
            "calculation": [
              "mul",
              0.4,
              100
            ],
            "answer": 40
          }
        ]
      }
    },
    {
      "id": "P0084",
      "version": 1,
      "title": "Dos revisiones de las manzanas",
      "context": "cooperativa",
      "structure": "producte-de-proporcions",
      "level": "eso",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una cooperativa, 3/4 de las manzanas recogidas pasan una primera revisión. En la segunda, pasa el 80 % de las que habían pasado la primera. En el registro han escrito que 0,55 de todas las manzanas recogidas han superado las dos revisiones.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿Qué decimal y qué porcentaje del total recogido deberían constar en el registro?",
      "solution": {
        "expression": "3 ÷ 4 × 0,80 = 0,60",
        "calculation": [
          "mul",
          [
            "div",
            3,
            4
          ],
          0.8
        ],
        "answer": 0.6,
        "unit": "del total recogido",
        "response": "El registro debería indicar 0,60 del total, es decir, un 60 %.",
        "steps": [
          "Tres cuartas partes equivalen a 0,75. El 80 % es 0,80 y se aplica a la parte que ya había pasado la primera revisión.",
          "Multiplicamos las dos proporciones."
        ],
        "note": "De cada 100 manzanas, 75 pasan la primera revisión y 60 pasan también la segunda."
      }
    },
    {
      "id": "P0085",
      "version": 1,
      "title": "Dos carteles de rebajas",
      "context": "comerc",
      "structure": "comparacio-amb-descompte-unic",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una mochila cuesta 100 € en las dos tiendas. La tienda A hace un 30 % de descuento. La tienda B hace un 20 % de descuento y aplica otro 10 % sobre el precio rebajado.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿En qué tienda sale más barata la mochila? Justifica la elección.",
      "solution": {
        "kind": "justification",
        "response": "En la tienda A cuesta 70 €, dos euros menos que en la tienda B.",
        "steps": [
          "En la tienda A pagamos el 70 % de 100 €, es decir, 70 €.",
          "En la tienda B, el primer descuento deja el precio en 80 €. El 10 % de 80 € son 8 €, así que el precio final es 72 €."
        ],
        "note": "En la tienda B, los factores son 0,80 y 0,90. Al aplicarlos uno tras otro, el factor es 0,72, equivalente a un descuento total del 28 %.",
        "evidence": [
          {
            "calculation": [
              "mul",
              100,
              0.7
            ],
            "answer": 70
          },
          {
            "calculation": [
              "mul",
              [
                "mul",
                100,
                0.8
              ],
              0.9
            ],
            "answer": 72
          }
        ]
      }
    },
    {
      "id": "P0086",
      "version": 1,
      "title": "El pedido de plantones",
      "context": "hort",
      "structure": "disminucio-i-augment-que-compensen",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "El huerto escolar ha encargado 60 plantones. El lunes reduce el pedido un 20 %. El martes lo amplía un 25 % respecto a la cantidad que había encargado el lunes.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Acabarán llegando tantos plantones como se habían encargado al principio? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Sí. El pedido vuelve a ser de 60 plantones.",
        "steps": [
          "El 20 % es una quinta parte. El lunes se quitan 12 plantones del pedido y quedan 48.",
          "El 25 % es una cuarta parte. Una cuarta parte de 48 también son 12 plantones. Al añadirlos, volvemos a 60."
        ],
        "note": "La disminución se calcula sobre 60 y el aumento sobre 48.",
        "evidence": [
          {
            "calculation": [
              "sub",
              60,
              [
                "div",
                60,
                5
              ]
            ],
            "answer": 48
          },
          {
            "calculation": [
              "add",
              48,
              [
                "div",
                48,
                4
              ]
            ],
            "answer": 60
          }
        ]
      }
    },
    {
      "id": "P0087",
      "version": 1,
      "title": "La cuota del taller",
      "context": "tallers",
      "structure": "canvis-oposats-mateix-percentatge",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un taller de cerámica costaba 50 € al mes. En enero subieron la cuota un 20 %. En febrero la bajaron un 20 % respecto al precio de enero.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Es la cuota de febrero igual a la de antes de la subida? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "En febrero la cuota es de 48 €, dos euros menos que al principio.",
        "steps": [
          "El 20 % es un quinto. En enero se suma un quinto de 50 €, que son 10 €, y la cuota sube a 60 €.",
          "En febrero se resta un quinto de 60 €, que son 12 €, y la cuota queda en 48 €."
        ],
        "note": "El segundo 20 % se calcula sobre una cuota más alta.",
        "evidence": [
          {
            "calculation": [
              "add",
              50,
              [
                "div",
                50,
                5
              ]
            ],
            "answer": 60
          },
          {
            "calculation": [
              "sub",
              60,
              [
                "div",
                60,
                5
              ]
            ],
            "answer": 48
          }
        ]
      }
    },
    {
      "id": "P0088",
      "version": 1,
      "title": "El vale y la rebaja",
      "context": "comerc",
      "structure": "ordre-percentatge-import-fix",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Unos zapatos cuestan 80 €. En una tienda se descuenta primero un vale de 20 € y después se aplica un 25 % de descuento sobre lo que queda. En otra, con el mismo precio inicial, primero se aplica el 25 % de descuento y luego se resta el vale de 20 €.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué orden le conviene más a quien compra? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Conviene aplicar primero el 25 % y después el vale. El precio final es de 40 € en vez de 45 €.",
        "steps": [
          "Con el vale primero, el descuento del 25 % es una cuarta parte de 60 €, es decir, 15 €. Se pagan 45 €.",
          "Con el descuento primero, se resta una cuarta parte de 80 €, es decir, 20 €. Luego se resta el vale y se pagan 40 €."
        ],
        "note": "El vale siempre ahorra 20 €. El descuento del 25 % ahorra más euros cuando se aplica a la cantidad más alta.",
        "evidence": [
          {
            "calculation": [
              "div",
              [
                "mul",
                [
                  "sub",
                  80,
                  20
                ],
                3
              ],
              4
            ],
            "answer": 45
          },
          {
            "calculation": [
              "sub",
              [
                "div",
                [
                  "mul",
                  80,
                  3
                ],
                4
              ],
              20
            ],
            "answer": 40
          }
        ]
      }
    },
    {
      "id": "P0089",
      "version": 1,
      "title": "El descuento de la cesta",
      "context": "comerc",
      "structure": "descompte-de-producte-i-de-cistella",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una chaqueta de 80 € tiene un 25 % de descuento. En la misma compra hay unos calcetines de 10 € que no tienen su propio descuento. En caja se aplica un 10 % adicional sobre el total de los dos artículos después de rebajar la chaqueta.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿Qué importe se paga en caja?",
      "solution": {
        "expression": "(80 × 0,75 + 10) × 0,90 = 63",
        "calculation": [
          "mul",
          [
            "add",
            [
              "mul",
              80,
              0.75
            ],
            10
          ],
          0.9
        ],
        "answer": 63,
        "unit": "€",
        "response": "Se pagan 63 €.",
        "steps": [
          "Con el 25 % de descuento, se paga el 75 % del precio de la chaqueta, que son 60 €.",
          "Con los calcetines, la cesta suma 70 €. El 10 % adicional deja el 90 % de ese total, que son 63 €."
        ],
        "note": "La primera base son los 80 € de la chaqueta. La segunda son los 70 € de toda la cesta."
      }
    },
    {
      "id": "P0090",
      "version": 1,
      "title": "Las plazas de la jornada",
      "context": "escola",
      "structure": "augment-parcial-i-total-recalculat",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para una jornada hay 80 plazas en el gimnasio y 50 en el salón de actos. Con una nueva fila de sillas, las plazas del gimnasio aumentan un 25 %. Luego se reserva para invitados el 10 % del nuevo total de plazas de las dos salas.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "question": "¿Cuántas plazas se pueden ofrecer a las familias?",
      "solution": {
        "expression": "(80 × 1,25 + 50) × 0,90 = 135",
        "calculation": [
          "mul",
          [
            "add",
            [
              "mul",
              80,
              1.25
            ],
            50
          ],
          0.9
        ],
        "answer": 135,
        "unit": "plazas",
        "response": "Se pueden ofrecer 135 plazas a las familias.",
        "steps": [
          "El gimnasio gana 20 plazas y pasa a tener 100. Con las 50 del salón de actos, hay 150.",
          "La reserva es el 10 % de 150, que son 15 plazas. Las familias pueden ocupar las 135 restantes."
        ],
        "note": "El aumento solo afecta al gimnasio. La reserva se calcula sobre el total actualizado de las dos salas."
      }
    },
    {
      "id": "P0091",
      "version": 1,
      "title": "La etiqueta tapada",
      "context": "comerc",
      "structure": "inversio-de-dos-descomptes",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un puesto, primero se rebaja a la mitad el precio de una mochila. En caja se aplica otro 20 % de descuento sobre el precio ya rebajado. El tique final marca 24 €.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuál era el precio de la mochila antes de las dos rebajas?",
      "solution": {
        "expression": "24 ÷ 4 × 5 × 2 = 60",
        "calculation": [
          "mul",
          [
            "mul",
            [
              "div",
              24,
              4
            ],
            5
          ],
          2
        ],
        "answer": 60,
        "unit": "€",
        "response": "El precio inicial era de 60 €.",
        "steps": [
          "Después de la segunda rebaja se pagan cuatro quintos del precio anterior. Si cuatro quintos son 24 €, un quinto son 6 € y el precio anterior era de 30 €.",
          "Los 30 € ya eran la mitad del precio inicial. Doblamos esta cantidad."
        ],
        "note": "Lo comprobamos pasando de 60 € a 30 €. Un 20 % menos de 30 € son 24 €."
      }
    },
    {
      "id": "P0092",
      "version": 1,
      "title": "La cosecha del banco de semillas",
      "context": "hort",
      "structure": "base-comuna-i-base-successiva",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Se han recogido 200 sobres de semillas. Se guarda el 25 % del total inicial para sembrar y se dona un 10 %, también del total inicial, a la escuela. De los sobres que quedan después de esos dos repartos, un 20 % va a la biblioteca.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos sobres quedan para el punto de intercambio después de los tres repartos?",
      "solution": {
        "expression": "(200 − 50 − 20) × 80 ÷ 100 = 104",
        "calculation": [
          "div",
          [
            "mul",
            [
              "sub",
              [
                "sub",
                200,
                [
                  "div",
                  [
                    "mul",
                    200,
                    25
                  ],
                  100
                ]
              ],
              [
                "div",
                [
                  "mul",
                  200,
                  10
                ],
                100
              ]
            ],
            80
          ],
          100
        ],
        "answer": 104,
        "unit": "sobres",
        "response": "Quedan 104 sobres para el punto de intercambio.",
        "steps": [
          "Se guardan 50 sobres y se donan 20 a la escuela. Ambos porcentajes se calculan sobre los 200 iniciales. Quedan 130.",
          "El 20 % de 130 son 26 sobres para la biblioteca. El punto de intercambio recibe los 104 restantes."
        ],
        "note": "Los dos primeros porcentajes tienen la misma base. El de la biblioteca toma como base los 130 sobres que quedan."
      }
    },
    {
      "id": "P0093",
      "version": 1,
      "title": "El cupón de caja",
      "context": "comerc",
      "structure": "descompte-condicionat-per-llindar",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una sudadera cuesta 80 € y tiene una rebaja del 25 %. Un cupón da un 10 % adicional sobre el precio rebajado si, antes de aplicar el cupón, el importe es de 60 € o más.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué precio final tendrá que pagar quien compre la sudadera? Justifica si se puede usar el cupón.",
      "solution": {
        "kind": "justification",
        "response": "Se pagan 54 €. El cupón se puede aplicar porque el importe rebajado es justo de 60 €.",
        "steps": [
          "El 25 % de 80 € es una cuarta parte, es decir, 20 €. Después de la rebaja, el importe es de 60 € y alcanza el mínimo del cupón.",
          "El 10 % de 60 € es una décima parte, 6 €. Restamos esos 6 € del precio rebajado."
        ],
        "note": "El umbral se comprueba después de la primera rebaja y antes de aplicar el cupón.",
        "evidence": [
          {
            "calculation": [
              "sub",
              80,
              [
                "div",
                80,
                4
              ]
            ],
            "answer": 60
          },
          {
            "calculation": [
              "sub",
              60,
              [
                "div",
                60,
                10
              ]
            ],
            "answer": 54
          }
        ]
      }
    },
    {
      "id": "P0094",
      "version": 1,
      "title": "El depósito de la brigada",
      "context": "aigua",
      "structure": "tres-canvis-i-fraccio-final",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un depósito contiene 200 litros de agua. Por la mañana, la brigada usa el 50 %. Al mediodía añade una cantidad igual al 20 % del agua que queda. Por la tarde usa el 25 % del contenido que hay después de añadir el agua.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué porcentaje del agua inicial queda en el depósito al final del día?",
      "solution": {
        "expression": "90 × 100 ÷ 200 = 45",
        "calculation": [
          "div",
          [
            "mul",
            [
              "div",
              [
                "mul",
                [
                  "add",
                  [
                    "div",
                    200,
                    2
                  ],
                  [
                    "div",
                    [
                      "div",
                      200,
                      2
                    ],
                    5
                  ]
                ],
                3
              ],
              4
            ],
            100
          ],
          200
        ],
        "answer": 45,
        "unit": "%",
        "response": "Al final del día queda el 45 % del agua inicial.",
        "steps": [
          "Por la mañana quedan 100 litros. Al mediodía se añade un quinto, 20 litros, y el depósito pasa a tener 120.",
          "Por la tarde se usa una cuarta parte, 30 litros. Quedan 90, que son 45 de cada 100 litros iniciales."
        ],
        "note": "El 25 % de la tarde se calcula sobre 120 litros. El porcentaje de la respuesta, sobre 200."
      }
    },
    {
      "id": "P0095",
      "version": 1,
      "title": "La segunda rebaja exacta",
      "context": "comerc",
      "structure": "percentatge-desconegut-amb-objectiu",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un juego de mesa costaba 80 €. La tienda ya ha aplicado un 25 % de descuento. Quiere aplicar una segunda rebaja sobre el precio actual para que el descuento total sea del 40 % sobre el precio original.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "percentatges",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿De qué porcentaje debe ser la segunda rebaja?",
      "solution": {
        "expression": "(60 − 48) × 100 ÷ 60 = 20",
        "calculation": [
          "div",
          [
            "mul",
            [
              "sub",
              [
                "div",
                [
                  "mul",
                  80,
                  3
                ],
                4
              ],
              [
                "div",
                [
                  "mul",
                  80,
                  3
                ],
                5
              ]
            ],
            100
          ],
          [
            "div",
            [
              "mul",
              80,
              3
            ],
            4
          ]
        ],
        "answer": 20,
        "unit": "%",
        "response": "La segunda rebaja debe ser del 20 %.",
        "steps": [
          "La primera rebaja quita una cuarta parte de 80 € y deja el precio en 60 €.",
          "Con un 40 % de descuento total, se pagarían tres quintos de 80 €, que son 48 €. Hay que quitar 12 € más.",
          "Esos 12 € son un quinto de los 60 € actuales."
        ],
        "note": "El 40 % toma como base el precio original. La segunda rebaja toma como base el precio de 60 €."
      }
    },
    {
      "id": "P0096",
      "version": 1,
      "title": "Las entradas de la muestra",
      "context": "cultura",
      "structure": "dos-factors-sobre-quantitats-diferents",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El año pasado se vendieron 80 entradas a 4 € cada una para una muestra. Este año se han vendido un 50 % más de entradas, pero el precio de cada entrada ha bajado un 25 % respecto al año pasado.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "percentatges",
        "decimals",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "question": "¿En qué porcentaje ha variado la recaudación respecto al año pasado? Indica si ha subido o ha bajado.",
      "solution": {
        "expression": "(360 − 320) × 100 ÷ 320 = 12,5",
        "calculation": [
          "div",
          [
            "mul",
            [
              "sub",
              [
                "mul",
                [
                  "mul",
                  80,
                  1.5
                ],
                [
                  "mul",
                  4,
                  0.75
                ]
              ],
              [
                "mul",
                80,
                4
              ]
            ],
            100
          ],
          [
            "mul",
            80,
            4
          ]
        ],
        "answer": 12.5,
        "unit": "%",
        "response": "La recaudación ha subido un 12,5 %.",
        "steps": [
          "El año pasado se recaudaron 80 × 4 € = 320 €.",
          "Este año se han vendido 120 entradas a 3 € y se han recaudado 360 €.",
          "La recaudación ha subido 40 €, que son el 12,5 % de los 320 € del año pasado."
        ],
        "note": "El 50 % cambia el número de entradas y el 25 % cambia el precio unitario. Para comparar los ingresos, hay que multiplicar las entradas por su precio."
      }
    },
    {
      "id": "P0097",
      "version": 1,
      "title": "Tarta y compota",
      "context": "cuina",
      "structure": "repartiment-despres-de-cinc-passos",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay 3 cestas con 4 manzanas cada una. Usamos 2 para la tarta y, de las que quedan, la mitad para la compota. Después me como una y reparto las que quedan a partes iguales entre mi hermano y yo.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas manzanas nos tocan a cada uno?",
      "solution": {
        "expression": "((3 × 4 − 2) ÷ 2 − 1) ÷ 2 = 2",
        "calculation": [
          "div",
          [
            "sub",
            [
              "div",
              [
                "sub",
                [
                  "mul",
                  3,
                  4
                ],
                2
              ],
              2
            ],
            1
          ],
          2
        ],
        "answer": 2,
        "unit": "manzanas",
        "response": "Nos tocan 2 manzanas a cada uno.",
        "steps": [
          "Hay 12 manzanas. Sacamos 2 para la tarta y quedan 10.",
          "Para la compota se usa la mitad. Quedan 5. Me como una y quedan 4.",
          "Repartimos las 4 manzanas entre 2 personas."
        ],
        "note": "La mitad se calcula después de quitar las manzanas de la tarta."
      }
    },
    {
      "id": "P0098",
      "version": 1,
      "title": "Las pegatinas de los sobres",
      "context": "material-escolar",
      "structure": "reunir-treure-i-repartir",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Queremos llenar 3 sobres con la misma cantidad de pegatinas. Tenemos 3 hojas con 3 pegatinas cada una y 5 pegatinas sueltas. Antes de llenar los sobres, apartamos 2 para decorar la caja.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas pegatinas pondremos en cada sobre?",
      "solution": {
        "expression": "(3 × 3 + 5 − 2) ÷ 3 = 4",
        "calculation": [
          "div",
          [
            "sub",
            [
              "add",
              [
                "mul",
                3,
                3
              ],
              5
            ],
            2
          ],
          3
        ],
        "answer": 4,
        "unit": "pegatinas",
        "response": "Pondremos 4 pegatinas en cada sobre.",
        "steps": [
          "Las hojas tienen 9 pegatinas. Con las 5 sueltas, tenemos 14.",
          "Apartamos 2 y repartimos las 12 restantes entre 3 sobres."
        ],
        "note": ""
      }
    },
    {
      "id": "P0099",
      "version": 1,
      "title": "Los huevos de la vecina",
      "context": "cuina",
      "structure": "dos-grups-i-repartiment",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "La vecina nos trae 4 cajitas con 3 huevos cada una. En casa ya teníamos 2. Hacemos dos tortillas con 3 huevos por tortilla. Queremos repartir los huevos que quedan entre 4 hueveras, con la misma cantidad en cada una.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos huevos pondremos en cada huevera?",
      "solution": {
        "expression": "(4 × 3 + 2 − 2 × 3) ÷ 4 = 2",
        "calculation": [
          "div",
          [
            "sub",
            [
              "add",
              [
                "mul",
                4,
                3
              ],
              2
            ],
            [
              "mul",
              2,
              3
            ]
          ],
          4
        ],
        "answer": 2,
        "unit": "huevos",
        "response": "Pondremos 2 huevos en cada huevera.",
        "steps": [
          "Las cajitas traen 12 huevos. Con los 2 de casa, tenemos 14.",
          "Las dos tortillas necesitan 6 huevos. Quedan 8 huevos para repartir entre 4 hueveras."
        ],
        "note": ""
      }
    },
    {
      "id": "P0100",
      "version": 1,
      "title": "Antes de abrir la caja",
      "context": "jocs",
      "structure": "reconstruccio-de-la-quantitat-inicial",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Al final del juego, cada uno de los 3 jugadores tiene 2 fichas y aún quedan 3 en la caja. Antes de repartir las fichas, habíamos añadido 2 a la caja.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas fichas había en la caja antes de que añadiéramos esas dos?",
      "solution": {
        "expression": "3 × 2 + 3 − 2 = 7",
        "calculation": [
          "sub",
          [
            "add",
            [
              "mul",
              3,
              2
            ],
            3
          ],
          2
        ],
        "answer": 7,
        "unit": "fichas",
        "response": "En la caja había 7 fichas.",
        "steps": [
          "Los jugadores tienen 6 fichas en total. Con las 3 que quedan en la caja, contamos 9.",
          "De esas 9, dos las habíamos añadido. Al principio había 7."
        ],
        "note": "Para recuperar la cantidad inicial, deshacemos el cambio que hicimos antes de repartir."
      }
    },
    {
      "id": "P0101",
      "version": 1,
      "title": "Galletas para mañana",
      "context": "berenar",
      "structure": "dues-safates-i-consum-en-grups",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Las galletas que sobren irán en 2 cajas, con la misma cantidad en cada caja. En la merienda hay 2 bandejas con 6 galletas cada una y una tercera bandeja con 4. Tres niños comen 2 galletas cada uno.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas galletas guardaremos en cada caja?",
      "solution": {
        "expression": "(2 × 6 + 4 − 3 × 2) ÷ 2 = 5",
        "calculation": [
          "div",
          [
            "sub",
            [
              "add",
              [
                "mul",
                2,
                6
              ],
              4
            ],
            [
              "mul",
              3,
              2
            ]
          ],
          2
        ],
        "answer": 5,
        "unit": "galletas",
        "response": "Guardaremos 5 galletas en cada caja.",
        "steps": [
          "Hay 12 galletas en las dos primeras bandejas y 4 en la tercera.",
          "Los niños comen 6 galletas. Quedan 10 para repartir entre 2 cajas."
        ],
        "note": ""
      }
    },
    {
      "id": "P0102",
      "version": 1,
      "title": "El marcador del juego",
      "context": "jocs",
      "structure": "comparacio-de-dos-marcadors",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El equipo Azul gana 3 rondas de 4 puntos cada una, suma 2 puntos de bonificación y pierde 3 por una falta. El Verde gana 2 rondas de 5 puntos cada una, suma 3 puntos de bonificación y pierde un punto por una falta.",
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
      "question": "¿Qué equipo gana y por cuántos puntos?",
      "solution": {
        "expression": "(2 × 5 + 3 − 1) − (3 × 4 + 2 − 3) = 1",
        "calculation": [
          "sub",
          [
            "sub",
            [
              "add",
              [
                "mul",
                2,
                5
              ],
              3
            ],
            1
          ],
          [
            "sub",
            [
              "add",
              [
                "mul",
                3,
                4
              ],
              2
            ],
            3
          ]
        ],
        "answer": 1,
        "unit": "punto",
        "response": "Gana el equipo Verde por 1 punto.",
        "steps": [
          "El Azul acaba con 12 + 2 − 3 = 11 puntos.",
          "El Verde acaba con 10 + 3 − 1 = 12 puntos. Comparamos los dos marcadores."
        ],
        "note": ""
      }
    },
    {
      "id": "P0103",
      "version": 1,
      "title": "Los minutos de la gincana",
      "context": "esport",
      "structure": "marge-amb-pauses",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos 20 minutos para hacer una gincana. Haremos 3 pruebas de 4 minutos cada una. Antes de empezar, tardaremos 3 minutos en preparar el material. Entre las pruebas haremos 2 pausas de un minuto cada una.",
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
      "question": "¿Cuántos minutos nos sobrarán cuando terminemos la gincana?",
      "solution": {
        "expression": "20 − (3 × 4 + 3 + 2) = 3",
        "calculation": [
          "sub",
          20,
          [
            "add",
            [
              "add",
              [
                "mul",
                3,
                4
              ],
              3
            ],
            2
          ]
        ],
        "answer": 3,
        "unit": "minutos",
        "response": "Nos sobrarán 3 minutos.",
        "steps": [
          "Las tres pruebas duran 12 minutos.",
          "Añadimos los 3 minutos de preparación y los 2 de pausa. En total usamos 17 minutos.",
          "De 20 a 17 hay 3 minutos de diferencia."
        ],
        "note": "La preparación se hace antes de las pruebas, aunque el texto la menciona después."
      }
    },
    {
      "id": "P0104",
      "version": 1,
      "title": "Cordel para el huerto",
      "context": "hort",
      "structure": "talls-i-repartiment",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Tenemos una bobina de 20 metros de cordel. Cortamos 4 trozos de 3 metros para el huerto. Con el cordel que sobra hacemos dos trozos de la misma longitud.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos metros mide cada uno de los dos últimos trozos?",
      "solution": {
        "expression": "(20 − 4 × 3) ÷ 2 = 4",
        "calculation": [
          "div",
          [
            "sub",
            20,
            [
              "mul",
              4,
              3
            ]
          ],
          2
        ],
        "answer": 4,
        "unit": "metros",
        "response": "Cada uno de los dos últimos trozos mide 4 metros.",
        "steps": [
          "Los 4 trozos del huerto miden 12 metros en total.",
          "Quedan 8 metros. Si los cortamos por la mitad, cada trozo mide 4 metros."
        ],
        "note": ""
      }
    },
    {
      "id": "P0105",
      "version": 1,
      "title": "Los bancos de la plaza",
      "context": "plaça",
      "structure": "capacitat-i-ocupacio-de-dos-grups",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En la plaza se sientan 7 niños de un grupo y 8 de otro. Hay 3 bancos de 4 plazas y 2 bancos de 2 plazas. Al principio todos los bancos estaban vacíos.",
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
      "question": "¿Cuántas plazas quedan libres una vez que se ha sentado todo el mundo?",
      "solution": {
        "expression": "(3 × 4 + 2 × 2) − (7 + 8) = 1",
        "calculation": [
          "sub",
          [
            "add",
            [
              "mul",
              3,
              4
            ],
            [
              "mul",
              2,
              2
            ]
          ],
          [
            "add",
            7,
            8
          ]
        ],
        "answer": 1,
        "unit": "plaza",
        "response": "Queda libre 1 plaza.",
        "steps": [
          "Los bancos grandes ofrecen 12 plazas y los pequeños, 4. En total hay 16.",
          "Se sientan 15 niños. Restamos las plazas ocupadas de las 16 disponibles."
        ],
        "note": ""
      }
    },
    {
      "id": "P0106",
      "version": 1,
      "title": "Los botes de rotuladores",
      "context": "material-escolar",
      "structure": "traspas-i-comparacio",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En el bote azul hay 9 rotuladores y en el verde hay 5. Pasamos 3 rotuladores del bote azul al verde. A continuación, prestamos 2 rotuladores del bote verde a otra clase.",
      "features": [
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "Al terminar, ¿qué diferencia hay entre el número de rotuladores de los dos botes?",
      "solution": {
        "expression": "(9 − 3) − (5 + 3 − 2) = 0",
        "calculation": [
          "sub",
          [
            "sub",
            9,
            3
          ],
          [
            "sub",
            [
              "add",
              5,
              3
            ],
            2
          ]
        ],
        "answer": 0,
        "unit": "rotuladores de diferencia",
        "response": "Los dos botes quedan con 6 rotuladores cada uno.",
        "steps": [
          "El bote azul pierde 3 rotuladores y se queda con 6.",
          "El bote verde recibe esos 3 rotuladores y pasa a tener 8. Presta 2 a la otra clase y se queda con 6."
        ],
        "note": "Al pasar rotuladores de un bote a otro, hay que restarlos en un bote y sumarlos en el otro."
      }
    },
    {
      "id": "P0107",
      "version": 1,
      "title": "El robot en la alfombra",
      "context": "robotica",
      "structure": "desplacaments-en-sentits-oposats",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Un robot está en la casilla 5 de una fila numerada. Da 3 saltos hacia delante de 4 casillas cada uno y después da 2 saltos hacia atrás de 3 casillas cada uno.",
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
      "question": "¿En qué casilla termina el robot?",
      "solution": {
        "expression": "5 + 3 × 4 − 2 × 3 = 11",
        "calculation": [
          "sub",
          [
            "add",
            5,
            [
              "mul",
              3,
              4
            ]
          ],
          [
            "mul",
            2,
            3
          ]
        ],
        "answer": 11,
        "unit": "casilla",
        "response": "El robot termina en la casilla 11.",
        "steps": [
          "Con los 3 saltos hacia delante avanza 12 casillas y llega a la 17.",
          "Con los 2 saltos hacia atrás retrocede 6 casillas y llega a la 11."
        ],
        "note": "También puedes dibujar una recta numérica y marcar en ella cada salto."
      }
    },
    {
      "id": "P0108",
      "version": 1,
      "title": "El precio de la entrada",
      "context": "sortida",
      "structure": "preu-unitari-a-partir-del-canvi",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Al comprar 3 entradas iguales para una exposición, nos devuelven 2 € de cambio. Habíamos pagado con 4 monedas de 2 € y 3 monedas de 1 €.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué precio tenía cada entrada?",
      "solution": {
        "expression": "(4 × 2 + 3 − 2) ÷ 3 = 3",
        "calculation": [
          "div",
          [
            "sub",
            [
              "add",
              [
                "mul",
                4,
                2
              ],
              3
            ],
            2
          ],
          3
        ],
        "answer": 3,
        "unit": "€",
        "response": "Cada entrada costaba 3 €.",
        "steps": [
          "Las cuatro monedas de 2 € suman 8 €. Con las otras tres, dimos 11 €.",
          "Como nos devuelven 2 €, las 3 entradas cuestan 9 € en total.",
          "Dividimos los 9 € entre las 3 entradas."
        ],
        "note": ""
      }
    },
    {
      "id": "P0109",
      "version": 1,
      "title": "Las pinzas del tendedero",
      "context": "casa",
      "structure": "reconstruccio-amb-dos-canvis",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Al final nos quedan 2 pinzas en cada uno de los 3 tendederos y ninguna en la cesta. Antes de colocarlas en los tendederos, habíamos prestado 3 pinzas a la vecina y después habíamos encontrado 2 en el cajón, que añadimos a la cesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas pinzas había en la cesta antes de prestar las de la vecina?",
      "solution": {
        "expression": "3 × 2 − 2 + 3 = 7",
        "calculation": [
          "add",
          [
            "sub",
            [
              "mul",
              3,
              2
            ],
            2
          ],
          3
        ],
        "answer": 7,
        "unit": "pinzas",
        "response": "Al principio había 7 pinzas en la cesta.",
        "steps": [
          "Ahora hay 6 pinzas en los tendederos.",
          "Descontamos las 2 del cajón. Antes de añadirlas teníamos 4.",
          "Volvemos a contar las 3 que prestamos a la vecina."
        ],
        "note": ""
      }
    },
    {
      "id": "P0110",
      "version": 1,
      "title": "El monedero de la feria",
      "context": "fira",
      "structure": "saldo-inicial-amb-compra-i-ingres",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Al final de la tarde, a Joana le quedan 6 € en el monedero. En la feria había comprado 2 tiques de 3 € cada uno. Después de la compra, su abuelo le había dado 4 €, que había guardado en el monedero.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánto dinero llevaba antes de comprar los tiques?",
      "solution": {
        "expression": "6 − 4 + 2 × 3 = 8",
        "calculation": [
          "add",
          [
            "sub",
            6,
            4
          ],
          [
            "mul",
            2,
            3
          ]
        ],
        "answer": 8,
        "unit": "€",
        "response": "Antes de comprar los tiques llevaba 8 €.",
        "steps": [
          "De los 6 € finales quitamos los 4 € que recibió. Justo después de comprar le quedaban 2 €.",
          "Los dos tiques habían costado 6 €. Sumamos ese importe a los 2 € que le quedaban."
        ],
        "note": ""
      }
    },
    {
      "id": "P0111",
      "version": 1,
      "title": "¿De dónde ha salido la rana?",
      "context": "joc",
      "structure": "posicio-inicial-a-la-recta",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una rana de juguete termina en la casilla 13. Antes de llegar ahí, había dado 2 saltos hacia delante de 4 casillas cada uno y, justo después, había retrocedido 3 casillas.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿En qué casilla estaba antes del primer salto?",
      "solution": {
        "expression": "13 + 3 − 2 × 4 = 8",
        "calculation": [
          "sub",
          [
            "add",
            13,
            3
          ],
          [
            "mul",
            2,
            4
          ]
        ],
        "answer": 8,
        "unit": "casilla",
        "response": "La rana estaba en la casilla 8.",
        "steps": [
          "Deshacemos el retroceso. Antes de retroceder estaba en la casilla 16.",
          "Los dos saltos hacia delante sumaban 8 casillas. Volvemos 8 casillas atrás desde la 16."
        ],
        "note": "También puedes dibujar la fila y marcar los saltos hacia atrás."
      }
    },
    {
      "id": "P0112",
      "version": 1,
      "title": "Los libros de los estantes",
      "context": "biblioteca",
      "structure": "refer-grups-i-recuperar-repartiment-inicial",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Al principio había el mismo número de libros en cada uno de 3 estantes. Prestamos 3 y llevamos uno al taller de reparación. Pusimos los demás libros en 4 cajas, con 2 libros en cada una.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos libros había en cada estante al principio?",
      "solution": {
        "expression": "(4 × 2 + 3 + 1) ÷ 3 = 4",
        "calculation": [
          "div",
          [
            "add",
            [
              "add",
              [
                "mul",
                4,
                2
              ],
              3
            ],
            1
          ],
          3
        ],
        "answer": 4,
        "unit": "libros",
        "response": "Al principio había 4 libros en cada estante.",
        "steps": [
          "Ahora hay 8 libros en las cajas.",
          "Volvemos a contar los 3 prestados y el del taller. Al principio había 12.",
          "Repartimos esos 12 libros entre los 3 estantes."
        ],
        "note": ""
      }
    },
    {
      "id": "P0113",
      "version": 1,
      "title": "Los claveles del jarrón",
      "context": "flors",
      "structure": "desfer-una-meitat-i-una-suma",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un jarrón hay 5 claveles. Justo antes habíamos puesto 2 claveles nuevos. Antes de añadirlos, habíamos regalado la mitad de los claveles que había en el jarrón.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos claveles había en el jarrón antes de hacer el regalo?",
      "solution": {
        "expression": "(5 − 2) × 2 = 6",
        "calculation": [
          "mul",
          [
            "sub",
            5,
            2
          ],
          2
        ],
        "answer": 6,
        "unit": "claveles",
        "response": "Al principio había 6 claveles en el jarrón.",
        "steps": [
          "Antes de poner los 2 claveles nuevos, quedaban 3.",
          "Esos 3 eran la mitad de los claveles que había antes del regalo. En la otra mitad también había 3."
        ],
        "note": "Para deshacer la retirada de la mitad, doblamos la cantidad que había quedado."
      }
    },
    {
      "id": "P0114",
      "version": 1,
      "title": "Bandejas para el horno",
      "context": "cuina",
      "structure": "residu-obliga-a-afegir-recipient",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Júlia prepara 3 cuencos con 4 panecillos cada uno y después hace 2 más. En cada bandeja del horno caben como máximo 4 panecillos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas bandejas hay que preparar como mínimo para poner todos los panecillos?",
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 4 bandejas. Podemos llenar tres y poner 2 panecillos en la cuarta.",
        "steps": [
          "En total hay 14 panecillos.",
          "En tres bandejas llenas caben 12. Como aún quedan 2, hace falta otra bandeja."
        ],
        "note": "La última bandeja puede quedar a medio llenar.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "mul",
                3,
                4
              ],
              2
            ],
            "answer": 14
          },
          {
            "calculation": [
              "mul",
              3,
              4
            ],
            "answer": 12
          },
          {
            "calculation": [
              "sub",
              14,
              [
                "mul",
                3,
                4
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "mul",
              4,
              4
            ],
            "answer": 16
          }
        ]
      }
    },
    {
      "id": "P0115",
      "version": 1,
      "title": "Lotes para el puesto",
      "context": "fira",
      "structure": "residu-es-guarda",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para hacer lotes para la feria tenemos 2 cajas de 6 postales y 5 postales sueltas. Separamos 2 para decorar el puesto. Con las que quedan, hacemos tantos lotes de 4 como podamos. Las postales que no completen un lote se guardan en un cajón.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cómo quedarán repartidas las postales entre los lotes y el cajón?",
      "solution": {
        "kind": "justification",
        "response": "Quedarán 3 lotes completos y 3 postales en el cajón.",
        "steps": [
          "De las 17 postales que teníamos, quedan 15 después de apartar las dos de la decoración.",
          "Con 12 postales hacemos 3 lotes. Guardamos las 3 que quedan porque no alcanzan para un cuarto lote."
        ],
        "note": "Contamos solo los lotes completos.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "add",
                [
                  "mul",
                  2,
                  6
                ],
                5
              ],
              2
            ],
            "answer": 15
          },
          {
            "calculation": [
              "mul",
              3,
              4
            ],
            "answer": 12
          },
          {
            "calculation": [
              "sub",
              15,
              [
                "mul",
                3,
                4
              ]
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0116",
      "version": 1,
      "title": "Completar los paquetes",
      "context": "material-escolar",
      "structure": "residu-es-completa",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay 3 cajas con 5 lápices cada una y un lápiz suelto. Sacamos 2 para la mesa de dibujo. Queremos preparar paquetes de 4 lápices con todos los que nos quedan, sin dejar ninguno suelto. Podemos ir a buscar más lápices al armario.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos lápices tenemos que ir a buscar como mínimo?",
      "solution": {
        "expression": "4 × 4 − (3 × 5 + 1 − 2) = 2",
        "calculation": [
          "sub",
          [
            "mul",
            4,
            4
          ],
          [
            "sub",
            [
              "add",
              [
                "mul",
                3,
                5
              ],
              1
            ],
            2
          ]
        ],
        "answer": 2,
        "unit": "lápices",
        "response": "Tenemos que ir a buscar 2 lápices.",
        "steps": [
          "Tenemos 14 lápices después de sacar los dos para la mesa.",
          "Podemos hacer 3 paquetes y nos quedan 2 lápices sueltos. Para completar el cuarto paquete, nos faltan 2."
        ],
        "note": "Si cogiéramos solo uno, todavía quedarían 3 lápices sin empaquetar."
      }
    },
    {
      "id": "P0117",
      "version": 1,
      "title": "Cocas a partes iguales",
      "context": "berenar",
      "structure": "residu-que-es-pot-partir",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos 2 bandejas con 3 cocas pequeñas cada una. Guardamos una entera para mañana. Repartimos todo lo demás a partes iguales entre 4 niños. Las cocas se pueden cortar.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Cuánta coca le toca a cada niño?",
      "solution": {
        "expression": "(2 × 3 − 1) ÷ 4 = 5/4",
        "calculation": [
          "div",
          [
            "sub",
            [
              "mul",
              2,
              3
            ],
            1
          ],
          4
        ],
        "answer": 1.25,
        "unit": "cocas",
        "response": "A cada niño le toca una coca entera y un cuarto de coca.",
        "steps": [
          "De las 6 cocas guardamos una. Quedan 5 para repartir.",
          "Damos una coca entera a cada niño. Cortamos la coca que sobra en 4 partes iguales y damos una a cada uno."
        ],
        "note": "Podemos partir la coca que sobra para que todos reciban la misma cantidad.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 4,
          "caption": "De la quinta coca, cada niño recibe un cuarto, además de la coca entera."
        }
      }
    },
    {
      "id": "P0118",
      "version": 1,
      "title": "Las piezas de los equipos",
      "context": "joc",
      "structure": "residu-es-distribueix-segons-una-regla",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En el taller hay 3 bolsas con 5 piezas cada una. Retiramos una pieza que está rota. Queremos repartir todas las demás entre 4 equipos. Primero damos a cada equipo tantas piezas como podamos, la misma cantidad para todos. Si sobran, damos una más a cada uno de los primeros equipos de la lista hasta que se acaben.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cómo quedará el reparto entre los cuatro equipos?",
      "solution": {
        "kind": "justification",
        "response": "Los equipos 1 y 2 recibirán 4 piezas cada uno. Los equipos 3 y 4 recibirán 3 cada uno.",
        "steps": [
          "Quitamos la pieza rota. Quedan 14 piezas.",
          "Damos 3 piezas a cada equipo y usamos 12. Las 2 que sobran van, de una en una, a los dos primeros equipos."
        ],
        "note": "La regla indica a qué equipos van las piezas sobrantes.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "mul",
                3,
                5
              ],
              1
            ],
            "answer": 14
          },
          {
            "calculation": [
              "sub",
              14,
              [
                "mul",
                4,
                3
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "add",
              3,
              1
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0119",
      "version": 1,
      "title": "Las macetas del huerto",
      "context": "hort",
      "structure": "reconstruccio-a-partir-de-grups-i-residu",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Ahora tenemos 3 bandejas llenas con 4 macetas en cada una y 2 macetas que no han cabido. Antes de llenarlas, habíamos regalado 4 macetas a la clase de al lado y habíamos recibido una nueva.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas macetas teníamos antes del regalo y antes de recibir la nueva?",
      "solution": {
        "expression": "3 × 4 + 2 − 1 + 4 = 17",
        "calculation": [
          "add",
          [
            "sub",
            [
              "add",
              [
                "mul",
                3,
                4
              ],
              2
            ],
            1
          ],
          4
        ],
        "answer": 17,
        "unit": "macetas",
        "response": "Al principio teníamos 17 macetas.",
        "steps": [
          "Ahora tenemos 12 macetas en las bandejas y 2 fuera. En total, 14.",
          "Descontamos la que hemos recibido y recuperamos las 4 que habíamos regalado."
        ],
        "note": "Las macetas que no han cabido en las bandejas también forman parte del total actual."
      }
    },
    {
      "id": "P0120",
      "version": 1,
      "title": "Asientos para el ensayo",
      "context": "teatre",
      "structure": "reconstruccio-i-residu-que-requereix-un-grup-mes",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Al principio del ensayo había un grupo de niños. Más tarde se han incorporado 2. Después se han marchado dos grupos de 4 niños cada uno y solo han quedado 5 en la sala. Mañana volverán solo los niños que estaban al principio. Queremos sentarlos en bancos de 3 plazas.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos bancos harán falta como mínimo para el ensayo de mañana?",
      "solution": {
        "kind": "justification",
        "response": "Harán falta 4 bancos. Habrá 11 niños y quedará una plaza libre en total.",
        "steps": [
          "Antes de que se marcharan los dos grupos había 5 + 8 = 13 niños. Quitamos los 2 que se habían incorporado. Mañana vendrán 11.",
          "Tres bancos ofrecen 9 plazas. Los 2 niños que aún quedan por sentar necesitan un cuarto banco."
        ],
        "note": "Primero recuperamos el número inicial de niños. Después decidimos qué hacer con quienes no caben en tres bancos.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "add",
                5,
                [
                  "mul",
                  2,
                  4
                ]
              ],
              2
            ],
            "answer": 11
          },
          {
            "calculation": [
              "mul",
              3,
              3
            ],
            "answer": 9
          },
          {
            "calculation": [
              "sub",
              11,
              [
                "mul",
                3,
                3
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "mul",
              4,
              3
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0121",
      "version": 1,
      "title": "El puesto de meriendas",
      "context": "mercat",
      "structure": "canvi-amb-dues-menes-de-producte",
      "level": "mitja",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "En el puesto del mercado compramos 2 bocadillos a 3 € cada uno y una bolsa de fruta a 4 €. Pagamos con un billete de 20 €.",
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
      "question": "¿Cuánto nos tienen que devolver?",
      "solution": {
        "expression": "20 − (2 × 3 + 4) = 10",
        "calculation": [
          "sub",
          20,
          [
            "add",
            [
              "mul",
              2,
              3
            ],
            4
          ]
        ],
        "answer": 10,
        "unit": "€",
        "response": "Nos tienen que devolver 10 €.",
        "steps": [
          "Los dos bocadillos cuestan 6 €. Con la fruta, el precio total es de 10 €.",
          "Restamos el precio total de los 20 € que hemos dado."
        ],
        "note": ""
      }
    },
    {
      "id": "P0122",
      "version": 1,
      "title": "El monedero y las monedas",
      "context": "fira",
      "structure": "sumar-moneda-i-descomptar-la-compra",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Biel compra 2 cuadernos de 4 € cada uno y un estuche de 3 €. Para pagar da un billete de 10 € y dos monedas de 2 €.",
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
      "question": "¿Cuántos euros le tienen que devolver?",
      "solution": {
        "expression": "(10 + 2 × 2) − (2 × 4 + 3) = 3",
        "calculation": [
          "sub",
          [
            "add",
            10,
            [
              "mul",
              2,
              2
            ]
          ],
          [
            "add",
            [
              "mul",
              2,
              4
            ],
            3
          ]
        ],
        "answer": 3,
        "unit": "€",
        "response": "Le tienen que devolver 3 €.",
        "steps": [
          "Biel da 10 € más 4 €, es decir, 14 € en total.",
          "Los cuadernos cuestan 8 € y el estuche 3 €. Restamos los 11 € de la compra de los 14 € que ha dado."
        ],
        "note": "El cambio es la diferencia entre lo que da y lo que cuesta la compra."
      }
    },
    {
      "id": "P0123",
      "version": 1,
      "title": "El cambio del tique",
      "context": "papereria",
      "structure": "comprovacio-del-canvi",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Núria ha comprado 2 carpetas de 4 € cada una y un bloc de notas de 3 €. Ha pagado con un billete de 20 € y le han devuelto 7 €.",
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
      "question": "¿Le han devuelto el cambio correcto? Si no, di de cuántos euros es la diferencia.",
      "solution": {
        "kind": "justification",
        "response": "Le tenían que devolver 9 € y le han devuelto 7 €. Le faltan 2 €.",
        "steps": [
          "Las dos carpetas cuestan 8 €. Con el bloc, la compra suma 11 €.",
          "El cambio correcto es 20 − 11 = 9 €. Comparamos los 9 € con los 7 € que le han devuelto."
        ],
        "note": "La diferencia que buscamos es la que hay entre el cambio correcto y el cambio recibido.",
        "evidence": [
          {
            "calculation": [
              "sub",
              20,
              [
                "add",
                [
                  "mul",
                  2,
                  4
                ],
                3
              ]
            ],
            "answer": 9
          },
          {
            "calculation": [
              "sub",
              9,
              7
            ],
            "answer": 2
          }
        ]
      }
    },
    {
      "id": "P0124",
      "version": 1,
      "title": "Cambio para todos",
      "context": "fira",
      "structure": "canvi-compartit-a-parts-iguals",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tres amigos ponen 5 € cada uno para hacer una compra conjunta. Compran 2 bolsas de palomitas de 3 € cada una y una jarra de limonada de 3 €. Se reparten el cambio a partes iguales.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánto recibe cada uno del cambio?",
      "solution": {
        "expression": "(3 × 5 − (2 × 3 + 3)) ÷ 3 = 2",
        "calculation": [
          "div",
          [
            "sub",
            [
              "mul",
              3,
              5
            ],
            [
              "add",
              [
                "mul",
                2,
                3
              ],
              3
            ]
          ],
          3
        ],
        "answer": 2,
        "unit": "€",
        "response": "Cada uno recibe 2 €.",
        "steps": [
          "Entre todos dan 15 €. La compra cuesta 6 € de palomitas y 3 € de limonada.",
          "Les devuelven 6 €. Reparten esos 6 € entre tres personas."
        ],
        "note": ""
      }
    },
    {
      "id": "P0125",
      "version": 1,
      "title": "Restar o contar hasta veinte",
      "context": "mercat",
      "structure": "comparacio-resta-i-complement",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Mar paga con 20 € por 2 tarros de miel de 5 € cada uno y un pan de 3 €. Ella calcula el cambio restando el precio total de los 20 € que ha dado. Pau parte del precio de la compra, cuenta hasta 15 € y después hasta 20 €.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "Compara los dos caminos. ¿Por qué dan el mismo cambio?",
      "solution": {
        "kind": "justification",
        "response": "Los dos dan 7 € porque calculan la diferencia entre los 13 € de la compra y los 20 € que ha dado.",
        "steps": [
          "La compra cuesta 2 × 5 + 3 = 13 €. Mar hace 20 − 13 y obtiene 7 €.",
          "Pau añade 2 € para pasar de 13 € a 15 € y después 5 € más para llegar a 20 €. Suma los dos saltos, 2 € + 5 € = 7 €."
        ],
        "note": "Puedes marcar los saltos en una recta numérica.",
        "evidence": [
          {
            "calculation": [
              "sub",
              20,
              [
                "add",
                [
                  "mul",
                  2,
                  5
                ],
                3
              ]
            ],
            "answer": 7
          },
          {
            "calculation": [
              "add",
              [
                "sub",
                15,
                13
              ],
              [
                "sub",
                20,
                15
              ]
            ],
            "answer": 7
          }
        ]
      }
    },
    {
      "id": "P0126",
      "version": 1,
      "title": "El precio del material del taller",
      "context": "tallers",
      "structure": "comparacio-agrupar-per-persona-o-per-producte",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para 3 participantes de un taller hay que comprar un pincel de 2 € y un bote de pintura de 4 € por persona. Aina suma primero el precio del material de una persona. Jan calcula primero el precio de todos los pinceles y el de todos los botes por separado.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Por qué los dos caminos dan el mismo precio total? Demuéstralo con los cálculos.",
      "solution": {
        "kind": "justification",
        "response": "Los dos obtienen 18 €. Cuentan los mismos 3 pinceles y 3 botes, agrupados de distinta manera.",
        "steps": [
          "Aina calcula 2 + 4 = 6 € de material por persona y hace 3 × 6 = 18 €.",
          "Jan calcula 3 × 2 = 6 € de pinceles y 3 × 4 = 12 € de pintura. Suma 6 + 12 = 18 €."
        ],
        "note": "También puedes dibujar tres parejas de pincel y bote y después agruparlos por tipo.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              [
                "add",
                2,
                4
              ]
            ],
            "answer": 18
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                3,
                2
              ],
              [
                "mul",
                3,
                4
              ]
            ],
            "answer": 18
          }
        ]
      }
    },
    {
      "id": "P0127",
      "version": 1,
      "title": "Del patio a la biblioteca",
      "context": "escola",
      "structure": "hora-final-amb-canvi-dhora",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "A las 10:50 la clase empieza a recoger el material del patio y tarda 5 minutos. Después camina 15 minutos hasta la biblioteca. Allí espera 5 minutos antes de entrar.",
      "features": [
        "suma-resta",
        "combinades"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿A qué hora entra en la biblioteca?",
      "solution": {
        "expression": "50 + 5 + 15 + 5 − 60 = 15",
        "calculation": [
          "sub",
          [
            "add",
            [
              "add",
              [
                "add",
                50,
                5
              ],
              15
            ],
            5
          ],
          60
        ],
        "answer": 15,
        "unit": "minutos después de las 11",
        "response": "La clase entra a las 11:15.",
        "steps": [
          "Acaban de recoger a las 10:55.",
          "Con 15 minutos de camino llegan a las 11:10. Con los 5 minutos de espera, entran a las 11:15."
        ],
        "note": "De las 10:55 a las 11:00 pasan 5 minutos. Aún quedan 10 de camino."
      }
    },
    {
      "id": "P0128",
      "version": 1,
      "title": "La hora de empezar el ensayo",
      "context": "teatre",
      "structure": "trobar-hora-inicial-a-partir-del-final",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El ensayo debe acabar a las 16:30. Hacen falta 3 minutos para preparar el espacio y después se ensaya dos veces, 5 minutos cada vez. Entre los dos ensayos hay una pausa de 4 minutos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿A qué hora tienen que empezar a preparar el espacio, como muy tarde?",
      "solution": {
        "expression": "30 − (3 + 2 × 5 + 4) = 13",
        "calculation": [
          "sub",
          30,
          [
            "add",
            [
              "add",
              3,
              [
                "mul",
                2,
                5
              ]
            ],
            4
          ]
        ],
        "answer": 13,
        "unit": "minutos después de las 16",
        "response": "Tienen que empezar a las 16:13 como muy tarde.",
        "steps": [
          "Las dos veces que ensayan suman 10 minutos. Con la pausa y la preparación, se necesitan 17 minutos.",
          "Contamos 17 minutos hacia atrás desde las 16:30."
        ],
        "note": ""
      }
    },
    {
      "id": "P0129",
      "version": 1,
      "title": "La pista reservada",
      "context": "esport",
      "structure": "marge-dins-duna-franja",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos la pista reservada de las 9:55 a las 10:20. Jugaremos 3 partidos de 5 minutos cada uno. Al final necesitamos 4 minutos para recoger el material.",
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
      "question": "¿Cuántos minutos de la reserva quedarán libres después de recoger?",
      "solution": {
        "expression": "(60 − 55 + 20) − (3 × 5 + 4) = 6",
        "calculation": [
          "sub",
          [
            "add",
            [
              "sub",
              60,
              55
            ],
            20
          ],
          [
            "add",
            [
              "mul",
              3,
              5
            ],
            4
          ]
        ],
        "answer": 6,
        "unit": "minutos",
        "response": "Quedarán 6 minutos libres.",
        "steps": [
          "De las 9:55 a las 10:00 hay 5 minutos y hasta las 10:20 hay 20 más. La reserva dura 25 minutos.",
          "Los partidos y la recogida ocupan 15 + 4 = 19 minutos. Restamos 19 de 25."
        ],
        "note": ""
      }
    },
    {
      "id": "P0130",
      "version": 1,
      "title": "¿Qué autobús nos conviene?",
      "context": "mobilitat",
      "structure": "comparacio-de-dues-hores-darribada",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Podemos coger dos autobuses para ir al museo. El primero sale a las 10:05, tarda 15 minutos y nos deja a 3 minutos a pie del museo. El segundo sale a las 10:10, tarda 8 minutos y nos deja a 4 minutos a pie.",
      "features": [
        "suma-resta",
        "combinades",
        "parentesis"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Con qué autobús llegaremos antes al museo y con cuántos minutos de diferencia?",
      "solution": {
        "expression": "(5 + 15 + 3) − (10 + 8 + 4) = 1",
        "calculation": [
          "sub",
          [
            "add",
            [
              "add",
              5,
              15
            ],
            3
          ],
          [
            "add",
            [
              "add",
              10,
              8
            ],
            4
          ]
        ],
        "answer": 1,
        "unit": "minuto",
        "response": "Con el segundo autobús llegaremos un minuto antes.",
        "steps": [
          "Con el primero llegamos a la parada a las 10:20 y al museo a las 10:23.",
          "Con el segundo llegamos a la parada a las 10:18 y al museo a las 10:22. Comparamos las horas de llegada al museo."
        ],
        "note": ""
      }
    },
    {
      "id": "P0131",
      "version": 1,
      "title": "Los minutos de lectura",
      "context": "biblioteca",
      "structure": "comparacio-de-suma-de-trams-i-resta-de-pausa",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una sesión de lectura empieza a las 10:40 y acaba a las 11:05. Hacemos una pausa de las 10:50 a las 10:55. Laia suma los minutos de los dos tramos de lectura. Pol cuenta todos los minutos de la sesión y resta la pausa.",
      "features": [
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Por qué los dos caminos dan el mismo tiempo de lectura?",
      "solution": {
        "kind": "justification",
        "response": "Los dos dan 20 minutos de lectura. Laia suma los tramos de lectura y Pol descuenta la pausa del tiempo total.",
        "steps": [
          "Laia cuenta 10 minutos de lectura antes de la pausa y 10 después, 5 hasta las 11:00 y 5 más hasta las 11:05.",
          "Pol cuenta 25 minutos de sesión, 20 hasta las 11:00 y 5 más hasta las 11:05. Resta los 5 minutos de pausa."
        ],
        "note": "En una línea del tiempo, ambos métodos cuentan los mismos dos tramos.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "sub",
                50,
                40
              ],
              [
                "add",
                [
                  "sub",
                  60,
                  55
                ],
                5
              ]
            ],
            "answer": 20
          },
          {
            "calculation": [
              "sub",
              [
                "add",
                [
                  "sub",
                  60,
                  40
                ],
                5
              ],
              [
                "sub",
                55,
                50
              ]
            ],
            "answer": 20
          }
        ]
      }
    },
    {
      "id": "P0132",
      "version": 1,
      "title": "¿Una lectura más?",
      "context": "biblioteca",
      "structure": "comprovar-temps-per-afegir-una-activitat",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El club de lectura empieza a las 15:35 y tiene que dejar libre la sala a las 16:00. Cada lectura dura 6 minutos y entre dos lecturas seguidas hacemos una pausa de 3 minutos. Al acabar la última lectura necesitamos 5 minutos para recoger. Tenemos dos lecturas previstas y queremos añadir una tercera.",
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
      "question": "¿Cabrá la tercera lectura en el horario? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Con tres lecturas acabaríamos de recoger a las 16:04, cuatro minutos tarde.",
        "steps": [
          "De las 15:35 a las 16:00 tenemos 25 minutos.",
          "Tres lecturas duran 18 minutos. Entre las tres hay dos pausas que suman 6 minutos. Con los 5 minutos de recogida necesitamos 29 minutos."
        ],
        "note": "La pausa va entre lecturas. Añadir una lectura también añade una pausa.",
        "evidence": [
          {
            "calculation": [
              "sub",
              60,
              35
            ],
            "answer": 25
          },
          {
            "calculation": [
              "add",
              [
                "add",
                [
                  "mul",
                  3,
                  6
                ],
                [
                  "mul",
                  2,
                  3
                ]
              ],
              5
            ],
            "answer": 29
          },
          {
            "calculation": [
              "sub",
              29,
              25
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0133",
      "version": 1,
      "title": "Sopa para seis",
      "context": "receptes",
      "structure": "escalar-afegint-mitja-recepta",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para hacer sopa para 4 personas hacen falta 3/4 de litro de caldo. Hoy haremos sopa para 6 personas, con la misma cantidad por persona. Tenemos un litro de caldo.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos mililitros de caldo nos faltan?",
      "solution": {
        "expression": "750 ÷ 2 × 3 − 1.000 = 125",
        "calculation": [
          "sub",
          [
            "mul",
            [
              "div",
              750,
              2
            ],
            3
          ],
          1000
        ],
        "answer": 125,
        "unit": "mL",
        "response": "Nos faltan 125 mL.",
        "steps": [
          "Para 2 personas hace falta la mitad de 750 mL, que son 375 mL. Para 6 hacen falta tres veces esa cantidad, 1.125 mL.",
          "Restamos los 1.000 mL que tenemos."
        ],
        "note": "Dibuja un litro dividido en octavos. Para 4 personas hacen falta 6 y para 2 personas más, 3 octavos más. Hacen falta 9 y tenemos 8.",
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 6,
          "total": 1000,
          "caption": "Cada parte son 125 mL. Las seis partes sombreadas suman los 750 mL de la receta para cuatro personas."
        }
      }
    },
    {
      "id": "P0134",
      "version": 1,
      "title": "El caldo para los dos platos",
      "context": "receptes",
      "structure": "suma-de-fraccions-de-la-mateixa-unitat",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De una botella de un litro de caldo usaremos 3/8 de litro para cada una de dos sopas y 1/8 de litro para una salsa.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Qué fracción de la botella quedará después de preparar los tres platos?",
      "solution": {
        "expression": "1 − (3/8 + 3/8 + 1/8) = 1/8",
        "calculation": [
          "sub",
          1,
          [
            "add",
            [
              "mul",
              2,
              [
                "div",
                3,
                8
              ]
            ],
            [
              "div",
              1,
              8
            ]
          ]
        ],
        "answer": 0.125,
        "unit": "de la botella",
        "response": "Quedará un octavo de la botella, que son 125 mL.",
        "steps": [
          "Las dos sopas necesitan seis octavos. La salsa añade uno, así que usamos siete.",
          "Un litro tiene ocho octavos. Si gastamos siete, queda uno."
        ],
        "note": "Pinta tres casillas para la primera sopa, tres para la segunda y una para la salsa. La casilla vacía muestra lo que queda.",
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 7,
          "total": 1000,
          "caption": "Se usan siete de las ocho partes. Queda una de 125 mL."
        }
      }
    },
    {
      "id": "P0135",
      "version": 1,
      "title": "Agua para el arroz y el pan",
      "context": "receptes",
      "structure": "fraccions-sobre-quantitats-successives",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una jarra contiene 2 litros de agua. Sacamos una cuarta parte para hacer arroz. De lo que queda, usamos un tercio para preparar la masa del pan.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta agua quedará en la jarra?",
      "solution": {
        "expression": "1.500 − 1.500 ÷ 3 = 1.000",
        "calculation": [
          "sub",
          [
            "sub",
            2000,
            [
              "div",
              2000,
              4
            ]
          ],
          [
            "div",
            [
              "sub",
              2000,
              [
                "div",
                2000,
                4
              ]
            ],
            3
          ]
        ],
        "answer": 1000,
        "unit": "mL",
        "response": "Quedará 1 litro de agua.",
        "steps": [
          "Una cuarta parte de 2 litros son 500 mL. Después de hacer el arroz quedan 1.500 mL.",
          "Un tercio de esa cantidad son otros 500 mL. Al final quedan 1.000 mL."
        ],
        "note": "Imagina cuatro vasos iguales. Uno se usa para el arroz. De los tres que quedan, uno se usa para el pan. Quedan dos, la mitad del agua inicial.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 2,
          "total": 2000,
          "caption": "Cada parte representa un vaso de 500 mL. Los dos vasos sombreados representan el agua que queda."
        }
      }
    },
    {
      "id": "P0136",
      "version": 1,
      "title": "Vasos para la merienda",
      "context": "begudes",
      "structure": "mesurar-comptant-unitats-petites",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para la merienda tenemos tres botellas de medio litro de batido y una botella de un cuarto de litro. Llenaremos vasos que contienen un octavo de litro cada uno.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos vasos llenos podemos servir?",
      "solution": {
        "expression": "3 × 4 + 2 = 14",
        "calculation": [
          "add",
          [
            "mul",
            3,
            [
              "div",
              500,
              125
            ]
          ],
          [
            "div",
            250,
            125
          ]
        ],
        "answer": 14,
        "unit": "vasos",
        "response": "Podemos servir 14 vasos llenos.",
        "steps": [
          "En medio litro caben cuatro octavos de litro. Cada botella grande llena cuatro vasos.",
          "El cuarto de litro llena dos vasos más. En total son 12 + 2."
        ],
        "note": "Dibuja cuatro marcas debajo de cada una de las tres botellas grandes y dos debajo de la pequeña. Cada marca es un vaso."
      }
    },
    {
      "id": "P0137",
      "version": 1,
      "title": "La limonada demasiado fuerte",
      "context": "begudes",
      "structure": "ajustar-una-proporcio-afegint-aigua",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "La receta pide que el concentrado de limón sea una cuarta parte de la limonada terminada. En la jarra ya hemos puesto medio litro de concentrado y un litro de agua.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "proporcionalitat-directa",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta agua más tenemos que añadir para que quede como dice la receta?",
      "solution": {
        "expression": "4 × 500 − (500 + 1.000) = 500",
        "calculation": [
          "sub",
          [
            "mul",
            4,
            500
          ],
          [
            "add",
            500,
            1000
          ]
        ],
        "answer": 500,
        "unit": "mL",
        "response": "Tenemos que añadir medio litro de agua.",
        "steps": [
          "Si el concentrado ocupa una de cuatro partes, cada parte tiene que ser de medio litro. La mezcla final tiene que ser de 2 litros.",
          "Ahora hay 1.500 mL en la jarra. Faltan 500 mL."
        ],
        "note": "Piensa en vasos de medio litro. Ahora hay uno de concentrado y dos de agua. Falta el tercer vaso de agua.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 2000,
          "caption": "La receta final lleva una parte de concentrado y tres de agua. Cada parte son 500 mL."
        }
      }
    },
    {
      "id": "P0138",
      "version": 1,
      "title": "¿Qué mezcla sabe más a manzana?",
      "context": "begudes",
      "structure": "comparar-proporcions-amb-un-total-comu",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "La jarra A lleva 1/4 de litro de zumo de manzana y 1/2 litro de agua. La jarra B lleva 3/8 de litro de zumo de manzana y 5/8 de litro de agua.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "proporcionalitat-directa",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿En qué jarra representa el zumo de manzana una parte mayor de la mezcla? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "En la jarra B. Si hiciéramos 3 litros de cada mezcla, la B tendría más zumo de manzana.",
        "steps": [
          "Cuatro jarras A suman 3 litros de mezcla y contienen 1 litro de zumo.",
          "Tres jarras B también suman 3 litros de mezcla y contienen 1 litro y 1/8 de zumo."
        ],
        "note": "Dibuja las dos jarras con bloques de 1/8 de litro. Repite el dibujo de A cuatro veces y el de B tres veces. Ahora las dos tiras tienen 24 bloques y puedes comparar los bloques de zumo.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "add",
                250,
                500
              ],
              4
            ],
            "answer": 3000
          },
          {
            "calculation": [
              "mul",
              250,
              4
            ],
            "answer": 1000
          },
          {
            "calculation": [
              "mul",
              [
                "add",
                375,
                625
              ],
              3
            ],
            "answer": 3000
          },
          {
            "calculation": [
              "mul",
              375,
              3
            ],
            "answer": 1125
          }
        ]
      }
    },
    {
      "id": "P0139",
      "version": 1,
      "title": "Medir sin marcas",
      "context": "cuina",
      "structure": "minim-de-mesures-amb-dues-capacitats",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una receta necesita 1 litro y 1/4 de agua. Solo tenemos una medida de 1/3 de litro y otra de 1/4 de litro. Cada vez que usamos una, la llenamos hasta arriba y la vertemos en el cuenco.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "suma-resta",
        "fraccions"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Cómo podemos obtener la cantidad exacta con el menor número de medidas llenas?",
      "solution": {
        "kind": "justification",
        "response": "Con cuatro medidas llenas, tres de 1/3 de litro y una de 1/4 de litro.",
        "steps": [
          "Tres medidas grandes hacen un litro entero. Añadimos la medida de un cuarto.",
          "Con tres medidas solo podemos llegar a un litro, incluso si las tres son las más grandes."
        ],
        "note": "Dibuja una jarra dividida en tercios. Llénala con las tres medidas grandes y añade el cuarto de litro aparte.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              [
                "div",
                1,
                3
              ]
            ],
            "answer": 1
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                3,
                [
                  "div",
                  1,
                  3
                ]
              ],
              [
                "div",
                1,
                4
              ]
            ],
            "answer": 1.25
          }
        ]
      }
    },
    {
      "id": "P0140",
      "version": 1,
      "title": "¿Cuánto caldo había?",
      "context": "receptes",
      "structure": "reconstruir-el-volum-inicial",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "De una jarra de caldo usamos la mitad para un estofado. Del caldo que queda sacamos 1/8 de litro para una salsa. Al final hay 3/8 de litro en la jarra.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "naturals"
      },
      "question": "¿Cuántos litros de caldo había al principio?",
      "solution": {
        "expression": "(3/8 + 1/8) × 2 = 1",
        "calculation": [
          "mul",
          [
            "add",
            [
              "div",
              3,
              8
            ],
            [
              "div",
              1,
              8
            ]
          ],
          2
        ],
        "answer": 1,
        "unit": "litro",
        "response": "Al principio había 1 litro de caldo.",
        "steps": [
          "Volvemos a contar el octavo de litro de la salsa. Antes de sacarlo quedaban cuatro octavos.",
          "Esos cuatro octavos son la mitad del caldo inicial. Doblamos la cantidad."
        ],
        "note": "Dibuja tres partes iguales para el caldo final. Añade la parte de la salsa. Ahora tienes una mitad de la jarra inicial. Dibuja al lado otra mitad igual."
      }
    },
    {
      "id": "P0141",
      "version": 1,
      "title": "¿Cuántos flanes podemos hacer?",
      "context": "receptes",
      "structure": "ingredient-que-limita-les-tandes",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para hacer una tanda de flanes hacen falta 1/2 litro de leche y 1/4 de litro de nata. Tenemos 1 litro y medio de leche y medio litro de nata.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas tandas completas podemos hacer? Justifica la respuesta.",
      "solution": {
        "kind": "justification",
        "response": "Podemos hacer dos tandas completas. Sobrará medio litro de leche y se acabará la nata.",
        "steps": [
          "La leche se puede repartir en tres raciones de 500 mL. La nata solo da para dos raciones de 250 mL.",
          "Cada tanda necesita una ración de cada ingrediente. Solo podemos formar dos parejas."
        ],
        "note": "Haz tres tarjetas de leche y dos de nata. Cada pareja es una tanda. La tarjeta de leche sin pareja muestra por qué no podemos hacer tres.",
        "evidence": [
          {
            "calculation": [
              "div",
              1500,
              500
            ],
            "answer": 3
          },
          {
            "calculation": [
              "div",
              500,
              250
            ],
            "answer": 2
          },
          {
            "calculation": [
              "sub",
              1500,
              [
                "mul",
                2,
                500
              ]
            ],
            "answer": 500
          },
          {
            "calculation": [
              "sub",
              500,
              [
                "mul",
                2,
                250
              ]
            ],
            "answer": 0
          }
        ]
      }
    },
    {
      "id": "P0142",
      "version": 1,
      "title": "¿Un cuarto de qué?",
      "context": "begudes",
      "structure": "quart-de-litre-o-quart-del-que-queda",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una jarra contiene 1 litro y medio de batido. Servimos dos tercios. La receta dice que después tenemos que reservar 1/4 de litro para hacer una capa de batido en el postre. Nil entiende que hay que reservar 1/4 del batido que queda en la jarra.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "Si seguimos la interpretación de Nil, ¿qué cantidad de más quedará en la jarra después de apartar la reserva?",
      "solution": {
        "expression": "250 − 500 ÷ 4 = 125",
        "calculation": [
          "sub",
          250,
          [
            "div",
            [
              "div",
              1500,
              3
            ],
            4
          ]
        ],
        "answer": 125,
        "unit": "mL",
        "response": "Quedarán 125 mL más que si seguimos la receta.",
        "steps": [
          "Después de servir dos tercios, queda un tercio de la jarra, 500 mL.",
          "La receta reserva 250 mL. Nil reserva solo una cuarta parte de 500 mL, que son 125 mL. Por eso quedan 125 mL más."
        ],
        "note": "Dibuja los 500 mL que quedan como cuatro partes iguales. La receta retira dos partes y Nil solo retira una. La diferencia es una parte.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 500,
          "caption": "Cada parte son 125 mL. La parte sombreada es lo que reserva Nil."
        }
      }
    },
    {
      "id": "P0143",
      "version": 1,
      "title": "Llenar dos jarras",
      "context": "cuina",
      "structure": "fraccions-de-capacitats-diferents",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos 2 litros y medio de agua en una olla. Vertemos agua en una jarra de 2 litros hasta llenar tres cuartas partes y en una jarra de 1 litro hasta llenar la mitad.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta agua queda en la olla?",
      "solution": {
        "expression": "2.500 − (3 × 500 + 500) = 500",
        "calculation": [
          "sub",
          2500,
          [
            "add",
            [
              "mul",
              3,
              [
                "div",
                2000,
                4
              ]
            ],
            [
              "div",
              1000,
              2
            ]
          ]
        ],
        "answer": 500,
        "unit": "mL",
        "response": "En la olla queda medio litro.",
        "steps": [
          "Tres cuartas partes de la jarra grande son 1.500 mL. La mitad de la pequeña son 500 mL.",
          "En total vertemos 2 litros. De los 2 litros y medio iniciales queda medio litro."
        ],
        "note": "Cuenta en vasos de medio litro. En la olla había cinco. Pasamos tres a la jarra grande y uno a la pequeña. Queda uno."
      }
    },
    {
      "id": "P0144",
      "version": 1,
      "title": "Mezclamos los dos zumos",
      "context": "begudes",
      "structure": "combinar-barreges-de-la-mateixa-mida",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos dos jarras con medio litro de bebida cada una. En la primera, un cuarto de la bebida es zumo de melocotón y el resto es agua. En la segunda, tres cuartos de la bebida son zumo de melocotón y el resto es agua. Vertemos todo el contenido en una jarra vacía.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "question": "¿Qué fracción de la bebida final es zumo de melocotón?",
      "solution": {
        "expression": "(125 + 375) ÷ 1.000 = 1/2",
        "calculation": [
          "div",
          [
            "add",
            [
              "div",
              500,
              4
            ],
            [
              "mul",
              3,
              [
                "div",
                500,
                4
              ]
            ]
          ],
          1000
        ],
        "answer": 0.5,
        "unit": "de la mezcla",
        "response": "La mitad de la bebida final es zumo de melocotón.",
        "steps": [
          "La primera jarra aporta 125 mL de zumo y la segunda, 375 mL. En total hay 500 mL de zumo en 1 litro de bebida."
        ],
        "note": "Dibuja dos barras de cuatro partes iguales. Pinta una parte de la primera y tres de la segunda. Al juntar las barras hay cuatro partes pintadas de ocho.",
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 4,
          "total": 1000,
          "caption": "Las dos jarras juntas suman ocho partes de 125 mL. Cuatro son de zumo."
        }
      }
    },
    {
      "id": "P0145",
      "version": 1,
      "title": "Arroz para seis",
      "context": "receptes",
      "structure": "afegir-mitja-recepta",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Para hacer arroz con verduras para 4 personas usamos 240 g de arroz. Hoy seremos 6 y queremos servir raciones del mismo tamaño.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos gramos de arroz tenemos que poner en la olla?",
      "solution": {
        "expression": "240 + 240 ÷ 2 = 360",
        "calculation": [
          "add",
          240,
          [
            "div",
            240,
            2
          ]
        ],
        "answer": 360,
        "unit": "g",
        "response": "Tenemos que poner 360 g de arroz.",
        "steps": [
          "Dos personas más necesitan la mitad de lo que necesitan cuatro. La mitad de 240 g son 120 g.",
          "Añadimos los 120 g a los 240 g de la receta."
        ],
        "note": "Tabla de raciones. 2 personas → 120 g. 4 personas → 240 g. 6 personas → 360 g."
      }
    },
    {
      "id": "P0146",
      "version": 1,
      "title": "Crepes para cuatro",
      "context": "receptes",
      "structure": "reduir-tots-els-ingredients-a-la-meitat",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Para hacer crepes para 8 personas, la receta dice que hacen falta 320 g de harina, 400 mL de leche y 4 huevos. Solo haremos crepes para 4 personas y queremos mantener la misma receta.",
      "features": [
        "multiplicacio-divisio",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué cantidades tenemos que preparar de cada ingrediente?",
      "solution": {
        "kind": "justification",
        "response": "Tenemos que preparar 160 g de harina, 200 mL de leche y 2 huevos.",
        "steps": [
          "Cuatro personas son la mitad de ocho. Dividimos entre dos cada una de las cantidades."
        ],
        "note": "Dibuja dos bandejas con cuatro platos cada una. Reparte la harina, la leche y los huevos de la receta entre las dos bandejas. Una bandeja representa la receta para cuatro.",
        "evidence": [
          {
            "calculation": [
              "div",
              320,
              2
            ],
            "answer": 160
          },
          {
            "calculation": [
              "div",
              400,
              2
            ],
            "answer": 200
          },
          {
            "calculation": [
              "div",
              4,
              2
            ],
            "answer": 2
          }
        ]
      }
    },
    {
      "id": "P0147",
      "version": 1,
      "title": "El hummus del encuentro",
      "context": "receptes",
      "structure": "reduir-a-partir-de-grups-de-dues-racions",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para hacer hummus para 6 personas hacen falta 360 g de garbanzos cocidos y 3 cucharadas de aceite. Al final seremos 4 personas.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué cantidad de cada ingrediente tenemos que usar para que el hummus quede igual y las raciones sean del mismo tamaño?",
      "solution": {
        "kind": "justification",
        "response": "Tenemos que usar 240 g de garbanzos y 2 cucharadas de aceite.",
        "steps": [
          "Separamos la receta de seis en tres grupos de dos raciones. Cada grupo necesita 120 g de garbanzos y una cucharada de aceite.",
          "Para cuatro personas preparamos dos grupos iguales."
        ],
        "note": "Tabla de raciones. 2 personas → 120 g y 1 cucharada. 4 personas → 240 g y 2 cucharadas. 6 personas → 360 g y 3 cucharadas.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                360,
                3
              ],
              2
            ],
            "answer": 240
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                3,
                3
              ],
              2
            ],
            "answer": 2
          }
        ]
      }
    },
    {
      "id": "P0148",
      "version": 1,
      "title": "Pan plano para diez",
      "context": "receptes",
      "structure": "descompondre-en-dues-receptes-i-mitja",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una receta de pan plano para 4 personas lleva 200 g de harina. Tenemos que hacer pan para 10 personas.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta harina hace falta si cada persona tiene que recibir la misma ración que en la receta original?",
      "solution": {
        "expression": "200 × 2 + 200 ÷ 2 = 500",
        "calculation": [
          "add",
          [
            "mul",
            200,
            2
          ],
          [
            "div",
            200,
            2
          ]
        ],
        "answer": 500,
        "unit": "g",
        "response": "Hacen falta 500 g de harina.",
        "steps": [
          "Contamos las diez raciones como cuatro, cuatro y dos.",
          "Preparamos dos recetas enteras de 200 g y media receta de 100 g."
        ],
        "note": "Puedes dibujar una fila de diez platos y rodear cuatro, cuatro y dos. Así se ve qué cantidades hay que juntar."
      }
    },
    {
      "id": "P0149",
      "version": 1,
      "title": "La tarta de nueve porciones",
      "context": "receptes",
      "structure": "treure-un-grup-de-tres-racions",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una tarta de manzana para 12 personas lleva 240 g de harina y 4 huevos. Solo queremos hacer tarta para 9 personas, con porciones del mismo tamaño.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué cantidades de harina y huevos tenemos que preparar?",
      "solution": {
        "kind": "justification",
        "response": "Tenemos que preparar 180 g de harina y 3 huevos.",
        "steps": [
          "Hacemos cuatro grupos de tres raciones. Cada grupo necesita 60 g de harina y un huevo.",
          "Para nueve personas solo necesitamos tres grupos."
        ],
        "note": "También puedes pensar en los ingredientes que quitarías de la receta para doce. Restarías 60 g de harina y un huevo.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                240,
                4
              ],
              3
            ],
            "answer": 180
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                4,
                4
              ],
              3
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0150",
      "version": 1,
      "title": "Agua con limón para seis",
      "context": "receptes",
      "structure": "prendre-tres-cinquens-de-la-recepta",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para hacer agua con limón para 10 personas, una receta usa 2 litros y medio de agua. Hoy la queremos hacer para 6 personas, con la misma cantidad de bebida por persona.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "proporcionalitat-directa",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos litros de agua necesitamos?",
      "solution": {
        "expression": "2.500 ÷ 5 × 3 = 1.500",
        "calculation": [
          "mul",
          [
            "div",
            2500,
            5
          ],
          3
        ],
        "answer": 1500,
        "unit": "mL",
        "response": "Necesitamos 1 litro y medio de agua.",
        "steps": [
          "Las seis raciones son tres quintos de las diez originales.",
          "Dividimos los 2.500 mL en cinco grupos de 500 mL. Tomamos tres."
        ],
        "note": "Agrupa a las personas de dos en dos. Para diez personas hay cinco grupos. Para seis hacen falta tres.",
        "visual": {
          "type": "fraction",
          "parts": 5,
          "filled": 3,
          "total": 2500,
          "caption": "Cada bloque de 500 mL sirve para dos personas. Los tres bloques sombreados son seis raciones."
        }
      }
    },
    {
      "id": "P0151",
      "version": 1,
      "title": "Ensalada para dos mesas",
      "context": "receptes",
      "structure": "escalar-i-distribuir-segons-els-comensals",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para hacer ensalada de lentejas para 4 personas hacen falta 200 g de lentejas cocidas. Hoy tenemos una mesa de 3 personas y otra de 5. Ponemos en una bandeja para cada mesa las raciones que le corresponden.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos gramos de lentejas tenemos que poner en cada bandeja para que todo el mundo reciba la misma ración?",
      "solution": {
        "kind": "justification",
        "response": "Tenemos que poner 150 g de lentejas en la bandeja de tres personas y 250 g en la de cinco.",
        "steps": [
          "Cuatro raciones son 200 g, así que una ración pesa 50 g.",
          "Contamos tres raciones de 50 g para la primera mesa y cinco para la segunda."
        ],
        "note": "Tabla de raciones. 1 persona → 50 g. 3 personas → 150 g. 4 personas → 200 g. 5 personas → 250 g.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                200,
                4
              ],
              3
            ],
            "answer": 150
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                200,
                4
              ],
              5
            ],
            "answer": 250
          }
        ]
      }
    },
    {
      "id": "P0152",
      "version": 1,
      "title": "La mezcla de avena y pasas",
      "context": "receptes",
      "structure": "detectar-lingredient-que-falta",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para hacer una merienda para 4 personas hacen falta 240 g de avena y 120 g de pasas. Queremos prepararla para 10 personas con la misma receta. En el armario hay 600 g de avena y 250 g de pasas.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "suma-resta",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué tenemos que añadir a la despensa para poder preparar las diez raciones?",
      "solution": {
        "kind": "justification",
        "response": "Solo hacen falta 50 g más de pasas. Ya tenemos toda la avena que necesitamos.",
        "steps": [
          "Para dos personas hacen falta 120 g de avena y 60 g de pasas. Para diez necesitamos cinco grupos como ese.",
          "La receta adaptada pide 600 g de avena y 300 g de pasas. Comparamos estas cantidades con las que tenemos."
        ],
        "note": "Haz cinco tarjetas de dos raciones, cada una con 120 g de avena y 60 g de pasas. Llénalas con lo que tienes en la despensa para ver qué falta.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                240,
                2
              ],
              5
            ],
            "answer": 600
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                120,
                2
              ],
              5
            ],
            "answer": 300
          },
          {
            "calculation": [
              "sub",
              300,
              250
            ],
            "answer": 50
          }
        ]
      }
    },
    {
      "id": "P0153",
      "version": 1,
      "title": "¿Cuántos botes de yogur?",
      "context": "receptes",
      "structure": "escalar-i-comprar-en-envasos-sencers",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para hacer un postre para 4 personas hacen falta 400 g de yogur. Hoy hacemos postre para 6 personas. En la tienda venden botes de 250 g y en casa no tenemos yogur.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos botes tenemos que comprar como mínimo?",
      "solution": {
        "kind": "justification",
        "response": "Tenemos que comprar 3 botes. Usaremos 600 g y sobrarán 150 g.",
        "steps": [
          "Para pasar de cuatro a seis raciones añadimos 200 g a los 400 g de la receta.",
          "Dos botes solo dan 500 g. Con tres tenemos 750 g, suficientes para las seis raciones."
        ],
        "note": "Compara una fila de seis raciones de 100 g con tres botes de 250 g. Los dos primeros cubren cinco raciones. El tercero permite completar la última.",
        "evidence": [
          {
            "calculation": [
              "add",
              400,
              [
                "div",
                400,
                2
              ]
            ],
            "answer": 600
          },
          {
            "calculation": [
              "mul",
              250,
              2
            ],
            "answer": 500
          },
          {
            "calculation": [
              "mul",
              250,
              3
            ],
            "answer": 750
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                250,
                3
              ],
              600
            ],
            "answer": 150
          }
        ]
      }
    },
    {
      "id": "P0154",
      "version": 1,
      "title": "Batidos con la leche que queda",
      "context": "receptes",
      "structure": "trobar-les-racions-a-partir-de-lingredient",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "La receta de batido de plátano para 4 personas necesita 500 mL de leche. Tenemos 750 mL de leche y suficiente cantidad de los otros ingredientes.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "parentesis",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Para cuántas personas podemos hacer batido si mantenemos la misma cantidad de leche por ración y los demás ingredientes en proporción?",
      "solution": {
        "expression": "750 ÷ (500 ÷ 4) = 6",
        "calculation": [
          "div",
          750,
          [
            "div",
            500,
            4
          ]
        ],
        "answer": 6,
        "unit": "personas",
        "response": "Podemos hacer batido para 6 personas.",
        "steps": [
          "Si cuatro raciones necesitan 500 mL de leche, una necesita 125 mL.",
          "Dividimos los 750 mL en raciones de 125 mL."
        ],
        "note": "Tabla de raciones. 250 mL → 2 personas. 500 mL → 4 personas. 750 mL → 6 personas."
      }
    },
    {
      "id": "P0155",
      "version": 1,
      "title": "Dos maneras de hacer la salsa",
      "context": "receptes",
      "structure": "comparar-afegir-i-treure-racions",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una receta de salsa para 8 personas lleva 800 g de tomate. Para hacer salsa para 6, Bruna propone preparar salsa para cuatro y añadir la de dos personas. Roc propone calcular la cantidad para ocho y quitar la de dos raciones.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Por qué los dos caminos dan la misma cantidad de tomate? Demuéstralo con los cálculos.",
      "solution": {
        "kind": "justification",
        "response": "Con los dos caminos hacen falta 600 g de tomate. En ambos casos contamos tres grupos de dos raciones.",
        "steps": [
          "Dos raciones necesitan 200 g de tomate. Bruna suma 400 g de cuatro raciones y 200 g de dos raciones.",
          "Roc resta 200 g de dos raciones a los 800 g de la receta entera."
        ],
        "note": "Dibuja cuatro bloques de dos raciones. Bruna cuenta dos bloques y añade uno. Roc parte de los cuatro bloques y tacha uno.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "div",
                800,
                2
              ],
              [
                "div",
                800,
                4
              ]
            ],
            "answer": 600
          },
          {
            "calculation": [
              "sub",
              800,
              [
                "div",
                800,
                4
              ]
            ],
            "answer": 600
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 3,
          "total": 800,
          "caption": "Cada bloque representa dos raciones y 200 g de tomate. Los dos caminos llegan a los mismos tres bloques."
        }
      }
    },
    {
      "id": "P0156",
      "version": 1,
      "title": "El aceite de la coca y del molde",
      "context": "receptes",
      "structure": "separar-un-ingredient-variable-dun-us-fix",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para hacer una coca salada para 6 personas hacen falta 4 cucharadas de aceite para la masa y una más para untar el molde. Haremos coca para 3 personas. Mantendremos el tamaño de las porciones y untaremos el mismo molde con una cucharada entera.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas cucharadas de aceite necesitamos en total?",
      "solution": {
        "expression": "4 ÷ 2 + 1 = 3",
        "calculation": [
          "add",
          [
            "div",
            4,
            2
          ],
          1
        ],
        "answer": 3,
        "unit": "cucharadas",
        "response": "Necesitamos 3 cucharadas de aceite en total.",
        "steps": [
          "Para media masa usamos la mitad de las cuatro cucharadas, que son dos.",
          "Sumamos la cucharada entera que hace falta para el molde."
        ],
        "note": "Dibuja dos columnas, una para la masa y otra para el molde. Tacha la mitad de las cucharadas de la masa y conserva la del molde."
      }
    },
    {
      "id": "P0157",
      "version": 1,
      "title": "El zumo de la jarra",
      "context": "begudes",
      "structure": "reconstruir-després-de-treure-un-terc",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Durante la merienda servimos un tercio del zumo de una jarra. Después llenamos un vaso de 250 mL con zumo de la misma jarra. Cuando terminamos, quedan 750 mL.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánto zumo había en la jarra antes de la merienda?",
      "solution": {
        "expression": "(750 + 250) ÷ 2 × 3 = 1.500",
        "calculation": [
          "mul",
          [
            "div",
            [
              "add",
              750,
              250
            ],
            2
          ],
          3
        ],
        "answer": 1500,
        "unit": "mL",
        "response": "Al principio había 1 litro y medio de zumo.",
        "steps": [
          "Volvemos a contar el vaso de 250 mL. Antes de llenarlo había 1.000 mL.",
          "Esos 1.000 mL son los dos tercios que habían quedado. Un tercio son 500 mL y tres tercios son 1.500 mL."
        ],
        "note": "Dibuja dos bloques que sumen 1 litro. Añade un tercer bloque igual para reconstruir la jarra inicial.",
        "visual": {
          "type": "fraction",
          "parts": 3,
          "filled": 2,
          "total": 1500,
          "caption": "Los dos bloques sombreados son el litro que había antes de llenar el vaso."
        }
      }
    },
    {
      "id": "P0158",
      "version": 1,
      "title": "Las bolsas del puesto",
      "context": "fira",
      "structure": "desfer-un-lliurament-i-una-arribada",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Por la mañana, una familia trae 6 bolsas de ropa para el puesto solidario. Por la tarde se dona a una entidad una cuarta parte de todas las bolsas que hay en ese momento. Al final del día quedan 18.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas bolsas había antes de que llegara la familia?",
      "solution": {
        "expression": "18 ÷ 3 × 4 − 6 = 18",
        "calculation": [
          "sub",
          [
            "mul",
            [
              "div",
              18,
              3
            ],
            4
          ],
          6
        ],
        "answer": 18,
        "unit": "bolsas",
        "response": "Al principio había 18 bolsas.",
        "steps": [
          "Las 18 bolsas finales son los tres cuartos que quedan después de la donación. Cada cuarto son 6 bolsas.",
          "Antes de donar había 24. Quitamos las 6 que había traído la familia."
        ],
        "note": "La cantidad final y la inicial coinciden porque las 6 bolsas que llegan compensan las 6 que se donan."
      }
    },
    {
      "id": "P0159",
      "version": 1,
      "title": "Los cromos del sobre grande",
      "context": "joc",
      "structure": "reconstruir-dos-totals-successius",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Martí regala una cuarta parte de sus cromos. Después le da a su prima un tercio de los que le quedan. Por último, pega 2 en el álbum y le quedan 10 cromos sin pegar.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos cromos tenía antes de regalar ninguno?",
      "solution": {
        "expression": "(10 + 2) ÷ 2 × 3 ÷ 3 × 4 = 24",
        "calculation": [
          "mul",
          [
            "div",
            [
              "mul",
              [
                "div",
                [
                  "add",
                  10,
                  2
                ],
                2
              ],
              3
            ],
            3
          ],
          4
        ],
        "answer": 24,
        "unit": "cromos",
        "response": "Al principio tenía 24 cromos.",
        "steps": [
          "Volvemos a contar los 2 del álbum. Antes de pegarlos le quedaban 12.",
          "Los 12 son dos tercios de los que tenía antes de darle cromos a su prima. En aquel momento tenía 18.",
          "Los 18 son tres cuartos de los iniciales. Un cuarto son 6 cromos y cuatro cuartos son 24."
        ],
        "note": "Dibuja dos barras, una en tercios y otra en cuartos. El total que recuperas con la primera llena tres partes de la segunda."
      }
    },
    {
      "id": "P0160",
      "version": 1,
      "title": "La leche antes de rellenar la jarra",
      "context": "receptes",
      "structure": "desfer-mitja-gerra-i-un-volum-afegit",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En una jarra hay un poco de leche. Añadimos 1/4 de litro y lo removemos. Vertemos la mitad de la leche de la jarra en un cuenco. Después de verterla, quedan 3/8 de litro en la jarra.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta leche había en la jarra antes de añadir más?",
      "solution": {
        "expression": "375 × 2 − 250 = 500",
        "calculation": [
          "sub",
          [
            "mul",
            375,
            2
          ],
          250
        ],
        "answer": 500,
        "unit": "mL",
        "response": "Al principio había medio litro de leche.",
        "steps": [
          "Antes de verter la mitad en el cuenco había dos veces 3/8 de litro, es decir, 6/8.",
          "Restamos el cuarto de litro que habíamos añadido. Un cuarto son 2/8, así que quedan 4/8, medio litro."
        ],
        "note": "Dibuja seis partes de 1/8 de litro. La mitad fue al cuenco. Antes de añadir leche, solo había cuatro.",
        "visual": {
          "type": "fraction",
          "parts": 6,
          "filled": 4,
          "total": 750,
          "caption": "Cada parte representa 125 mL. Las cuatro partes sombreadas son la leche inicial."
        }
      }
    },
    {
      "id": "P0161",
      "version": 1,
      "title": "El precio sin rebajas",
      "context": "comerc",
      "structure": "desfer-un-val-i-un-descompte",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una tienda aplican un 25 % de descuento a una mochila. Después restan 5 € más con un vale. El precio del tique es de 25 €.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "percentatges",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánto costaba la mochila antes de las dos rebajas?",
      "solution": {
        "expression": "(25 + 5) ÷ 3 × 4 = 40",
        "calculation": [
          "mul",
          [
            "div",
            [
              "add",
              25,
              5
            ],
            3
          ],
          4
        ],
        "answer": 40,
        "unit": "€",
        "response": "La mochila costaba 40 €.",
        "steps": [
          "Antes de aplicar el vale, la mochila costaba 30 €.",
          "Con el descuento del 25 % se pagan tres cuartos del precio original. Si tres cuartos son 30 €, cada cuarto son 10 €."
        ],
        "note": "Dibuja cuatro tramos iguales. Los tres que se pagan antes del vale suman 30 €. Añade el tramo que quitó el descuento.",
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 3,
          "total": 40,
          "caption": "Los tres tramos sombreados suman los 30 € del precio rebajado antes de aplicar el vale."
        }
      }
    },
    {
      "id": "P0162",
      "version": 1,
      "title": "Las plazas del taller",
      "context": "escola",
      "structure": "desfer-una-reserva-i-un-augment-percentual",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para un taller, la organización aumenta un 20 % las plazas previstas al principio. Después reserva 3 plazas para invitados. Quedan 21 plazas disponibles para las demás personas.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "percentatges",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántas plazas había previstas antes del aumento?",
      "solution": {
        "expression": "(21 + 3) ÷ 6 × 5 = 20",
        "calculation": [
          "mul",
          [
            "div",
            [
              "add",
              21,
              3
            ],
            6
          ],
          5
        ],
        "answer": 20,
        "unit": "plazas",
        "response": "Al principio había 20 plazas previstas.",
        "steps": [
          "Antes de hacer la reserva, el taller tenía 24 plazas.",
          "Un aumento del 20 % añade una quinta parte a las cinco partes iniciales. Si seis partes son 24 plazas, cinco partes son 20."
        ],
        "note": "Haz seis grupos de cuatro plazas. Un grupo corresponde al aumento. Los otros cinco son la previsión inicial."
      }
    },
    {
      "id": "P0163",
      "version": 1,
      "title": "La harina de la receta original",
      "context": "receptes",
      "structure": "desfer-un-extra-i-un-canvi-de-racions",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una receta de pizza es para 4 personas. Hacemos pizza para 6 con el mismo tamaño de ración. Además de la harina de la masa, usamos 40 g de harina para enharinar la encimera. En total hemos usado 400 g.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "proporcionalitat-directa",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánta harina para la masa indicaba la receta de cuatro personas?",
      "solution": {
        "expression": "(400 − 40) ÷ 3 × 2 = 240",
        "calculation": [
          "mul",
          [
            "div",
            [
              "sub",
              400,
              40
            ],
            3
          ],
          2
        ],
        "answer": 240,
        "unit": "g",
        "response": "La receta indicaba 240 g de harina para la masa.",
        "steps": [
          "De los 400 g quitamos los 40 de la encimera. La masa para seis personas lleva 360 g.",
          "Seis raciones forman tres grupos de dos. Cada grupo lleva 120 g. Para cuatro personas hacen falta dos grupos."
        ],
        "note": "Tabla de raciones de masa. 2 personas → 120 g. 4 personas → 240 g. 6 personas → 360 g."
      }
    },
    {
      "id": "P0164",
      "version": 1,
      "title": "¿Cuándo salimos de la escuela?",
      "context": "sortida",
      "structure": "reconstruir-horari-travessant-lhora",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un grupo entra en la sala de un museo a las 12:05. Justo antes ha esperado 10 minutos en el vestíbulo y ha tardado 5 minutos en dejar las mochilas en el guardarropa. Antes de eso había caminado 15 minutos desde la escuela.",
      "features": [
        "suma-resta",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿A qué hora salió el grupo de la escuela?",
      "solution": {
        "expression": "60 + 5 − 10 − 5 − 15 = 35",
        "calculation": [
          "sub",
          [
            "sub",
            [
              "sub",
              [
                "add",
                60,
                5
              ],
              10
            ],
            5
          ],
          15
        ],
        "answer": 35,
        "unit": "minutos después de las 11",
        "response": "El grupo salió a las 11:35.",
        "steps": [
          "Descontamos la espera y llegamos a las 11:55. Descontamos los 5 minutos del guardarropa y llegamos a las 11:50.",
          "Retrocedemos los 15 minutos de camino desde las 11:50."
        ],
        "note": "Dibuja una línea del tiempo y marca tres saltos hacia atrás desde las 12:05. En el primer salto pasarás por las 12:00."
      }
    },
    {
      "id": "P0165",
      "version": 1,
      "title": "El material del taller",
      "context": "material-escolar",
      "structure": "reconstruir-des-de-grups-i-sobrants",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Ahora en el taller hay 3 estuches con 6 rotuladores cada uno y 2 rotuladores sueltos. Antes de llenarlos, otra clase nos había dado 4 rotuladores y, después, habíamos dejado 3 en la biblioteca.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos rotuladores había en el taller antes de los dos cambios?",
      "solution": {
        "expression": "3 × 6 + 2 + 3 − 4 = 19",
        "calculation": [
          "sub",
          [
            "add",
            [
              "add",
              [
                "mul",
                3,
                6
              ],
              2
            ],
            3
          ],
          4
        ],
        "answer": 19,
        "unit": "rotuladores",
        "response": "Al principio había 19 rotuladores.",
        "steps": [
          "Los estuches y los sueltos suman 20 rotuladores. Antes de dejar algunos en la biblioteca, había 23.",
          "De esos 23, cuatro los había traído la otra clase. Si los descontamos, quedan 19."
        ],
        "note": "Dibuja los tres estuches y los dos rotuladores sueltos. Añade los tres de la biblioteca y tacha los cuatro que llegaron de la otra clase."
      }
    },
    {
      "id": "P0166",
      "version": 1,
      "title": "El huerto antes de la ampliación",
      "context": "hort",
      "structure": "reconstruir-una-area-a-partir-de-lamplada",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un huerto rectangular mide 6 metros de largo. Lo han ampliado 2 metros a lo ancho y han mantenido la longitud. Ahora tiene una superficie de 30 m².",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Qué superficie tenía el huerto antes de la ampliación?",
      "solution": {
        "expression": "(30 ÷ 6 − 2) × 6 = 18",
        "calculation": [
          "mul",
          [
            "sub",
            [
              "div",
              30,
              6
            ],
            2
          ],
          6
        ],
        "answer": 18,
        "unit": "m²",
        "response": "El huerto tenía una superficie de 18 m².",
        "steps": [
          "Dividimos la superficie actual entre la longitud y obtenemos 5 metros de ancho.",
          "Restamos los 2 metros que se han añadido. El huerto medía 6 metros de largo y 3 de ancho."
        ],
        "note": "También puedes dibujar el rectángulo actual y separar la franja añadida de 6 × 2 m. Sus 12 m² se restan de los 30 m²."
      }
    },
    {
      "id": "P0167",
      "version": 1,
      "title": "El dinero de la tarde",
      "context": "fira",
      "structure": "desfer-dos-canvis-fixos-i-una-fraccio",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En la feria, Salma se gasta un tercio del dinero que llevaba en el monedero en una manualidad. Después recibe 8 € de su abuela y se gasta 4 € en una merienda. Al final de la tarde le quedan 20 €.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "fraccions",
        "treballar-cap-enrere",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuánto dinero llevaba en el monedero cuando llegó a la feria?",
      "solution": {
        "expression": "(20 + 4 − 8) ÷ 2 × 3 = 24",
        "calculation": [
          "mul",
          [
            "div",
            [
              "sub",
              [
                "add",
                20,
                4
              ],
              8
            ],
            2
          ],
          3
        ],
        "answer": 24,
        "unit": "€",
        "response": "Cuando llegó llevaba 24 €.",
        "steps": [
          "Antes de comprar la merienda llevaba 24 €. Antes de que su abuela le diera dinero, llevaba 16.",
          "Los 16 € son los dos tercios que le quedaron después de pagar la manualidad. Cada tercio son 8 €."
        ],
        "note": "Dibuja una flecha hacia atrás para cada cambio. Cuando llegues a los 16 €, ponlos en dos bloques de 8 € y dibuja el tercer bloque.",
        "visual": {
          "type": "fraction",
          "parts": 3,
          "filled": 2,
          "total": 24,
          "caption": "Los dos bloques sombreados son el dinero que le quedó después de pagar la manualidad."
        }
      }
    },
    {
      "id": "P0168",
      "version": 1,
      "title": "Las bandejas de plantones",
      "context": "hort",
      "structure": "desfer-una-safata-i-una-retirada-per-grup",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos 3 bandejas con el mismo número de plantones en cada una. Sacamos 2 plantones de cada bandeja para trasplantarlos. Después regalamos una bandeja con todos los plantones que aún tiene. En las dos bandejas que nos quedan hay 12 plantones en total.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "parentesis",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "question": "¿Cuántos plantones había entre las tres bandejas al principio?",
      "solution": {
        "expression": "(12 ÷ 2 + 2) × 3 = 24",
        "calculation": [
          "mul",
          [
            "add",
            [
              "div",
              12,
              2
            ],
            2
          ],
          3
        ],
        "answer": 24,
        "unit": "plantones",
        "response": "Al principio había 24 plantones entre las tres bandejas.",
        "steps": [
          "Las dos bandejas finales tienen 6 plantones cada una. La bandeja regalada también tenía 6 en el momento de regalarla.",
          "Antes de sacar plantones para trasplantar, cada bandeja tenía 2 más. Había 8 plantones en cada una de las tres bandejas."
        ],
        "note": "Dibuja las dos bandejas de seis. Dibuja la tercera con la misma cantidad y vuelve a poner dos plantones en cada bandeja."
      }
    },
    {
      "id": "P0169",
      "version": 1,
      "title": "Con quince euros en el mercado",
      "context": "mercat",
      "structure": "pressupost-amb-marge-a-lalca",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Llevas 15 €. En el mercado quieres comprar fruta por 4,60 €, un queso por 6,20 € y pan por 2,80 €. Mar propone contar 5 €, 7 € y 3 €.",
      "question": "¿Es suficiente la estimación de Mar para saber si puedes comprarlo todo? Justifica la respuesta.",
      "features": [
        "suma-resta",
        "combinades",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Los precios estimados suman 15 € y cada uno es mayor que el precio real.",
        "steps": [
          "Mar ha redondeado cada precio hacia arriba. En total le salen 5 + 7 + 3 = 15 €.",
          "El coste real queda por debajo de ese total, así que con 15 € tienes suficiente."
        ],
        "note": "La suma exacta solo haría falta si quisiéramos saber cuánto cambio nos tienen que devolver.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "add",
                5,
                7
              ],
              3
            ],
            "answer": 15
          }
        ]
      }
    },
    {
      "id": "P0170",
      "version": 1,
      "title": "La cuenta justa de la merienda",
      "context": "botiga",
      "structure": "arrodoniment-que-amaga-un-exces",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para la merienda compramos tres cosas que cuestan 8,40 €, 6,40 € y 5,40 €. Llevamos 20 €. Jan redondea al euro más cercano y calcula que gastaremos 19 €.",
      "question": "¿Nos podemos fiar de los 19 € para decidir si podemos pagar toda la compra? Justifica la respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "La compra cuesta 20,20 € y nos faltan 20 céntimos.",
        "steps": [
          "Los 19 € salen de redondear los tres precios hacia abajo. En cada precio se han dejado sin contar 40 céntimos.",
          "Los céntimos que faltan suman 1,20 €, más que el euro de margen que parecía que teníamos."
        ],
        "note": "Cuando el margen es pequeño, contar los errores del redondeo puede ser más rápido que rehacer toda la suma.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "add",
                8,
                6
              ],
              5
            ],
            "answer": 19
          },
          {
            "calculation": [
              "mul",
              3,
              0.4
            ],
            "answer": 1.2
          },
          {
            "calculation": [
              "add",
              [
                "add",
                [
                  "add",
                  8,
                  6
                ],
                5
              ],
              [
                "mul",
                3,
                0.4
              ]
            ],
            "answer": 20.2
          }
        ]
      }
    },
    {
      "id": "P0171",
      "version": 1,
      "title": "Con tiempo para llegar al ensayo",
      "context": "mobilitat",
      "structure": "temps-maxim-amb-marge",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Quedan 35 minutos para que empiece el ensayo. El primer tramo a pie dura entre 12 y 15 minutos. El autobús tarda entre 8 y 10 minutos en hacer su recorrido. De la parada a la sala hay que caminar entre 5 y 7 minutos. Cogeremos el autobús sin esperar.",
      "question": "Con estos intervalos, ¿podemos asegurar que estaremos en la sala antes del ensayo? Justifica la respuesta.",
      "features": [
        "suma-resta",
        "combinades",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Incluso si todos los tramos duran el máximo previsto, llegaremos con 3 minutos de margen.",
        "steps": [
          "Sumamos los tiempos más largos de los tres tramos, 15 + 10 + 7. Eso da 32 minutos.",
          "Como tenemos 35 minutos, nos sobrarán al menos 3."
        ],
        "note": "Para asegurar que llegaremos a tiempo, nos interesa el caso más lento.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "add",
                15,
                10
              ],
              7
            ],
            "answer": 32
          },
          {
            "calculation": [
              "sub",
              35,
              [
                "add",
                [
                  "add",
                  15,
                  10
                ],
                7
              ]
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0172",
      "version": 1,
      "title": "¿A tiempo para la película?",
      "context": "mobilitat",
      "structure": "interval-que-travessa-el-limit",
      "level": "mitja",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Quedan 35 minutos para llegar al cine. La espera del autobús puede durar entre 18 y 22 minutos. Una vez que subamos, tardaremos entre 12 y 16 minutos en llegar a la puerta del cine.",
      "question": "¿Basta esta información para asegurar que llegaremos a tiempo? Justifica la respuesta con dos casos posibles.",
      "features": [
        "suma-resta",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "En un caso podemos llegar en 30 minutos y en otro podemos tardar 38.",
        "steps": [
          "Si las dos duraciones son las más cortas, 18 + 12 = 30 minutos y llegamos a tiempo.",
          "Si son las más largas, 22 + 16 = 38 minutos y llegamos tarde."
        ],
        "note": "Para asegurar la llegada haría falta más margen o reducir el tiempo máximo de algún tramo.",
        "evidence": [
          {
            "calculation": [
              "add",
              18,
              12
            ],
            "answer": 30
          },
          {
            "calculation": [
              "add",
              22,
              16
            ],
            "answer": 38
          }
        ]
      }
    },
    {
      "id": "P0173",
      "version": 1,
      "title": "La guirnalda del pasillo",
      "context": "mesura",
      "structure": "arrodonir-longituds-per-sobre",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para hacer una guirnalda necesitamos tres trozos de cordel de 197 cm, 206 cm y 195 cm. Tenemos un rollo con 650 cm de cordel y al cortar no se desperdicia nada.",
      "question": "Sin sumar las tres longitudes exactas, ¿cómo puedes justificar si el rollo es lo bastante largo?",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí es lo bastante largo. Incluso si contamos 210 cm por trozo, necesitamos como máximo 630 cm.",
        "steps": [
          "Los tres trozos miden menos de 210 cm cada uno. Podemos contar como si todos midieran 210 cm.",
          "Tres trozos de 210 cm sumarían 630 cm, por debajo de los 650 cm del rollo."
        ],
        "note": "También puedes redondear cada medida a la decena de centímetros siguiente y comparar el resultado con 650 cm.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              210
            ],
            "answer": 630
          },
          {
            "calculation": [
              "add",
              [
                "add",
                200,
                210
              ],
              200
            ],
            "answer": 610
          }
        ]
      }
    },
    {
      "id": "P0174",
      "version": 1,
      "title": "Tres cajas en el estante",
      "context": "mesura",
      "structure": "afinar-quan-una-cota-no-decideix",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Queremos poner tres cajas una al lado de la otra en un estante de 59,5 cm de ancho. Cada caja mide 19,8 cm de ancho y no hace falta dejar espacio entre ellas. Pol cuenta 20 cm por caja y dice que no cabrán.",
      "question": "¿Es suficiente la aproximación de Pol para descartar el estante? Justifica la decisión.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "Las tres cajas ocupan 59,4 cm y sí caben, con 1 mm de margen.",
        "steps": [
          "Con 20 cm por caja obtenemos 60 cm, una estimación por encima de la anchura real. Solo con eso no podemos saber si caben.",
          "Cada caja mide 0,2 cm menos de 20 cm. Restamos 0,6 cm a los 60 cm y obtenemos 59,4 cm."
        ],
        "note": "Una estimación por encima permite asegurar que algo cabe si ya queda por debajo del límite. En este caso, el margen era demasiado pequeño para decidir con los 60 cm.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              20
            ],
            "answer": 60
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                3,
                20
              ],
              [
                "mul",
                3,
                0.2
              ]
            ],
            "answer": 59.4
          },
          {
            "calculation": [
              "sub",
              59.5,
              59.4
            ],
            "answer": 0.1
          }
        ]
      }
    },
    {
      "id": "P0175",
      "version": 1,
      "title": "Sillas para la función",
      "context": "escola",
      "structure": "cota-superior-amb-grups",
      "level": "mitja",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "A la función vendrán cinco grupos. Cada grupo tiene entre 11 y 13 personas. En la sala hay 70 sillas y cada persona necesita una.",
      "question": "¿Podemos saber si habrá suficientes sillas antes de conocer la asistencia exacta? Justifica la respuesta.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Como máximo vendrán 65 personas, así que sobrarán al menos 5 sillas.",
        "steps": [
          "Contamos como si los cinco grupos tuvieran 13 personas. En total serían 65.",
          "Los grupos reales no pueden aumentar ese total. Las 70 sillas son suficientes."
        ],
        "note": "Contar 12 personas por grupo da una idea de la asistencia. Contar 13 permite asegurar que todo el mundo se podrá sentar.",
        "evidence": [
          {
            "calculation": [
              "mul",
              5,
              13
            ],
            "answer": 65
          },
          {
            "calculation": [
              "sub",
              70,
              [
                "mul",
                5,
                13
              ]
            ],
            "answer": 5
          }
        ]
      }
    },
    {
      "id": "P0176",
      "version": 1,
      "title": "El bote de pintura",
      "context": "casa",
      "structure": "cota-inferior-per-detectar-que-no-nhi-ha-prou",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos que pintar dos paredes rectangulares sin puertas ni ventanas. Miden 2,9 m y 3,8 m de largo y ambas miden 2,4 m de alto. Según la etiqueta, con el bote podemos pintar como máximo 10 m².",
      "question": "Sin calcular las dos superficies exactas, ¿puedes decidir si el bote será suficiente? Justifica la respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "El bote se quedará corto. Incluso con unas paredes más pequeñas, saldrían 12 m².",
        "steps": [
          "Para estimar por debajo, imaginamos paredes de 2,5 m y 3,5 m de largo y solo 2 m de alto.",
          "Con esas medidas ya salen 5 + 7 = 12 m², más de los 10 m² que cubre el bote."
        ],
        "note": "Basta encontrar una superficie menor que la real y que ya supere los 10 m².",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "mul",
                2.5,
                2
              ],
              [
                "mul",
                3.5,
                2
              ]
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0177",
      "version": 1,
      "title": "¿Una sola carga?",
      "context": "transport",
      "structure": "estimar-per-sota-un-pes",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Queremos llevar cuatro cajas en una carretilla que admite como máximo 10 kg. Las cajas pesan 2,7 kg, 2,8 kg, 2,9 kg y 2,8 kg. Ivet propone contar 2,5 kg por caja y hacer un solo viaje.",
      "question": "¿Es la estimación de 10 kg de Ivet suficiente para decidir hacer un solo viaje? Justifica la respuesta.",
      "features": [
        "multiplicacio-divisio",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "Las cuatro cajas pesan más de 10 kg y hay que repartirlas en más de una carga.",
        "steps": [
          "Cuatro cajas de 2,5 kg sumarían justo 10 kg.",
          "Cada caja real pesa más de 2,5 kg. Así podemos asegurar que el total supera el límite sin sumar los pesos exactos."
        ],
        "note": "Una estimación por debajo puede servir para descartar una carga aunque coincida con el límite, si sabemos que el peso real es estrictamente mayor.",
        "evidence": [
          {
            "calculation": [
              "mul",
              4,
              2.5
            ],
            "answer": 10
          }
        ]
      }
    },
    {
      "id": "P0178",
      "version": 1,
      "title": "Bebida para veinticuatro",
      "context": "berenar",
      "structure": "triar-envasos-amb-cota-inferior",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay que preparar 24 vasos de 125 mL de bebida. Tenemos cuatro jarras y cada una contiene entre 0,9 L y 1 L. Queremos llevar el menor número posible y asegurar que todos tendrán un vaso lleno.",
      "question": "¿Basta con llevar tres jarras? Justifica mediante una estimación cuántas hay que llevar.",
      "features": [
        "multiplicacio-divisio",
        "decimals",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "decimals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hay que llevar cuatro jarras. Con tres solo bastaría si las tres contuvieran exactamente un litro.",
        "steps": [
          "Los 24 vasos necesitan 3.000 mL, es decir, 3 litros.",
          "Tres jarras pueden contener solo 2,7 L. Cuatro jarras aportan al menos 3,6 L y eso asegura los 24 vasos."
        ],
        "note": "Para garantizar que habrá suficiente, comparamos el volumen que hace falta con el mínimo que pueden contener las jarras.",
        "evidence": [
          {
            "calculation": [
              "mul",
              24,
              125
            ],
            "answer": 3000
          },
          {
            "calculation": [
              "mul",
              3,
              0.9
            ],
            "answer": 2.7
          },
          {
            "calculation": [
              "mul",
              4,
              0.9
            ],
            "answer": 3.6
          }
        ]
      }
    },
    {
      "id": "P0179",
      "version": 1,
      "title": "¿Cuántos libros quedan por contar?",
      "context": "biblioteca",
      "structure": "mostra-petita-i-casos-possibles",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay cinco cajas de libros. Abrimos la primera y contamos 20 libros. En cada una de las otras cuatro cajas puede haber entre 15 y 25 libros. Alguien calcula unos 100 libros y quiere preparar un espacio para exactamente 100.",
      "question": "¿Es suficiente la estimación para asegurar que todos los libros cabrán en el espacio? Justifica la respuesta.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El total podría ser de 80 libros, pero también podría llegar a 120.",
        "steps": [
          "Si las cuatro cajas pendientes tienen 15 libros cada una, el total es de 80. Si tienen 25 cada una, el total es de 120.",
          "Los 100 son posibles, pero contar una sola caja no permite asegurar que las demás sean iguales."
        ],
        "note": "Se puede asegurar que cabrán todos si hay sitio para 120, o si se cuentan las otras cajas y el total no supera los 100.",
        "evidence": [
          {
            "calculation": [
              "mul",
              5,
              20
            ],
            "answer": 100
          },
          {
            "calculation": [
              "add",
              20,
              [
                "mul",
                4,
                15
              ]
            ],
            "answer": 80
          },
          {
            "calculation": [
              "add",
              20,
              [
                "mul",
                4,
                25
              ]
            ],
            "answer": 120
          }
        ]
      }
    },
    {
      "id": "P0180",
      "version": 1,
      "title": "¿Qué camino es más corto?",
      "context": "mobilitat",
      "structure": "comparar-intervals-separats",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para ir al parque hay dos caminos. Por el camino A, el primer tramo mide entre 180 y 200 metros y el segundo entre 140 y 160 metros. El camino B mide entre 380 y 410 metros.",
      "question": "Con estos datos, ¿se puede elegir con seguridad el camino más corto? Justifica la respuesta.",
      "features": [
        "suma-resta",
        "combinades",
        "calcul-estimatiu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. El camino A es al menos 20 metros más corto.",
        "steps": [
          "Incluso contando las dos longitudes máximas, el camino A mide como máximo 360 metros.",
          "El camino B mide al menos 380. Aunque el A sea tan largo como pueda y el B tan corto como pueda, el A sigue siendo más corto."
        ],
        "note": "Marca en una recta de 320 a 360 metros para el camino A y de 380 a 410 para el B. El espacio de 20 metros entre los intervalos muestra el margen mínimo.",
        "evidence": [
          {
            "calculation": [
              "add",
              200,
              160
            ],
            "answer": 360
          },
          {
            "calculation": [
              "sub",
              380,
              [
                "add",
                200,
                160
              ]
            ],
            "answer": 20
          }
        ]
      }
    },
    {
      "id": "P0181",
      "version": 1,
      "title": "Seis entradas a diecinueve euros",
      "context": "cultura",
      "structure": "comparar-descomposicio-i-compensacio",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Seis entradas de teatro cuestan 19 € cada una. Bruna descompone el precio de cada entrada en 10 € y 9 €. Nil calcula como si cada entrada costara 20 € y luego corrige el total.",
      "question": "¿Qué precio total da cada método y cuál te parece más práctico para calcularlo de cabeza? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Los dos métodos dan 114 €. Redondear a 20 € facilita el cálculo mental porque solo hay que restar un euro por entrada.",
        "steps": [
          "Bruna calcula 6 × 10 = 60 y 6 × 9 = 54. Al sumarlos obtiene 114 €.",
          "Nil calcula 6 × 20 = 120. Resta los 6 € que ha contado de más y obtiene 114 €."
        ],
        "note": "Separar las decenas de las unidades también es práctico si quieres aplicar el mismo método a cualquier precio de dos cifras.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "mul",
                6,
                10
              ],
              [
                "mul",
                6,
                9
              ]
            ],
            "answer": 114
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                6,
                20
              ],
              6
            ],
            "answer": 114
          }
        ]
      }
    },
    {
      "id": "P0182",
      "version": 1,
      "title": "Los cuadernos de la estantería",
      "context": "material-escolar",
      "structure": "comparar-canvis-seguits-i-canvi-net",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "En una estantería hay 48 cuadernos. Por la mañana se reparten 19 y por la tarde se colocan 9 nuevos. Jana sigue los cambios uno por uno. Pol calcula primero en cuántos cuadernos ha disminuido el total a lo largo del día.",
      "question": "Compara los dos métodos y explica cuál te parece más práctico para saber cuántos cuadernos quedan.",
      "features": [
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Quedan 38 cuadernos. Calcular el cambio del día facilita el cálculo, porque se reduce a restar 10.",
        "steps": [
          "Jana resta 19 de 48 y obtiene 29. Después suma 9 y llega a 38.",
          "Pol ve que 9 de los 19 cuadernos que han salido se compensan con los que llegan. En total hay 10 menos y quedan 38."
        ],
        "note": "Si también queremos saber cuántos había al mediodía, seguir los cambios uno por uno nos da ese dato.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "sub",
                48,
                19
              ],
              9
            ],
            "answer": 38
          },
          {
            "calculation": [
              "sub",
              48,
              [
                "sub",
                19,
                9
              ]
            ],
            "answer": 38
          }
        ]
      }
    },
    {
      "id": "P0183",
      "version": 1,
      "title": "El reparto de rotuladores",
      "context": "material-escolar",
      "structure": "comparar-meitats-i-dividir-per-parts",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos que repartir 96 rotuladores entre 8 mesas a partes iguales. Aina separa 80 rotuladores y reparte por separado esos 80 y los 16 restantes. Biel divide el lote por la mitad tres veces hasta tener 8 grupos.",
      "question": "¿Cuántos rotuladores le tocan a cada mesa con cada método? ¿Cuál te parece más práctico y por qué?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Cada mesa recibe 12 rotuladores. Separar 80 y 16 permite usar dos múltiplos conocidos de 8.",
        "steps": [
          "Aina reparte los 80 y da 10 rotuladores a cada mesa. Con los 16 restantes da 2 más a cada una.",
          "Biel hace dos partes de 48, después cuatro de 24 y, por último, ocho de 12."
        ],
        "note": "Las mitades pueden ser más fáciles de seguir si tienes los rotuladores delante y los vas separando en grupos.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "div",
                80,
                8
              ],
              [
                "div",
                16,
                8
              ]
            ],
            "answer": 12
          },
          {
            "calculation": [
              "div",
              [
                "div",
                [
                  "div",
                  96,
                  2
                ],
                2
              ],
              2
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0184",
      "version": 1,
      "title": "Baldosas alrededor de la jardinera",
      "context": "hort",
      "structure": "comparar-complement-i-descomposicio-darea",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un patio rectangular mide 8 m por 6 m. En una esquina hay una jardinera rectangular de 3 m por 2 m, con el lado de 3 m pegado al lado de 8 m del patio. Queremos poner baldosas en todo el patio que queda fuera de la jardinera. Laia calcula el área de todo el rectángulo y le resta la jardinera. Marc divide la zona que hay que cubrir en dos rectángulos.",
      "question": "¿Qué superficie obtiene cada uno y qué método te parece más práctico con este plano? Justifica tu respuesta con un dibujo o con los cálculos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hay que poner baldosas en 42 m². Restar la jardinera aprovecha las cuatro medidas que ya tenemos.",
        "steps": [
          "Laia calcula 8 × 6 = 48 m² y resta los 3 × 2 = 6 m² de la jardinera.",
          "Marc separa una pieza de 8 m por 4 m y otra de 5 m por 2 m. Suma los 32 m² y los 10 m²."
        ],
        "note": "Si dibujas el patio, dividirlo en dos piezas te permite ver que has contado toda la zona que hay que cubrir una sola vez.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "mul",
                8,
                6
              ],
              [
                "mul",
                3,
                2
              ]
            ],
            "answer": 42
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                8,
                [
                  "sub",
                  6,
                  2
                ]
              ],
              [
                "mul",
                [
                  "sub",
                  8,
                  3
                ],
                2
              ]
            ],
            "answer": 42
          }
        ]
      }
    },
    {
      "id": "P0185",
      "version": 1,
      "title": "Una valla para los dos huertos",
      "context": "hort",
      "structure": "comparar-contorn-exterior-i-perimetres-separats",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Dos huertos rectangulares de 4 m por 3 m comparten un lado entero de 3 m. Solo queremos vallar el contorno exterior. Roc dibuja los dos huertos como un solo rectángulo. Núria suma los perímetros de los dos huertos y corrige la cuenta del lado compartido.",
      "question": "¿Cuántos metros de valla da cada método? ¿Cuál te parece más práctico para evitar errores y por qué?",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 22 m de valla. Mirar el rectángulo exterior permite contar directamente los lados que hay que vallar.",
        "steps": [
          "Roc ve un rectángulo de 8 m por 3 m. Suma dos lados de 8 m y dos de 3 m.",
          "Núria obtiene 14 m de perímetro por huerto. A los 28 m totales les resta 6, porque el lado interior de 3 m se ha contado dos veces."
        ],
        "note": "Si las piezas formaran un contorno difícil de describir, sumar los perímetros y marcar los lados interiores podría ser un método más fácil de comprobar.",
        "evidence": [
          {
            "calculation": [
              "mul",
              2,
              [
                "add",
                [
                  "add",
                  4,
                  4
                ],
                3
              ]
            ],
            "answer": 22
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                2,
                [
                  "mul",
                  2,
                  [
                    "add",
                    4,
                    3
                  ]
                ]
              ],
              [
                "mul",
                2,
                3
              ]
            ],
            "answer": 22
          }
        ]
      }
    },
    {
      "id": "P0186",
      "version": 1,
      "title": "Avena para nueve",
      "context": "receptes",
      "structure": "comparar-reduccio-a-la-unitat-i-mitja-recepta",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un desayuno para 6 personas lleva 300 g de avena. Queremos hacerlo para 9 personas con raciones iguales. Berta calcula los gramos por persona. Karim prepara la cantidad para seis y añade la que hace falta para tres más.",
      "question": "¿Cuánta avena calcula cada uno? ¿Cuál de los dos métodos te parece más práctico para adaptar esta receta y por qué?",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "proporcionalitat-directa",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 450 g de avena. Añadir media receta es cómodo porque tres personas son la mitad de seis.",
        "steps": [
          "Berta divide 300 g entre seis y obtiene 50 g por persona. Multiplica 50 g por nueve y obtiene 450 g.",
          "Karim añade 150 g, la mitad de la receta, a los 300 g de la receta entera."
        ],
        "note": "La cantidad por persona se puede reutilizar si queremos adaptar la misma receta a distintos números de comensales.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                300,
                6
              ],
              9
            ],
            "answer": 450
          },
          {
            "calculation": [
              "add",
              300,
              [
                "div",
                300,
                2
              ]
            ],
            "answer": 450
          }
        ]
      }
    },
    {
      "id": "P0187",
      "version": 1,
      "title": "Las macetas que irán al patio",
      "context": "hort",
      "structure": "comparar-calcular-la-fraccio-i-el-complement",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De 24 macetas, tres cuartas partes irán al patio y el resto se quedará en el aula. Clara calcula cuánto es un cuarto y toma tres cuartos. Max calcula el cuarto que se queda en el aula y lo resta de las 24 macetas.",
      "question": "¿Cuántas macetas van al patio según cada método? ¿Cuál te parece más práctico con esta fracción y por qué?",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Al patio van 18 macetas. Si ves enseguida que solo un cuarto se queda en el aula, puedes quitar 6 macetas de las 24.",
        "steps": [
          "Clara averigua que un cuarto son 6 macetas y calcula tres grupos de 6.",
          "Max encuentra el mismo grupo de 6 y calcula cuántas macetas quedan al quitarlo."
        ],
        "note": "Dibuja cuatro grupos de seis. El primer método señala tres grupos. El segundo quita uno y cuenta los mismos tres.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                24,
                4
              ],
              3
            ],
            "answer": 18
          },
          {
            "calculation": [
              "sub",
              24,
              [
                "div",
                24,
                4
              ]
            ],
            "answer": 18
          }
        ]
      }
    },
    {
      "id": "P0188",
      "version": 1,
      "title": "El descuento de la mochila",
      "context": "comerc",
      "structure": "comparar-percentatge-i-fraccio-equivalent",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una mochila de 45 € tiene un descuento del 20 %. Salma quiere calcular el 10 % y duplicarlo. Martí recuerda que el 20 % equivale a una quinta parte y calcula directamente esa parte.",
      "question": "¿Qué descuento obtiene cada uno y qué método elegirías para hacer este cálculo de cabeza? Justifica tu respuesta.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "decimals",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Los dos obtienen 9 € de descuento. Hacer 45 ÷ 5 es práctico si reconoces el 20 % como una quinta parte.",
        "steps": [
          "Salma divide 45 € entre 10 y obtiene 4,50 €. Al duplicarlo obtiene 9 €.",
          "Martí divide 45 € entre 5 y obtiene 9 €."
        ],
        "note": "Calcular primero el 10 % también sirve para otros descuentos, como el 30 %, si luego lo multiplicas por tres.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                45,
                10
              ],
              2
            ],
            "answer": 9
          },
          {
            "calculation": [
              "div",
              45,
              5
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0189",
      "version": 1,
      "title": "Juntamos el zumo",
      "context": "begudes",
      "structure": "comparar-fer-parelles-i-canviar-dunitat",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En cuatro botellas hay 1,25 L, 0,75 L, 1,5 L y 0,5 L de zumo. Joana hace parejas que sumen litros enteros. Pau pasa cada cantidad a mililitros antes de sumarlas.",
      "question": "¿Cuánta bebida hay en total según cada método? ¿Cuál te parece más práctico con estas cantidades y por qué?",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "decimals",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "decimals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hay 4 litros. Hacer parejas es rápido porque cada pareja suma exactamente 2 litros.",
        "steps": [
          "Joana suma 1,25 L con 0,75 L y 1,5 L con 0,5 L. Obtiene 2 L + 2 L.",
          "Pau suma 1.250, 750, 1.500 y 500 mL. Obtiene 4.000 mL y los convierte en 4 L."
        ],
        "note": "Pasar a mililitros puede facilitar la cuenta si luego tienes que llenar vasos graduados en mililitros.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "add",
                1.25,
                0.75
              ],
              [
                "add",
                1.5,
                0.5
              ]
            ],
            "answer": 4
          },
          {
            "calculation": [
              "div",
              [
                "add",
                [
                  "add",
                  [
                    "add",
                    1250,
                    750
                  ],
                  1500
                ],
                500
              ],
              1000
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0190",
      "version": 1,
      "title": "La duración de la visita",
      "context": "horaris",
      "structure": "comparar-salts-fins-a-lhora-i-desplacar-els-extrems",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una visita empieza a las 10:55 y acaba a las 11:25. Mar cuenta primero hasta las 11:00 y luego hasta el final. Ton desplaza las dos horas 5 minutos hacia delante y calcula la duración entre las horas nuevas.",
      "question": "¿Qué duración obtiene cada persona y qué método te parece más práctico con estas horas? Explica por qué se puede desplazar la visita entera.",
      "features": [
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La visita dura 30 minutos. Desplazarla 5 minutos permite leer la duración entre las 11:00 y las 11:30.",
        "steps": [
          "Mar cuenta 5 minutos hasta las 11:00 y 25 minutos más hasta las 11:25.",
          "Ton pasa de 10:55 a 11:00 y de 11:25 a 11:30. Como desplaza el inicio y el final los mismos minutos, la duración se mantiene."
        ],
        "note": "Separar la visita en tramos puede ser más fácil de comprobar si marcas las horas en una línea del tiempo.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "sub",
                60,
                55
              ],
              25
            ],
            "answer": 30
          },
          {
            "calculation": [
              "sub",
              [
                "add",
                25,
                5
              ],
              [
                "sub",
                [
                  "add",
                  55,
                  5
                ],
                60
              ]
            ],
            "answer": 30
          }
        ]
      }
    },
    {
      "id": "P0191",
      "version": 1,
      "title": "Los días de la exposición",
      "context": "calendari",
      "structure": "comparar-diferencia-inclusiva-i-grups-de-set",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una exposición abre cada día del 8 al 21 del mismo mes, incluidos el 8 y el 21. Ona resta el número del primer día al del último y hace un ajuste. Guim marca en el calendario los días del 8 al 14 y después los del 15 al 21.",
      "question": "¿Cuántos días abre según cada método? ¿Cuál te parece más práctico para asegurarte de contar el primer y el último día? Explica por qué.",
      "features": [
        "suma-resta",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La exposición abre 14 días. Marcar los dos grupos de siete en un calendario permite ver que se han contado el 8 y el 21.",
        "steps": [
          "Ona calcula 21 − 8 = 13 saltos entre días. Cuenta también el día 8 y obtiene 14.",
          "Guim cuenta siete días del 8 al 14 y siete más del 15 al 21."
        ],
        "note": "Restar y añadir un día es rápido cuando no tienes el calendario, si recuerdas que la resta cuenta los saltos entre fechas.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "sub",
                21,
                8
              ],
              1
            ],
            "answer": 14
          },
          {
            "calculation": [
              "add",
              [
                "add",
                [
                  "sub",
                  14,
                  8
                ],
                1
              ],
              [
                "add",
                [
                  "sub",
                  21,
                  15
                ],
                1
              ]
            ],
            "answer": 14
          }
        ]
      }
    },
    {
      "id": "P0192",
      "version": 1,
      "title": "Las pegatinas de los sobres",
      "context": "fira",
      "structure": "comparar-calcular-el-total-i-reagrupar-en-multiples",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos que poner 3 pegatinas en cada uno de 24 sobres. Las pegatinas se venden en hojas de 8. Rita calcula primero cuántas pegatinas necesita en total. Bernat hace grupos de ocho sobres y mira cuántas hojas necesita para cada grupo.",
      "question": "¿Cuántas hojas hacen falta según cada método? ¿Cuál te parece más práctico para organizar el trabajo y por qué?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "comparar-estrategies"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 9 hojas. Hacer grupos de ocho sobres permite preparar tres lotes iguales de tres hojas.",
        "steps": [
          "Rita calcula 24 × 3 = 72 pegatinas. Como cada hoja tiene 8, necesita 9 hojas.",
          "Bernat forma tres grupos de ocho sobres. Para cada grupo, una hoja da una pegatina por sobre y tres hojas dan las tres pegatinas que hacen falta."
        ],
        "note": "Calcular el total es un método directo para hacer la compra. Los grupos van bien si tres personas tienen que preparar los sobres a la vez.",
        "evidence": [
          {
            "calculation": [
              "div",
              [
                "mul",
                24,
                3
              ],
              8
            ],
            "answer": 9
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                24,
                8
              ],
              3
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0193",
      "version": 1,
      "title": "Voluntarios para llevar las cajas",
      "context": "transport",
      "structure": "dues-capacitats-amb-torns-limitats",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay que llevar 53 cajas de una sala a otra. En cada viaje caben 8 cajas en el carrito y cada voluntario puede hacer como máximo 3 viajes.",
      "question": "¿Cuántos voluntarios hacen falta como mínimo? Justifica cómo organizarías el último viaje.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 3 voluntarios. Dos pueden hacer tres viajes cada uno y el tercero puede llevar las 5 cajas que quedan en un solo viaje.",
        "steps": [
          "En seis viajes se pueden llevar 48 cajas. Con dos voluntarios es el máximo de viajes posible, pero aún quedan 5 cajas.",
          "Las 5 cajas caben en otro viaje. Con un tercer voluntario se pueden llevar todas."
        ],
        "note": "En el último viaje no hace falta llenar el carrito.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "mul",
                2,
                3
              ],
              8
            ],
            "answer": 48
          },
          {
            "calculation": [
              "sub",
              53,
              [
                "mul",
                [
                  "mul",
                  2,
                  3
                ],
                8
              ]
            ],
            "answer": 5
          }
        ]
      }
    },
    {
      "id": "P0194",
      "version": 1,
      "title": "Plantones para el mercado",
      "context": "hort",
      "structure": "triar-mida-per-reduir-el-residu",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Hay 38 plantones para hacer lotes. Todos los lotes han de tener el mismo tamaño y podemos elegir entre hacerlos de 6 o de 7 plantones. Queremos dejar fuera de los lotes el menor número posible de plantones.",
      "question": "¿Qué tamaño de lote conviene elegir? Justifica tu respuesta con lo que sobra en cada opción.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Conviene hacer lotes de 6. Sobran 2, mientras que con lotes de 7 sobran 3.",
        "steps": [
          "Con lotes de 6 hacemos 6 lotes y colocamos 36 plantones. Quedan 2.",
          "Con lotes de 7 hacemos 5 lotes y colocamos 35 plantones. Quedan 3."
        ],
        "note": "Con lotes de 6 también sale un lote más, pero la decisión se toma comparando lo que sobra en cada caso.",
        "evidence": [
          {
            "calculation": [
              "sub",
              38,
              [
                "mul",
                6,
                6
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "sub",
              38,
              [
                "mul",
                5,
                7
              ]
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0195",
      "version": 1,
      "title": "El máximo de equipos posible",
      "context": "esport",
      "structure": "repartir-residu-sense-superar-la-mida-maxima",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hay 35 participantes en un torneo. Cada equipo debe tener 4 o 5 personas y todo el mundo tiene que jugar. La organización quiere formar tantos equipos como pueda.",
      "question": "¿Cuántos equipos puede formar como máximo y cómo debe repartir a los participantes? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Se pueden formar 8 equipos. Cinco tendrán 4 personas y tres tendrán 5.",
        "steps": [
          "Con ocho equipos de cuatro hay 32 plazas ocupadas y quedan 3 personas. Ponemos a una de esas personas en cada uno de tres equipos.",
          "Nueve equipos necesitarían como mínimo 36 personas, aunque todos fueran de cuatro."
        ],
        "note": "El resto puede incorporarse a los equipos porque el máximo permitido es cinco.",
        "evidence": [
          {
            "calculation": [
              "sub",
              35,
              [
                "mul",
                8,
                4
              ]
            ],
            "answer": 3
          },
          {
            "calculation": [
              "mul",
              9,
              4
            ],
            "answer": 36
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                5,
                4
              ],
              [
                "mul",
                3,
                5
              ]
            ],
            "answer": 35
          }
        ]
      }
    },
    {
      "id": "P0196",
      "version": 1,
      "title": "Completar o deshacer el paquete",
      "context": "material-escolar",
      "structure": "comparar-complement-i-residu",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tenemos 47 cuadernos para hacer paquetes de 8. Podemos añadir cuadernos del almacén o devolver allí los que sobren. Queremos que todos los cuadernos que queden formen paquetes completos y mover la menor cantidad posible.",
      "question": "¿Qué decisión conviene tomar? Justifica tu respuesta comparando las dos opciones.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Conviene ir a buscar un cuaderno. Así se pueden hacer seis paquetes completos.",
        "steps": [
          "Con cinco paquetes usamos 40 cuadernos y sobran 7. Podríamos devolverlos al almacén.",
          "Para completar el sexto paquete hay que llegar a 48 cuadernos. Solo tenemos que añadir uno."
        ],
        "note": "La decisión sale de comparar lo que sobra con lo que falta para llenar el siguiente paquete.",
        "evidence": [
          {
            "calculation": [
              "sub",
              47,
              [
                "mul",
                5,
                8
              ]
            ],
            "answer": 7
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                6,
                8
              ],
              47
            ],
            "answer": 1
          }
        ]
      }
    },
    {
      "id": "P0197",
      "version": 1,
      "title": "Dos trozos de coca para diez",
      "context": "berenar",
      "structure": "partir-el-residu-per-mantenir-la-igualtat",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para una merienda hay 9 cocas pequeñas del mismo tamaño, cada una cortada en 8 trozos iguales. Queremos repartirlas todas entre 10 personas. Podemos volver a cortar los trozos que queden.",
      "question": "¿Cómo podemos repartir toda la coca de modo que cada persona reciba la misma cantidad? Justifica qué haces con lo que sobra.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "fraccions",
        "result": "fraccions"
      },
      "solution": {
        "kind": "justification",
        "response": "Cada persona recibe 7 trozos enteros y un quinto de otro trozo.",
        "steps": [
          "Hay 72 trozos. Damos 7 a cada persona y sobran 2.",
          "Cortamos cada uno de los 2 trozos sobrantes en 5 partes iguales. Ahora tenemos 10 partes pequeñas y podemos dar una a cada persona."
        ],
        "note": "Dibuja los dos trozos sobrantes y divide cada uno en cinco partes. Cada parte pequeña es un quinto de un trozo original. La coca entera sería una unidad distinta.",
        "evidence": [
          {
            "calculation": [
              "sub",
              [
                "mul",
                9,
                8
              ],
              [
                "mul",
                10,
                7
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "div",
              2,
              10
            ],
            "answer": 0.2
          }
        ]
      }
    },
    {
      "id": "P0198",
      "version": 1,
      "title": "Cordel para los siete farolillos",
      "context": "manualitats",
      "structure": "residu-que-no-es-pot-ajuntar",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Hace falta un trozo entero de cordel de 3 metros para cada uno de 7 farolillos. En la tienda venden rollos de 8 metros. No podemos hacer nudos para unir trozos.",
      "question": "¿Cuántos rollos tenemos que comprar como mínimo? Explica por qué sumar los metros disponibles puede llevar a otra respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 4 rollos. Tres rollos suman suficientes metros, pero solo dan seis trozos enteros de la medida necesaria.",
        "steps": [
          "De cada rollo salen dos trozos de 3 metros y sobran 2. Los 2 metros que sobran de un rollo no alcanzan para un farolillo.",
          "Con tres rollos tenemos seis trozos que sirven. De un cuarto rollo podemos cortar el séptimo."
        ],
        "note": "Los tres rollos suman 24 metros y los farolillos solo necesitan 21. Los sobrantes quedan separados y no se pueden contar como si fueran un trozo continuo.",
        "evidence": [
          {
            "calculation": [
              "sub",
              8,
              [
                "mul",
                2,
                3
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "mul",
              3,
              2
            ],
            "answer": 6
          },
          {
            "calculation": [
              "sub",
              [
                "mul",
                3,
                8
              ],
              [
                "mul",
                7,
                3
              ]
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0199",
      "version": 1,
      "title": "Grupos para los puestos del taller",
      "context": "tallers",
      "structure": "redistribuir-un-grup-massa-petit",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En el taller participan 38 personas. En cada puesto debe haber entre 4 y 6 personas. Se pueden abrir tantos puestos como haga falta, pero queremos usar los menos posibles.",
      "question": "¿Cuántos puestos hay que abrir y cómo podemos repartir a todo el mundo? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 7 puestos. Una manera es poner a 6 personas en cinco puestos y a 4 en cada uno de los otros dos.",
        "steps": [
          "En seis puestos llenos solo caben 36 personas. Sobran 2 y por sí solas no pueden formar un grupo de cuatro.",
          "Sacamos a dos personas de un grupo de seis y las juntamos con las dos que sobraban. Ahora tenemos dos grupos de cuatro y quedan cinco de seis."
        ],
        "note": "Abrir un puesto más da sitio a todo el mundo. También hay que reorganizar los grupos para que todos tengan el tamaño mínimo.",
        "evidence": [
          {
            "calculation": [
              "sub",
              38,
              [
                "mul",
                6,
                6
              ]
            ],
            "answer": 2
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                5,
                6
              ],
              [
                "mul",
                2,
                4
              ]
            ],
            "answer": 38
          }
        ]
      }
    },
    {
      "id": "P0200",
      "version": 1,
      "title": "El álbum a medio llenar",
      "context": "fotografia",
      "structure": "aprofitar-la-capacitat-que-ja-queda",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Cada página del álbum de anillas tiene 8 huecos para fotos. En la última página hay 5 fotos y las demás están llenas. Ahora queremos poner 26 fotos más.",
      "question": "¿Cuántas páginas nuevas hay que añadir como mínimo? Justifica tu respuesta teniendo en cuenta el espacio que ya queda.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hay que añadir 3 páginas. Podemos llenar dos y poner 7 fotos en la tercera.",
        "steps": [
          "En la página que ya hemos empezado caben 3 fotos más. Después de llenarla todavía tenemos que colocar 23.",
          "En dos páginas nuevas caben 16. Las 7 restantes necesitan una tercera página."
        ],
        "note": "Si contáramos las 26 fotos sin aprovechar los tres huecos libres, parecería que hacen falta cuatro páginas nuevas.",
        "evidence": [
          {
            "calculation": [
              "sub",
              26,
              [
                "sub",
                8,
                5
              ]
            ],
            "answer": 23
          },
          {
            "calculation": [
              "sub",
              23,
              [
                "mul",
                2,
                8
              ]
            ],
            "answer": 7
          }
        ]
      }
    },
    {
      "id": "P0201",
      "version": 1,
      "title": "El fondo común de la excursión",
      "context": "diners",
      "structure": "guardar-centims-per-mantenir-la-igualtat",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En el fondo de la clase quedan 17,03 €. Queremos devolvérselos a cinco personas, a partes iguales y usando monedas. Si queda dinero que no se pueda repartir a partes iguales, lo guardaremos en el fondo.",
      "question": "¿Cuál es la cantidad máxima que puede recibir cada persona? Justifica qué hay que hacer con los céntimos que sobran.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "decimals",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "decimals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Cada persona puede recibir 3,40 € y se guardan 3 céntimos en el fondo.",
        "steps": [
          "Pasamos a céntimos. Con 1.700 céntimos podemos dar 340 a cada una de las cinco personas.",
          "Quedan 3 céntimos. Nos harían falta 5 para dar un céntimo más a cada persona."
        ],
        "note": "Un euro se puede dividir en céntimos. En este reparto, el céntimo es la unidad más pequeña que podemos dar.",
        "evidence": [
          {
            "calculation": [
              "div",
              1700,
              5
            ],
            "answer": 340
          },
          {
            "calculation": [
              "sub",
              1703,
              [
                "mul",
                5,
                340
              ]
            ],
            "answer": 3
          },
          {
            "calculation": [
              "mul",
              5,
              341
            ],
            "answer": 1705
          }
        ]
      }
    },
    {
      "id": "P0202",
      "version": 1,
      "title": "¿De qué color es el cartel?",
      "context": "fira",
      "structure": "residu-com-a-posicio-en-un-cicle",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para decorar la feria colgamos un cartel azul, uno rojo, uno amarillo, uno verde, uno lila y uno blanco. Repetimos siempre este orden, empezando por el azul.",
      "question": "¿De qué color es el cartel que ocupa el puesto 29? Justifica cómo usas el resto.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El cartel del puesto 29 es lila.",
        "steps": [
          "Cuatro repeticiones de seis colores ocupan los primeros 24 puestos.",
          "El puesto 29 es el quinto de la siguiente repetición. El quinto color de la lista es el lila."
        ],
        "note": "Aquí el resto indica cuántos puestos avanzamos dentro de la siguiente repetición.",
        "evidence": [
          {
            "calculation": [
              "mul",
              4,
              6
            ],
            "answer": 24
          },
          {
            "calculation": [
              "sub",
              29,
              [
                "mul",
                4,
                6
              ]
            ],
            "answer": 5
          }
        ]
      }
    },
    {
      "id": "P0203",
      "version": 1,
      "title": "Cajas grandes y pequeñas",
      "context": "cuina",
      "structure": "residu-que-encaixa-en-un-altre-format",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos que envasar 40 galletas. Tenemos cajas de 6 galletas y cajas de 4. Queremos envasarlas todas, llenar todas las cajas que usemos y usar las menos posibles.",
      "question": "¿Qué combinación de cajas nos conviene? Justifica por qué no podemos usar menos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 7 cajas. Podemos llenar seis de 6 galletas y una de 4.",
        "steps": [
          "Llenamos seis cajas grandes con 36 galletas. Las 4 sobrantes llenan justo una caja pequeña.",
          "En seis cajas cabrían como máximo 36 galletas, aunque todas fueran grandes."
        ],
        "note": "Lo que sobra al llenar las cajas grandes cabe justo en una caja pequeña.",
        "evidence": [
          {
            "calculation": [
              "sub",
              40,
              [
                "mul",
                6,
                6
              ]
            ],
            "answer": 4
          },
          {
            "calculation": [
              "add",
              [
                "mul",
                6,
                6
              ],
              4
            ],
            "answer": 40
          }
        ]
      }
    },
    {
      "id": "P0204",
      "version": 1,
      "title": "Los dípticos de tres días",
      "context": "impressio",
      "structure": "ajuntar-residus-de-diversos-grups",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "El lunes, el martes y el miércoles imprimimos 22 dípticos cada día. Los distribuimos en paquetes completos de 6. Podemos guardar los dípticos que sobren un día y juntarlos con los de los otros días.",
      "question": "¿Cuántos paquetes más conseguimos si guardamos y juntamos los sobrantes en vez de hacer los paquetes de cada día por separado? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "interpretar-residu"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Conseguimos 2 paquetes completos más.",
        "steps": [
          "Cada día podemos hacer tres paquetes con 18 dípticos y sobran 4.",
          "En tres días los sobrantes suman 12 dípticos. Si los juntamos, hacemos dos paquetes más."
        ],
        "note": "Sin juntar los sobrantes salen nueve paquetes. Con los sobrantes juntos obtenemos once.",
        "evidence": [
          {
            "calculation": [
              "sub",
              22,
              [
                "mul",
                3,
                6
              ]
            ],
            "answer": 4
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                3,
                4
              ],
              6
            ],
            "answer": 2
          }
        ]
      }
    },
    {
      "id": "P0205",
      "version": 1,
      "title": "Pedidos en bicicleta",
      "context": "comerc",
      "structure": "percentatge-del-restant-i-del-total",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una tienda prepara 80 pedidos. Tres cuartas partes se recogen en la tienda. De los pedidos que hay que repartir a domicilio, el 20 % se entrega en bicicleta.",
      "question": "¿Qué porcentaje de todos los pedidos se entrega en bicicleta? Justifica sobre qué cantidad haces cada cálculo.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El 5 % de todos los pedidos se entrega en bicicleta.",
        "steps": [
          "El total de la fracción son los 80 pedidos. Si se recogen tres cuartas partes, quedan 20 para entregar a domicilio.",
          "El 20 % se calcula sobre estos 20 pedidos. Son 4 entregas en bicicleta.",
          "Para calcular el porcentaje final volvemos al total de 80. Cuatro de 80 equivale a cinco de cada 100."
        ],
        "note": "El 20 % se refiere a las entregas a domicilio y el 5 % se refiere al conjunto de pedidos.",
        "evidence": [
          {
            "calculation": [
              "div",
              80,
              4
            ],
            "answer": 20
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                20,
                20
              ],
              100
            ],
            "answer": 4
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                4,
                100
              ],
              80
            ],
            "answer": 5
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 4,
          "filled": 1,
          "total": 80,
          "caption": "Cada parte representa 20 pedidos. La parte coloreada es el grupo que se reparte a domicilio."
        }
      }
    },
    {
      "id": "P0206",
      "version": 1,
      "title": "Dos coros, dos totales",
      "context": "musica",
      "structure": "fraccio-i-percentatge-de-grups-diferents",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En el coro del barrio Norte hay 48 personas y una cuarta parte canta por primera vez. En el del barrio Sur hay 60 personas y el 20 % canta por primera vez. Pau dice que en el Norte hay más debutantes porque un cuarto es más que el 20 %.",
      "question": "¿Tiene razón Pau? Justifica la comparación indicando cuál es el total de cada coro.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Los dos coros tienen 12 debutantes.",
        "steps": [
          "Un cuarto es el 25 %. En el coro del Norte ese cuarto se calcula sobre 48 personas y da 12.",
          "En el coro del Sur el 20 % se calcula sobre 60 personas y también da 12."
        ],
        "note": "Comparar solo las proporciones no permite comparar las cantidades cuando los totales son distintos.",
        "evidence": [
          {
            "calculation": [
              "div",
              100,
              4
            ],
            "answer": 25
          },
          {
            "calculation": [
              "div",
              48,
              4
            ],
            "answer": 12
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                60,
                20
              ],
              100
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0207",
      "version": 1,
      "title": "Las plantas que había por la mañana",
      "context": "hort",
      "structure": "reconstruir-dues-bases-successives",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Por la mañana se dona un cuarto de las plantas de un vivero a una escuela. Por la tarde se vende el 20 % de las que quedan después de la donación. A la hora de cerrar, en el vivero aún hay 24 plantas.",
      "question": "¿Cuántas plantas había antes de la donación? Explica cuál es el total al deshacer cada uno de los dos cambios.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Antes de la donación había 40 plantas.",
        "steps": [
          "Las 24 plantas son el 80 % de las que había justo antes de vender. Son cuatro quintas partes, de modo que cinco partes son 30 plantas.",
          "Las 30 plantas son tres cuartas partes de la cantidad que había antes de la donación. Cada cuarto son 10 plantas. El total inicial es de 40."
        ],
        "note": "La venta toma como base las 30 plantas que quedan después de donar. La donación toma como base las 40 plantas iniciales.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                24,
                4
              ],
              5
            ],
            "answer": 30
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                30,
                3
              ],
              4
            ],
            "answer": 40
          }
        ]
      }
    },
    {
      "id": "P0208",
      "version": 1,
      "title": "La votación del patio",
      "context": "escola",
      "structure": "percentatge-conjunt-amb-grups-desiguals",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Votan 40 alumnos de quinto y 60 de sexto. Tres cuartas partes de los de quinto votan a favor de poner una mesa de ping-pong en el patio. En sexto vota a favor el 20 % de quienes han votado.",
      "question": "¿Qué porcentaje del conjunto de votantes ha votado a favor? Indica cuál es el total en cada cálculo.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El 42 % del conjunto de votantes ha votado a favor.",
        "steps": [
          "Calculamos tres cuartas partes de los 40 alumnos de quinto y obtenemos 30 votos.",
          "Calculamos el 20 % de los 60 alumnos de sexto y obtenemos 12 votos.",
          "Sumamos los 42 votos favorables. El porcentaje conjunto se calcula sobre los 100 alumnos que han votado."
        ],
        "note": "Cada curso aporta un número distinto de votantes. Para calcular el resultado conjunto, sumamos los votos y también los votantes.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                40,
                4
              ],
              3
            ],
            "answer": 30
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                60,
                20
              ],
              100
            ],
            "answer": 12
          },
          {
            "calculation": [
              "add",
              30,
              12
            ],
            "answer": 42
          },
          {
            "calculation": [
              "add",
              40,
              60
            ],
            "answer": 100
          }
        ]
      }
    },
    {
      "id": "P0209",
      "version": 1,
      "title": "Del bidón al depósito",
      "context": "aigua",
      "structure": "fraccions-i-percentatges-de-capacitats-diferents",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un depósito de 4 litros está lleno hasta tres cuartas partes de su capacidad. Un bidón de 2 litros contiene agua hasta el 25 % de su capacidad. Echamos toda el agua del bidón en el depósito.",
      "question": "¿Qué fracción de la capacidad del depósito quedará llena? Justifica sobre qué capacidad haces cada cálculo.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El depósito quedará lleno hasta siete octavos de su capacidad. Habrá 3 litros y medio de agua.",
        "steps": [
          "Tres cuartas partes del depósito de 4 litros son 3.000 mL.",
          "El 25 % del bidón de 2 litros es un cuarto de 2.000 mL, es decir, 500 mL.",
          "El depósito acaba con 3.500 mL. El total de la fracción final vuelve a ser la capacidad del depósito, 4.000 mL. Quedan llenos siete de sus ocho bloques de 500 mL."
        ],
        "note": "El cuarto del bidón son 500 mL. Un cuarto del depósito sería el doble.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                4000,
                4
              ],
              3
            ],
            "answer": 3000
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                2000,
                25
              ],
              100
            ],
            "answer": 500
          },
          {
            "calculation": [
              "add",
              3000,
              500
            ],
            "answer": 3500
          },
          {
            "calculation": [
              "div",
              3500,
              500
            ],
            "answer": 7
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 7,
          "total": 4000,
          "caption": "El dibujo representa el depósito de 4 litros. Cada bloque son 500 mL y siete bloques quedan llenos."
        }
      }
    },
    {
      "id": "P0210",
      "version": 1,
      "title": "Presupuesto para el taller",
      "context": "diners",
      "structure": "reserva-de-pressupost-i-rebaixa-de-preu",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para un taller tenemos 120 €. Reservamos una quinta parte para imprimir carteles. El material del taller cuesta 100 € antes de una rebaja del 20 %.",
      "question": "¿Cuánto dinero quedará para comprar más material después de pagar la compra? Justifica qué total sirve de referencia para la reserva y cuál para la rebaja.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Quedarán 16 € para comprar más material.",
        "steps": [
          "La reserva es una quinta parte de los 120 € de presupuesto. Apartamos 24 € y quedan 96 para material.",
          "El descuento se calcula sobre los 100 € del precio inicial del material. Descontamos 20 € y pagamos 80.",
          "De los 96 € disponibles para material, quedan 16."
        ],
        "note": "Una quinta parte y un 20 % son equivalentes. Aquí dan importes distintos porque se aplican a cantidades distintas.",
        "evidence": [
          {
            "calculation": [
              "div",
              120,
              5
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                100,
                20
              ],
              100
            ],
            "answer": 20
          },
          {
            "calculation": [
              "sub",
              [
                "sub",
                120,
                24
              ],
              [
                "sub",
                100,
                20
              ]
            ],
            "answer": 16
          }
        ]
      }
    },
    {
      "id": "P0211",
      "version": 1,
      "title": "El tenis entre los deportes",
      "context": "esport",
      "structure": "passar-del-conjunt-a-un-subgrup",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un campamento urbano hay 60 niños. Dos tercios del total han elegido hacer deporte. El 25 % de todos los niños ha elegido tenis, que es una de las actividades deportivas. Jana afirma que una cuarta parte de los niños que han elegido deporte hace tenis.",
      "question": "¿Es correcta la afirmación? Justifica qué fracción de quienes hacen deporte ha elegido tenis y cuál es el total en cada paso.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Jana se equivoca. Hacen tenis 3/8 de los niños que han elegido deporte.",
        "steps": [
          "De los 60 niños del campamento, dos tercios son 40 niños que han elegido deporte. El 25 % de esos mismos 60 son 15 niños que han elegido tenis.",
          "Ahora el total son los 40 niños que han elegido deporte. De esos, 15 hacen tenis. Simplificamos 15/40 agrupando de cinco en cinco y obtenemos 3/8."
        ],
        "note": "Un cuarto de todo el campamento son 15 niños. Un cuarto de quienes han elegido deporte serían 10.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                60,
                3
              ],
              2
            ],
            "answer": 40
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                60,
                25
              ],
              100
            ],
            "answer": 15
          },
          {
            "calculation": [
              "div",
              15,
              5
            ],
            "answer": 3
          },
          {
            "calculation": [
              "div",
              40,
              5
            ],
            "answer": 8
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 8,
          "filled": 3,
          "total": 40,
          "caption": "La barra representa a los 40 niños que han elegido deporte. Los tres bloques coloreados representan a los 15 que hacen tenis."
        }
      }
    },
    {
      "id": "P0212",
      "version": 1,
      "title": "Dos jarras en el mismo bol",
      "context": "begudes",
      "structure": "parts-iguals-amb-proporcions-diferents",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "La primera jarra contiene 1 litro de bebida y un cuarto de su contenido es zumo de melocotón. La segunda contiene medio litro de bebida y el 50 % de su contenido es zumo de melocotón. Echamos las dos bebidas en un bol.",
      "question": "¿Qué fracción de la mezcla final es zumo de melocotón? Justifica cuál es el total de cada una de las tres proporciones.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Un tercio de la mezcla final es zumo de melocotón.",
        "steps": [
          "Un cuarto del litro de la primera jarra son 250 mL de zumo. El 50 % del medio litro de la segunda también son 250 mL de zumo.",
          "En el bol hay 500 mL de zumo dentro de un total de 1.500 mL de mezcla. Podemos dividir la mezcla en tres partes de 500 mL, y solo una corresponde al zumo."
        ],
        "note": "En un dibujo, representa la mezcla final con tres vasos de medio litro. Un vaso entero equivale a la cantidad de zumo.",
        "evidence": [
          {
            "calculation": [
              "div",
              1000,
              4
            ],
            "answer": 250
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                500,
                50
              ],
              100
            ],
            "answer": 250
          },
          {
            "calculation": [
              "add",
              250,
              250
            ],
            "answer": 500
          },
          {
            "calculation": [
              "div",
              [
                "add",
                1000,
                500
              ],
              500
            ],
            "answer": 3
          }
        ],
        "visual": {
          "type": "fraction",
          "parts": 3,
          "filled": 1,
          "total": 1500,
          "caption": "La mezcla completa tiene tres partes de 500 mL. La parte coloreada representa todo el zumo."
        }
      }
    },
    {
      "id": "P0213",
      "version": 1,
      "title": "Dos cupones, el mismo porcentaje",
      "context": "comerc",
      "structure": "comparar-rebaixes-amb-bases-diferents",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Una mochila cuesta 80 € y primero le aplican una rebaja de un cuarto del precio. Después hay que elegir un cupón. El cupón A descuenta el 20 % del precio original y el cupón B descuenta el 20 % del precio rebajado.",
      "question": "¿Qué cupón deja el precio final más bajo y por cuántos euros? Justifica sobre qué precio se aplica cada porcentaje.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El cupón A deja el precio 4 € más bajo. Con el A se pagan 44 € y con el B, 48 €.",
        "steps": [
          "La primera rebaja es un cuarto de los 80 € originales, o sea, 20 €. El precio rebajado es de 60 €.",
          "El cupón A quita el 20 % de los 80 € originales, que son 16 €. El cupón B quita el 20 % de los 60 € rebajados, que son 12 €.",
          "En los dos casos, el importe del cupón se resta de los 60 € que se pagaban antes de aplicarlo."
        ],
        "note": "Los cupones tienen el mismo porcentaje, pero toman como referencia precios distintos.",
        "evidence": [
          {
            "calculation": [
              "div",
              80,
              4
            ],
            "answer": 20
          },
          {
            "calculation": [
              "sub",
              60,
              [
                "div",
                [
                  "mul",
                  80,
                  20
                ],
                100
              ]
            ],
            "answer": 44
          },
          {
            "calculation": [
              "sub",
              60,
              [
                "div",
                [
                  "mul",
                  60,
                  20
                ],
                100
              ]
            ],
            "answer": 48
          },
          {
            "calculation": [
              "sub",
              48,
              44
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0214",
      "version": 1,
      "title": "El inventario de los plantones",
      "context": "hort",
      "structure": "perdua-sobre-les-llavors-i-supervivencia-sobre-els-germinats",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En el vivero sembramos 120 semillas y tres cuartas partes germinan. De cada semilla que germina sale un plantón. Más adelante, algunos plantones se estropean. El registro dice que se han estropeado tantos plantones como el 15 % de las semillas sembradas.",
      "question": "¿Qué porcentaje de los plantones que salieron sigue en buen estado? Justifica cuál es el total de cada cálculo.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El 80 % de los plantones que salieron sigue en buen estado.",
        "steps": [
          "Tres cuartas partes de las 120 semillas son 90 semillas germinadas. Por tanto, salen 90 plantones.",
          "El 15 % se calcula sobre las 120 semillas sembradas. Se estropean 18 plantones y quedan 72.",
          "Para responder, comparamos los 72 que están bien con los 90 que habían salido. Es el 80 %."
        ],
        "note": "El registro toma como referencia las semillas sembradas. La pregunta toma como referencia los plantones que salieron.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                120,
                4
              ],
              3
            ],
            "answer": 90
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                120,
                15
              ],
              100
            ],
            "answer": 18
          },
          {
            "calculation": [
              "sub",
              90,
              18
            ],
            "answer": 72
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                72,
                100
              ],
              90
            ],
            "answer": 80
          }
        ]
      }
    },
    {
      "id": "P0215",
      "version": 1,
      "title": "Los panes integrales de los dos días",
      "context": "forn",
      "structure": "recuperar-un-total-i-combinar-dos-grups",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "El lunes, una panadería vende 18 panes integrales. Esos panes son el 30 % de todos los panes vendidos el lunes. El martes vende 40 panes en total y la mitad son integrales.",
      "question": "¿Qué porcentaje de todos los panes vendidos entre el lunes y el martes eran integrales? Justifica cuál es el total en cada paso.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot",
        "treballar-cap-enrere"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El 38 % de los panes vendidos entre los dos días eran integrales.",
        "steps": [
          "El total del 30 % es la venta del lunes. Si tres décimas son 18 panes, una décima son 6 panes. El lunes se venden 60 en total.",
          "El total de la mitad son los 40 panes del martes. Veinte son integrales.",
          "Entre los dos días se venden 38 panes integrales sobre un total de 100 panes."
        ],
        "note": "Para el porcentaje conjunto, la referencia es la suma de los panes vendidos los dos días.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                18,
                3
              ],
              10
            ],
            "answer": 60
          },
          {
            "calculation": [
              "div",
              40,
              2
            ],
            "answer": 20
          },
          {
            "calculation": [
              "add",
              18,
              20
            ],
            "answer": 38
          },
          {
            "calculation": [
              "add",
              60,
              40
            ],
            "answer": 100
          }
        ]
      }
    },
    {
      "id": "P0216",
      "version": 1,
      "title": "Más votos para el coro",
      "context": "musica",
      "structure": "creixement-proporcional-de-la-part-i-del-tot",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una primera votación participan 80 alumnos y un cuarto vota por el coro. En una segunda votación, el número total de votantes aumenta un 25 % respecto a la primera. El número de votos por el coro también aumenta un 25 % respecto a la primera.",
      "question": "¿Aumenta la fracción de votantes que elige el coro? Justifica a qué cantidad se aplica cada uno de los dos aumentos y con qué total comparas los votos al final.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "fraccions",
        "percentatges",
        "identificar-tot"
      ],
      "numeric": {
        "data": "fraccions",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La fracción se mantiene en un cuarto. Los votos por el coro pasan de 20 a 25, pero el total pasa de 80 a 100.",
        "steps": [
          "En la primera votación, un cuarto de 80 son 20 votos por el coro.",
          "El aumento de votantes se calcula sobre los 80 iniciales y añade 20. El aumento de votos por el coro se calcula sobre los 20 iniciales y añade 5.",
          "En la segunda votación, los 25 votos por el coro se comparan con los 100 votantes. Veinticinco es un cuarto de 100."
        ],
        "note": "Si la parte y el total crecen en la misma proporción, la fracción se mantiene.",
        "evidence": [
          {
            "calculation": [
              "div",
              80,
              4
            ],
            "answer": 20
          },
          {
            "calculation": [
              "add",
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
            "answer": 100
          },
          {
            "calculation": [
              "add",
              20,
              [
                "div",
                [
                  "mul",
                  20,
                  25
                ],
                100
              ]
            ],
            "answer": 25
          },
          {
            "calculation": [
              "div",
              100,
              4
            ],
            "answer": 25
          }
        ]
      }
    },
    {
      "id": "P0217",
      "version": 1,
      "title": "Etiquetas a ritmo constante",
      "context": "impressio",
      "structure": "passar-per-la-unitat",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "Una impresora que ya está en marcha hace 24 etiquetas en 4 minutos. Durante todo el trabajo imprime el mismo número de etiquetas cada minuto.",
      "question": "¿Cuántas etiquetas hará en 10 minutos?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hará 60 etiquetas.",
        "steps": [
          "En un minuto hace 24 ÷ 4 = 6 etiquetas.",
          "En diez minutos hace diez grupos de seis etiquetas."
        ],
        "note": "Tabla del ritmo de impresión. 1 minuto → 6 etiquetas. 4 minutos → 24 etiquetas. 10 minutos → 60 etiquetas.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                24,
                4
              ],
              10
            ],
            "answer": 60
          }
        ]
      }
    },
    {
      "id": "P0218",
      "version": 1,
      "title": "El camino en el plano",
      "context": "orientacio",
      "structure": "escalar-una-distancia",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En un plano del pueblo, 2 cm representan 100 metros reales. El camino recto entre la escuela y el parque mide 7 cm en el plano.",
      "question": "¿Cuántos metros mide el camino en realidad?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Mide 350 metros.",
        "steps": [
          "Cada centímetro representa 50 metros, la mitad de 100.",
          "Multiplicamos los 50 metros por los siete centímetros del camino."
        ],
        "note": "También podemos contar 2 + 2 + 2 + 1 cm. Son tres tramos de 100 metros y uno de 50.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                100,
                2
              ],
              7
            ],
            "answer": 350
          }
        ]
      }
    },
    {
      "id": "P0219",
      "version": 1,
      "title": "Los carteles de la fiesta",
      "context": "comerc",
      "structure": "preu-amb-un-import-fix",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una copistería cobra 3 € por preparar el pedido de carteles, con independencia de cuántos se hagan. Cada cartel cuesta 2 € más. Èric dice que encargar seis carteles costará el doble que encargar tres.",
      "question": "¿Es el precio total directamente proporcional al número de carteles? Justifica tu respuesta con los dos pedidos.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El precio total no es proporcional. Tres carteles cuestan 9 € y seis cuestan 15 €. El doble de 9 € serían 18 €.",
        "steps": [
          "Con tres carteles pagamos 6 € por los carteles y 3 € de preparación.",
          "Con seis carteles pagamos 12 € por los carteles y los mismos 3 € de preparación."
        ],
        "note": "El importe de los carteles se duplica. La preparación se cobra una vez en cada pedido.",
        "evidence": [
          {
            "calculation": [
              "add",
              3,
              [
                "mul",
                3,
                2
              ]
            ],
            "answer": 9
          },
          {
            "calculation": [
              "add",
              3,
              [
                "mul",
                6,
                2
              ]
            ],
            "answer": 15
          },
          {
            "calculation": [
              "mul",
              9,
              2
            ],
            "answer": 18
          }
        ]
      }
    },
    {
      "id": "P0220",
      "version": 1,
      "title": "El patrón del mosaico",
      "context": "art",
      "structure": "mantenir-la-proporcio-entre-dos-colors",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un patrón para un mosaico tiene 3 baldosas azules y 2 blancas. Queremos hacer un mosaico de 20 baldosas repitiendo el patrón completo.",
      "question": "¿Cuántas baldosas azules y blancas necesitamos? Explica cómo mantienes la proporción.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Necesitamos 12 baldosas azules y 8 blancas.",
        "steps": [
          "Cada patrón tiene 5 baldosas. Con 20 baldosas podemos hacer cuatro copias del patrón.",
          "Multiplicamos por cuatro tanto las baldosas azules como las blancas."
        ],
        "note": "Dibuja cuatro tiras de cinco baldosas, con tres azules y dos blancas en cada una.",
        "evidence": [
          {
            "calculation": [
              "div",
              20,
              [
                "add",
                3,
                2
              ]
            ],
            "answer": 4
          },
          {
            "calculation": [
              "mul",
              3,
              4
            ],
            "answer": 12
          },
          {
            "calculation": [
              "mul",
              2,
              4
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0221",
      "version": 1,
      "title": "Las cajas del almacén",
      "context": "material-escolar",
      "structure": "reconstruir-el-nombre-de-grups",
      "level": "superior",
      "difficulty": 1,
      "status": "pendent-docent",
      "statement": "En 6 cajas llenas hay 48 lápices. Todas las cajas son iguales. Queremos guardar 72 lápices en cajas como estas y llenarlas todas.",
      "question": "¿Cuántas cajas necesitamos?",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Necesitamos 9 cajas.",
        "steps": [
          "Cada caja llena contiene 48 ÷ 6 = 8 lápices.",
          "Dividimos los 72 lápices entre los 8 que van en cada caja."
        ],
        "note": "También puedes ver los 72 lápices como los 48 iniciales más 24. Los 24 son la mitad de 48 y llenan tres cajas más.",
        "evidence": [
          {
            "calculation": [
              "div",
              72,
              [
                "div",
                48,
                6
              ]
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0222",
      "version": 1,
      "title": "Un ritmo distinto en la subida",
      "context": "esport",
      "structure": "comparar-temps-i-distancia-amb-ritme-variable",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Durante los primeros 4 minutos de una ruta en bicicleta, Laia recorre 400 metros. Durante los 4 minutos siguientes, cuesta arriba, recorre 200.",
      "question": "Si contamos el tiempo y la distancia desde el inicio de la ruta, ¿son directamente proporcionales en estos dos momentos? Justifica tu respuesta comparando los 4 minutos con los 8.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "En estos dos momentos la distancia no es proporcional al tiempo. En 8 minutos Laia recorre 600 metros. Si mantuviera la proporción de los primeros 4 minutos, recorrería 800.",
        "steps": [
          "A los 4 minutos ha recorrido 400 metros. A los 8, sumamos los 400 metros del primer tramo y los 200 del segundo.",
          "El tiempo se ha duplicado. La distancia solo llegaría a 800 metros si también se duplicara."
        ],
        "note": "En una relación proporcional, al duplicar el tiempo desde el inicio también se tiene que duplicar la distancia acumulada.",
        "evidence": [
          {
            "calculation": [
              "add",
              400,
              200
            ],
            "answer": 600
          },
          {
            "calculation": [
              "mul",
              400,
              2
            ],
            "answer": 800
          }
        ]
      }
    },
    {
      "id": "P0223",
      "version": 1,
      "title": "La foto ampliada",
      "context": "fotografia",
      "structure": "comprovar-que-es-mante-la-forma",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una foto rectangular mide 6 cm de ancho y 4 cm de alto. Una copia mide 9 cm de ancho y 6 cm de alto. Queremos saber si las dos medidas han crecido en la misma proporción.",
      "question": "¿Mantienen las medidas de la copia la proporción de la foto original? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Tanto la anchura como la altura se han ampliado añadiendo la mitad de la medida original.",
        "steps": [
          "La anchura original es de 6 cm. Si añadimos la mitad, 3 cm, llegamos a los 9 de la copia.",
          "La altura original es de 4 cm. Si añadimos la mitad, 2 cm, llegamos a los 6 de la copia."
        ],
        "note": "En una cuadrícula, los dos rectángulos tienen tres columnas por cada dos filas. El de 6 × 4 duplica esas dos medidas y el de 9 × 6 las triplica.",
        "evidence": [
          {
            "calculation": [
              "add",
              6,
              [
                "div",
                6,
                2
              ]
            ],
            "answer": 9
          },
          {
            "calculation": [
              "add",
              4,
              [
                "div",
                4,
                2
              ]
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0224",
      "version": 1,
      "title": "El lado y la superficie",
      "context": "hort",
      "structure": "costat-i-area-no-proporcionals",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un huerto cuadrado mide 3 metros de lado. Se quiere hacer otro, también cuadrado, con un lado de 6 metros. Pau dice que el nuevo huerto tendrá el doble de superficie porque el lado es el doble.",
      "question": "¿Es la superficie de un cuadrado directamente proporcional a la longitud del lado? Justifica tu respuesta con los dos huertos.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "No. El lado se duplica, pero la superficie pasa de 9 a 36 m². La superficie se multiplica por cuatro.",
        "steps": [
          "El huerto de 3 metros tiene 3 × 3 = 9 m². El de 6 metros tiene 6 × 6 = 36 m².",
          "Dividimos 36 entre 9 y obtenemos 4."
        ],
        "note": "Dibuja el cuadrado grande y divídelo por la mitad en los dos sentidos. Dentro caben cuatro cuadrados como el pequeño.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              3
            ],
            "answer": 9
          },
          {
            "calculation": [
              "mul",
              6,
              6
            ],
            "answer": 36
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                6,
                6
              ],
              [
                "mul",
                3,
                3
              ]
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0225",
      "version": 1,
      "title": "La cinta para el taller",
      "context": "comerc",
      "structure": "comparar-dos-preus-per-unitat",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En la tienda A, 6 metros de cinta cuestan 18 €. En la tienda B, 4 metros cuestan 16 €. En cada tienda el precio por metro es fijo y no hay ningún cargo añadido. Necesitamos 8 metros.",
      "question": "¿En qué tienda deberíamos comprarlos y cuántos euros ahorraríamos?",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "En la tienda A. Pagaremos 24 €, ocho euros menos que en la tienda B.",
        "steps": [
          "En la tienda A cada metro cuesta 3 €. En la B cuesta 4.",
          "Multiplicamos cada precio por metro por los 8 metros que necesitamos y comparamos los dos totales."
        ],
        "note": "Calcular el precio de un metro permite comparar las ofertas aunque los carteles anuncien longitudes distintas.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                18,
                6
              ],
              8
            ],
            "answer": 24
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                16,
                4
              ],
              8
            ],
            "answer": 32
          },
          {
            "calculation": [
              "sub",
              32,
              24
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0226",
      "version": 1,
      "title": "El agua de las jardineras",
      "context": "hort",
      "structure": "escalar-i-comprovar-si-arriba",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Para regar 3 jardineras iguales usamos 12 litros de agua. Hoy queremos regar 7 jardineras, con la misma cantidad de agua en cada una. Tenemos un depósito con 30 litros.",
      "question": "¿Habrá suficiente? Justifica cuánta agua sobrará o faltará.",
      "features": [
        "multiplicacio-divisio",
        "suma-resta",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Necesitaremos 28 litros y sobrarán 2.",
        "steps": [
          "Si tres jardineras necesitan 12 litros, cada una necesita 4.",
          "Siete jardineras necesitan 7 × 4 = 28 litros. Comparamos los 28 litros con los 30 del depósito."
        ],
        "note": "También puedes contar 3 + 3 + 1 jardineras y sumar 12 + 12 + 4 litros.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                12,
                3
              ],
              7
            ],
            "answer": 28
          },
          {
            "calculation": [
              "sub",
              30,
              28
            ],
            "answer": 2
          }
        ]
      }
    },
    {
      "id": "P0227",
      "version": 1,
      "title": "Las cajas de la biblioteca",
      "context": "biblioteca",
      "structure": "quantitat-fixa-i-repartiment-invers",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tenemos 24 libros para repartir entre cajas. Con 3 cajas, cada una recibe 8 libros. Ahora queremos repartir los mismos 24 libros a partes iguales entre 6 cajas.",
      "question": "¿Es el número de libros por caja directamente proporcional al número de cajas? Justifica tu respuesta con los dos repartos.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "No. Al duplicar las cajas de 3 a 6, los libros por caja pasan de 8 a 4. En cada caja hay la mitad.",
        "steps": [
          "Con tres cajas hacemos 24 ÷ 3 = 8 libros por caja. Con seis cajas hacemos 24 ÷ 6 = 4.",
          "Si hubiera proporcionalidad directa, cada caja tendría que pasar de 8 a 16 libros al duplicar el número de cajas."
        ],
        "note": "Cuando el total de libros es fijo, puedes imaginar que divides cada caja de ocho libros en dos de cuatro.",
        "evidence": [
          {
            "calculation": [
              "div",
              24,
              3
            ],
            "answer": 8
          },
          {
            "calculation": [
              "div",
              24,
              6
            ],
            "answer": 4
          },
          {
            "calculation": [
              "mul",
              2,
              [
                "div",
                24,
                3
              ]
            ],
            "answer": 16
          }
        ]
      }
    },
    {
      "id": "P0228",
      "version": 1,
      "title": "El ritmo de las vueltas",
      "context": "esport",
      "structure": "validar-una-taula-i-extrapolar-amb-condicio",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una sesión de patinaje, el registro marca 12 minutos después de 2 vueltas, 24 minutos después de 4 vueltas y 30 minutos después de 5 vueltas. En los tres casos el tiempo se cuenta desde el inicio.",
      "question": "¿Son compatibles los tres registros con una relación de proporcionalidad directa? Si se mantuviera esa relación, ¿cuánto se tardaría en dar 7 vueltas? Justifica tu respuesta.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Sí. Los tres registros corresponden a 6 minutos por vuelta. Si se mantiene este ritmo, 7 vueltas durarán 42 minutos.",
        "steps": [
          "Dividimos cada tiempo por el número de vueltas. Los cálculos 12 ÷ 2, 24 ÷ 4 y 30 ÷ 5 dan el mismo resultado.",
          "Si el ritmo de 6 minutos por vuelta se mantiene, multiplicamos 6 por 7."
        ],
        "note": "Los registros son compatibles con una misma proporción. Para predecir cuánto durarán las siete vueltas hay que suponer que el ritmo se mantiene.",
        "evidence": [
          {
            "calculation": [
              "div",
              12,
              2
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              24,
              4
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              30,
              5
            ],
            "answer": 6
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                12,
                2
              ],
              7
            ],
            "answer": 42
          }
        ]
      }
    },
    {
      "id": "P0229",
      "version": 1,
      "title": "Preparar el material del taller",
      "context": "tallers",
      "structure": "feina-fixa-i-persones",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Cuatro voluntarios tardan 12 minutos en preparar unos sobres. Para repetir el mismo trabajo habrá seis voluntarios. Todo el mundo trabaja al mismo ritmo y los sobres se pueden repartir sin que nadie tenga que esperar.",
      "question": "¿Cuántos minutos tardarán seis voluntarios en preparar los mismos sobres? Justifica tu respuesta.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Seis voluntarios tardarán 8 minutos.",
        "steps": [
          "Cuatro voluntarios que trabajan doce minutos hacen lo mismo que un voluntario que trabaja 48 minutos.",
          "Con seis voluntarios, nos repartimos esos 48 minutos de trabajo. Cada uno trabaja 8 minutos."
        ],
        "note": "En una tabla, 4 personas durante 12 minutos y 6 personas durante 8 minutos dan el mismo producto, 48.",
        "evidence": [
          {
            "calculation": [
              "mul",
              4,
              12
            ],
            "answer": 48
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                4,
                12
              ],
              6
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0230",
      "version": 1,
      "title": "La ruta en bicicleta",
      "context": "mobilitat",
      "structure": "distancia-fixa-i-velocitat",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Dos personas hacen la misma ruta de 24 km en bicicleta, sin parar. Núria va a 12 km/h y Biel a 8 km/h. Cada uno mantiene su velocidad durante todo el recorrido.",
      "question": "Si Núria tarda 2 horas, ¿cuánto tarda Biel? Justifica qué se mantiene igual.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Biel tarda 3 horas.",
        "steps": [
          "La distancia es de 24 km en los dos casos. Núria hace 12 km cada hora y en dos horas ha hecho 24.",
          "Biel hace 8 km cada hora. Necesita tres tramos de 8 km para completar el recorrido."
        ],
        "note": "Dibuja una tira de 24 km. Puedes dividirla en dos tramos de 12 o en tres de 8. Cada tramo representa una hora.",
        "evidence": [
          {
            "calculation": [
              "mul",
              12,
              2
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                2
              ],
              8
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0231",
      "version": 1,
      "title": "Abrimos un grifo más",
      "context": "aigua",
      "structure": "volum-fix-i-nombre-daixetes",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Tres grifos iguales llenan un depósito vacío en 8 minutos. Al día siguiente lo llenamos con cuatro grifos como estos. De cada grifo sale la misma cantidad de agua por minuto, tanto si está abierto solo como con los demás.",
      "question": "¿Cuánto tardaremos en llenar el mismo depósito con cuatro grifos? Justifica tu respuesta.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Con cuatro grifos tardaremos 6 minutos.",
        "steps": [
          "Tres grifos abiertos ocho minutos aportan tanta agua como un grifo abierto 24 minutos.",
          "Repartimos esos 24 minutos entre los cuatro grifos que funcionan a la vez."
        ],
        "note": "El producto del número de grifos por los minutos tiene que ser el mismo porque el depósito recibe el mismo volumen.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              8
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                3,
                8
              ],
              4
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0232",
      "version": 1,
      "title": "Un mural con la misma superficie",
      "context": "art",
      "structure": "area-fixa-i-dimensions-del-rectangle",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una escuela tiene una lona rectangular de 4 m de alto y 9 m de ancho. Para otra pared quiere una lona rectangular de la misma superficie, pero de 6 m de alto.",
      "question": "¿Qué anchura debe tener la nueva lona? Justifica cómo se compensa el cambio de altura.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La nueva lona debe medir 6 m de ancho.",
        "steps": [
          "La primera lona tiene 4 × 9 = 36 m² de superficie.",
          "En la nueva lona, la altura es de 6 metros. La anchura debe ser 36 ÷ 6 para que el producto siga siendo 36."
        ],
        "note": "En una cuadrícula, puedes dibujar 36 cuadrados como cuatro filas de nueve o como seis filas de seis.",
        "evidence": [
          {
            "calculation": [
              "mul",
              4,
              9
            ],
            "answer": 36
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                4,
                9
              ],
              6
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0233",
      "version": 1,
      "title": "Las imágenes de la presentación",
      "context": "escola",
      "structure": "durada-fixa-i-temps-per-imatge",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una presentación debe durar exactamente un minuto. Si cada imagen se muestra durante 3 segundos, caben 20 imágenes. Ahora se quiere que cada imagen se muestre durante 5 segundos. No hay pausas entre imágenes.",
      "question": "¿Cuántas imágenes cabrán ahora? Justifica por qué cambia el número de imágenes.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Ahora cabrán 12 imágenes.",
        "steps": [
          "Las veinte imágenes de tres segundos ocupan los 60 segundos disponibles.",
          "Si cada imagen ocupa cinco segundos, podemos poner doce porque 12 × 5 = 60."
        ],
        "note": "El total de segundos es el mismo. Dar más tiempo a cada imagen hace que quepan menos.",
        "evidence": [
          {
            "calculation": [
              "mul",
              20,
              3
            ],
            "answer": 60
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                20,
                3
              ],
              5
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0234",
      "version": 1,
      "title": "Trozos de cordel sin sobrantes",
      "context": "manualitats",
      "structure": "llargada-total-fixa-i-mida-del-tros",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un rollo de cordel se puede cortar en 12 trozos de 2 metros sin que sobre nada. El taller prefiere cortar el mismo rollo en trozos de 3 metros.",
      "question": "¿Cuántos trozos enteros de 3 metros saldrán? Explica qué cantidad se conserva.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Saldrán 8 trozos enteros.",
        "steps": [
          "El rollo mide 12 × 2 = 24 metros.",
          "Si cada trozo mide 3 metros, dividimos los 24 metros entre 3."
        ],
        "note": "Puedes agrupar de tres en tres los trozos de dos metros y de dos en dos los de tres metros. En los dos casos, cada grupo mide 6 metros.",
        "evidence": [
          {
            "calculation": [
              "mul",
              12,
              2
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                2
              ],
              3
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0235",
      "version": 1,
      "title": "Dos preguntas sobre las máquinas",
      "context": "impressio",
      "structure": "distingir-produccio-directa-i-temps-invers",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Dos máquinas iguales imprimen juntas 6 láminas cada minuto. Se añaden otras dos máquinas iguales. Todas funcionan al mismo ritmo y se reparten el trabajo. El pedido es de 48 láminas.",
      "question": "¿Qué relación hay entre el número de máquinas y las láminas por minuto? ¿Y entre el número de máquinas y el tiempo para completar el pedido? Clasifica y justifica las dos relaciones.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Las láminas por minuto son directamente proporcionales al número de máquinas. El tiempo para hacer las 48 láminas es inversamente proporcional al número de máquinas.",
        "steps": [
          "Al pasar de dos a cuatro máquinas, duplicamos la producción de 6 a 12 láminas por minuto.",
          "Con dos máquinas hacen falta 8 minutos. Con cuatro hacen falta 4. Duplicamos el número de máquinas y el tiempo se reduce a la mitad."
        ],
        "note": "Para comparar el tiempo mantenemos fijas las 48 láminas del pedido.",
        "evidence": [
          {
            "calculation": [
              "mul",
              6,
              2
            ],
            "answer": 12
          },
          {
            "calculation": [
              "div",
              48,
              6
            ],
            "answer": 8
          },
          {
            "calculation": [
              "div",
              48,
              [
                "mul",
                6,
                2
              ]
            ],
            "answer": 4
          }
        ]
      }
    },
    {
      "id": "P0236",
      "version": 1,
      "title": "El precio del alquiler de patines",
      "context": "comerc",
      "structure": "preu-amb-quota-inicial-no-proporcional",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Para alquilar unos patines pagamos 3 € fijos y 2 € por hora. Comparamos alquilarlos durante 2 horas y durante 4 horas.",
      "question": "¿La relación entre las horas y el precio total es directa, inversa o ninguna de las dos? Justifica tu respuesta con los dos importes.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Ninguna de las dos. Dos horas cuestan 7 € y cuatro horas cuestan 11.",
        "steps": [
          "Si fuera directa, al duplicar las horas también se duplicaría el precio y pasaría de 7 € a 14 €.",
          "Si fuera inversa, el precio se reduciría a la mitad al duplicar las horas. En realidad aumenta de 7 € a 11 €."
        ],
        "note": "Los 3 € fijos se pagan una vez en los dos alquileres.",
        "evidence": [
          {
            "calculation": [
              "add",
              3,
              [
                "mul",
                2,
                2
              ]
            ],
            "answer": 7
          },
          {
            "calculation": [
              "add",
              3,
              [
                "mul",
                4,
                2
              ]
            ],
            "answer": 11
          },
          {
            "calculation": [
              "mul",
              2,
              [
                "add",
                3,
                [
                  "mul",
                  2,
                  2
                ]
              ]
            ],
            "answer": 14
          }
        ]
      }
    },
    {
      "id": "P0237",
      "version": 1,
      "title": "La tabla de los cromos",
      "context": "joc",
      "structure": "classificar-i-corregir-un-valor",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Repartimos el mismo lote de cromos a partes iguales. Con dos niños les tocan 18 a cada uno. Con tres les tocan 12 a cada uno. En la fila de seis niños, alguien ha apuntado que les tocarían 9.",
      "question": "¿El número de cromos por niño varía de forma directamente proporcional, inversamente proporcional o de ninguna de las dos maneras? Corrige la fila de seis y justifica tu respuesta.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La relación es inversa. Con seis niños les tocan 6 a cada uno.",
        "steps": [
          "Las dos primeras filas dan el mismo total de 36 cromos. Dos grupos de 18 y tres grupos de 12 suman lo mismo.",
          "Con seis niños les toca la mitad de lo que les tocaba con tres. Si diéramos nueve a cada uno, necesitaríamos 54 cromos."
        ],
        "note": "Puedes comprobar cada fila multiplicando el número de niños por los cromos por niño. El producto siempre debe ser 36.",
        "evidence": [
          {
            "calculation": [
              "mul",
              2,
              18
            ],
            "answer": 36
          },
          {
            "calculation": [
              "mul",
              3,
              12
            ],
            "answer": 36
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                2,
                18
              ],
              6
            ],
            "answer": 6
          },
          {
            "calculation": [
              "mul",
              6,
              9
            ],
            "answer": 54
          }
        ]
      }
    },
    {
      "id": "P0238",
      "version": 1,
      "title": "Compartimos el alquiler de la sala",
      "context": "diners",
      "structure": "repartiment-invers-amb-un-import-addicional",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un grupo alquila una sala por 36 € y reparte ese gasto a partes iguales. Cada persona también paga 2 € por una entrada individual. Comparamos qué paga cada persona cuando van 3 personas y cuando van 6.",
      "question": "¿La relación entre el número de personas y lo que paga cada una en total es directa, inversa o ninguna de las dos? Justifica tu respuesta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Ninguna de las dos. Con tres personas, cada una paga 14 €. Con seis, paga 8.",
        "steps": [
          "La parte del alquiler baja de 12 € a 6 €. La entrada sigue costando 2 € por persona.",
          "Al duplicar el grupo, el total por persona baja, por lo que no es directamente proporcional. Tampoco se reduce a la mitad. La mitad de 14 € serían 7 €."
        ],
        "note": "La parte del alquiler sí varía de forma inversamente proporcional. Al sumarle la entrada, el total por persona pierde esa relación.",
        "evidence": [
          {
            "calculation": [
              "add",
              [
                "div",
                36,
                3
              ],
              2
            ],
            "answer": 14
          },
          {
            "calculation": [
              "add",
              [
                "div",
                36,
                6
              ],
              2
            ],
            "answer": 8
          },
          {
            "calculation": [
              "div",
              [
                "add",
                [
                  "div",
                  36,
                  3
                ],
                2
              ],
              2
            ],
            "answer": 7
          }
        ]
      }
    },
    {
      "id": "P0239",
      "version": 1,
      "title": "El mismo camino en dos mapas",
      "context": "orientacio",
      "structure": "distancia-real-fixa-i-escala-del-mapa",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un camino mide 600 m en realidad. En un mapa, cada centímetro representa 100 m reales. En otro mapa, cada centímetro representa 200 m reales.",
      "question": "¿La relación entre los metros que representa cada centímetro y la longitud dibujada del mismo camino es directa, inversa o ninguna de las dos? Justifica tu respuesta con los dos mapas.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La relación es inversa. El camino mide 6 cm en el primer mapa y 3 cm en el segundo.",
        "steps": [
          "Con 100 metros por centímetro, los 600 metros reales ocupan 6 cm. Si cada centímetro representa 200, bastan 3 cm.",
          "Cuando un centímetro representa el doble de metros, hace falta la mitad de centímetros para representar la misma distancia."
        ],
        "note": "Podemos recuperar la distancia real multiplicando los centímetros por los metros que representa cada uno.",
        "evidence": [
          {
            "calculation": [
              "div",
              600,
              100
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              600,
              200
            ],
            "answer": 3
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                600,
                200
              ],
              200
            ],
            "answer": 600
          }
        ]
      }
    },
    {
      "id": "P0240",
      "version": 1,
      "title": "¿Cuántos días durará el pienso?",
      "context": "animals",
      "structure": "reserva-fixa-i-consum-diari",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "En el refugio tienen una reserva de 24 kg de pienso. Si gastan 3 kg cada día, les dura 8 días. En otra semana necesitan gastar 4 kg cada día. Empiezan con la misma reserva y no añaden más.",
      "question": "¿Cuántos días durará ahora el pienso? Justifica tu respuesta con la cantidad que se conserva en los dos casos.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La reserva durará 6 días.",
        "steps": [
          "La primera previsión usa los 24 kg, porque 3 kg al día durante 8 días son 24 kg.",
          "Si ahora se gastan 4 kg cada día, dividimos los mismos 24 kg entre 4."
        ],
        "note": "En la tabla, 3 kg al día y 8 días dan el mismo producto que 4 kg al día y 6 días.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              8
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                3,
                8
              ],
              4
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0241",
      "version": 1,
      "title": "Más lotes, más manos",
      "context": "tallers",
      "structure": "temps-segons-encarrec-i-persones",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Tres voluntarios preparan 24 lotes en 12 minutos. Mañana habrá que preparar 36 lotes y habrá seis voluntarios. Todo el mundo trabaja al mismo ritmo y los lotes se pueden repartir sin esperas.",
      "question": "¿Cuánto tardarán mañana? Explica qué mantienes constante al cambiar el número de lotes y al cambiar el número de voluntarios.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Seis voluntarios prepararán los 36 lotes en 9 minutos.",
        "steps": [
          "Con los mismos tres voluntarios, hacer 36 lotes lleva una vez y media el tiempo de hacer 24. Tardarían 18 minutos.",
          "Ahora mantenemos fijos los 36 lotes. Con el doble de voluntarios, el tiempo se reduce a la mitad y queda en 9 minutos."
        ],
        "note": "Tabla de pasos. 24 lotes con 3 voluntarios → 12 minutos. 36 con 3 → 18 minutos. 36 con 6 → 9 minutos.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                12,
                2
              ],
              3
            ],
            "answer": 18
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                [
                  "div",
                  12,
                  2
                ],
                3
              ],
              2
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0242",
      "version": 1,
      "title": "Una ruta más larga y más lenta",
      "context": "mobilitat",
      "structure": "temps-segons-distancia-i-velocitat",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En una ruta de 12 km, Aina pedalea a 12 km/h y tarda 60 minutos. En otra ruta tendrá que hacer 18 km a 9 km/h. En las dos rutas va a la velocidad indicada y no se detiene.",
      "question": "¿Cuánto tardará en hacer la segunda ruta? Justifica cómo afecta al tiempo cada cambio si mantienes fijo el otro dato.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Tardará 120 minutos, es decir, 2 horas.",
        "steps": [
          "Primero mantenemos 12 km/h. Los 18 km son los 12 originales más 6 km. A la misma velocidad, a los 60 minutos les añadimos media hora y obtenemos 90 minutos.",
          "Ahora mantenemos los 18 km. A 9 km/h se recorren 9 km en una hora. Para recorrer 18 hacen falta dos horas."
        ],
        "note": "Con la velocidad fija, una distancia mayor lleva más tiempo en la misma proporción. Con la distancia fija, bajar de 12 a 9 km/h aumenta el tiempo.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                60,
                12
              ],
              18
            ],
            "answer": 90
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                18,
                9
              ],
              60
            ],
            "answer": 120
          }
        ]
      }
    },
    {
      "id": "P0243",
      "version": 1,
      "title": "El depósito y el tercer grifo",
      "context": "aigua",
      "structure": "temps-segons-volum-i-cabal",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Dos grifos iguales llenan un depósito de 30 litros en 10 minutos. Ahora queremos recoger 45 litros con tres grifos iguales. De cada grifo sale siempre la misma cantidad de agua por minuto.",
      "question": "¿Tardaremos más, menos o lo mismo? Justifica tu respuesta con los dos cambios y di qué mantienes fijo en cada caso.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Tardaremos lo mismo, 10 minutos.",
        "steps": [
          "Si dejamos dos grifos abiertos, para pasar de 30 a 45 litros hay que añadir la mitad del volumen. El tiempo aumenta en la misma proporción y pasa de 10 a 15 minutos.",
          "Para recoger los mismos 45 litros, los dos grifos necesitan un total de 30 minutos de funcionamiento, sumando el tiempo de ambos. Con tres grifos abiertos a la vez, son 10 minutos."
        ],
        "note": "En este caso, aumentar el volumen y el número de grifos en la misma proporción hace que el tiempo se mantenga.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                10,
                2
              ],
              3
            ],
            "answer": 15
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                2,
                15
              ],
              3
            ],
            "answer": 10
          }
        ]
      }
    },
    {
      "id": "P0244",
      "version": 1,
      "title": "El nuevo álbum de fotos",
      "context": "fotografia",
      "structure": "pagines-segons-fotos-totals-i-fotos-per-pagina",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Un álbum con 48 fotos ocupa 8 páginas llenas, con 6 fotos en cada una. En un álbum nuevo queremos poner 60 fotos y caben 10 en cada página.",
      "question": "¿Cuántas páginas llenaremos en el álbum nuevo? Explica el efecto de cambiar el total de fotos y el de cambiar los huecos de cada página.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Llenaremos 6 páginas.",
        "steps": [
          "Si mantenemos la capacidad de 6 fotos por página, al pasar de 48 a 60 pasamos de 8 a 10 páginas.",
          "Ahora mantenemos las 60 fotos. Con páginas en las que caben 10, las mismas fotos ocupan 6 páginas."
        ],
        "note": "Para ver la relación inversa, compara diez páginas de seis con seis páginas de diez. Los dos productos dan 60.",
        "evidence": [
          {
            "calculation": [
              "div",
              60,
              6
            ],
            "answer": 10
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                10,
                6
              ],
              10
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0245",
      "version": 1,
      "title": "Un camino más largo en otro mapa",
      "context": "orientacio",
      "structure": "dibuix-segons-escala-i-distancia-real",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un mapa, cada centímetro representa 100 metros. Una ruta de 400 metros mide 4 cm en ese mapa. Tendremos que dibujar una de 600 metros en otro mapa, donde cada centímetro representa 200 metros.",
      "question": "¿Cuántos centímetros medirá el nuevo dibujo? Justifica qué mantienes constante al cambiar de mapa y al alargar la ruta.",
      "features": [
        "suma-resta",
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El nuevo dibujo medirá 3 cm.",
        "steps": [
          "Primero dejamos la ruta en 400 metros. En el nuevo mapa, cada centímetro representa el doble de metros, así que la ruta ocupa la mitad de centímetros, solo 2.",
          "Ahora mantenemos el nuevo mapa. Los 200 metros de más ocupan 1 cm más. La ruta de 600 metros ocupa 3 cm."
        ],
        "note": "Con la ruta fija, si aumentan los metros que representa cada centímetro, disminuye la longitud dibujada. En un mismo mapa, la longitud dibujada crece con la distancia real.",
        "evidence": [
          {
            "calculation": [
              "div",
              400,
              200
            ],
            "answer": 2
          },
          {
            "calculation": [
              "add",
              [
                "div",
                400,
                200
              ],
              [
                "div",
                200,
                200
              ]
            ],
            "answer": 3
          }
        ]
      }
    },
    {
      "id": "P0246",
      "version": 1,
      "title": "El alquiler de la pista",
      "context": "diners",
      "structure": "quota-segons-hores-i-persones",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Alquilar una pista cuesta 12 € por hora, sin ningún otro cargo. Seis personas la alquilan dos horas y se reparten el coste a partes iguales. La semana siguiente, cuatro personas la alquilan tres horas.",
      "question": "¿Cuánto pagará cada persona la segunda semana? Explica cómo cambia el precio por persona al alargar el alquiler y al cambiar el tamaño del grupo.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La segunda semana cada persona pagará 9 €.",
        "steps": [
          "Con las mismas seis personas, dos horas cuestan 4 € por persona y tres horas cuestan 6 €. El precio por persona crece en la misma proporción que las horas.",
          "Ahora fijamos el alquiler en tres horas. El gasto total es de 36 € y, con cuatro personas, toca dividirlo entre cuatro."
        ],
        "note": "Para un mismo alquiler, el producto de la cuota individual por el número de personas es el gasto total.",
        "evidence": [
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                2
              ],
              6
            ],
            "answer": 4
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                3
              ],
              6
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                3
              ],
              4
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0247",
      "version": 1,
      "title": "Redibujamos el huerto",
      "context": "hort",
      "structure": "llargada-segons-amplada-i-superficie",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Un huerto rectangular mide 3 metros de ancho y 8 de largo. El nuevo huerto tendrá 4 metros de ancho y una superficie de 36 m².",
      "question": "¿Qué longitud tendrá el nuevo huerto? Resuélvelo en dos pasos y explica qué medida mantienes fija en cada uno.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "El nuevo huerto medirá 9 metros de largo.",
        "steps": [
          "Primero conservamos los 24 m² del huerto original. Si la anchura pasa a ser de 4 metros, la longitud se reduce a 6 metros para que el producto siga siendo 24.",
          "Ahora mantenemos los 4 metros de ancho y aumentamos la superficie de 24 a 36 m². La longitud crece en la misma proporción y pasa de 6 a 9 metros."
        ],
        "note": "En una cuadrícula de cuatro filas, pasar de 24 a 36 casillas añade tres columnas de cuatro casillas.",
        "evidence": [
          {
            "calculation": [
              "mul",
              3,
              8
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                3,
                8
              ],
              4
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              36,
              4
            ],
            "answer": 9
          }
        ]
      }
    },
    {
      "id": "P0248",
      "version": 1,
      "title": "Las baldosas del taller de arcilla",
      "context": "art",
      "structure": "peces-per-equip-segons-fang-i-equips",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Con 6 kg de arcilla se hacen 24 baldosas iguales. Si se reparten entre tres equipos, les tocan 8 a cada uno. En la próxima sesión habrá 9 kg de arcilla y seis equipos. Cada baldosa necesita la misma cantidad de arcilla y se aprovecha todo el material.",
      "question": "¿Cuántas baldosas le tocarán a cada equipo si las repartimos a partes iguales? Explica los dos cambios y qué mantienes constante en cada paso.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Cada equipo recibirá 6 baldosas.",
        "steps": [
          "Primero mantenemos las 24 baldosas. Si duplicamos los equipos de tres a seis, a cada equipo le toca la mitad, 4 baldosas.",
          "Con seis equipos fijos, los 9 kg dan una vez y media las baldosas que daban los 6 kg. A cada equipo le toca una vez y media su parte, es decir, 6."
        ],
        "note": "También puedes comprobar que con 9 kg salen 36 baldosas y que seis grupos de seis suman 36.",
        "evidence": [
          {
            "calculation": [
              "div",
              24,
              6
            ],
            "answer": 4
          },
          {
            "calculation": [
              "mul",
              [
                "div",
                [
                  "div",
                  24,
                  6
                ],
                2
              ],
              3
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                [
                  "div",
                  24,
                  6
                ],
                9
              ],
              6
            ],
            "answer": 6
          }
        ]
      }
    },
    {
      "id": "P0249",
      "version": 1,
      "title": "Las diapositivas del recital",
      "context": "musica",
      "structure": "temps-per-imatge-segons-durada-i-nombre-dimatges",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "En un recital pasan 60 imágenes en 4 minutos, todas durante el mismo tiempo y sin pausas. Para la próxima actuación quieren pasar 72 imágenes en 6 minutos, también con el mismo tiempo por imagen.",
      "question": "¿Cuántos segundos tendrá que durar cada imagen? Justifica qué dejas fijo al cambiar la duración total y al cambiar el número de imágenes.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Cada imagen tendrá que durar 5 segundos.",
        "steps": [
          "Con las mismas 60 imágenes, pasar de 4 a 6 minutos hace que el tiempo por imagen aumente de 4 a 6 segundos.",
          "Ahora mantenemos los 6 minutos, es decir, 360 segundos. Al poner 72 imágenes en vez de 60, el tiempo por imagen baja a 5 segundos."
        ],
        "note": "Tabla de pasos. 60 imágenes en 4 minutos → 4 segundos por imagen. 60 imágenes en 6 minutos → 6 segundos. 72 imágenes en 6 minutos → 5 segundos.",
        "evidence": [
          {
            "calculation": [
              "div",
              [
                "mul",
                4,
                60
              ],
              60
            ],
            "answer": 4
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                6,
                60
              ],
              60
            ],
            "answer": 6
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                6,
                60
              ],
              72
            ],
            "answer": 5
          }
        ]
      }
    },
    {
      "id": "P0250",
      "version": 1,
      "title": "Preparar los expositores a tiempo",
      "context": "fira",
      "structure": "equips-segons-feina-i-termini",
      "level": "superior",
      "difficulty": 3,
      "status": "pendent-docent",
      "statement": "Cuatro equipos montan 8 expositores en 4 minutos. Antes de abrir la feria habrá que montar 12 en solo 2 minutos. Todos los expositores son iguales y cada equipo tarda 2 minutos en montar uno.",
      "question": "¿Cuántos equipos hacen falta para acabar en 2 minutos? Explica qué mantienes fijo al cambiar el número de expositores y al acortar el tiempo.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Hacen falta 12 equipos.",
        "steps": [
          "Con los mismos 4 minutos, pasar de 8 a 12 expositores exige la mitad más de equipos. Harían falta 6.",
          "Ahora mantenemos los 12 expositores. Seis equipos durante 4 minutos hacen lo mismo que doce equipos durante 2 minutos."
        ],
        "note": "En 4 minutos, cada equipo monta dos. En 2 minutos solo monta uno y por eso hacen falta el doble de equipos.",
        "evidence": [
          {
            "calculation": [
              "mul",
              [
                "div",
                4,
                2
              ],
              3
            ],
            "answer": 6
          },
          {
            "calculation": [
              "mul",
              6,
              4
            ],
            "answer": 24
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                6,
                4
              ],
              2
            ],
            "answer": 12
          }
        ]
      }
    },
    {
      "id": "P0251",
      "version": 1,
      "title": "La reserva de pienso",
      "context": "animals",
      "structure": "dies-segons-reserva-i-animals",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "Una reserva de 24 kg de pienso dura 6 días para cuatro animales. Ahora habrá seis animales y tendremos 48 kg de pienso. Todos comen la misma cantidad cada día.",
      "question": "¿Cuántos días durará la nueva reserva? Explica qué mantienes constante al cambiar la cantidad de pienso y al cambiar el número de animales.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "La reserva durará 8 días.",
        "steps": [
          "Con cuatro animales fijos, duplicar la reserva de 24 a 48 kg duplica la duración de 6 a 12 días.",
          "Ahora mantenemos los 48 kg. Cuatro animales durante 12 días suman 48 días de alimentación para un solo animal. Si los repartimos entre seis animales, cada uno tiene pienso para 8 días."
        ],
        "note": "Con la misma reserva, el producto del número de animales por el número de días se mantiene constante si todos comen igual.",
        "evidence": [
          {
            "calculation": [
              "mul",
              6,
              2
            ],
            "answer": 12
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                4,
                12
              ],
              6
            ],
            "answer": 8
          }
        ]
      }
    },
    {
      "id": "P0252",
      "version": 1,
      "title": "Las tiras de tela para la feria",
      "context": "manualitats",
      "structure": "peces-segons-llargada-total-i-mida",
      "level": "superior",
      "difficulty": 2,
      "status": "pendent-docent",
      "statement": "De una pieza de tela de 24 metros salen 8 tiras de 3 metros. Para la feria tenemos una pieza de 36 metros y queremos que cada tira mida 4 metros. Al cortar no perdemos tela.",
      "question": "¿Cuántas tiras saldrán? Explica cómo varía el número de tiras al cambiar la longitud total y al cambiar el tamaño de cada tira.",
      "features": [
        "multiplicacio-divisio",
        "combinades",
        "proporcionalitat-directa",
        "proporcionalitat-inversa"
      ],
      "numeric": {
        "data": "naturals",
        "intermediate": "naturals",
        "result": "naturals"
      },
      "solution": {
        "kind": "justification",
        "response": "Saldrán 9 tiras.",
        "steps": [
          "Si seguimos cortando tiras de 3 metros, de una pieza de 36 metros salen 12 tiras. Cuanto más larga es la pieza, más tiras del mismo tamaño salen.",
          "Ahora mantenemos los 36 metros totales. Como cada tira pasa a medir 4 metros, salen menos. Dividimos los 36 metros en 9 tiras de 4."
        ],
        "note": "A partir de 36 metros, doce tiras de tres y nueve tiras de cuatro representan la misma longitud.",
        "evidence": [
          {
            "calculation": [
              "div",
              36,
              3
            ],
            "answer": 12
          },
          {
            "calculation": [
              "div",
              [
                "mul",
                12,
                3
              ],
              4
            ],
            "answer": 9
          }
        ]
      }
    }
  ]
};
