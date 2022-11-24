<script setup lang="ts">
import Avatar from "../Account/Avatar.vue";
import AccountInformation from "../Account/AccountInformation.vue";
</script>
<template>
  <div class="account-sidebar-wrapper">
    <Avatar size="50px" />
    <AccountInformation username="Welcome" numberPhone="XXX-XXXX-XXX" />
  </div>
</template>
<style lang="scss" scoped>
.account-sidebar-wrapper {
  @apply flex flex-row;
  @apply px-2 py-2;
}
</style>
