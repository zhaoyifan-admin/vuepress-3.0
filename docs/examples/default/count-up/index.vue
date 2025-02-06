<template>
  <div :style="styleName">
    <p>
      <tvue-count-up :end="value"></tvue-count-up>
    </p>
    <p>
      <tvue-count-up :end="1233.2"
                     :start="1000"></tvue-count-up>
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(15033.2)
const styleName = ref({
  fontSize: '43px',
  fontWeight: 500,
  color: 'red'
})
</script>
