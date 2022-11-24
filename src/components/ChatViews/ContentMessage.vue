<template>
  <div class="content-message-wrapper">
    <HeaderContentContainer />
  </div>
</template>
<style scoped lang="scss">
.content-message-wrapper {
  @apply flex-grow flex-shrink-0;
  @apply dark:text-dark-theme-text-background;
  @apply dark:bg-dark-theme-background;
}
</style>
<script setup lang="ts">
import HeaderContentContainer from "./HeaderContentContainer.vue";
</script>
