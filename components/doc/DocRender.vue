<script lang="ts" setup>
const props = defineProps(['article'])
console.log(props.article)
</script>

<template>
    <DocTitle :article="props.article"/>
    <ContentRenderer :value="props.article"/>
    <doc-footer/>
</template>
