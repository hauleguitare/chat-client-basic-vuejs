<template>
  <div class="header__message-box-wrapper">
    <div class="user-information-wrapper">
      <Avatar
        src="https://i.picsum.photos/id/856/200/200.jpg?hmac=0i-cnhrzdHoF0g75vH6s_S8RUe5ej3nWdKiqxfYhuTo"
      />
      <span>Dang Thi Thuy Tram</span>
    </div>
    <div class="contact-information-wrapper">
      <button>
        <PhoneIcon />
      </button>
      <button>
        <InformationIcon />
      </button>
      <button>
        <EllipsisIcon />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header__message-box-wrapper {
  @apply w-full h-[var(--maxHeightHeaderChatView)];
  @apply bg-dark-theme-on-surface;
  @apply border-l-2 border-dark-theme-surface;
  @apply flex flex-grow-0 items-center justify-between;
  .user-information-wrapper {
    @apply flex flex-row items-center;
    @apply px-2 py-2;
    span {
      @apply px-2;
    }
  }
  .contact-information-wrapper {
    @apply px-2;
    @apply flex flex-row;
    button {
      @apply px-2;
    }
  }
}
</style>
<script setup lang="ts">
import Avatar from "@/components/Account/Avatar.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import InformationIcon from "@/components/icons/InformationIcon.vue";
import EllipsisIcon from "@/components/icons/EllipsisIcon.vue";
</script>
