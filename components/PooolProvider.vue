<script setup lang="ts">
import { AccessProvider } from '@poool/vue-access'

const { POOOL_APP_ID } = useRuntimeConfig().public
const { setUnlockedSlug } = usePooolUnlock()
const route = useRoute()
const slug = route.params.slug

const customSegment = computed(() => {
  const utmSource = useRouter().currentRoute.value.query['utm_source']

  if (utmSource && utmSource === 'LinkedIn') return 'LinkedIn'
  if (utmSource && utmSource === 'Instagram') return 'Instagram'
  if (utmSource && utmSource === 'NFNA') return 'NFNA'

  return undefined
})

const release = () => {
  setUnlockedSlug(slug as string)
}

const lock = () => {
  setUnlockedSlug('')
}
</script>

<template>
  <AccessProvider
    :appId="POOOL_APP_ID"
    :config="{
      debug: true,
      cookies_enabled: true,
      // cookies_domain: '.9spaces.de',
      mode: 'custom',
      default_widget: 'invisible',
      custom_segment: customSegment
    }"
    :events="{ release, lock }"
    :withAudit="true"
  >
    <slot />
  </AccessProvider>
</template>
