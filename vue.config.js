const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
      'vuetify'
    ]
})
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/assets/scss/main.scss"
        `,
            },
        },
    },

    transpileDependencies: [
      'vuetify'
    ]
};
