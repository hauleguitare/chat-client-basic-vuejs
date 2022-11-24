<template>
  <div class="account-information-box">
    <p>{{ props.username }}</p>
    <p>{{ props.numberPhone }}</p>
  </div>
</template>
<script setup lang="ts">
export interface IAccountInformationProps {
  username: string;
  numberPhone: string;
}
const props = withDefaults(defineProps<IAccountInformationProps>(), {
  username: "",
  numberPhone: "XXX-XXXX-XXX",
});
</script>
<style lang="scss" scoped>
.account-information-box {
  @apply text-base;
  @apply font-mono;
  @apply px-2 flex-grow;
}
</style>
