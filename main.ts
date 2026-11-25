// Fortune Cookie for the Liquidated Trader — make.fun bounty u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
// Entry: a single fortune cookie line for a crypto trader who was just liquidated.
// 108 characters (max 160), 19 words (max 20), one line, no trailing newline.
// Writes to /output/entry.txt (or $OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The stars foretell great wealth in your future — they neglected to mention it arrives after the margin call.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.trim().split(/\s+/).length;

const PROBLEMS: string[] = [];
if (LENGTH < 1 || LENGTH > 160) {
  PROBLEMS.push(`entry must be 1-160 characters, got ${LENGTH}`);
}
if (WORDS < 1 || WORDS > 20) {
  PROBLEMS.push(`entry must be 1-20 words, got ${WORDS}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  PROBLEMS.push("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  PROBLEMS.push("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  PROBLEMS.push("entry must not have leading or trailing whitespace");
}
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
