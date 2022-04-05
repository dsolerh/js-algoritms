const readExcel = require("read-excel-file/node");
const fs = require("fs/promises");
const path = require("path");

async function saveJson(pathToFile) {
  // console.log(pathToFile);
  const map = {
    Apellidos: "lastName",
    Nombres: "name",
    "Fecha de nacimiento": "bDate",
    Nacionalidad: "nat",
    Residencia: "res",
    DOC1: {
      doc1: {
        "Tipo documento 1": "type",
        "Número documento 1": "num",
        "País documento 1": "emiter",
        "Expiración documento 1": "expire",
      },
    },
    DOC2: {
      doc2: {
        "Tipo documento 2": "type",
        "Número documento 2": "num",
        "País documento 2": "emiter",
        "Expiración documento 2": "expire",
      },
    },
    Clase: "cat",
  };
  const r = {};
  r["check"] = (await readExcel(pathToFile, { map, sheet: 1 })).rows;
  r["uncheck"] = (await readExcel(pathToFile, { map, sheet: 2 })).rows;

  await fs.writeFile(
    `excel/${path.basename(pathToFile, ".xls")}.json`,
    JSON.stringify(r)
  );
}
saveJson(process.argv[2]);
