<template>
  <tvue-form :option="option"
             v-model="form">
  </tvue-form>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      option: {
        column: [
          {
            label: '头像',
            prop: 'imgUrl3',
            type: 'upload',
            listType: 'picture-img',
            span: 24,
            propsHttp: {
              res: 'data'
            },
            data: {
              a: 1
            },
            headers: {
              b: 1
            },
            action: 'https://api.avuejs.com/imgupload'
          }
        ]
      }
    }
  }
}
</script>