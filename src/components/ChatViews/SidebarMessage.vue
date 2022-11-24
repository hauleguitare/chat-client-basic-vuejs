<script setup lang="ts">
export interface IUser {
  photoURL: string;
  username: string;
}

import SearchBar from "../SearchBar/SearchBar.vue";
import AccountSideBarContainer from "./AccountSidebarContainer.vue";
import { useBreakPoints } from "@/utils/useBreakPoints";
import UserMessageContainer from "./UserMessageContainer.vue";

const [width, type, isMobile] = useBreakPoints();

const users: IUser[] = [
  {
    photoURL:
      "https://i.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    username: "user1",
  },
  {
    photoURL:
      "https://i.picsum.photos/id/44/200/200.jpg?hmac=W5KcqhapHjBgEIHGQpQnX6o9jdOXQEVCKEdGIohjisY",
    username: "user2",
  },
  {
    photoURL:
      "https://i.picsum.photos/id/852/200/200.jpg?hmac=4UHLpiS9j3YDnvq-w-MqnP5-ymiyvMs6BNV5ukoTRrI",
    username: "user3",
  },
];
</script>

<template>
  <div class="sidebar-message-wrapper" :class="[width <= 1024 ? 'view-mobile' : 'view-desktop']">
    <AccountSideBarContainer />
    <SearchBar />
    <UserMessageContainer :users="users" />
  </div>
</template>

<style scoped lang="scss">
.sidebar-message-wrapper {
  @apply flex-grow-0 flex-shrink transition-all ease-in duration-150 max-w-[var(--widthSidebar)];
  @apply bg-blue-400;
  @apply px-2 py-2;
}

.view-mobile {
  @apply invisible fixed inset-0 opacity-0 overflow-hidden -translate-x-full;
}

.view-desktop {
  @apply lg:block lg:relative lg:translate-x-0 visible;
}
</style>
