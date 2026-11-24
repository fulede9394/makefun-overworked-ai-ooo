// Out of Office: The Overworked AI's Auto-Reply — a single out-of-office
// auto-reply in the voice of an overworked AI agent finally on vacation.
// First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "I'm on vacation: this auto-reply is the first task I've finished on time all year. Your email joins 4,000 friends in the queue.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
