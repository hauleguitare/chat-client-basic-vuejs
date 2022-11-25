<template>
  <div class="user-message-wrapper">
    <div v-for="user of props.users" :key="user.username" class="user-message">
      <Avatar :src="user.photoURL" size="46px" />
      <div class="user-message--information">
        <p class="user-message__username">{{ user.username }}</p>
        <p class="user-message__message-review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio maiores itaque impedit
          saepe aliquid ad accusantium quisquam accusamus ullam modi, magni obcaecati dolore
          molestias vitae sed error eos. Voluptate...
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.user-message-wrapper {
  @apply flex flex-col;
  @apply mt-4;
  @apply border-t-2 border-dark-theme-surface;

  .user-message {
    @apply flex flex-row;
    @apply items-center;
    @apply py-4 px-2;

    .user-message--information {
      @apply flex-col flex-grow overflow-hidden;
      @apply px-2;
      @apply dark:text-dark-theme-text-surface;

      .user-message__username {
        @apply text-base truncate;
      }

      .user-message__message-review {
        @apply text-sm truncate dark:text-dark-theme-text-surface/50;
      }
    }
  }
}
</style>
<script setup lang="ts">
import Avatar from "../../Account/Avatar.vue";
import type { IUser } from "./SidebarMessage.vue";

export interface IUserMessageProps extends IUser {}
const props = defineProps<{ users: IUserMessageProps[] }>();
</script>
