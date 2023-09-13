// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        head: {
            title: "Evan_Sky",
            bodyAttrs: {
                class: 'font-sans',
            },
        },
    },
    vite: {
        vue: {
            customElement: true, // 开启自定义元素支持
        }
    },
    modules: [
        "@unocss/nuxt",
        '@nuxt/content'
    ],
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/styles/global.scss',
        '@/assets/styles/theme.css',
        '@/assets/styles/transition.css',
        '@/assets/styles/markdown.scss',
    ]
})
