<script lang="ts" setup>
import {useLayout} from "~/hooks/useLayout";
import {useRoute} from "vue-router";

const {layoutName} = useLayout()

const route = useRoute()
// 监听路由变化, 如果包含/navigation, 则使用 default 布局, 否则使用 blog 布局
watch(() => route.path, (path) => {
    if (path.includes('/navigation')) {
        layoutName.value = 'default'
    } else {
        layoutName.value = 'blog'
    }
}, {immediate: true})

</script>

<template>
    <NuxtLayout :name="layoutName">
        <nuxt-page></nuxt-page>
    </NuxtLayout>
</template>
