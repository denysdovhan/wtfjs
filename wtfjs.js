#!/usr/bin/env node

const fs = require("fs");
const obj = require("through2").obj;
const pager = require("default-pager");
const msee = require("msee");
const join = require("path").join;
const boxen = require("boxen");
const chalk = require("chalk");
const updateNotifier = require("update-notifier");
const pkg = require("./package.json");
const meow = require("meow");

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
  ],
  {
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
