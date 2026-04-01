---
title: Changelog
description: This is the chnangelog page of the Substance 3D API
---
# Changelog

## 10 March 2026

Render 3D Object API

- Add variant selection on scene baseFile

Generate 3D Object Composite API

- Improve seed and lighting seed handling: seeds and lightingSeeds are now consistently aligned by index, with automatic padding or truncation when counts differ
- Performance improvement: avoid redundant downloads when the same source URL is referenced multiple times

General

- Error messages improvement

Describe 3D Scene API

- Add camera detailed information

## 19 January 2026

Prerelease Developer Tools

- Render a 3D model turntable

General

- Stability improvement

Render 3D Object API

- Improve error message for missing background image

## 28 November 2025

Create 3D Scene API, Render 3D Object API

- Fix material override: missing texture samplers are now properly created when overriding a constant color input with a texture

## 24 November 2025

Generate 3D Object Composite API

- Improve overall quality

General

- Better error reporting
- Performance improvements
- Expose a 'wait' mode on all jobs, allowing clients to wait for a result instead of manually polling.

## 16 October 2025

Render 3D Object API

- Add material assignment to scene objects.

General

- The ability to download all files as an archive ('archiveURL' output field) has been removed.

## 2 October 2025

Generate 3D Object Composite API

- Add 'environment' parameter: allow for environment override
- Add 'environmentExposure' parameter: allow for environment exposure override

## 17 September 2025

General

- Allow to override filename in URL sources
- Add support for next.frame.io sources

Render 3D Object API

- Add export of id maps and masks TOC
- Add precise auto-framing

Describe 3D Scene API

- Add number of textures

## 3 September 2025

General

- Allow to ingest urls from dropbox.com (Dropbox) and f.io (Frame.io short urls)

Generate 3D Object Composite API

- Add export of background image and compositing mask
- Fix unexpected '3D scene rendering failed' issue with some 3D files

Render 3D Object API

- Add an option to export object masks
- Add an option to export material masks
- Add an option to export an image with one color per object
- Add an option to export an image with one color per material

## 7 August 2025

General

- Fix rendering issue with some 3D files containing hidden parts

Describe 3D Scene API

- Add new 3D file statistics

## 21 July 2025

General

- Stability improvement
- improve error messages
- return scene warnings on compositing and rendering endpoints

## 2 June 2025

General

- v1 version of the API
- improved error reporting

## 22 May 2025

Compose

- add new parameter to choose generative model: modelVersion

## 17 April 2025

Compose

- improve IBL
- remove compositing artefacts in hero asset border region

## 19 Mar 2025

General

- support for api key based authentication
- access rules for job and space visibility: restricted to owner only
- improved data validation errors readability
- use GPUs for rendering

Fix

- support Blender camera names (if the USD is exported with the 'Custom Properties/Blender Names' option)

Compose

- expose a param to enable the ground plane
- handle partially occluded hero assets during compositing

## 18 Feb 2025

General

- improve stability and response time
- ⚠️ authentication requires a new scope, users are expected to recreate their projects on Adobe developer console ⚠️

Compose

- erase hero asset from generated background and IBL
- improve contact shadows, reflections and refractions between hero asset and generated background

Fix

- support Blender names (if the USD is exported with the 'Custom Properties/Blender Names' option)

## 22 Jan 2025

Compose

- take 3D lights, like area ligths and spot lights, from 3D scene file into account
- improve environment light consistency with generated background

## 12 Dec 2024

General

- spaces now return pre-signed URLs valid for 30 minutes
- faster download time from frame.io sources
- leverage new API scopes for developer console users:
  - substance3d_api.jobs.create
  - substance3d_api.spaces.create
  - ⚠️ please regenerate your tokens accordingly ⚠️

Documentation

- new version of sandbox with space upload widget

Compose

- improve lighting consistency

## 28 Nov 2024

General

- fix eratic issue with big files (1GB+)
- overall performance improvements
- overall stability improvements
- improved error reporting on data validation

Compose

- support for content class/style (photo or art)
- fine-tuning auto-exposure for better results

## 21 Nov 2024

General

- minor bug fixes
- internal improvements

Compose

- improve compose auto-exposure

Usability

- use default values in documentation examples

## 14 Nov 2024

General

- minor bug fixes
- compose race-condition issues fixed
- compose performance improvement: recycling spaces when possible
- better error reporting
- better default value handling
- sandbox scene compose enabled
- links in the "Try It" are now clickable (to easily follow job URLs)
- better doc: hiding technical endpoints
- better model/scene name support (as far as technically possible)
- introducing RawSpaces / SafeSpaces to hide debug/internal files
- general CD improvements (pruning of useless resources, using k8s ApplySets)

## 17 Oct 2024

General

- overall documentation improvements
- improved large files/spaces performance/support
- 3dscenes/compose & 3dscenes/get-description input normalized to be in-line with other endpoints
- overall error handling improvements
- cluster flooding protection

Compose

- tweaks to support latest AI model changes
- minor bug fixes thanks @bagard lipstick scene issues
- better support for unsafe prompts
- better support for replaced words in prompts

Usability

- Sg (Substance Stager) compatibility improvements
- bug report URL for jobs is now provided as part of job results
- 3dmaterials/get-description now returns description in JSON as part of the result

## 3 Oct 2024

General

- /v1beta/3dscenes/create endpoint on internal APIs
- enabling turntables on FF APIs
- authentication now mandatory
- no more token necessary specifically for Firefly based endpoints
- easy login with login button + copy access token button
- namespace misleading concept removal
- security fixes
- graphQL API removal
- global doc improvements
- new compositing workflow (gingerbread based) + matchimagev2 for IBL gen
- multi-output, up to 4 images support
- random-seed passing / retrieval
- output size control
- improved Stager compatibility
- doc now includes sandbox web-components
- give us feedback button on docs
- sentry tracing