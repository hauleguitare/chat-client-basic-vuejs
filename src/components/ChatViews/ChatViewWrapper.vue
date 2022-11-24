<script setup lang="ts">
import { useBreakPoints } from "@/utils/useBreakPoints";
</script>

<template>
  <div id="chat-view-wrapper">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
#chat-view-wrapper {
  --widthSidebar: 19.5rem;
  @apply flex container;
}
</style>
