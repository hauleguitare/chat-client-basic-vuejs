<template>
  <div
    class="bubble-message-wrapper"
    :class="isReceived ? 'message--received-to' : 'message--sent-to'"
  >
    <div class="bubble-message" :class="isReceived ? 'received-from' : 'sent-to'">
      <span>{{ props.msg }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bubble-message-wrapper {
  @apply px-4 py-4;
  @apply flex;
  .bubble-message {
    @apply inline-block rounded-lg;
    @apply px-2 py-2;
    @apply max-w-[calc(var(--maxWidthMessageBox)_/_2)];
    @apply break-words;
  }
  .received-from {
    @apply dark:bg-dark-theme-on-surface dark:text-dark-theme-text-surface;
  }

  .sent-to {
    @apply dark:bg-dark-theme-primary dark:text-white;
    @apply justify-start;
  }
}
.message--sent-to {
  @apply justify-end;
}
.message--received-to {
  @apply justify-start;
}
</style>
<script setup lang="ts">
import { computed } from "vue";

export interface IBubbleMessageProps {
  msg: string;
  type: "sent" | "receive";
}

const props = defineProps<IBubbleMessageProps>();
const isReceived = computed(() => props.type === "receive");
</script>
