exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
        type SiteSiteMetadata {
          template_id: String
        }
      `);
};
