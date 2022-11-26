<template>
  <div class="message-bar_message-box-wrapper">
    <div class="message-bar--input-wrapper">
      <input
        ref="inputRef"
        placeholder="Send message..."
        @keypress.enter="onMessage"
        v-model="messageInput"
      />
    </div>
    <button type="button" class="sender-icon--button">
      <SenderIcon class="sender-icon" />
    </button>
  </div>
</template>
<style scoped lang="scss">
.message-bar_message-box-wrapper {
  @apply flex-grow-0;
  @apply flex flex-row;
  @apply w-full h-[var(--heightMessagebar)];
  @apply dark:bg-dark-theme-on-surface;
  @apply border-l-2 dark:border-dark-theme-surface;
  .message-bar--input-wrapper {
    @apply mx-4 my-2;
    @apply bg-stone-600;
    @apply overflow-hidden rounded-full;
    @apply flex-grow;
    input {
      @apply bg-transparent outline-none;
      @apply w-full h-full;
      @apply py-2 px-4;
      @apply text-sm;
    }
  }
}
.sender-icon--button {
  @apply px-1 py-1;
}
.sender-icon {
  @apply fill-dark-theme-primary;
  @apply stroke-dark-theme-background stroke-1;
  @apply w-8 h-8;
  @apply inline-block;
}
</style>
<script setup lang="ts">
import SenderIcon from "@/components/icons/SenderIcon.vue";
import { ref, onMounted } from "vue";
import { EventEnum } from "@/enums/event.enum";

interface InputEvent extends Event {
  target: HTMLInputElement;
}
//declare type for state reactive
type IMessageInput = typeof inputRef.value;

// declare emit
const emit = defineEmits([EventEnum.ON_SEND_MESSAGE]);

// Ref, state
const inputRef = ref();
const messageInput = ref("");

//handle event
const onMessage = () => {
  if (!messageInput.value) {
    return;
  }
  emit(EventEnum.ON_SEND_MESSAGE, messageInput.value);
  messageInput.value = "";
};

onMounted(() => inputRef.value.focus());
</script>
