// 在线获取图标 https://favicongrabber.com/
// 获取 Github star 数量 https://shields.io/badges/git-hub-repo-stars

export interface NavigationLink {
    title?: string
    icon?: string
    link?: string
    github?: string
    description?: string
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
                description: "Element Plus 是饿了么前端团队维护的一套基于 Vue 3.0 的桌面端组件库",
            },
            {
                title: "Ant Design Vue",
                icon: "https://aliyuncdn.antdv.com/favicon.ico",
                link: "https://2x.antdv.com/components/overview-cn/",
                github: "https://github.com/vueComponent/ant-design-vue",
                description: "Vue3 组件库, Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
            },
            {
                title: "vant",
                icon: "https://img.yzcdn.cn/vant/logo.png",
                link: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
                github: "https://github.com/youzan/vant",
                description: "轻量、可靠的移动端 Vue 组件库",
            },
            {
                title: "vuetifyjs",
                icon: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg",
                link: "https://vuetifyjs.com/zh-Hans/",
                github: "https://github.com/vuetifyjs/vuetify",
                description: "Vuetify 是一个 Vue UI 库，用于构建用户界面的 Material Design",
            },
            {
                title: "quasar",
                icon: "https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                link: "https://quasar.dev/",
                github: "https://github.com/quasarframework/quasar",
                description: "Quasar Framework 是一个基于 Vue.js 的免费、开源的框架，用于构建高性能、响应式的现代 Web 应用程序",
            },
            {
                title: "vuesax",
                icon: "https://vuesax.com/vuesax-only.png",
                link: "https://vuesax.com/",
                github: "https://github.com/lusaxweb/vuesax",
                description: "Vuesax 是一个轻量级、响应式和美观的基于 Vue.js 的组件库",
            },
            {
                title: "arco-design-vue",
                icon: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
                link: "https://arco.design/",
                github: "https://github.com/arco-design/arco-design-vue",
                description: "Arco Design 是一套企业级中后台设计体系，提供了完整的设计资源和 React/Vue/Angular 三个框架的实现",
            },
            {
                title: "naive-ui",
                icon: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
                link: "https://www.naiveui.com/zh-CN/os-theme",
                github: "https://github.com/tusen-ai/naive-ui",
                description: "Naive UI 是一个 Vue 3 的轻量级组件库，专注于提升开发者的开发体验",
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
                description: "Lodash 提供了一致性、模块化、高性能的实用工具，用于处理数组、数字、对象、字符串等数据",
            },
            {
                title: "nanoid",
                icon: "https://zelark.github.io/nano-id-cc/favicon.ico",
                link: "https://zelark.github.io/nano-id-cc/",
                github: "https://github.com/ai/nanoid",
                description: "NanoID 是一个小型、安全、URL 友好的唯一字符串 ID 生成器",
            },
            {
                title: "bignumber.js",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png",
                link: "https://mikemcl.github.io/bignumber.js/",
                github: "https://github.com/MikeMcl/bignumber.js",
                description: "bignumber.js 是一个用于任意精度十进制和非十进制算术的 JavaScript 库",
            },
            {
                title: "driver.js",
                icon: "https://driverjs.com/favicon.svg",
                link: "https://driverjs.com/",
                github: "https://github.com/kamranahmedse/driver.js",
                description: "Driver.js 是一个轻量级的、开源的、无依赖的 JavaScript 引导库，可用于为您的 Web 应用程序提供可交互的引导",
            },
            {
                title: "typeit",
                icon: "https://www.typeitjs.com/favicon.ico",
                link: "https://typeitjs.com/",
                github: "https://github.com/alexmacarthur/typeit",
                description: "TypeIt 是一个轻量级的 JavaScript 动画库，用于在网页上创建打字动画",
            },
            {
                title: "Sortable",
                icon: "https://sortablejs.github.io/Sortable/st/og-image.png",
                link: "https://sortablejs.github.io/Sortable/",
                github: "https://github.com/SortableJS/Sortable",
                description: "Sortable 是一个 JavaScript 库，用于在现代浏览器和触摸设备上重新排序拖放列表",
            },
            {
                title: "ni",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png",
                link: "https://github.com/antfu/ni",
                github: "https://github.com/antfu/ni",
                description: "ni 是一个命令行工具，用于快速创建新项目",
            }
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
                description: "Vue 相关的精选资源列表",
            },
            {
                title: "vxe-table",
                icon: "https://vxetable.cn/favicon.ico",
                link: "https://vxetable.cn/#/table/start/install",
                github: "https://github.com/x-extends/vxe-table",
                description: "基于 vue 的 PC 端表格库，支持增删改查、虚拟滚动、懒加载、快捷菜单、数据校验、树形结构、打印导出、表单渲染、数据分页、虚拟列表、模态窗口、支持右键菜单、自定义模板、渲染器、贼灵活的配置项、扩展接口、国际化、数据校验、数据汇总、大数据量优化、兼容 Vue 2.x、Vue 3.x、ElementUI、iView、Ant Design Vue、Vant、Vuetify、Bootstrap、Material Design、Tailwind CSS、Wind UI、Taro 等等",
            },
            {
                title: "vue-seamless-scroll",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://chenxuan0000.github.io/vue-seamless-scroll/zh/",
                github: "https://github.com/chenxuan0000/vue-seamless-scroll",
                description: "无缝滚动的 vue 组件",
            },
            {
                title: "vue-office",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://501351981.github.io/vue-office/examples/docs/",
                github: "https://github.com/501351981/vue-office",
                description: "基于 vue 的 office 组件库",
            },
            {
                title: "pinia-plugin-persistedstate",
                icon: "https://prazdevs.github.io/pinia-plugin-persistedstate/logo.svg",
                link: "https://prazdevs.github.io/pinia-plugin-persistedstate/zh/",
                github: "https://github.com/prazdevs/pinia-plugin-persistedstate",
                description: "pinia 的持久化插件",
            },
            {
                title: "vue-macros",
                icon: "https://vue-macros.dev/favicon.svg",
                link: "https://vue-macros.dev/",
                github: "https://github.com/vue-macros/vue-macros",
                description: "vue-macros 是一个基于 Vite 的宏集合，用于在 Vue 组件中使用宏",
            },
            {
                title: "motion",
                icon: "https://motion.vueuse.org/favicon.ico",
                link: "https://motion.vueuse.org/",
                github: "https://github.com/vueuse/motion",
                description: "Vue Motion 是一个基于 Vue 3 和 Framer Motion 的动画库",
            },
            {
                title: "vue-toastification",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://vue-toastification.maronato.dev/",
                github: "https://github.com/Maronato/vue-toastification",
                description: "Vue notifications made easy! ",
            },
            {
                title: "vue-starport",
                icon: "https://vue-starport.netlify.app/favicon.svg",
                link: "https://vue-starport.netlify.app",
                github: "https://github.com/antfu/vue-starport",
                description: "跨路线共享组件并带有动画",
            },
            {
                title: "vue-countTo",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://panjiachen.github.io/countTo/demo/",
                github: "https://github.com/PanJiaChen/vue-countTo",
                description: "Vue 数字滚动组件",
            },
            {
                title: "vue3-seamless-scroll",
                icon: "https://cn.vuejs.org/logo.svg",
                link: "https://doc.wssio.com/opensource/vue3-seamless-scroll/",
                github: "https://github.com/xfy520/vue3-seamless-scroll",
                description: "Vue3.0 无缝滚动组件",
            },
            {
                title: "vue3-marquee",
                icon: "https://vue3-marquee.vercel.app/favicon.ico",
                link: "https://vue3-marquee.vercel.app/",
                github: "https://github.com/megasanjay/vue3-marquee",
                description: "一个简单的字幕组件，对 Vue 3 具有零依赖性。可用于无缝滚动",
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
                github: "https://github.com/unplugin/unplugin-vue-components",
                description: "Vite 的组件自动导入插件",
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
                description: "AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践",
            },
            {
                title: "ECharts",
                icon: "https://echarts.apache.org/zh/images/logo.png",
                link: "https://echarts.apache.org/zh/index.html",
                github: "https://github.com/apache/echarts",
                description: "ECharts 是一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表",
            },
        ],
    },
    {
        title: "视频播放器",
        icon: "i-ic-baseline-videocam",
        children: [
            {
                title: "xgplayer",
                icon: "https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/favicon.ico",
                link: "https://h5player.bytedance.com/",
                github: "https://github.com/bytedance/xgplayer",
                description: "xgplayer 是一个支持多平台的开源 HTML5 播放器，支持 PC 和移动端浏览器，支持 H5 和 Flash 播放，支持弹幕，支持插件扩展，支持多语言，支持多种格式视频播放，支持自定义皮肤，支持自定义视频源，支持自定义播放器组件",
            },
            {
                title: "DPlayer",
                icon: "https://dplayer.diygod.dev/logo.png",
                link: "https://dplayer.diygod.dev/",
                github: "https://github.com/DIYgod/DPlayer",
                description: "DPlayer 是一个开源的、基于 HTML5 的播放器，支持弹幕、自动切换清晰度、自动滚动、镜像翻转、翻转模式、硬解、截图、无缝切换视频、帧预览、记忆播放位置、精确跳跃、截图、logo、封面、窗口模式、弹幕各种配置项、多实例等等",
            },
            {
                title: "videojs-player",
                icon: "https://cdn-icons-png.flaticon.com/512/711/711245.png",
                link: "https://github.surmon.me/videojs-player",
                github: "https://github.com/surmon-china/videojs-player",
                description: "Vue3 和 React 的 Video.js 播放器组件",
            },
            {
                title: "video.js",
                icon: "https://videojs.com/favicon.ico",
                link: "https://videojs.com/",
                github: "https://github.com/videojs/video.js",
                description: "video.js 是一个开源的网络视频播放器，支持 HTML5 和 Flash 播放，支持自定义皮肤，支持自定义插件，支持自定义播放器组件，支持多语言，支持多种格式视频播放，支持自定义视频源，支持自定义播放器组件",
            },
            {
                title: "vue3-video-play",
                icon: "https://cdn-icons-png.flaticon.com/512/711/711245.png",
                link: "https://codelife.cc/vue3-video-play/",
                github: "https://github.com/xdlumia/vue3-video-play",
                description: "适用于 Vue3 的 hls.js 播放器组件，配置丰富，界面还算好看",
            },
            {
                title: "hls.js",
                icon: "https://raw.githubusercontent.com/video-dev/hls.js/master/docs/logo.svg",
                link: "https://hlsjs.video-dev.org/demo",
                github: "https://github.com/video-dev/hls.js",
                description: "hls.js 是一个 JavaScript 库，用于在现代浏览器中播放 HTTP Live Streaming (HLS)。它依赖于 MediaSource 扩展 (MSE) API，以便在 HTML5 视频和音频元素上播放媒体片段",
            },
            {
                title: "flv.js",
                icon: "https://cdn-icons-png.flaticon.com/512/711/711245.png",
                link: "https://bilibili.github.io/flv.js/demo/",
                github: "https://github.com/bilibili/flv.js",
                description: "flv.js 是一个用于在浏览器中播放 FLV 文件的 JavaScript 库，它依赖于 MediaSource 扩展 (MSE) API，以便在 HTML5 视频和音频元素上播放媒体片段",
            },
            {
                title: "plyr",
                icon: "https://cdn.plyr.io/static/icons/favicon.ico",
                link: "https://plyr.io/",
                github: "https://github.com/sampotts/plyr",
                description: "plyr 是一个简单、轻量级、可自定义的 HTML5 视频和音频播放器，支持 YouTube、Vimeo 和 HTML5 媒体",
            }
        ]
    },
    {
        title: "CSS",
        icon: "i-ci-css3",
        children: [
            {
                title: "animate.css",
                icon: "https://animate.style/img/favicon.ico",
                link: "https://animate.style/",
                github: "https://github.com/animate-css/animate.css",
                description: "animate.css 是一个跨浏览器的库，用于在网站中添加动画效果",
            },
            {
                title: "animista",
                icon: "https://animista.net/favicon-16x16.png",
                link: "https://animista.net/",
                description: "Animista 是一个 CSS 动画生成器，可让您通过可视化界面创建自定义 CSS 动画",
            },
            {
                title: "magic",
                icon: "https://www.minimamente.com/wp-content/uploads/2020/06/cropped-logo_1024_favicoon-32x32.png",
                link: "https://www.minimamente.com/project/magic/",
                github: "https://github.com/miniMAC/magic",
                description: "具有特殊效果的 CSS3 动画",
            },
            {
                title: "Hover",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png",
                link: "https://ianlunn.github.io/Hover/",
                github: "https://github.com/IanLunn/Hover",
                description: "CSS3 驱动的悬停效果集合，可应用于链接、按钮、徽标、SVG、特色图像等。轻松应用到您自己的元素、修改或仅用于获取灵感。可用于 CSS、Sass 和 LESS",
            },
            {
                title: "ui-buttons",
                icon: "https://ui-buttons.web.app/favicon.ico",
                link: "https://ui-buttons.web.app/",
                github: "https://github.com/eludadev/ui-buttons",
                description: "ui-buttons 是一个 CSS 按钮库，可轻松地在您的项目中使用",
            },
            {
                title: "uiverse",
                icon: "https://uiverse.io/favicon-16x16.png",
                link: "https://uiverse.io/",
                description: "uiverse 提供了很多好看的 CSS 样式案例",
            },
            {
                title: "navnav",
                icon: "https://navnav.co/favicon.ico",
                link: "https://navnav.co/",
                description: "navnav 是一个 CSS 导航栏样式集合",
            },
            {
                title: "CSS-Inspiration",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png",
                link: "https://csscoco.com/inspiration/#/./init",
                github: "https://github.com/chokcoco/CSS-Inspiration",
                description: "CSS Inspiration，在这里找到写 CSS 的灵感！",
            },
            {
                title: "tailwindcss",
                icon: "https://tailwindcss.com/favicons/favicon-32x32.png?v=3",
                link: "https://tailwindcss.com/",
                github: "https://github.com/tailwindlabs/tailwindcss",
                description: "Tailwind CSS 是一个实用的工具，可帮助您快速构建现代 Web 应用程序，而无需牺牲可访问性、灵活性或性能",
            },
            {
                title: "UnoCSS",
                icon: "https://unocss.dev/favicon.ico",
                link: "https://unocss.dev/",
                github: "https://github.com/unocss/unocss",
                description: "UnoCSS 是即时按需原子 CSS 引擎",
            },
            {
                title: "You-need-to-know-css",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png",
                link: "https://lhammer.cn/You-need-to-know-css/",
                github: "https://github.com/l-hammer/You-need-to-know-css",
                description: "Web 开发者的 CSS 技巧~",
            },
            {
                title: "iCSS",
                icon: "https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png",
                link: "https://www.cnblogs.com/coco1s/",
                github: "https://github.com/chokcoco/iCSS",
                description: "CSS 奇技淫巧",
            }
        ]
    },
    {
        title: "富文本编辑器",
        icon: "i-quill-markdown",
        children: [
            {
                title: "wangEditor",
                icon: "https://www.wangeditor.com/favicon.ico",
                link: "https://www.wangeditor.com/",
                github: "https://github.com/wangeditor-team/wangEditor",
                description: "wangEditor 是一款国产的富文本编辑器, 基于 javascript 和 css 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费, 目前作者已经宣布不更新, 但是仍然可以使用",
            },
            {
                title: "tinymce",
                icon: "https://www.tiny.cloud/favicon-32x32.png",
                link: "https://www.tiny.cloud/",
                github: "https://github.com/tinymce/tinymce",
                description: "世界排名第一的富文本编辑 JavaScript 库。适用于 React、Vue 和 Angular",
            },
            {
                title: "quill",
                icon: "https://quilljs.com/assets/images/favicon.ico",
                link: "https://quilljs.com/",
                github: "https://github.com/quilljs/quill",
                description: "Quill 是一款专为兼容性和可扩展性而构建的现代所见即所得编辑器。",
            },
            {
                title: "lexical",
                icon: "https://lexical.dev/img/favicon.ico",
                link: "https://lexical.dev/",
                github: "https://github.com/facebook/lexical",
                description: "Lexical 是一个可扩展的 JavaScript Web 文本编辑器框架，强调可靠性、可访问性和性能。 Lexical 旨在提供一流的开发人员体验，以便您可以轻松地进行原型设计并充满信心地构建功能。"
            },
            {
                title: "tiptap",
                icon: "https://tiptap.dev/favicon.svg",
                link: "https://tiptap.dev/installation/vue3",
                github: "https://github.com/ueberdosis/tiptap",
                description: "一个无头、与框架无关且可扩展的富文本编辑器，基于 ProseMirror。",
            }
        ]
    },
    {
        title: "Icon",
        icon: "i-teenyicons-svg-solid",
        children: [
            {
                title: "feathericons",
                icon: "https://feathericons.com/favicon-16x16.png",
                link: "https://feathericons.com/",
                github: "https://github.com/feathericons/feather",
                description: "Feather 是一组简单漂亮的开源图标。每个图标都设计在 24x24 网格上，强调简单性、一致性和灵活性",
            },
            {
                title: "RemixIcon",
                icon: "https://remixicon.com/favicon.ico",
                link: "https://remixicon.com/",
                github: "https://github.com/Remix-Design/RemixIcon",
                description: "Remix Icon 是一组为设计师和开发人员提供的开源中性风格系统符号。与拼凑而成的图标库不同，2500+个图标均经过精心制作，天生就具有可读性、一致性和完美像素的基因",
            },
            {
                title: "ikonate",
                icon: "https://ikonate.com/favicon.png",
                link: "https://ikonate.com/",
                github: "https://github.com/mikolajdobrucki/ikonate",
                description: "Ikonate 是完全可定制和可访问的、经过良好优化的矢量图标。"
            }
        ]
    }
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
                description: "一个帮助开发者成长的社区, 比较推荐, 有很多优质的文章",
            },
            {
                title: "简书",
                icon: "https://www.jianshu.com/favicon.ico",
                link: "https://www.jianshu.com/techareas/frontend",
                description: "简书是一个创作社区，任何人均可以在其上进行创作",
            },
            {
                title: "思否",
                icon: "https://static.segmentfault.com/main_site_next/0a691f0d/touch-icon.png",
                link: "https://segmentfault.com/channel/frontend",
                description: "一个专注于程序员开发者的社区平台，提供开发相关的高质量问答、专栏文章、技术资料",
            },
            {
                title: "V2XE",
                icon: "https://www.v2ex.com/static/img/icon_rayps_64.png",
                link: "https://v2ex.com/",
                description: "V2EX 是一个关于分享和探索的地方",
            },
            {
                title: "CSDN",
                icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
                link: "https://blog.csdn.net/nav/web",
                description: "CSDN 是全球知名中文IT技术交流平台, 中国最大的IT社区",
            }
        ],
    },
    {
        title: "大牛",
        icon: "i-icon-park-outline-good-two",
        children: [
            {
                title: "Anthony Fu",
                icon: "https://antfu.me/favicon.svg",
                link: "https://antfu.me/",
                description: "Anthony Fu，一个狂热的开源爱好者。Vitest、Slidev、VueUse、UnoCSS、Elk、Type Challenges 等的创建者。Vitest、Slidev、VueUse、UnoCSS、Elk、Type Challenges 等的创建者。Vue、Nuxt、Vite 核心团队成员。Vue、Nuxt、Vite 核心团队成员。"
            },
            {
                title: "阮一峰",
                icon: "https://www.ruanyifeng.com/favicon.ico",
                link: "https://www.ruanyifeng.com/blog/",
                description: "阮一峰，一个写技术文章的大牛，文章质量很高，很多人都在学习他的文章",
            },
            {
                title: "张鑫旭",
                icon: "https://www.zhangxinxu.com/favicon.ico",
                link: "https://www.zhangxinxu.com/wordpress/",
                description: "张鑫旭，专注于 CSS, CSS大佬",
            },
            {
                title: "廖雪峰",
                icon: "https://www.liaoxuefeng.com/favicon.ico",
                link: "https://www.liaoxuefeng.com/",
                description: "廖雪峰，全栈工程师。精通Java/Python/Ruby/Scheme/Objective C等技术",
            },
            {
                title: "蚊子",
                icon: "https://www.xiabingbao.com/favicon.ico",
                link: "https://www.xiabingbao.com/",
                description: "蚊子，目前是一名前端开发工程师，主要负责前端规划、框架与架构、前端性能优化。专注前端技术，关注交互体验，擅长web ajax开发。坚信前端工程师的价值是最终能把技术和设计完美结合在一起。用最新的技术方案巧妙地帮助这些设计得以实现。",
            },
            {
                title: "三咲智子 Kevin Deng",
                icon: "https://xlog.sxzz.moe/_next/image?url=https%3A%2F%2Fipfs.xlog.app%2Fipfs%2Fbafkreihcmikli6erxacovfw5xlwnaqv2ye7decbvlkxkljpfioqqsbipqe&w=384&q=75",
                link: "https://xlog.sxzz.moe/",
                description: "三咲智子 Kevin Deng，Vue,vite,vueuse 的核心成员, vue-macros 的作者...",
            },
            {
                title: "若川的博客",
                icon: "https://lxchuan12.gitee.io/favicon.ico",
                link: "https://lxchuan12.gitee.io/",
                description: "若川的博客，源码共读",
            },
            {
                title: "Xpzheng's Blog",
                icon: "https://zhengxiaoping.xyz/logo.svg",
                link: "https://zhengxiaoping.xyz/",
                description: "也是一个大佬"
            }
        ]
    },
    {
        title: "技术周刊",
        icon: "i-ic-twotone-menu-book",
        children: [
            {
                title: "weekly",
                icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
                link: "https://github.com/ascoders/weekly",
                github: "https://github.com/ascoders/weekly",
                description: "前端精读周刊",
            },
            {
                title: "奇舞周刊",
                icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
                link: "https://weekly.75.team/",
                description: "奇舞周刊是奇舞团成员每周分享前端技术资讯的专题",
            },
            {
                title: "中文前端博客",
                icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
                link: "https://github.com/FrankFang/best-chinese-front-end-blogs",
                github: "https://github.com/FrankFang/best-chinese-front-end-blogs",
                description: "收集优质的中文前端博客",
            },
            {
                title: "前端优秀网站",
                icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
                link: "https://github.com/foru17/front-end-collect",
                github: "https://github.com/foru17/front-end-collect",
                description: "前端优秀网站、博客、以及活跃开发者",
            },
            {
                title: "小智",
                icon: "https://avatars.githubusercontent.com/u/35094245?v=4",
                link: "https://github.com/husky-dot/xiaozhi",
                github: "https://github.com/husky-dot/xiaozhi",
                description: "小智，一个前端开发者，每周分享前端技术文章",
            }
        ]
    }
]

// 后台模板推荐列表
export const adminList: NavigationLink[] = [
    {
        title: "Vue3 后台模板",
        icon: "i-ri-vuejs-line",
        children: [
            {
                title: "vue-pure-admin",
                icon: "https://yiming_chang.gitee.io/pure-admin-doc/img/favicon.ico",
                link: "https://yiming_chang.gitee.io/pure-admin-doc/",
                github: "https://github.com/pure-admin/vue-pure-admin",
                description: "🔥 ✨✨ ✨ Vue3+Vite4+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",
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
                github: "https://github.com/vbenjs/vue-vben-admin"
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
        title: "Vue2 后台模板",
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
        icon: "i-arcticons-openai-chatgpt",
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
            },
            {
                title: "Free ChatGPT",
                icon: "https://cc.ai55.cc/favicon.svg",
                link: "https://cc.ai55.cc/",
                github: "https://github.com/xx025/carrot"
            },
            {
                title: "GPT_API_free",
                icon: "https://github.com/chatanywhere/GPT_API_free/raw/main/images/logo.png",
                link: "https://github.com/chatanywhere/GPT_API_free",
                github: "https://github.com/chatanywhere/GPT_API_free"
            }
        ]
    },
    {
        title: "工程化",
        icon: "i-material-symbols:rocket-launch-outline",
        children: [
            {
                title: "eslint",
                icon: "https://eslint.org/favicon.ico",
                link: "https://eslint.org/",
                github: "https://github.com/eslint/eslint"
            },
            {
                title: "prettier",
                icon: "https://prettier.io/icon.png",
                link: "https://prettier.io/",
                github: "https://github.com/prettier/prettier"
            },
            {
                title: "husky",
                icon: "https://pic.imgdb.cn/item/65363d3bc458853aef41d5c9.jpg",
                link: "https://typicode.github.io/husky/",
                github: "https://github.com/typicode/husky"
            },
            {
                title: "lint-staged",
                icon: "https://avatars.githubusercontent.com/u/142687600?s=200&v=4",
                link: "https://github.com/lint-staged/lint-stagedhttps://github.com/lint-staged/lint-staged",
                github: "https://github.com/lint-staged/lint-staged"
            },
            {
                title: "commitlint",
                icon: "https://commitlint.js.org/assets/icon.png",
                link: "https://commitlint.js.org/#/",
                github: "https://github.com/conventional-changelog/commitlint"
            },
            {
                title: "stylelint",
                icon: "https://stylelint.io/img/favicon.ico",
                link: "https://stylelint.io/",
                github: "https://github.com/stylelint/stylelint"
            }
        ]
    },
    {
        title: "其他",
        icon: "i-basil-other-1-outline",
        children: [
            {
                title: "50projects50days",
                icon: "https://avatars.githubusercontent.com/u/5550850?v=4",
                link: "https://50projects50days.com/",
                github: "https://github.com/bradtraversy/50projects50days"
            },
            {
                title: "design-resources-for-developers",
                icon: "https://avatars.githubusercontent.com/u/5550850?v=4",
                link: "https://github.com/bradtraversy/design-resources-for-developers",
                github: "https://github.com/bradtraversy/design-resources-for-developers"
            }
        ]
    }
]

