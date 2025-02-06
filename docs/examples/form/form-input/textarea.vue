<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script>
export default {
  data () {
    return {
      option: {
        column: [
          {
            label: '文本域',
            prop: 'input',
            type: 'textarea',
            minRows: 3,
            maxRows: 5
          },
          {
            label: '文本域',
            prop: 'input1',
            type: 'textarea',
            rows: 5
          }
        ]
      }
    }
  }
}
</script>