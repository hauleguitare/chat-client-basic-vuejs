<script setup lang="ts">
import ChatViewWrapper from "@/components/ChatViews/ChatViewWrapper.vue";
import MessageBox from "@/components/ChatViews/MessageBox/MessageBox.vue";
import SidebarMessage from "@/components/ChatViews/Sidebar/SidebarMessage.vue";
</script>

<template>
  <ChatViewWrapper>
    <SidebarMessage />
    <MessageBox />
  </ChatViewWrapper>
</template>

<style scoped></style>
