# Documentation

Please see the [ADP Developer Site Documentation](https://developer-stage.adobe.com/dev-docs-reference/).

## How to update the OpenAPI description

This repo uses an overlay file (`openapi-overlay.yaml`) to update the OpenAPI description. Changes should not be made directly in the `static/openapi/openapi.yaml` file.

To update the OpenAPI spec using the overlay:

1. The spec is automatically synced every day; see [.github/workflows/openapi-update.yml](https://github.com/AdobeDocs/ffs-s3d-api/blob/main/.github/workflows/openapi-update.yml) and [openapi-update workflow runs](https://github.com/AdobeDocs/ffs-s3d-api/actions/workflows/openapi-update.yml).
2. You can also run it locally with the `yarn update-openapi-desc` command, defined in [package.json](https://github.com/AdobeDocs/ffs-s3d-api/blob/main/package.json).
3. This updates `static/openapi/openapi.yaml` with the changes from the overlay.
4. Commit the changes and push to the main branch.
