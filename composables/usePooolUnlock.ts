export const usePooolUnlock = () => {
  const unlockedSlug = useState('unlockedSlug', () => '')

  function setUnlockedSlug(newValue: string) {
    unlockedSlug.value = newValue
  }

  function isUnlocked(slug: string) {
    return unlockedSlug.value === slug
  }

  const isCurrentPageUnlocked = computed(() => {
    const slug = useRoute().params.slug
    return isUnlocked(slug as string)
  })

  return { unlockedSlug, setUnlockedSlug, isUnlocked, isCurrentPageUnlocked }
}
