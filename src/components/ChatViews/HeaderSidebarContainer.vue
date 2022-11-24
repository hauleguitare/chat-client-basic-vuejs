<template>
  <div class="header__sidebar-wrapper">
    <Avatar size="50px" />
    <AccountInformation username="Hau Le Trung" numberPhone="XXX-XXXX-XXX" />
  </div>
</template>
<style lang="scss" scoped>
.header__sidebar-wrapper {
  @apply flex flex-row;
  @apply px-2 py-2;
  @apply border-r-2 border-dark-theme-on-surface;
  @apply dark:text-dark-theme-text-surface text-white;
  @apply max-h-[var(--maxHeightHeaderChatView)];
}
</style>
<script setup lang="ts">
import Avatar from "../Account/Avatar.vue";
import AccountInformation from "../Account/AccountInformation.vue";
</script>
