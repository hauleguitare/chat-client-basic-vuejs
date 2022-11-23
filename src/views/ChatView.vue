<script setup lang="ts">
import SidebarMessage from "@/components/ChatViews/SidebarMessage.vue";
import ChatViewWrapper from "@/components/ChatViews/ChatViewWrapper.vue";
import ContentMessage from "@/components/ChatViews/ContentMessage.vue";
</script>

<template>
  <ChatViewWrapper>
    <SidebarMessage />
    <ContentMessage />
  </ChatViewWrapper>
</template>
