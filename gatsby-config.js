module.exports = {
  siteMetadata: {
    title: `My Gatsby tutorial as newby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    /* 
    no funcionan los plugins: 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
],
}
