---
title: Asynchronous Jobs
description: A guide to Asynchronous Jobs for Adobe Substance 3D API.
hideBreadcrumbNav: true
---

# Asynchronous Jobs

Learn about asynchronous jobs and how to check the result of long-running operations with HTTP polling.

## Overview

Adobe Substance 3D API jobs are processed asynchronously. In an asynchronous workflow:

1. The client makes a call to the API, triggering a new job.
2. The API responds synchronously with an HTTP `202 - Accepted` status, indicating that the request was received.
3. The response doesn't include the job result yet. Instead, it offers a URL to poll for the job's status.
4. Using the URL, a client calls the endpoint for the **job status**. The URL is valid during the job's execution and **expires 2 minutes** after completion (when the `status` changes to *failed* or *succeeded*).

The status can be one of the following:

| Job Status | Details |
|------------|---------|
| `not_started` | The job is queued and will be processed soon. |
| `running` | Job processing is still in progress. |
| `succeeded` | The job completed successfully. Check the `result` property in the response for details about the generated resources. |
| `failed` | An error occurred during job processing. Check the `error` property in the response for details. |

## Obtaining the Job Status

To poll a job's status, use the `/jobs` endpoint with the job ID that is returned in the initial API response:

```bash
curl --url https://s3d.adobe.io/v1beta/jobs/<JOB_ID> \
--header 'Authorization: Bearer $S3D_FF_SERVICES_ACCESS_TOKEN'
```

Below are examples of each job status for reference. For more detailed information about these responses, [see the full API Reference](../../api/index.md).

**Response examples**

<CodeBlock slots="heading, code" repeat="4" languages="JSON, JSON, JSON, JSON" />

not_started

```json
{
  "url": "https://s3d.adobe.io/v1beta/jobs/1727790895129-0",
  "id": "1727790895129-0",
  "status": "not_started",
  "bugReportUrl": "https://s3d.adobe.io/v1beta/bug-report/1727790895129-0"
}
```

running

```json
{
  "url": "https://s3d.adobe.io/v1beta/jobs/1727790895129-0",
  "id": "1727790895129-0",
  "status": "running",
  "bugReportUrl": "https://s3d.adobe.io/v1beta/bug-report/1727790895129-0"
}
```

succeeded

```json
{
  "url": "https://s3d.adobe.io/v1beta/jobs/1727790895129-0",
  "id": "1727790895129-0",
  "status": "succeeded",
  "bugReportUrl": "https://s3d.adobe.io/v1beta/bug-report/1727790895129-0",
  "result": {
    "output": {
      "url": "https://s3d.adobe.io/v1beta/spaces/s-b93fa62b-6ba8-4ca6-842d-898057bf5dbc",
      "id": "s-b93fa62b-6ba8-4ca6-842d-898057bf5dbc",
      "archiveUrl": "https://s3d.adobe.io/v1beta/spaces/s-b93fa62b-6ba8-4ca6-842d-898057bf5dbc/zip",
      "files": [
        {
          "name": "render0000.png",
          "size": 235441,
          "url": "https://s3d.adobe.io/v1beta/spaces/s-b93fa62b-6ba8-4ca6-842d-898057bf5dbc/files/render0000.png"
        }
      ]
    }
  }
}
```

failed

```json
{
  "url": "https://s3d.adobe.io/v1beta/jobs/1727790895129-0",
  "id": "1727790895129-0",
  "status": "failed",
  "error": "an error occurred, please retry later",
  "bugReportUrl": "https://s3d.adobe.io/v1beta/bug-report/1727790895129-0"
}
```

<!-- Links -->
[1]: ../../api/index.md
