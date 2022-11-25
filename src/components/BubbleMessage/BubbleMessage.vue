<template>
  <div class="bubble-message-wrapper message--received-to">
    <div class="bubble-message received-from">
      <p>Hello everyone</p>
    </div>
  </div>
  <div class="bubble-message-wrapper message--sent-to">
    <div class="bubble-message sent-to">
      <p>Hi there, how are you?</p>
    </div>
  </div>
  <div class="bubble-message-wrapper message--sent-to">
    <div class="bubble-message sent-to">
      <p>Are you good?</p>
    </div>
  </div>

  <div class="bubble-message-wrapper message--received-to">
    <div class="bubble-message received-from">
      <p>I am so impressive !!!</p>
    </div>
  </div>
  <div class="bubble-message-wrapper message--received-to">
    <div class="bubble-message received-from">
      <p>Now i am learning, coding chat application with VueJS</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bubble-message-wrapper {
  @apply px-4 py-4;
  @apply flex;
  .bubble-message {
    @apply inline-flex rounded-lg;
    @apply px-2 py-2;
  }
  .received-from {
    @apply dark:bg-dark-theme-on-surface dark:text-dark-theme-text-surface;
  }

  .sent-to {
    @apply dark:bg-dark-theme-primary dark:text-white;
    @apply justify-end;
  }
}
.message--sent-to {
  @apply justify-end;
}
.message--received-to {
  @apply justify-start;
}
</style>
<script setup lang="ts"></script>
