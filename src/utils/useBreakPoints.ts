import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
export function useBreakPoints() {
  let windowsWidth = ref<number>(window.innerWidth);

  // Callback when width change
  const onWidthChange = () => (windowsWidth.value = window.innerWidth);

  // Hooks Life-cycle in Vue
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => calcWidthSize(windowsWidth.value));
  const width = computed(() => windowsWidth.value);
  const isMobile = computed(() => windowsWidth.value <= 640 && windowsWidth.value > 319);
  return [width, type, isMobile] as const;
}

function calcWidthSize(width_size: number) {
  if (width_size >= 640 && width_size < 768) return "sm";
  else if (width_size >= 768 && width_size < 1024) return "md";
  else if (width_size >= 1024 && width_size < 1280) return "lg";
  else if (width_size >= 1280 && width_size < 1536) return "xl";
  else if (width_size >= 1536) return "2xl";
  else {
    return "xs";
  }
}
