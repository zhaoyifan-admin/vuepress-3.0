<template>
  <tvue-data-imgtext :option="option"></tvue-data-imgtext>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  span: 8,
  data: [
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: 'xxx',
      imgsrc: '/images/logo.png',
      headimg: [
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
      ],
      content: 'xxxxx',
      href: 'https://avuejs.com',
      target: '_blank',
      time: '刚刚'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: 'xxx',
      imgsrc: '/images/logo.png',
      headimg: [
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
      ],
      content: 'xxxxx',
      href: 'https://avuejs.com',
      target: '_blank',
      time: '刚刚'
    }, {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: 'xxx',
      imgsrc: '/images/logo.png',
      headimg: [
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
        {
          src: '/images/logo.png',
          name: 'xxx'
        },
      ],
      content: 'xxxxx',
      href: 'https://avuejs.com',
      target: '_blank',
      time: '刚刚'
    }
  ]
})
</script>
