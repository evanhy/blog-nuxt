<script lang='ts' setup>
import type {NavigationLink} from '~/pages/navigation/list';

defineProps({
    componentList: {
        type: Array as PropType<NavigationLink[]>,
        required: true
    }
})

// 获取github star
const getGithubStar = (link: string) => {
    const github = link.match(/https:\/\/github.com\/(.*)/);
    if (github) {
        const repo = github[1].split('/');
        return `https://img.shields.io/github/stars/${repo[0]}/${repo[1]}?style=social`;
    } else {
        return '';
    }
}

// 跳转 GitHub 仓库
const jumpGithub = (link: string) => {
    window.open(link, '_blank');
}
</script>

<template>
    <div v-for="comp in componentList" :key="comp.title" class="mb-8 slide-enter-content">
        <h1 class="text-xl border-b mb-4 pb-2">
            <i :class="comp.icon"></i>
            {{ comp.title }}
        </h1>
        <div class="grid  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <a
                v-for="child in comp.children"
                :key="child.title"
                :href="child.link"
                :title="child.title"
                class="bg-gray:7 p-4 rounded cursor-pointer flex justify-between items-center shadow hover:(bg-gray-8 text-white)"
                target="_blank"
            >
                <div class="flex-1 flex items-center w-0">
                    <img :alt="child.title"
                         :src="child.icon"
                         class="mr-2 w-6"
                    />
                    <span class="line-1">{{ child.title }}</span>
                </div>
                <img v-if="child.github" :src="getGithubStar(child.github)" alt=""
                     @click.stop.prevent="jumpGithub(child.github)"/>
                <i v-else class="i-material-symbols:expand-circle-right-outline text-gray-4"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>
