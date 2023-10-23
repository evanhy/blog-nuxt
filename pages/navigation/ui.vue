<script lang="ts" setup>
import { componentList } from "~/pages/navigation/list"
</script>

<template>
  <navigation-links />
  <navigation-card :componentList="componentList" />
</template>

<style scoped></style>
