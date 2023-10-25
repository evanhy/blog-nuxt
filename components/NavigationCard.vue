<script lang='ts' setup>
import type {NavigationLink} from '~/pages/navigation/list';
import type {NavigationDrawerProps} from "~/components/NavigationDrawer.vue";
import NavigationDrawer from "~/components/NavigationDrawer.vue";
import {getGithubStar} from "~/utils";

defineProps({
    componentList: {
        type: Array as PropType<NavigationLink[]>,
        required: true
    }
})

// 跳转 链接
const jumpLink = (link: string) => {
    window.open(link, '_blank');
}

// 导航抽屉
const navigationDrawer = ref<NavigationDrawerProps>(null);

// 打开抽屉
const openDrawer = (child: NavigationLink) => {
    navigationDrawer.value.open();
    navigationDrawer.value.compInfo = child;
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
                :title="child.title"
                class="bg-gray:7 p-4 rounded cursor-pointer flex justify-between items-center shadow hover:(bg-gray-8 text-white)"
                href="#"
                target="_blank"
                @click.stop.prevent="openDrawer(child)"
            >
                <div class="flex-1 flex items-center w-0">
                    <img :alt="child.title"
                         :src="child.icon"
                         class="mr-2 w-6"
                    />
                    <span class="line-1">{{ child.title }}</span>
                </div>
                <img v-if="child.github" :src="getGithubStar(child.github)" alt=""
                     @click.stop.prevent="jumpLink(child.github)"/>
                <i v-else class="i-material-symbols:expand-circle-right-outline text-gray-4"
                   @click.stop.prevent="child.link && jumpLink(child.link)"></i>
            </a>
        </div>
    </div>
    <navigation-drawer ref="navigationDrawer"/>
</template>

<style scoped>

</style>
