// EventBus.js
import { reactive, readonly } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';

const listeners = new Set();

export const useEventBus = () => {
  const emit = (eventName, ...args) => {
    for (const listener of listeners) {
      listener(eventName, ...args);
    }
  };

  const on = (listener) => {
    listeners.add(listener);
  };

  const off = (listener) => {
    listeners.delete(listener);
  };

  onMounted(() => {
    // Cleanup listeners when component is unmounted
    onBeforeUnmount(() => {
      listeners.clear();
    });
  });

  return {
    emit,
    on,
    off,
  };
};
const state = reactive({
  showForm: false,
});

const methods = {
  setShowForm(value) {
    state.showForm = value;
  },
};

export default { state: readonly(state), methods };
