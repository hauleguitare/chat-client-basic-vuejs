<template>
  <div class="content__message-box-container">
    <BubbleMessage />
  </div>
</template>
<style lang="scss" scoped>
.content__message-box-container {
  @apply flex-grow;
  @apply h-[calc(100vh_-_(var(--maxHeightHeaderChatView)_+_var(--heightMessagebar)))];
}
</style>
<script setup lang="ts">
import BubbleMessage from "@/components/BubbleMessage/BubbleMessage.vue";
</script>
