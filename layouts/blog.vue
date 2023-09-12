<template>
    <section class="min-h-screen mx-auto max-w-5xl pt-12 pb-8 px-8">
        <header class="flex justify-between items-center mb-20">
            <a class="text-xl" href="/">EvanSky</a>
            <nav class="flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
                <a class="py-3 px-5 transition-transform duration-200 hover:scale-125"
                   href="/">
                    Home
                </a>
                <a class="py-3 px-5 transition-transform duration-200 hover:scale-125"
                   href="/posts">
                    Posts
                </a>
                <a class="py-3 px-5 transition-transform duration-200 hover:scale-125"
                   href="/about">
                    About
                </a>
            </nav>
            <div class="flex justify-between w-[70px] border-2 border-dotted rounded-full py-1 px-2">
                <span class="i-material-symbols:dark-mode cursor-pointer text-xl"></span>
                <span class="i-material-symbols:wb-sunny-outline cursor-pointer text-xl"></span>
            </div>
        </header>
        <main class="flex-1">
            <slot></slot>
        </main>
        <footer class="text-sm mt-20 flex items-center text-gray-500 dark:text-slate-400">
            <div class="flex"><p class="mr-3">Yucihent ©2023-present</p>
                <p>Created by yucihent</p></div>
            <a class="ml-3" href="https://github.com/pan52yu" rel="noopener noreferrer" target="_blank">
                <i class="i-mdi:github text-xl text-gray-500"></i>
            </a>
        </footer>
    </section>
</template>
<script lang="ts" setup>

</script>

<style>
body {
    background-color: #f7fafc;
    color: #1a202c;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans SC', sans-serif;
}
</style>