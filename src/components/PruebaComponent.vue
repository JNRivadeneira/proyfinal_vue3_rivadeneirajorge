<template>
  <input v-model="value" placeholder="Type something" />
  <span>{{ errorMessage }}</span>

  <ul class="divide-y divide-gray-200">
    <li v-for="person in people" :key="person.email" class="py-4 flex">
      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-violet-300">{{ person.name }}</p>
        <p class="text-sm text-sky-500">{{ person.email }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useField } from 'vee-validate';

function validateField(value) {
  if (!value) {
    return 'this field is required';
  }

  if (value.length < 8) {
    return 'this field must contain at least 8 characters';
  }

  return true;
}

const { value, errorMessage } = useField('fullName', validateField);

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
</script>

<style>
input,
span {
  display: block;
  font-size: 16px;
}
</style>
