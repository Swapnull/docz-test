export const imports = {
  'button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "button" */ 'button.mdx'),
  'form.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "form" */ 'form.mdx'),
  'nocateg.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "nocateg" */ 'nocateg.mdx'),
}
