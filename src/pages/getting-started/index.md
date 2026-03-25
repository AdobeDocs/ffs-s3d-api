---
title: Authentication for Firefly's Substance 3D
description: A guide to authentication for Adobe Substance 3D API.
hideBreadcrumbNav: true
contributors:
  - https://github.com/AEAbreu-hub
---

# Authentication

Learn how to authenticate requests to Substance 3D APIs.

## Overview

Every request made to Substance 3D APIs must include an encrypted access token.

Your secure, server-side application retrieves an access token by making a request to the [Adobe Identity Management System (IMS)][1] with your **Client ID** and **Client Secret**.

## Prerequisites

This tutorial assumes you have worked with your Adobe Representative and have the following:

- An [Adobe Developer Console][2] account.
- A [project][3] with Substance 3D API [OAuth Server-to-Server credentials set up][4].
- Access to your **Client ID** and **Client Secret** from the [Adobe Developer Console project][5]. Securely store these credentials and never expose them in client-side or public code.

## Retrieve an access token

A temporary access token validates calls to the API. [This token can be generated directly in the Developer Console][8],
or it can be generated programmatically by following the steps below.

1. First, open a secure terminal and export your **Client ID** and **Client Secret** as environment variables so that later commands can access them:

```bash
export S3D_FF_SERVICES_CLIENT_ID=<Your_Client_ID>
export S3D_FF_SERVICES_CLIENT_SECRET=<Your_Client_Secret>
```

2. Next, run the following command to generate an access token:

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=$S3D_FF_SERVICES_CLIENT_ID" \
--data-urlencode "client_secret=$S3D_FF_SERVICES_CLIENT_SECRET" \
--data-urlencode 'scope=openid,AdobeID,read_organizations,email,firefly_api,firefly_enterprise,profile,substance3d_api.spaces.create,substance3d_api.jobs.create'
```

The response will look like this:

```json
{
    "access_token": "exampleAccessTokenAsdf123",
    "token_type": "bearer",
    "expires_in": 86399
}
```

The response includes an `expires_in` field with the length of time, in seconds, that the access token is valid. Each access token is valid for 24 hours, then your secure server-side application will need to request a new token. The best practice is to securely store the token and refresh it before it expires.

3. Export your access token as an environment variable:

```bash
export S3D_FF_SERVICES_ACCESS_TOKEN=<Your_Access_Token>
```

## Execute a test API request

Let's make a test call to a Substance 3D API with the access token.

1. Make a test call to the [Render Model API][6]:

```bash
curl --location 'https://s3d.adobe.io/v1/scenes/render-basic' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "Authorization: Bearer $S3D_FF_SERVICES_ACCESS_TOKEN" \
--data '{
    "scene": {
      "modelFile": "DamagedHelmet.glb"
    },
    "sources": [
    {
      "url": {
        "url": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"
      }
    }
  ]
}'
```

A successful response will look something like this:

```json
{
    "$schema": "https://s3d.adobe.io/schemas/RenderModelResponse.json",
    "url": "{JOB_URL}",
    "id": "{JOB_ID}",
    "status": "running"
}
```

You're authenticated!

The response is typical for an asynchronous job. You can [learn more about asynchronous jobs][9] or [explore the Render 3D Model API in the tutorial][7].

<!-- Links -->
[1]: https://www.adobe.com/content/dam/cc/en/trust-center/ungated/whitepapers/corporate/adobe-identity-management-services-security-overview.pdf
[2]: https://developer.adobe.com/
[3]: https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/
[4]: https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/
[5]: https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview
[6]: /api
[7]: /guides/render_3d_object
[8]: https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s#generate-token
[9]: /getting_started/asynchronous_jobs/
