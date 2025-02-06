<template>
  <tvue-data-card :option="option"></tvue-data-card>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  span: 8,
  data: [
    {
      click: (item) => {
        alert(JSON.stringify(item));
      },
      name: 'xxx',
      src: '/images/logo.png',
      text: 'xxxxxxxx',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: (item) => {
        alert(JSON.stringify(item));
      },
      name: 'xxx',
      src: '/images/logo.png',
      text: 'xxxxxx',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: (item) => {
        alert(JSON.stringify(item));
      },
      name: 'xxx',
      src: '/images/logo.png',
      text: 'xxxxx',
      href: 'https://avuejs.com',
      target: '_blank'
    },
  ]
});
</script>
