<template>
  <tvue-data-icons :option="option"></tvue-data-icons>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  span: 4,
  data: [
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日注册',
      count: 12678,
      decimals: 2,
      icon: 'el-icon-tickets',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日登录',
      count: 22139,
      icon: 'el-icon-edit',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日订阅',
      count: 35623,
      icon: 'el-icon-delete',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日评论',
      count: 16826,
      icon: 'el-icon-message',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日评论',
      count: 16826,
      icon: 'el-icon-message',
      href: 'https://avuejs.com',
      target: '_blank'
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: '今日评论',
      count: 16826,
      icon: 'el-icon-message',
      href: 'https://avuejs.com',
      target: '_blank'
    }
  ]
})
</script>