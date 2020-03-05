// Import Node 'promise-based' 'fs'
import { promises as fs } from "fs";

// IIFE
(async function() {
  const data = JSON.parse(await fs.readFile("./db.json"));

  // Add 'id' to each data item by adding 1 to the item's index.
  data.forEach((d, i) => (d.id = i + 1));
})();
