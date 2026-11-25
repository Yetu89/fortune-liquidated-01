// Fortune Cookie for the Liquidated Trader — make.fun bounty u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
// Entry: a fortune cookie line for a crypto trader who has just been liquidated.
// 108 characters (limit 160), 19 words (limit 20). One line, no trailing newline.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The stars foretell great wealth in your future — they neglected to mention it arrives after the margin call.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.trim().split(/\s+/).length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 160) {
    found.push(`entry must be 1-160 characters, got ${LENGTH}`);
  }
  if (WORDS < 1 || WORDS > 20) {
    found.push(`entry must be 1-20 words, got ${WORDS}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
