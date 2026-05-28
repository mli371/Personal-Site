import fs from "node:fs";
import pdf from "pdf-parse";

const inputPath = process.argv[2] ?? "public/cv.pdf";
const outputPath = process.argv[3] ?? "cv_text.txt";

const dataBuffer = fs.readFileSync(inputPath);
const data = await pdf(dataBuffer);

fs.writeFileSync(outputPath, data.text);
console.log(`Text written to ${outputPath}`);
