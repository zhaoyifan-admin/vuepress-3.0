<template>
  <tvue-data-panel :option="option"></tvue-data-panel>
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
      title: 'New Visits',
      count: '102,400',
      icon: 'el-icon-message',
      color: '#00a7d0',
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: 'Messages',
      count: '81,212',
      icon: 'el-icon-edit',
      color: 'rgb(27, 201, 142)',
    },
    {
      click: function (item) {
        alert(JSON.stringify(item));
      },
      title: 'Purchases',
      count: '9,280',
      icon: 'el-icon-delete',
      color: 'rgb(230, 71, 88)',
    }
  ]
})
</script>