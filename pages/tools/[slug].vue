<script setup lang="ts">
import { Paywall } from '@poool/vue-access'
import ContentLocked from '~/components/ContentLocked.vue'
import ContentUnlocked from '~/components/ContentUnlocked.vue'

const route = useRoute()
const slug = route.params.slug

const { isCurrentPageUnlocked } = usePooolUnlock()
</script>

<template>
  <main class="text-center">
    <h1 class="text-xl">{{ 'Current Slug: ' + slug }}</h1>
    <NuxtLink to="/" class="underline">To Index</NuxtLink>
    <div class="text-left">
      <div v-if="!isCurrentPageUnlocked">
        <ContentLocked />
        <Paywall page-type="premium" />
      </div>
      <ContentUnlocked v-else />
    </div>
  </main>
</template>
