<template>
  <div class="message-box-wrapper">
    <Header />
    <Content :dataMessage="messages" />
    <MessageBar @on-send-message="handleOnMessage" />
  </div>
</template>
<style scoped lang="scss">
.message-box-wrapper {
  @apply flex flex-col flex-grow flex-shrink-0;
  @apply dark:text-dark-theme-text-background;
  @apply dark:bg-dark-theme-surface;
  @apply min-h-screen;
  @apply lg:max-w-[1224px] max-w-full;
}
</style>
<script setup lang="ts">
import Header from "./HeaderMessageBox.vue";
import Content from "./ContentMessageBox.vue";
import MessageBar from "./MessageBar.vue";
import { ref } from "vue";

const messages = ref<string[]>([]);

const handleOnMessage = (data_message: string) => {
  messages.value.push(data_message);
};
</script>
