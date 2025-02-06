<template>
  <tvue-data-pay :option="option"></tvue-data-pay>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  span: 8,
  data: [
    {
      title: 'xxx',
      src: 'images/vip1.png',
      money: 'xxx',
      dismoney: 'xxx',
      tip: '/永久',
      color: '#808695',
      subtext: '购买',
      click: function (item) {
        alert(JSON.stringify(item));
      },
      list: [
        {
          title: 'xxx',
          check: true,
          tip: `xxxx`,
        },
        {
          title: 'xxx',
          check: true,
        }
      ]
    }, {
      title: 'xxx',
      src: 'images/vip2.png',
      color: '#ffa820',
      money: 'xxx',
      dismoney: '999999',
      tip: '/永久',
      subtext: '购买',
      click: function (item) {
        alert(JSON.stringify(item));
      },
      list: [
        {
          title: 'xxx',
          check: true,
        }
      ]
    }, {
      title: 'xxx',
      src: 'images/vip3.png',
      color: '#ef4868',
      money: 'xxx',
      dismoney: 'xxx',
      tip: '/永久',
      subtext: '购买',
      click: function (item) {
        alert(JSON.stringify(item));
      },
      list: [
        {
          title: 'xxx',
          check: true,
        }
      ]
    }
  ]
})
</script>