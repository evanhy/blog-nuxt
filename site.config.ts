export const siteConfig = {
    author: 'huyu',
    title: 'EvanSky - Blog',
    description: 'My blog site.',
    lang: 'zh-CN',
}

export const subNavLinks = [
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Tags',
        path: '/tags',
    },
    {
        title: 'Life',
        path: '/life',
    },
]

export const navLinks = [
    {
        title: 'Home',
        path: '/',
        icon: 'i-icon-park-outline-home',
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: 'i-icon-park-outline-align-text-right-one',
    },
    {
        title: "Search",
        path: "/search",
        icon: "i-icon-park-outline-search"
    },
    {
        title: "Navigation",
        path: "/navigation",
        icon: "i-icon-park-outline-navigation"
    },
    // {
    //   title: 'Projects',
    //   path: '/projects',
    //   icon: 'i-icon-park-outline-blocks-and-arrows',
    // },
    // {
    //   title: 'Tags',
    //   path: '/tags',
    //   icon: 'i-icon-park-outline-tag-one',
    // },
    // {
    //   title: 'Search',
    //   path: '/search',
    //   icon: 'i-icon-park-outline-search',
    // },
    {
        title: 'About',
        path: '/about',
        icon: 'i-icon-park-outline-grinning-face-with-open-mouth',
    },

]

export const socialLinks = [
    {
        title: '掘金',
        path: 'https://juejin.cn/user/3826745248595550',
        icon: 'i-icon-park-outline-crab',
    },
    {
        title: 'Bilibili',
        path: 'https://space.bilibili.com/3850132',
        icon: 'i-simple-icons-bilibili',
    },
    {
        title: 'Twitter',
        path: 'https://twitter.com/Rockchen97',
        icon: 'i-simple-icons-twitter',
    },
    {
        title: 'Github',
        path: 'https://github.com/chansee97',
        icon: 'i-icon-park-outline-github',
    },
]

export const projectList = [
    {
        name: 'Recent Projects',
        content: [
            {
                name: 'Zeal UI',
                desc: 'components store, base on Vue3 and Ts',
                path: 'https://github.com/chansee97/zeal-ui',
            },
        ],
    },
    {
        name: 'Projects',
        content: [
            {
                name: 'Nuxt Blog',
                desc: 'My blog site, base on Nuxt',
                path: 'https://github.com/chansee97/nuxt-blog',
            },
            {
                name: 'Nova Admin',
                desc: 'a complete admin template',
                path: 'https://github.com/chansee97/nova-admin',
            },
            {
                name: 'Nova Admin Nest',
                desc: 'The nest backend for nova admin',
                path: 'https://github.com/chansee97/nove-admin-nest',
            },
        ],
    },
    {
        name: 'Configuration',
        content: [
            {
                name: 'lint-config',
                desc: 'My configuration with eslint, stylelint, commentslint',
                path: 'https://github.com/chansee97/lint-config',
            },
            {
                name: 'dotfiles',
                desc: 'My personal development configuration',
                path: 'https://github.com/chansee97/dotfiles',
            },
        ],
    },
    {
        name: 'Starter',
        content: [
            {
                name: 'Virtuoso',
                desc: 'My simply vue starter',
                path: 'https://github.com/chansee97/virtuoso',
            },
        ],
    },
]
