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
    ],
    
    publicPath: process.env.NODE_ENV === "production" ? "/fluffy-coffee-2.0/" : "/"
};
