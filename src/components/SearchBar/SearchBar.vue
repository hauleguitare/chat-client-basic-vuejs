<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
<template>
  <div class="search-bar-group dark-theme">
    <input type="text" placeholder="search anything..." />
    <SearchIcon />
  </div>
</template>
<style scoped lang="scss">
.search-bar-group {
  @apply flex rounded-full items-center overflow-hidden;
  @apply px-2 py-1;
  input {
    @apply outline-none;
    @apply px-2 py-1;
    @apply bg-transparent;
  }
}
.dark-theme {
  @apply bg-black;
  @apply text-white;
}

.light-theme {
  @apply bg-white;
  @apply text-black;
}
</style>
