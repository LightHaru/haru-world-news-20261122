import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const assetPath = join(repoDir, "entry.png");
const outputDir = "/output";
const finalPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
if (!existsSync(assetPath)) {
  throw new Error(`Missing entry asset: ${assetPath}`);
}
copyFileSync(assetPath, finalPath);
