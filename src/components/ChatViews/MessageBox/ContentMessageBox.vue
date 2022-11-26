<template>
  <div class="content__message-box-wrapper">
    <BubbleMessage msg="Hello" type="receive" />
    <BubbleMessage
      msg="Welcome to Bundles Chat, how are you today?, Do you wanna chat with me?"
      type="receive"
    />
    <TransitionGroup name="list">
      <BubbleMessage
        v-for="(message, index) of dataMessage"
        :key="index"
        :msg="message"
        type="sent"
      />
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.content__message-box-wrapper {
  @apply flex-grow;
  @apply max-h-[calc(100vh_-_(var(--maxHeightHeaderChatView)_+_var(--heightMessagebar)))];
  @apply overflow-y-auto overscroll-y-contain overflow-x-hidden;
}

.list-enter-active,
.list-leave-active {
  @apply transition duration-500;
}
.list-enter-from,
.list-leave-to {
  @apply translate-y-[30%] opacity-0;
}
</style>
<script setup lang="ts">
import BubbleMessage from "@/components/BubbleMessage/BubbleMessage.vue";

export interface IContentMessageBox {
  dataMessage: Array<string>;
}

const { dataMessage } = defineProps<IContentMessageBox>();
</script>
