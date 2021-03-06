const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-portfolio-under-content-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/portfolioUnderContent.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/page.js"))),
  "component---src-templates-blog-post-list-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/blogPostList.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/portfolio.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/pages/404.js")))
}

