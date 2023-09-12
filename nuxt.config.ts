// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        head: {
            title: "Evan_Sky",
        },
        pageTransition: {name: 'page', mode: 'out-in'}

    },
    vite: {
        vue: {
            customElement: true, // 开启自定义元素支持
        }
    },
    modules: [
        "@unocss/nuxt",
    ],
    css: [
        "@unocss/reset/normalize.css",
        "@/assets/css/reset.css",
        // "@unocss/reset/tailwind.css"
    ]
})
