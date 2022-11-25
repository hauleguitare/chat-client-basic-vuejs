<template>
  <div id="chat-view-wrapper">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
#chat-view-wrapper {
  --widthSidebar: 19.5rem;
  --maxHeightHeaderChatView: 66px;
  --heightMessagebar: 55px;
  @apply flex container;
}
</style>
