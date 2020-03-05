// Import Node 'promise-based' 'fs'
import { promises as fs } from "fs";

// IIFE
(async function() {
  const data = JSON.parse(await fs.readFile("./db.json"));
  console.log(data);
})();
