<template>
  <div class="search-bar-group">
    <input type="text" placeholder="search anything..." />
    <button type="button" @click="$event.preventDefault()">
      <SearchIcon />
    </button>
  </div>
</template>
<style scoped lang="scss">
.search-bar-group {
  @apply flex rounded-full items-center overflow-hidden;
  @apply px-2 py-1;
  @apply dark:bg-stone-600 bg-white dark:text-dark-theme-text-surface text-black;
  input {
    @apply outline-none;
    @apply px-2 py-1;
    @apply bg-transparent;
    @apply flex-grow;
  }
}
</style>

<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
