import { ref, onMounted, onBeforeUnmount } from "vue";
import debounce from "lodash/debounce";

export function useDebouncedButton(
  target: any,
  event: string,
  delay: number = 100,
  callback: any
) {
  const handleDebouncedScroll = ref<any>(null);

  onMounted(() => {
    handleDebouncedScroll.value = debounce(callback, delay);
    target.addEventListener(event, handleDebouncedScroll);
  });
  onBeforeUnmount(() =>
    target.removeEventListener(event, handleDebouncedScroll)
  );
}
