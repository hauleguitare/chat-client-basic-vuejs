<template>
  <div class="app-surface">
    <!-- <PageView /> -->
    <ChatView />
  </div>
</template>

<style scoped lang="scss">
.app-surface {
  @apply dark:bg-dark-theme-background;
}
</style>

<script setup lang="ts">
import PageView from "./views/index.vue";
import ChatView from "./views/ChatView.vue";
</script>
