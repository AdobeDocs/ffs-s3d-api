import React from "react";
import { GetCredential } from "@adobe/gatsby-theme-aio/src/components/GetCredential";
import { graphql, useStaticQuery } from "gatsby";
import sbs3dIcon from "./images/substance3d.png";

const Config = {
  productName: "Adobe Substance 3D API",
  productLabel: "Substance 3D API",
  includedProductsAndServices: [
    { label: "Adobe Substance 3D API", icon: sbs3dIcon },
  ],
  imsScopes: [
    "openid",
    "AdobeID",
    "read_organizations",
    "email",
    "firefly_api",
    "firefly_enterprise",
    "profile",
    "substance3d_api.spaces.create",
    "substance3d_api.jobs.create",
  ],
};

const GetCredentialOAuthS2s = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            template_id
          }
        }
      }
    `
  );

  const { template_id } = data?.site?.siteMetadata;

  return (
    <GetCredential
      className="getCredentialContainer"
      templateId={template_id}
      productName={Config.productName}
    >
      <GetCredential.SignIn
        title="Get credentials"
        paragraph={`After signing in, you can create credentials that can be used to call the ${Config.productLabel}.`}
        buttonText="Sign in"
      />

      <GetCredential.Form
        title="Get credentials"
        paragraph={`Create credentials that you can use to call the ${Config.productLabel}.`}
        className="formClass"
      >
        <GetCredential.Form.CredentialName
          label="Credential name"
          description="The credential name must be unique, use alphanumeric characters, and between 6 and 45 characters long. A project will be automatically created with the same name in Adobe Developer Console."
          range="45"
        />

        <GetCredential.Form.Products label="Included products and services">
          {Config.includedProductsAndServices.map((p) => (
            <GetCredential.Form.Product label={p.label} icon={p.icon} />
          ))}
        </GetCredential.Form.Products>

        <GetCredential.Form.AdobeDeveloperConsole
          label="By checking this box, you agree to"
          linkText="Adobe Developer Terms of Use"
          href="https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf"
        />

        <GetCredential.Form.Side>
          <div
            style={{ display: "flex", gap: "32px", flexDirection: "column" }}
          >
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0
                libraries to generate access tokens using the OAuth 2.0 client
                credentials grant type.
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              {/* TODO: links to API documentation
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                Authentication documentation
              </a>
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                {`${Config.productLabel} documentation`}
              </a>*/}
            </div>
          </div>
        </GetCredential.Form.Side>
      </GetCredential.Form>

      <GetCredential.UnknownError
        helpLink="https://some_help_link"
        helpLinkText="Get Help"
        className="unKnownError"
      />

      <GetCredential.Card
        title="Your credential is ready to use"
        developerConsoleManage="Manage on Developer Console"
        className="card_developer_console"
        devConsoleDirection="/console"
        isCollapsable="true"
      >
        <GetCredential.Card.Side>
          <div
            style={{ display: "flex", gap: "32px", flexDirection: "column" }}
          >
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0
                libraries to generate access tokens using the OAuth 2.0 client
                credentials grant type.
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              {/* TODO: links to API documentation
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                Authentication documentation
              </a>
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                {`${Config.productLabel} documentation`}
              </a>*/}
            </div>
          </div>
        </GetCredential.Card.Side>

        <GetCredential.Card.Products label="Included products and services">
          {Config.includedProductsAndServices.map((p) => (
            <GetCredential.Card.Product label={p.label} icon={p.icon} />
          ))}
        </GetCredential.Card.Products>

        <GetCredential.Card.ProjectsDropdown
          label="Projects"
          subHeading="Only your projects that contain credentials are shown"
        />

        <GetCredential.Card.ManageDeveloperConsole
          label="Manage all your projects and credentials on Adobe Developer Console"
          direction="/console"
        />

        <GetCredential.Card.DevConsoleLink heading="Developer Console Project" />

        <GetCredential.Card.AccessToken
          helpText=""
          buttonLabel="Generate and copy token"
          heading={
            <>
              Access token
              <br />
              <br />{" "}
              <span style="font-weight:normal">
                <small>
                  After copying the access token, you must prepend the token
                  with <code>Bearer</code> to use it with API calls.
                </small>
              </span>
            </>
          }
        />

        <GetCredential.Card.CredentialDetails
          heading={
            <>
              Credential details
              <br />
              <br />{" "}
              <span style="font-weight:normal">
                <small>
                  You can use the following credential details to try out the{" "}
                  {Config.productName} below.
                  <ul>
                    <li>
                      Client ID: Your public identifier for accessing the APIs.
                      This acts as an API key when used with the{" "}
                      {Config.productLabel}, and corresponds with the{" "}
                      <code>x-api-key</code> header.
                    </li>
                    <li>
                      Organization ID: The ID of the organization you're using
                      with the {Config.productLabel}. This corresponds with the{" "}
                      <code>x-gw-ims-org-id</code> header.
                    </li>
                  </ul>
                </small>
              </span>
            </>
          }
          orderBy="ClientId,ImsOrgID"
        >
          <GetCredential.Card.CredentialDetails.ClientId heading="Client ID (x-api-key)" />
          <GetCredential.Card.CredentialDetails.ImsOrgID heading="Organization ID" />
          <GetCredential.Card.CredentialDetails.Scopes
            heading="Scopes"
            scope={Config.imsScopes.join(",")}
          />
        </GetCredential.Card.CredentialDetails>
      </GetCredential.Card>

      <GetCredential.Return
        title="Previously created projects"
        paragraph={`Select a project and access your existing credentials for ${Config.productName}.`}
        className="card_developer_console"
        isCollapsable="true"
      >
        <GetCredential.Return.Side>
          <GetCredential.Return.Side.Custom>
            <div
              style={{
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeM">
                Welcome back
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                You can either re-use an existing credential or create a new
                credential.
              </p>
            </div>
          </GetCredential.Return.Side.Custom>
          <GetCredential.Return.Side.NewCredential
            heading="Need another credential?"
            buttonLabel="Create new credential"
          />
        </GetCredential.Return.Side>

        <GetCredential.Return.CredentialDetails
          heading={
            <>
              Credential details
              <br />
              <br />{" "}
              <span style="font-weight:normal">
                <small>
                  You can use the following credential details to try out the{" "}
                  {Config.productName} below.
                  <ul>
                    <li>
                      Client ID: Your public identifier for accessing the APIs.
                      This acts as an API key when used with the{" "}
                      {Config.productLabel}, and corresponds with the{" "}
                      <code>x-api-key</code> header.
                    </li>
                    <li>
                      Organization ID: The ID of the organization you're using
                      with the {Config.productLabel}. This corresponds with the{" "}
                      <code>x-gw-ims-org-id</code> header.
                    </li>
                  </ul>
                </small>
              </span>
            </>
          }
          orderBy="ClientId,ImsOrgID"
        >
          <GetCredential.Return.CredentialDetails.ClientId heading="Client ID (x-api-key)" />
          <GetCredential.Return.CredentialDetails.ImsOrgID heading="Organization ID" />
          <GetCredential.Return.CredentialDetails.Scopes
            heading="Scopes"
            scope={Config.imsScopes.join(",")}
          />
        </GetCredential.Return.CredentialDetails>

        <GetCredential.Return.ProjectsDropdown
          label="Projects"
          subHeading="Only your projects that contain credentials are shown"
        />

        <GetCredential.Return.ManageDeveloperConsole
          label="Manage all your projects and credentials on Adobe Developer Console"
          direction="/console/projects"
        />

        <GetCredential.Return.AccessToken
          helpText=""
          buttonLabel="Generate and copy token"
          heading={
            <>
              Access token
              <br />
              <br />{" "}
              <span style="font-weight:normal">
                <small>
                  After copying the access token, you must prepend the token
                  with <code>Bearer</code> to use it with API calls.
                </small>
              </span>
            </>
          }
        />

        <GetCredential.Return.DevConsoleLink heading="Developer Console project" />

        <GetCredential.Return.Products label="Included products and services">
          {Config.includedProductsAndServices.map((p) => (
            <GetCredential.Return.Product label={p.label} icon={p.icon} />
          ))}
        </GetCredential.Return.Products>
      </GetCredential.Return>

      <GetCredential.RequestAccess
        title="Get credentials"
        paragraph="Create unique credentials that you will use to call multiple APIs from your application."
      >
        <GetCredential.RequestAccess.EdgeCase>
          <GetCredential.RequestAccess.EdgeCase.NoProduct
            title={`Your organization does not have access to ${Config.productName}.`}
          />
          <GetCredential.RequestAccess.EdgeCase.Type1User
            title={`You do not have access to ${Config.productName}. Please use another organization and try again.`}
          />
          <GetCredential.RequestAccess.EdgeCase.NotMember
            title={`You do not have access to ${Config.productName}. Please use another organization and try again.`}
          />
        </GetCredential.RequestAccess.EdgeCase>

        <GetCredential.RequestAccess.RestrictedAccess
          title="Restricted Access"
          buttonLabel="Request access"
        >
          <GetCredential.RequestAccess.RestrictedAccess.Products label="Included products and services">
            {Config.includedProductsAndServices.map((p) => (
              <GetCredential.RequestAccess.RestrictedAccess.Products.Product
                label={p.label}
                icon={p.icon}
              />
            ))}
          </GetCredential.RequestAccess.RestrictedAccess.Products>
        </GetCredential.RequestAccess.RestrictedAccess>
        <GetCredential.RequestAccess.RequestAccessSide>
          <div
            style={{ display: "flex", gap: "32px", flexDirection: "column" }}
          >
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0
                libraries to generate access tokens using the OAuth 2.0 client
                credentials grant type.
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "16px", flexDirection: "column" }}
            >
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              {/* TODO: links to API documentation
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                Authentication documentation
              </a>
              <a
                style={{ color: "#0265DC" }}
                href=""
              >
                {`${Config.productLabel} documentation`}
              </a>*/}
            </div>
          </div>
        </GetCredential.RequestAccess.RequestAccessSide>
      </GetCredential.RequestAccess>
    </GetCredential>
  );
};

export default GetCredentialOAuthS2s;
