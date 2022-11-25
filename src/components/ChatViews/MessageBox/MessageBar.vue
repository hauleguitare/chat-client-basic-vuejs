<template>
  <div class="message-bar">Message bar</div>
</template>
<style scoped lang="scss">
.message-bar {
  @apply flex-grow-0;
  @apply w-full h-[var(--heightMessagebar)];
  @apply dark:bg-dark-theme-on-surface;
  @apply border-l-2 dark:border-dark-theme-surface;
}
</style>
<script setup lang="ts"></script>
