// EventBus.js
import { reactive, readonly } from 'vue';

const state = reactive({
  showForm: false,
});

const methods = {
  setShowForm(value) {
    state.showForm = value;
  },
};

export default { state: readonly(state), methods };
