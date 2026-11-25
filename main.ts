// One-Liner Marathon — entry program.
// Runs on Node 22 (TypeScript executed as-is) and writes one original
// one-line comedy joke to <output dir>/entry.txt.
// The grader runs this twice; the output must be byte-identical both times,
// so the text below is a fixed constant, not generated at random.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I got shushed by a librarian so hard my phone switched itself to silent out of respect.";

// The gate: entry.txt must be UTF-8 text of 1 to 280 characters, not only
// whitespace, and a single line. Fail loudly here rather than shipping
// an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
