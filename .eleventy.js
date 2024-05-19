module.exports = function (eleventyConfig) {
  const toISOString = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const currentYear = () => new Date().getFullYear();

  // Enable excerpts for frontmatter
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addFilter("toISOString", toISOString);
  eleventyConfig.addFilter("currentYear", currentYear);

  // Change default directories
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
