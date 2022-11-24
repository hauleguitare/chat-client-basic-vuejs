<script setup lang="ts">
import Avatar from "../Account/Avatar.vue";
import SearchBar from "../SearchBar/SearchBar.vue";
import AccountSideBarWrapper from "./AccountSidebarWrapper.vue";
import AccountInformation from "../Account/AccountInformation.vue";
import { useBreakPoints } from "@/utils/useBreakPoints";

const [width, type, isMobile] = useBreakPoints();
</script>

<template>
  <div class="sidebar-message-wrapper" :class="[width <= 1024 ? 'view-mobile' : 'view-desktop']">
    <AccountSideBarWrapper>
      <Avatar size="50px" />
      <AccountInformation username="Welcome" numberPhone="XXX-XXXX-XXX" />
    </AccountSideBarWrapper>
    <SearchBar />
  </div>
</template>

<style scoped lang="scss">
.sidebar-message-wrapper {
  @apply flex-grow-0 flex-shrink transition-all ease-in duration-150;
  @apply bg-blue-400;
  @apply px-2 py-2;
}

.view-mobile {
  @apply invisible fixed inset-0 opacity-0 overflow-hidden -translate-x-full max-w-[var(--widthSidebar)];
}

.view-desktop {
  @apply lg:block lg:relative lg:translate-x-0 visible;
}
</style>
