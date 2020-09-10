module.exports = {
  presets: [
      "@vue/app",
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime", ["component", {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
  }]]
};