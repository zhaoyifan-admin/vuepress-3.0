<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '评价',
      prop: 'rate',
      type: 'rate',
      iconClasses: ['el-icon-circle-close', 'el-icon-remove', 'el-icon-circle-plus'],
      voidIconClass: "el-icon-circle-plus-outline"
    }
  ]
})
</script>
