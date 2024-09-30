<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <main class="text-center">
    <h1 class="text-xl">{{ 'Current Slug: ' + slug }}</h1>
    <NuxtLink to="/" class="underline">To Index</NuxtLink>
  </main>
</template>
