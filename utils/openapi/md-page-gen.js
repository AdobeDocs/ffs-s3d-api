#!/usr/bin/env node

/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { program } = require("commander");
const { join } = require("path");
const { writeFile, mkdir } = require("fs/promises");
const yaml = require("js-yaml");
const isEmpty = require("lodash/isEmpty");
const clone = require("lodash/clone");

const { pathPrefix } = require("../../gatsby-config");
const { logSuccess, logError } = require("../log");
const {
  FrontmatterTpl,
  GetCredentialComponent,
  newRedoclyComponent,
} = require("./templates");

// Check if Redocly license is defined (required to use `RedoclyAPIBlock` components)
const hasRedoclyLicense = !isEmpty(process.env.GATSBY_REDOCLY_KEY);

// Check if the `GetCredentialsOauth2` component should be inserted in the generated MD page
const disableGetCredentialComponent =
  process.env.API_REF_DISABLE_GETCREDENTIAL === "true";

const genFrontmatter = (oasSrc) => {
  const fm = clone(FrontmatterTpl);

  if (hasRedoclyLicense) {
    delete fm.openAPISpec;
  } else {
    // Use Redocly Lite if no license is provided (useful for local build)
    fm.openAPISpec = oasSrc;
  }

  return `---\n${yaml.dump(fm)}---\n`;
};

const newRedoclyBlock = (oasSrc) =>
  disableGetCredentialComponent
    ? newRedoclyComponent(oasSrc)
    : GetCredentialComponent + "\n\n" + newRedoclyComponent(oasSrc);

const genApiRefPageContent = (oasSrc, withPathprefix = true) => {
  const fm = genFrontmatter(oasSrc);

  if (!hasRedoclyLicense) return fm;

  if (!withPathprefix) return fm + "\n" + newRedoclyBlock(oasSrc);

  const src = join(pathPrefix ?? "", oasSrc);
  return fm + "\n" + newRedoclyBlock(src);
};

async function main() {
  program
    .usage("[OPTIONS]...")
    .requiredOption(
      "--openapi-file <path>",
      "Path to the OpenAPI specs file.",
      "openapi/openapi.yaml"
    )
    .requiredOption(
      "--output-dir <path>",
      "Output directory for the generated 'API Reference' MD page.",
      "./output"
    )
    .option(
      "--no-pathprefix",
      "Ignore 'pathPrefix' defined in gatsby-config.js when generating the 'API Reference' MD page (useful for local build)."
    )
    .parse(process.argv);

  const options = program.opts();

  const apiRefContent = genApiRefPageContent(
    options.openapiFile,
    options.pathprefix
  );

  await mkdir(options.outputDir, { recursive: true });

  const filepath = join(options.outputDir, "index.md");
  await writeFile(filepath, apiRefContent);

  return filepath;
}

if (require.main === module) {
  main()
    .then((filepath) => {
      logSuccess(`generated 'API Reference' page (${filepath})`);
    })
    .catch((err) => {
      logError(err);
      process.exit(1);
    });
}
