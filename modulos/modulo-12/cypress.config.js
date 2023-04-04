const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8915xx',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br"
  },
});
