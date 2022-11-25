<template>
  <div class="content__message-box-container">
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="5" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage msg="Hi" type="sent" />
    <BubbleMessage msg="How are you" type="sent" />
  </div>
</template>
<style lang="scss" scoped>
.content__message-box-container {
  @apply flex-grow;
  @apply max-h-[calc(100vh_-_(var(--maxHeightHeaderChatView)_+_var(--heightMessagebar)))];
  @apply overflow-y-auto overscroll-y-contain overflow-x-hidden;
}
</style>
<script setup lang="ts">
import BubbleMessage from "@/components/BubbleMessage/BubbleMessage.vue";
</script>
