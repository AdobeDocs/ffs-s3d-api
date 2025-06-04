---
title: Troubleshooting Guide
description: Learn how to resolve common issues and errors when using the Adobe Substance 3D API
keywords:
  - troubleshooting
  - errors
  - Adobe Firefly Services
  - Adobe Substance 3D
  - Substance 3D API
hideBreadcrumbNav: true
---

# Substance 3D API Troubleshooting Guide

This guide explains common issues when using the Adobe Substance 3D API. For problems not covered here, refer to the API documentation or contact Adobe support.

## Authentication failure

An authentication error can occur when the credentials aren't correct.

**Sample error**

```json
{
  "error_code": "access_error",
  "message": ""
}
```

<Accordion>

<AccordionItem header="Solutions:" isChevronIcon position="right" iconColor="#1473E6">

- Verify the client ID and client secret.
- Be sure the OAuth 2.0 token is valid and hasn't expired.
- Check that the API endpoint URL is correct and supports the authentication method.

</AccordionItem>

</Accordion>

## Rate limit exceeded

The rate limit is the maximum number of requests that can be made to the API in a given time.
An error can occur when the rate limit is exceeded.

**Sample error**

```json
{
  "error_code": "rate_limited",
  "message": ""
}
```

<Accordion>

<AccordionItem header="Solutions:" isChevronIcon  position="right" iconColor="#1473E6">

- Implement [exponential backoff][2] and the retry logic to handle rate limiting.
- Reduce the frequency of API calls or optimize the code to make fewer requests.

</AccordionItem>

</Accordion>

## Unexpected API response

Errors can be the result of unprocessable entities or other validation errors in the request.

**Sample error**

```json
{
  "error_code": "invalid_content_type",
  "message": ""
}
```

<Accordion>

<AccordionItem header="Solutions:" isChevronIcon  position="right" iconColor="#1473E6">

- Check the [API reference][1] for the correct request format and parameters.
- Verify that the request is correctly formatted and includes all required parameters.
- Use logging and debugging tools to inspect the API response for any issues.

</AccordionItem>

</Accordion>

## Internal server error (HTTP 500)

This error indicates a problem on the server side.

**Sample error**

```json
{
  "error_code": "runtime_error",
  "message": ""
}
```

<Accordion>

<AccordionItem header="Solutions:" isChevronIcon  position="right" iconColor="#1473E6">

- Wait a few minutes and try your request again.
- If the issue persists, check the Adobe status page for any reported service disruptions.

</AccordionItem>

</Accordion>

## Slow API response times

You may experience API response times that are longer than expected.

<Accordion>

<AccordionItem header="Solutions:" isChevronIcon  position="right" iconColor="#1473E6">

- Check your network connection and ensure that it's stable and fast.
- Optimize your code to reduce the amount of data sent in API requests.
- Consider using a CDN or caching strategy to reduce latency for static resources.

</AccordionItem>

</Accordion>

<!-- Links -->
[1]: ../../api/index.md
[2]: https://en.wikipedia.org/wiki/Exponential_backoff
