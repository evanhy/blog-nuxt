// 在线获取图标 https://favicongrabber.com/

export interface NavigationLink {
    title?: string
    icon?: string
    link?: string
    github?: string
    children?: NavigationLink[]
}

// 组件库列表
export const componentList: NavigationLink[] = [
    {
        title: "UI组件库",
        icon: "i-material-symbols:developer-guide-outline",
        children: [
            {
                title: "Element Plus",
                icon: "https://element-plus.org/images/element-plus-logo-small.svg",
                link: "https://element-plus.org/zh-CN/",
                github: "https://github.com/element-plus/element-plus",
            },
            {
                title: "Ant Design Vue",
                icon: "https://aliyuncdn.antdv.com/favicon.ico",
                link: "https://2x.antdv.com/components/overview-cn/",
                github: "https://github.com/vueComponent/ant-design-vue",
            },
            {
                title: "vant",
                icon: "https://img.yzcdn.cn/vant/logo.png",
                link: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
                github: "https://github.com/youzan/vant",
            },
            {
                title: "vuetifyjs",
                icon: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg",
                link: "https://vuetifyjs.com/zh-Hans/",
                github: "https://github.com/vuetifyjs/vuetify",
            },
            {
                title: "quasar",
                icon: "https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                link: "https://quasar.dev/",
                github: "https://github.com/quasarframework/quasar",
            },
            {
                title: "vuesax",
                icon: "https://vuesax.com/vuesax-only.png",
                link: "https://vuesax.com/",
                github: "https://github.com/lusaxweb/vuesax",
            },
            {
                title: "arco-design-vue",
                icon: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
                link: "https://arco.design/",
                github: "https://github.com/arco-design/arco-design-vue",
            },
            {
                title: "naive-ui",
                icon: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
                link: "https://www.naiveui.com/zh-CN/os-theme",
                github: "https://github.com/tusen-ai/naive-ui"
            }
        ],
    },
    {
        title: "工具库",
        icon: "i-ant-design:tool-outlined",
        children: [
            {
                title: "lodash",
                icon: "https://lodash.com/assets/img/lodash.svg",
                link: "https://lodash.com/",
                github: "https://github.com/lodash/lodash",
            },
            {
                title: "nanoid",
                icon: "https://zelark.github.io/nano-id-cc/favicon.ico",
                link: "https://zelark.github.io/nano-id-cc/",
                github: "https://github.com/ai/nanoid",
            },
            {
                title: "bignumber.js",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png",
                link: "https://mikemcl.github.io/bignumber.js/",
                github: "https://github.com/MikeMcl/bignumber.js",
            },
            {
                title: "driver.js",
                icon: "https://driverjs.com/favicon.svg",
                link: "https://driverjs.com/",
                github: "https://github.com/kamranahmedse/driver.js",
            },
            {
                title: "typeit",
                icon: "https://www.typeitjs.com/favicon.ico",
                link: "https://typeitjs.com/",
                github: "https://github.com/alexmacarthur/typeit",
            },
        ],
    },
    {
        title: "vue组件库",
        icon: "i-ri-vuejs-fill",
        children: [
            {
                title: "awesome-vue",
                icon: "https://raw.githubusercontent.com/vuejs/awesome-vue/master/assets/logo.svg",
                link: "https://github.com/vuejs/awesome-vue",
                github: "https://github.com/vuejs/awesome-vue",
            },
            {
                title: "vxe-table",
                icon: "https://vxetable.cn/favicon.ico",
                link: "https://vxetable.cn/#/table/start/install",
                github: "https://github.com/x-extends/vxe-table",
            },
            {
                title: "vue-seamless-scroll",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://chenxuan0000.github.io/vue-seamless-scroll/zh/",
                github: "https://github.com/chenxuan0000/vue-seamless-scroll",
            },
            {
                title: "vue-office",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://501351981.github.io/vue-office/examples/docs/",
                github: "https://github.com/501351981/vue-office",
            },
            {
                title: "pinia-plugin-persistedstate",
                icon: "https://prazdevs.github.io/pinia-plugin-persistedstate/logo.svg",
                link: "https://prazdevs.github.io/pinia-plugin-persistedstate/zh/",
                github: "https://github.com/prazdevs/pinia-plugin-persistedstate",
            },
            {
                title: "vue-macros",
                icon: "https://vue-macros.dev/favicon.svg",
                link: "https://vue-macros.dev/",
                github: "https://github.com/vue-macros/vue-macros",
            },
            {
                title: "motion",
                icon: "https://motion.vueuse.org/favicon.ico",
                link: "https://motion.vueuse.org/",
                github: "https://github.com/vueuse/motion",
            },
            {
                title: "vue-toastification",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://vue-toastification.maronato.dev/",
                github: "https://github.com/Maronato/vue-toastification",
            },
            {
                title: "vue-starport",
                icon: "https://vue-starport.netlify.app/favicon.svg",
                link: "https://vue-starport.netlify.app",
                github: "https://github.com/antfu/vue-starport",
            },
            {
                title: "vue-countTo",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://panjiachen.github.io/countTo/demo/",
                github: "https://panjiachen.github.io/countTo/demo/",
            },
            {
                title: "vue3-seamless-scroll",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://doc.wssio.com/opensource/vue3-seamless-scroll/",
                github: "https://github.com/xfy520/vue3-seamless-scroll",
            },
            {
                title: "vue3-marquee",
                icon: "https://vue3-marquee.vercel.app/favicon.ico",
                link: "https://vue3-marquee.vercel.app/",
                github: "https://github.com/megasanjay/vue3-marquee",
            },
        ],
    },
    {
        title: "Vite组件库",
        icon: "i-tabler-brand-vite",
        children: [
            {
                title: "vite-plugin-components",
                icon: "https://cn.vitejs.dev/logo.svg",
                link: "https://www.npmjs.com/package/unplugin-vue-components",
                github: "https://github.com/unplugin/unplugin-vue-components"
            }
        ],
    },
    {
        title: "可视化图表",
        icon: "i-material-symbols:pie-chart",
        children: [
            {
                title: "AntV",
                icon: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original",
                link: "https://antv.antgroup.com/",
                github: "https://github.com/antvis/antvis.github.io",
            },
            {
                title: "ECharts",
                icon: "https://echarts.apache.org/zh/images/logo.png",
                link: "https://echarts.apache.org/zh/index.html",
                github: "https://github.com/apache/echarts",
            },
        ],
    },
]

// 网站推荐列表
export const websiteList: NavigationLink[] = [
    {
        title: "论坛",
        icon: "i-material-symbols:developer-guide-outline",
        children: [
            {
                title: "掘金",
                icon: "https://juejin.cn/favicon.ico",
                link: "https://juejin.cn/",
            },
            {
                title: "简书",
                icon: "https://www.jianshu.com/favicon.ico",
                link: "https://www.jianshu.com/techareas/frontend"
            },
            {
                title: "思否",
                icon: "https://static.segmentfault.com/main_site_next/0a691f0d/touch-icon.png",
                link: "https://segmentfault.com/channel/frontend"
            },
            {
                title: "V2XE",
                icon: "https://www.v2ex.com/static/img/icon_rayps_64.png",
                link: "https://v2ex.com/"
            },
            {
                title: "CSDN",
                icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
                link: "https://blog.csdn.net/nav/web"
            }
        ],
    }
]

// 后台模板推荐列表
export const adminList: NavigationLink[] = [
    {
        title: "Vue3 版本",
        icon: "i-ri-vuejs-line",
        children: [
            {
                title: "vue-pure-admin",
                icon: "https://yiming_chang.gitee.io/pure-admin-doc/img/favicon.ico",
                link: "https://yiming_chang.gitee.io/pure-admin-doc/",
                github: "https://github.com/pure-admin/vue-pure-admin"
            },
            {
                title: "vue-next-admin",
                icon: "https://lyt-top.gitee.io/vue-next-admin-doc-preview/images/logo-mini.svg",
                link: "https://lyt-top.gitee.io/vue-next-admin-doc-preview/",
                github: "https://github.com/lyt-Top/vue-next-admin"
            },
            {
                title: "Geeker-Admin",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://docs.spicyboy.cn/",
                github: "https://github.com/HalseySpicy/Geeker-Admin"
            },
            {
                title: "vue3-composition-admin",
                icon: "https://admin-tmpl-test.rencaiyoujia.cn/favicon.ico",
                link: "https://admin-tmpl-test.rencaiyoujia.cn/#/login?redirect=/dashboard",
                github: "https://github.com/RainManGO/vue3-composition-admin"
            },
            {
                title: "vue-element-plus-admin",
                icon: "https://element-plus-admin.cn/favicon.ico",
                link: "https://element-plus-admin-doc.cn/",
                github: "https://github.com/kailong321200875/vue-element-plus-admin"
            },
            {
                title: "RuoYi-Vue3",
                icon: "https://doc.ruoyi.vip/favicon.ico",
                link: "https://doc.ruoyi.vip/",
                github: "https://github.com/yangzongzhuan/RuoYi-Vue3"
            },
            {
                title: "cool-admin-vue",
                icon: "https://show.cool-admin.com/favicon.ico",
                link: "https://show.cool-admin.com/",
                github: "https://github.com/cool-team-official/cool-admin-vue"
            },
            {
                title: "vue-typescript-admin-template",
                icon: "https://raw.githubusercontent.com/Armour/vue-typescript-admin-template/master/public/img/icons/android-chrome-512x512.png",
                link: "https://armour.github.io/vue-typescript-admin-docs",
                github: "https://github.com/Armour/vue-typescript-admin-template"
            },
            {
                title: "vue-vben-admin",
                icon: "https://doc.vvbin.cn/logo.png",
                link: "https://doc.vvbin.cn/",
                github: "https://github.com/vbenjs/vue-vben-adminhttps://github.com/vbenjs/vue-vben-admin"
            },
            {
                title: "vben-admin-thin-next",
                icon: "https://doc.vvbin.cn/logo.png",
                link: "https://doc.vvbin.cn/",
                github: "https://github.com/vbenjs/vben-admin-thin-next"
            },
            {
                title: "v3-admin-vite",
                link: "https://juejin.cn/post/7089377403717287972",
                github: "https://github.com/un-pany/v3-admin-vite",
                icon: "https://un-pany.github.io/v3-admin-vite/favicon.ico"
            },
            {
                title: "arco-design-pro-vue",
                icon: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
                link: "https://arco.design/vue/docs/pro/start",
                github: "https://github.com/arco-design/arco-design-pro-vue"
            }
        ],
    },
    {
        title: "Vue2 版本",
        icon: "i-uil-vuejs",
        children: [
            {
                title: "vue-element-admin",
                icon: "https://panjiachen.github.io/vue-element-admin-site/favicon.ico",
                link: "https://panjiachen.github.io/vue-element-admin-site/zh/",
                github: "https://github.com/PanJiaChen/vue-element-admin",
            },
            {
                title: "ruoyi-vue-pro",
                icon: "https://doc.ruoyi.vip/favicon.ico",
                link: "https://doc.iocoder.cn/",
                github: "https://github.com/YunaiV/ruoyi-vue-pro"
            }
        ]
    },
    {
        title: "Vue 初始化模板",
        icon: "i-ri-vuejs-fill",
        children: [
            {
                title: "tov-template",
                icon: "https://tov-template.netlify.app/favicon.ico",
                link: "https://tov-template.netlify.app/",
                github: "https://github.com/dishait/tov-template"
            },
            {
                title: "vitesse-lite",
                icon: "https://vitesse-lite.netlify.app/favicon.svg",
                link: "https://vitesse-lite.netlify.app/",
                github: "https://github.com/antfu/vitesse-lite"
            }
        ]
    }
]

// 工具
export const toolsList: NavigationLink[] = [
    {
        title: "代码生成",
        icon: "i-octicon-copilot-24",
        children: [
            {
                title: "Github Copilot",
                icon: "https://github.githubassets.com/images/icons/copilot/copilot-logo-large.svg",
                link: "https://copilot.github.com/",
            },
            {
                title: "codegeex",
                icon: "https://codegeex.cn/static/plugin_logo.258e3dc0.svg",
                link: "https://codegeex.cn/",
            },
            {
                title: "comate",
                icon: "https://comate.baidu.com/images/favicon.ico",
                link: "https://comate.baidu.com/",
            }
        ]
    },
    {
        title: "AI对话",
        icon: "i-octicon-copilot-24",
        children: [
            {
                title: "ChatGPT",
                link: "https://chat.openai.com/chat",
                icon: "https://chatgptui.org/_next/static/media/logo.65288370.svg",
            },
            {
                title: "文心一言",
                link: "https://yiyan.baidu.com/welcome",
                icon: "https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",
            },
            {
                title: "bard",
                link: "https://bard.google.com/",
                icon: "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
            }
        ]
    }
]