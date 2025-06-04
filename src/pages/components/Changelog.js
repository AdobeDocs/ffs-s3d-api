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

import React, { useState, useEffect, createElement } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { useRemark } from "react-remark";
import rehypeSanitize from "rehype-sanitize";
import remarkParse from "remark-parse";
import kebabCase from "lodash/kebabCase";
import first from "lodash/first";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "@adobe/gatsby-theme-aio/src/components/Heading";
import { ProgressCircle } from "@adobe/gatsby-theme-aio/src/components/ProgressCircle";

const HeadingComponents = [
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
];

const Heading = ({ lvl, ...props }) => {
  const component = HeadingComponents[lvl - 1];

  return createElement(component, {
    ...props,
    id: kebabCase(first(props.children)),
  });
};

const Progress = () => (
  <>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        margin-top: var(--spectrum-global-dimension-size-500);
      `}
      data-cy="loader"
    >
      <ProgressCircle size="L" aria-label="Loading…" isIndeterminate />
    </div>
  </>
);

const FetchError = () => (
  <div
    css={css`
      margin-top: var(--spectrum-global-dimension-size-500);
    `}
    data-cy="error"
  >
    This page isn't available at the moment. Please retry later.
  </div>
);

const Changelog = ({ title, url }) => {
  const [hasError, setHasError] = useState(false);

  const [mdSource, setMdSource] = useRemark({
    remarkPlugins: [remarkParse],
    remarkToRehypeOptions: { allowDangerousHtml: true },
    rehypePlugins: [rehypeSanitize],
    rehypeReactOptions: {
      components: {
        h1: (props) => <Heading lvl="1" {...props} />,
        h2: (props) => <Heading lvl="2" {...props} />,
        h3: (props) => <Heading lvl="3" {...props} />,
        h4: (props) => <Heading lvl="4" {...props} />,
        h5: (props) => <Heading lvl="5" {...props} />,
        h6: (props) => <Heading lvl="6" {...props} />,
      },
    },
  });

  useEffect(() => {
    async function fetchAndParseChangelog() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { Accept: "text/markdown" },
        });

        if (!response.ok)
          throw new Error(
            `could not fetch changelog data (status: ${response.status})`
          );

        setMdSource(await response.text());
        setHasError(false);
      } catch (err) {
        console.error(err.message);
        setHasError(true);
      }
    }

    if (!mdSource) fetchAndParseChangelog();
  }, [mdSource, setMdSource, setHasError, url]);

  let body = <Progress />;

  if (hasError) {
    body = <FetchError />;
  } else if (mdSource) {
    body = mdSource;
  }

  return (
    <>
      <Heading1>{title ?? "Changelog"}</Heading1>
      {body}
    </>
  );
};

Changelog.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Changelog;
