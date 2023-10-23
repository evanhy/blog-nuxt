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
        title: "vite组件库",
        icon: "i-tabler-brand-vite",
        children: [],
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
        title: "前端",
        icon: "i-material-symbols:developer-guide-outline",
        children: [
            {
                title: "掘金",
                icon: "https://juejin.cn/favicon.ico",
                link: "https://juejin.cn/",
            },
        ],
    }
]

// 后台模板推荐列表
export const adminList: NavigationLink[] = [
    {
        title: "后台模板",
        icon: "i-material-symbols:developer-guide-outline",
        children: [
            {
                title: "vue-pure-admin",
                icon: "https://yiming_chang.gitee.io/pure-admin-doc/img/favicon.ico",
                link: "https://yiming_chang.gitee.io/pure-admin-doc/",
                github: "https://github.com/pure-admin/vue-pure-admin"
            },
        ],
    },
]
