<template>
    <div class="prose dark:prose-invert max-w-none"><h2>👋 Welcome</h2>
        <h3>我</h3>
        <p>我是赫子子，一名前端码农，以前端为主要开发领域，偶尔在空闲时间开发一些小玩意，对<code>CLI</code>工具开发感兴趣
        </p>
        <p>喜欢音乐，喜欢摄影but业余，也会偶尔打打游戏，一个人的生活简单且自由</p>
        <p>公众号【前端仓库】，周刊会定期同步，欢迎关注订阅，第一时间获取每周前端资讯</p>

        <p>也可以在这些地方找到我：</p>
        <ul>
            <li>✨ <a href="https://segmentfault.com/u/hezizi"
                     target="_blank"
            >segmentfault</a></li>
            <li>🚀 <a href="https://juejin.cn/user/395479915963752/posts" target="_blank">juejin</a></li>
        </ul>
        <h3>网站</h3>
        <p>首页<code>prompt</code>样式参考<code>starship</code>，相较于<code>ohmyzsh
            themes</code>提供的主题，我更喜欢<code>starship</code>的风格，整个网站基于<code>Next.js</code>搭建</p>
        <p>主要用到以下技术栈：</p>
        <ul>
            <li><code>nuxt3</code> 作为基础框架</li>
            <li><code>vue</code></li>
            <li><code>typescript</code></li>
            <li><code>react-syntax-highlighter</code> 代码语法高亮</li>
            <li><code>tailwindcss</code> 整站样式</li>
            <li><code>@tailwindcss/typography</code> 文章排版</li>
            <li><code>@next/mdx</code> 解析mdx文件</li>
            <li><code>remark-frontmatter</code> 处理mdx中的yaml避免被解析成标签</li>
            <li><code>gray-matter</code> 解析提取yaml和markdown</li>
            <li><code>next-theme</code> 主题切换</li>
            <li><code>eslint</code> 代码分析检查</li>
            <li><code>prettier</code> 代码格式化</li>
            <li><code>husky</code> 提供git hooks交互</li>
            <li><code>commitlint</code> 规范git commit message</li>
            <li><code>commitizen</code> 提供git commit流程</li>
            <li><code>cz-git</code> commitizen适配器</li>
            <li><code>release-it</code> 发布版本并生成CHANGELOG</li>
        </ul>
    </div>
</template>
