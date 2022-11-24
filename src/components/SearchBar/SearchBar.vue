<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
<template>
  <div class="search-bar-group light-theme">
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
  input {
    @apply outline-none;
    @apply px-2 py-1;
    @apply bg-transparent;
    @apply flex-grow;
  }
}
.dark-theme {
  @apply bg-stone-700;
  @apply text-white/80;
}

.light-theme {
  @apply bg-white;
  @apply text-black;
}
</style>
