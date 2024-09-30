<script setup lang="ts">
const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut pharetra augue. In et euismod libero, et ornare nunc. Suspendisse dapibus neque sit amet augue cursus semper. Integer magna ante, porta ac pretium sed, aliquet eget libero. Pellentesque nec turpis eu nibh tempor scelerisque. Fusce nec ex at lacus lobortis ultrices viverra at sapien. Vestibulum aliquet turpis at erat imperdiet porttitor. Phasellus tincidunt efficitur pharetra. Fusce ut pellentesque augue. Aenean tincidunt laoreet metus vitae semper. In lacus dolor, aliquet ac laoreet vitae, sodales ut odio. Proin a sem vitae libero faucibus finibus vel in velit. Curabitur consectetur enim arcu, scelerisque pellentesque odio posuere ac. Vivamus mattis finibus ex, vitae fermentum lectus mattis a. Phasellus maximus pellentesque erat, non efficitur magna lobortis rhoncus. Vivamus commodo erat sed odio egestas ultricies.
`
</script>

<template>
  <div class="nn-fade overflow-hidden max-h-36 text-nn-lg lg:text-nn-xl">
    {{ content }}
  </div>
</template>

<style lang="postcss" scoped>
.nn-fade {
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent 90%);
  mask-image: linear-gradient(180deg, #000 60%, transparent 90%);
}
</style>
