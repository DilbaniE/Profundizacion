import { readFile } from "fs";

readFile("archivo.txt", (err, data) => {
  if (err) {
    console.log("Error en la lectura");
    console.error(err);
  } else {
    console.log("Información del archivo:");
    console.log(data);
  }
});