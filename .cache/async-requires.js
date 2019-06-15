// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-portfolio-js": () => import("/Users/blainelingard/Madlab-wesbite/madlabcms/src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-pages-404-js": () => import("/Users/blainelingard/Madlab-wesbite/madlabcms/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

