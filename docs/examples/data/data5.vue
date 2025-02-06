<template>
  <tvue-data-display :option="option"></tvue-data-display>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  span: 6,
  data: [
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      count: 100,
      decimals: 2,
      title: '日活跃数',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      count: '3,000',
      title: '月活跃数',
      color: "red",
      fontColor: "#000",
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      count: '20,000',
      title: '年活跃数',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      count: '40,000',
      title: '周活跃数',
      href: 'https://avuejs.com',
      target: '_blank'
    }
  ]
})
</script>

