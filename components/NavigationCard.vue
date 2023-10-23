<script lang='ts' setup>
import type {NavigationLink} from '~/pages/navigation/list';

defineProps({
    componentList: {
        type: Array as PropType<NavigationLink[]>,
        required: true
    }
})
</script>

<template>
    <div v-for="comp in componentList" :key="comp.title" class="mb-8 slide-enter-content">
        <h1 class="text-xl border-b mb-4 pb-2">
            <i :class="comp.icon"></i>
            {{ comp.title }}
        </h1>
        <div class="grid grid-cols-6 gap-4">
            <a
                v-for="child in comp.children"
                :key="child.title"
                :href="child.link"
                :title="child.title"
                class="bg-gray:7 p-4 rounded cursor-pointer flex justify-between items-center"
                target="_blank"
            >
                <div class="flex-1 flex items-center w-0">
                    <img :alt="child.title"
                         :src="child.icon"
                         class="mr-2 w-6"
                    />
                    <span class="line-1">{{ child.title }}</span>
                </div>
                <i class="i-material-symbols:expand-circle-right-outline text-gray-4"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>
