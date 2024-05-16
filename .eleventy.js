module.exports = function (eleventyConfig) {
  // Enable excerpts for frontmatter
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");

  // Change default directories
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
