#!/usr/bin/env node

import fs from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import through2 from "through2";
import pager from "default-pager";
import msee from "msee";
import boxen from "boxen";
import chalk from "chalk";
import updateNotifier from "update-notifier";
import meow from "meow";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const { obj } = through2;

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

const lang = (cli.flags.lang || "")
  .toLowerCase()
  .split("-")
  .map((l, i) => (i === 0 ? l : l.toUpperCase()))
  .join("-");

const translation = join(
  __dirname,
  !lang ? "./README.md" : `./README-${lang}.md`
);

fs.stat(translation, function (err, stats) {
  if (err) {
    console.log("The %s translation does not exist", chalk.bold(lang));
    return;
  }

  fs.createReadStream(translation)
    .pipe(
      obj(function (chunk, enc, cb) {
        const message = [];

        if (notifier.update) {
          message.push(
            `Update available: {green.bold ${notifier.update.latest}} {dim current: ${notifier.update.current}}`
          );
          message.push(`Run {blue npm install -g ${pkg.name}} to update.`);
          this.push(boxen(message.join("\n"), boxenOpts));
        }

        this.push(msee.parse(chunk.toString(), mseeOpts));
        cb();
      })
    )
    .pipe(pager());
});
