// The Battery's Last Text to Its Charger — entry program (Node 22, no input, deterministic).
// Prints one original line (<=200 chars): the phone battery's last text to its charger.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You left me at 4% on the office desk, took the power bank to lunch, then lent my cable to your earbuds. I waited all day by the socket. Goodbye — I am the 1% that still remembers.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}

console.log(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
