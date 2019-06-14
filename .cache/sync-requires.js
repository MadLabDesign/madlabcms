const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/blainelingard/Madlab-wesbite/madlabcms/src/pages/404.js")))
}

