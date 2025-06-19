---
title: Create a Space for Assets
description: A guide to using the /spaces endpoint to create a Space for assets
keywords:
  - spaces
  - assets
  - upload
  - Adobe Substance 3D
  - Substance 3D API
hideBreadcrumbNav: true
contributors:
  - https://github.com/AEAbreu-hub
---

# Create a Space for Assets

Refer to this guide when you choose to create a **Space** to store your digital assets for use with the Substance 3D API.

## Overview

Using the Substance 3D API requires digital assets like 3D models or scenes.
There's a few [options to upload your assets][1] for use with the API.

You can use the `/spaces` endpoint to create a **Space** to store your assets.
For each asset file, add a new `--form` argument in the [cURL][3] command and replace:

- `{DESTINATION_FOLDER}`: A path to the folder in the destination Space.
- `{FILEPATH}`: A path to your local file.

```bash
curl --url https://s3d.adobe.io/v1/spaces \
--header 'Authorization: Bearer $S3D_FF_SERVICES_ACCESS_TOKEN' \
--form '{DESTINATION_FOLDER}="@{FILEPATH}"'
```

The steps below offer a walkthrough for creating a Space and uploading a few prepared digital assets to it.

## Prerequisites

- You'll need a valid Substance 3D API **Client ID** and **Access Token**. To generate these, [review the Authentication Guide][2].
- Export your valid **Access Token** as an environment variable: `S3D_FF_SERVICES_ACCESS_TOKEN`.

## Step 1 - Upload files

Open a secure terminal and use the cURL command to upload our prepared asset files.

<CodeBlock slots="heading, code" repeat="2" languages="CURL, JSON" />

cURL command

```bash
curl --url https://s3d.adobe.io/v1/spaces \
--header 'Authorization: Bearer $S3D_FF_SERVICES_ACCESS_TOKEN' \
--form '.="@my_assets/asset.gltf"' \
--form '.="@my_assets/asset.bin"' \
--form 'textures="@my_assets/textures/texture_asset.png"'
```

Response

```json
{
  "id": "5cbf0499-174b-4d9d-917f-bdcd6e117447",
  "files": [...],
  ...
}
```

This command  creates a new **Space** with the following tree structure:

```text
├── textures
│  └── texture_asset.png
└── asset.gltf
└── asset.bin
```

The response contains the **Space ID** to reference the assets' location in Substance 3D API requests.

## Step 2 - Reference uploaded assets

Your assets are now ready to use with the Substance 3D APIs. Let's try a Render job as an example.

To use the uploaded assets with the [Render Model API][4], we'll use the **Space ID** obtained during [Step 1](#step-1---upload-files).

<CodeBlock slots="heading, code" repeat="2" languages="JSON, CURL" />

Job definition (*payload.json*)

```json
{
  "scene": {
    "modelFile": "asset.gltf"
  },
  "sources": [
    {
      "space": {
        "id": "5cbf0499-174b-4d9d-917f-bdcd6e117447"
      }
    }
  ]
}
```

cURL command

```bash
curl -X POST https://s3d.adobe.io/v1/scenes/render-basic \ 
--header "Content-Type: application/json" \
--header 'Authorization: Bearer $S3D_FF_SERVICES_ACCESS_TOKEN' \
-d @payload.json
```

<!-- Links -->
[1]: /getting_started/assets_upload
[2]: /getting_started
[3]: https://curl.se/download.html
[4]: ../../api/index.md
