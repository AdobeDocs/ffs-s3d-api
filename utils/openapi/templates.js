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

// Template for the content of the "API Reference" page.
// `openAPISpec` should be ignored here, as it will be auto-generated (or removed) if necessary.
exports.FrontmatterTpl = {
  title: `Adobe Substance 3D API`,
  description: `Reference for the Adobe Substance 3D API`,
  keywords: [
    "Adobe Firefly Services",
    "Adobe Substance 3D API",
    "Substance 3D",
    "Developer Documentation",
    "API Documentation",
  ],
  layout: "none",
};

exports.GetCredentialComponent =
  'import GetCredentialsOauth2 from "../components/credentials/GetCredentialOAuth2.js";\n\n<GetCredentialsOauth2 />';

exports.newRedoclyComponent = (oasSrc) =>
  `<RedoclyAPIBlock src="${oasSrc}" width="600px" ctrlFHijack="false" disableSearch disableSidebar />`;
