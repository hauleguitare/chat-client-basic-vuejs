<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ViewEnum } from "../enums/views.enum";
</script>
<template>
  <RouterLink :to="ViewEnum.HOME"> homepage </RouterLink>
  <RouterLink :to="ViewEnum.ABOUT"> about </RouterLink>
  <RouterView />
</template>
