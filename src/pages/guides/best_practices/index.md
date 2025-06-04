---
title: Substance 3D API Best Practices
description: This guide explains best practices for the Adobe Substance 3D API.
keywords:
  - Adobe Firefly Services
  - Adobe Substance 3D
  - Substance 3D API
hideBreadcrumbNav: true
---

# Best Practices

This document outlines key recommendations to use the Substance 3D API efficiently and effectively.

## Authentication best practices

- Use OAuth 2.0 for authentication for secure access to API resources.
- Store client credentials securely and never expose them in client-side code.

## API request guidelines

- Use HTTPS for all API requests to guarantee data privacy and security.
- Follow the correct endpoint usage and parameter formatting in the [API reference][1] documentation.
- To handle rate limiting, implement [exponential backoff][2] and retry mechanisms.

## Security considerations

- Validate user input to prevent injection attacks and ensure data integrity.
- Regularly update API client libraries and dependencies to patch security vulnerabilities.

## Testing strategies

- Use sandbox or test environments for development and testing to avoid impacting production data.
- Write comprehensive unit tests for API integrations to guarantee reliability and functionality.

## Monitoring and logging practices

- Implement logging to track API usage, errors, and performance metrics.
- Monitor API usage and performance to identify and address issues proactively.

<!-- Links -->
[1]: /api
[2]: https://en.wikipedia.org/wiki/Exponential_backoff
