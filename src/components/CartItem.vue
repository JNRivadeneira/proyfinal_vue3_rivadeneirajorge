<script setup>
import TrashIcon from '../assets/icons/TrashIcon.vue';
import AppCountInput from './AppCountInput.vue';
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
  <tr>
    <td>{{ product.title }}</td>
    <td>
      <AppCountInput :model-value="count" @update:modelValue="$emit('updateCount', $event)" />
    </td>
    <td>$ {{ count * product.price }}</td>
    <td @click="$emit('clear')">
      <TrashIcon />
    </td>
  </tr>
</template>