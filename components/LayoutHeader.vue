<script lang="ts" setup>
import { navLinks } from "~/site.config"
import SvgTitleVue from "./SvgTitle.vue"
</script>

<template>
  <header class="flex justify-between items-center mb-20">
    <a class="text-2xl font-hand op-60 hidden sm:block" href="/" title="EvanSky">
      <SvgTitleVue></SvgTitleVue>
    </a>
    <nav class="flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
      <nuxt-link v-for="item in navLinks" :key="item.path" :to="item.path" class="py-3 px-5 transition-transform duration-200 hover:scale-125">
        <span class="hidden sm:block">{{ item.title }}</span>
        <span :class="item.icon" class="sm:hidden"></span>
      </nuxt-link>
    </nav>
    <div class="flex items-center">
      <share-block></share-block>
      <dark-mode class="hidden sm:block"></dark-mode>
    </div>
  </header>
</template>
