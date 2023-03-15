#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "node:fs/promises";
import path from "node:path";

const askForAppName = async () => {
  return inquirer.prompt([
    {
      name: "appName",
      message: "what is your app name",
      default: process.argv[2],
    },
  ]);
};

const createAppDirectory = async (appName) => {
  const currentDir = process.cwd();
  const appDir = path.resolve(currentDir, appName);
  await fs.mkdir(appDir, { recursive: true });
  return appDir;
};

const copyTemplate = async (appDir) => {
  const templateDir = path.resolve(process.cwd(), "template");
  await fs.cp(templateDir, appDir, { recursive: true });
};

const main = async () => {
  console.log("hello");
  //console.log(__dirname);
  /*const { appName } = await askForAppName();
  const appDir = await createAppDirectory(appName);
  await copyTemplate(appDir);*/
};

main().catch((e) => {
  console.log(e);
  process.exit();
});
