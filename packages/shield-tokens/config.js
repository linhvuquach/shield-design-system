module.exports = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "dist/",
      files: [
        {
          destination: "index.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "index.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            fileHeader: (msg) => {
              return msg;
            },
          },
        },
      ],
    },
    js: {
      // transformGroup: "js",
      transforms: ["JS-CONSTANT"],
      buildPath: "dist/",
      files: [
        {
          destination: "index.js",
          format: "js-format",
        },
        {
          destination: "index.esm.js",
          format: "js-format",
        },
        {
            destination: "index.d.ts",
            format: "dst-format"
        }
      ],
    },
  },
};
