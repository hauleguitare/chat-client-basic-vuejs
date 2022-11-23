<script setup lang="ts">
import SearchBar from "../SearchBar/SearchBar.vue";
</script>

<template>
  <div class="sidebar-message-wrapper">
    <SearchBar />
  </div>
</template>
<style scoped lang="scss">
.sidebar-message-wrapper {
  @apply flex-grow-0 flex-shrink;
  @apply bg-blue-400;
  @apply px-2 py-2;
}
</style>
