import { ref, reactive, computed, onMounted } from "vue";

export function useCountdown(endDate: Date) {
  type TCountdown = {
    displayDays: number | string;
    displayHours: number | string;
    displayMinutes: number | string;
    displaySeconds: number | string;
  };

  const countdown = reactive<TCountdown>({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  });

  const loading = ref<boolean>(false);

  const _second = computed<number>(() => 1000);
  const _minutes = computed<number>(() => _second.value * 60);
  const _hours = computed<number>(() => _minutes.value * 60);
  const _days = computed<number>(() => _hours.value * 24);

  onMounted(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = endDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      const days = Math.floor(distance / _days.value);
      const hours = Math.floor((distance % _days.value) / _hours.value);
      const minutes = Math.floor((distance % _hours.value) / _minutes.value);
      const seconds = Math.floor((distance % _minutes.value) / _second.value);

      countdown.displayDays = formatNumber(days);
      countdown.displayHours = formatNumber(hours);
      countdown.displayMinutes = formatNumber(minutes);
      countdown.displaySeconds = formatNumber(seconds);

      loading.value = true;
    }, 1000);
  });

  return { countdown, loading };
}

function formatNumber(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}
