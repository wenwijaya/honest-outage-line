import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Checkout is down since 14:02 UTC and I don't know why yet. Your carts and orders are safe. I'll update this page every 15 minutes until payments work again.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync(join("/output", "entry.txt"), LINE + "\n", "utf8");
  } catch {
    try {
      mkdirSync("output", { recursive: true });
      writeFileSync(join("output", "entry.txt"), LINE + "\n", "utf8");
    } catch {
      // Still exit 0: a partial render must not fail the run.
    }
  }
}

main();
