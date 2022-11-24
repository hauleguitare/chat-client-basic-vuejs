<script setup lang="ts">
import AvatarGuest from "@/assets/avatar_guest.jpeg";
export interface IAvatarProps {
  size?: string | number;
  src?: string;
}
const props = withDefaults(defineProps<IAvatarProps>(), { size: "32px", src: AvatarGuest });
</script>

<template>
  <div class="box-avatar-wrapper" :style="{ width: props.size, height: props.size }">
    <img :src="props.src" class="avatar-image" />
  </div>
</template>

<style scoped lang="scss">
.box-avatar-wrapper {
  @apply overflow-hidden inline-block rounded-full flex-shrink-0;
  .avatar-image {
    @apply w-full h-full object-cover;
  }
}
</style>
