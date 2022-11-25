<template>
  <div class="content-message-wrapper">
    <Header />
    <Content />
    <MessageBar />
  </div>
</template>
<style scoped lang="scss">
.content-message-wrapper {
  @apply flex flex-col flex-grow flex-shrink-0;
  @apply dark:text-dark-theme-text-background;
  @apply dark:bg-dark-theme-surface;
  @apply min-h-screen;
  @apply lg:max-w-[1224px] max-w-full;
}
</style>
<script setup lang="ts">
import Header from "./HeaderMessageBox.vue";
import Content from "./ContentMessageBox.vue";
import MessageBar from "./MessageBar.vue";
</script>
