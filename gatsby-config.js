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

const Defaults = {
  pathPrefix: "/firefly-services/docs/s3dapi/",
  gatsbyTplIdDev: "67f54433dcac5930e7026eb8",
  gatsbyTplIdProd: "67f544a30f73feac905f415c",
};

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || Defaults.pathPrefix,
  siteMetadata: {
    template_id: process.env.GATSBY_TEMPLATE_ID || Defaults.gatsbyTplIdDev,
    pages: [
      {
        title: "Firefly Services",
        path: "https://developer.adobe.com/firefly-services/docs/guides/?aio_internal",
      },
      {
        title: "About Substance 3D API",
        path: "/",
      },
      {
        title: "Getting Started",
        path: "/getting_started/",
      },
      {
        title: "Guides",
        path: "/guides/",
      },
      {
        title: "API Reference",
        path: "/api/",
      },
    ],
    subPages: [
      {
        title: "Getting Started",
        path: "/getting_started/",
        header: true,
        pages: [
          {
            title: "Authentication",
            path: "/getting_started/",
          },
          {
            title: "Uploading Assets",
            path: "/getting_started/assets_upload/",
          },
          {
            title: "Asynchronous Jobs",
            path: "/getting_started/asynchronous_jobs/",
          },
        ],
      },
      {
        title: "Updates",
        path: "/getting_started/updates/",
        header: true,
        pages: [
          {
            title: "Changelog",
            path: "/changelog/",
          },
        ],
      },
      {
        title: "Guides",
        path: "/guides/",
        header: true,
        pages: [
          {
            title: "Render 3D Object",
            path: "/guides/render_3d_object/",
          },
          {
            title: "Generate 3D Object Composite",
            path: "/guides/generate_3d_object_composite/",
          },
          {
            title: "Create a Space for Assets",
            path: "/guides/create_a_space/",
          },
        ],
      },
      {
        title: "Help",
        path: "/guides/best_practices/",
        header: true,
        pages: [
          {
            title: "Best Practices",
            path: "/guides/best_practices/",
          },
          {
            title: "Troubleshooting",
            path: "/guides/troubleshooting/",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
