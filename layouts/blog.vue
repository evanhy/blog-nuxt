<script lang="ts" setup>
</script>


<template>
    <section class="min-h-screen mx-auto max-w-65ch 2xl:max-w-85ch pt-12 pb-8 px-8">
        <layout-header/>
        <main class="flex-1">
            <slot></slot>
        </main>
        <layout-footer/>
    </section>
</template>