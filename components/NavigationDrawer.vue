<script lang="ts" setup>

import type {NavigationLink} from "~/pages/navigation/list";
import {getGithubStar} from "~/utils";

const isOpen = ref(false)
const open = () => {
    isOpen.value = true
}
const close = () => {
    isOpen.value = false
}

const target = ref<HTMLElement | null>(null)

onClickOutside(target, () => {
    if (isOpen.value) {
        close()
    }
})

const compInfo = ref<NavigationLink>({})

defineExpose({
    open,
    close,
    compInfo
})

export interface NavigationDrawerProps {
    isOpen: boolean
    compInfo: NavigationLink
    open: () => void
    close: () => void
}
</script>

<template>
    <div v-if="isOpen"
         class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center">
        <div ref="target" class="w-30%  bg-white rounded shadow-lg p-4">
            <div class="flex justify-between items-center border-b pb-2 mb-2">
                <div class="flex-1 flex items-center w-0 text-xl font-bold">
                    <img :alt="compInfo.title"
                         :src="compInfo.icon"
                         class="mr-2 w-6"
                    />
                    <span class="line-1">{{ compInfo.title }}</span>
                </div>
                <div class="i-material-symbols:cancel-outline-rounded text-xl cursor-pointer" @click="isOpen = false">
                    关闭
                </div>
            </div>
            <div class="">
                <div class="flex justify-between items-center text-sm">
                    <a v-if="compInfo.github" :href="compInfo.github" class="text-blue-4" target="_blank">
                        <i class="i-mdi:github text-black"></i>
                        GitHub仓库地址
                    </a>
                    <a v-if="compInfo.link" :href="compInfo.link" class="text-blue-4" target="_blank">
                        <i class="i-material-symbols:menu-book-outline text-black"></i>
                        文档地址
                    </a>
                    <!--                    <a :href="compInfo.github" class="text-blue-4" target="_blank">-->
                    <!--                        <i class="i-mdi:github text-black"></i>-->
                    <!--                        预览地址-->
                    <!--                    </a>-->
                    <div v-if="compInfo.github && getGithubStar(compInfo.github)">
                        <img :alt="compInfo.title" :src="getGithubStar(compInfo.github)" class="w-20"/>
                    </div>
                </div>
                <div class="max-h-80 overflow-y-auto">
                    <div v-if="compInfo.description">
                        <div class="text-gray-4 mt-2 ">
                            {{ compInfo.description }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>