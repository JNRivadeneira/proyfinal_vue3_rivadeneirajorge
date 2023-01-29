<script setup>

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
  <div class="flex flex-row ">
    <a class="cursor-pointer basis-1/3 bg-gray-200 px-2 rounded-tl-lg"
    @click="updateValue(modelValue > 0 ? modelValue - 1 : null)">-
    </a>
    <input
      class="basis-1/3 text-primary"
      :value="modelValue"
      type="number"
      min="0"
      :max="availableItems"
      @input="updateValue($event.target.value)"
      readonly
    />
    <a class="cursor-pointer basis-1/3 bg-gray-200 px-2 rounded-tr-lg"
      @click="updateValue(modelValue + 1)">+
    </a>
    
  </div>
</template>

<style lang="pcss">
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}
button {
  border: 1px solid gray;
}
</style>