#!/usr/bin/env node

import fs from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import pager from "default-pager";
import msee from "msee";
import boxen from "boxen";
import chalk from "chalk";
import updateNotifier from "update-notifier";
import meow from "meow";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const cli = meow(
  [
    "Usage",
    "  wtfjs",
    "",
    "Options",
    "  --lang, -l  Translation language",
    "",
    "Examples",
    "  wtfjs",
    "  wtfjs --lang pt-br",
  ].join("\n"),
  {
    importMeta: import.meta,
    flags: {
      lang: {
        type: "string",
        alias: "l",
        default: "",
      },
    },
  }
);

const boxenOpts = {
  borderColor: "yellow",
  margin: {
    bottom: 1,
  },
  padding: {
    right: 1,
    left: 1,
  },
};

const mseeOpts = {
  paragraphEnd: "\n\n",
};

const notifier = updateNotifier({ pkg });

process.env.PAGER = process.env.PAGER || "less";
process.env.LESS = process.env.LESS || "FRX";

const lang = cli.flags.lang.toLowerCase();

const translation = join(
  __dirname,
  !lang ? "./README.md" : `./README-${lang}.md`
);

fs.readFile(translation, "utf8", function (err, content) {
  if (err) {
    console.log("The %s translation does not exist", chalk.bold(lang));
    return;
  }

  const output = pager();

  if (notifier.update) {
    const message = [
      `Update available: ${chalk.green.bold(
        notifier.update.latest
      )} ${chalk.dim(`current: ${notifier.update.current}`)}`,
      `Run ${chalk.blue(`npm install -g ${pkg.name}`)} to update.`,
    ];
    output.write(boxen(message.join("\n"), boxenOpts));
  }

  output.end(msee.parse(content, mseeOpts));
});
