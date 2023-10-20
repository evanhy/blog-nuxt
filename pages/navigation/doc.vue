<script lang="ts" setup>
// 在线获取图标 https://favicongrabber.com/

// 组件库导航
const componentList = ref([
    {
        title: "UI组件库",
        icon: "i-material-symbols:developer-guide-outline",
        children: [
            {
                title: "Element Plus",
                icon: "https://element-plus.org/images/element-plus-logo-small.svg",
                link: "https://element-plus.org/zh-CN/",
            },
            {
                title: "Ant Design Vue",
                icon: "https://aliyuncdn.antdv.com/favicon.ico",
                link: "https://2x.antdv.com/components/overview-cn/",
            },
            {
                title: "vant",
                icon: "https://img.yzcdn.cn/vant/logo.png",
                link: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
            }
        ]
    },
    {
        title: "工具库",
        icon: "i-ant-design:tool-outlined",
        children: [
            {
                title: "lodash",
                icon: "https://lodash.com/assets/img/lodash.svg",
                link: "https://lodash.com/",
            }
        ]
    },
    {
        title: "可视化图表",
        icon: "i-material-symbols:pie-chart",
        children: [
            {
                title: "ECharts",
                icon: "https://echarts.apache.org/favicon.ico",
                link: "https://echarts.apache.org/zh/index.html",
            }
        ]
    },
]);
</script>

<template>
    <navigation-links/>
    <div v-for="comp in componentList" :key="comp.title" class="mb-8 slide-enter-content">
        <h1 class="text-xl border-b mb-4 pb-2">
            <i :class="comp.icon"></i>
            {{ comp.title }}
        </h1>
        <div class="grid grid-cols-6 gap-4">
            <div v-for="child in comp.children" :key="child.title" :title="child.title"
                 class="bg-gray:7 p-4 rounded cursor-pointer flex justify-between items-center"
            >
                <div class="flex-1 flex items-center w-0">
                    <img :alt="child.title"
                         :src="child.icon"
                         class="mr-2 w-6"
                    />
                    <span class="line-1">{{ child.title }}</span>
                </div>
                <i class="i-material-symbols:expand-circle-right-outline text-gray-4"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>