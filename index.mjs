// Import Node 'promise-based' 'fs'
import { promises as fs } from "fs";

// IIFE
(async function() {
  try {
    const data = JSON.parse(await fs.readFile("./db.json"));

    // Add 'id' to each data item by adding 1 to the item's index.
    data.forEach((d, i) => (d.id = i + 1));

    // Convert into JSON and write back to file
    fs.writeFile("./db.json", JSON.stringify(data, null, 2))
      .then(() => {
        console.log("Rote new data!");
      })
      .catch(error => {
        console.error(`Error riting data: ${error}`);
      });
  } catch (error) {
    console.error(error);
  }
})();
