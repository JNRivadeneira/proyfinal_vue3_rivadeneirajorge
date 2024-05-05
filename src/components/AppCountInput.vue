<script setup>
// import ChevronDoubleDownIcon from '../assets/icons/ChevronDoubleDownIcon.vue';
// import ChevronDoubleUpIcon from '../assets/icons/ChevronDoubleUpIcon.vue';
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'

defineProps({
  modelValue: { type: [Number, String], default: 0 },
  availableItems: Number,
});
const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
};
</script>

<template>
  <div class="flex flex-row">
    <a
      class="flex justify-center cursor-pointer basis-1/3 bg-primary hover:bg-secondary text-secondary hover:text-primary px-2 rounded-tl-lg"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    ><ChevronDoubleDownIcon class="h-7 w-7" />
    </a>
    <input
      class="flex basis-1/3 text-primary text-center"
      :value="modelValue"
      type="number"
      min="0"
      :max="availableItems"
      readonly
      @input="updateValue($event.target.value)"
    >
    <a
      class="flex justify-center cursor-pointer basis-1/3 bg-primary hover:bg-secondary text-secondary hover:text-primary px-2 rounded-tr-lg"
      @click="updateValue(modelValue + 1)"
    ><ChevronDoubleUpIcon class="h-7 w-7" />
    </a>
  </div>
</template>

<style lang="pcss">
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-primary w-7 ;
}
button {
  border: 1px solid gray;
}
</style>