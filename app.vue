<script setup lang="ts">
import PooolProvider from './components/PooolProvider.vue'
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <PooolProvider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PooolProvider>
  </div>
</template>
