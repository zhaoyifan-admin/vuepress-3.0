<template>
  <tvue-chat ref="chat"
             :keylist="keylist"
             @keysend="handleSubmit"
             @keyadd="handleAdd"
             :config="config"
             width="420"
             height="560"
             @submit="handleSubmit"
             v-model="msg"
             :list="list">
    <h1 style="color:red">自定义内容</h1>
    <template #menu>
      <el-tag>自定义内容</el-tag>
    </template>
  </tvue-chat>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const config = ref({
  img: 'https://gitee.com/uploads/61/632261_smallweigit.jpg',
  name: 'avue自助机器人',
  dept: '这是一个神奇的前端框架'
})

const keylist = ref([
  '您好，欢迎光临***品牌旗舰店，很高兴为您服务！/:^_^',
  '您好，/:^_^不好意思让您久等了，您看中这款是吗（截图发给客户看），要什么颜色的呢？',
  '亲，这款是打特价的价格呢，已经是最低价了哦，现在全场三件（根据具体情况而定）包邮哦，您挑多一件了',
  '您好，欢迎光临***品牌旗舰店，很高兴为您服务！/:^_^',
  '您好，/:^_^不好意思让您久等了，您看中这款是吗（截图发给客户看），要什么颜色的呢？',
  '亲，这款是打特价的价格呢，已经是最低价了哦，现在全场三件（根据具体情况而定）包邮哦，您挑多一件了'
])

const msg = ref('这是你想说的话～。～')

const list = ref([{
  date: '2019-07-17 23:25:15',
  text: { text: '1111' },
  mine: true,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547542562834&di=4d469265c6847a8f29393fe1038c64c8&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FhFB4FUPIIlJSIN5vlQwX2OGlW03Oic9SdtXoOAgMmNBYxfpibmxyG6C0rf7Yml1YKQKrLbet5C4ebpmzGOJZ8icEQ%2F640%3Fwx_fmt%3Djpeg',
  name: '我'
}, {
  date: '2019-07-17 23:25:15',
  text: { text: '你说啥我听不懂啊' },
  mine: false,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547542538742&di=33c9b3d1ad6bdfe87eb19e44c8d0da04&imgtype=0&src=http%3A%2F%2Fcyjmw.shengyilu.com%2Fskin%2Findex%2Fimages_four%2Fpic_fi_32.png',
  name: '自助客服'
}])

const handleAdd = (msg) => {
  keylist.value.push(msg)
  ElMessage.success('快捷回复语添加成功')
}

const handleSubmit = (msg) => {
  msg.value = msg || msg.value
  $refs.chat.pushMsg({
    mine: true,
    text: msg.value
  })
  $refs.chat.rootSendMsg(getMsg(msg.value))
  msg.value = ''
}

const getMsg = (msg) => {
  if (msg === 'wel') {
    return {
      text: '您好，我是银行小客服，有什么可以帮助你的?',
      list: [{
        text: '如何申请贷款？',
        ask: '如何贷款'
      }]
    }
  } else if (msg === '如何贷款') {
    return {
      text: `我行提供了如下贷款方式
        图片
        ${$refs.chat.getDetail({
        type: 'img',
        src: 'https://avuejs.com/images/logo-bg.jpg'
      })}
        视频
        ${$refs.chat.getDetail({
        type: 'video',
        src: 'https://www.w3school.com.cn/i/movie.ogg'
      })}
        语音
        ${$refs.chat.getDetail({
        type: 'audio',
        src: 'https://www.w3school.com.cn/i/horse.ogg'
      })}
        文件
        ${$refs.chat.getDetail({
        type: 'file',
        name: 'Avue的官网文件.doc',
        src: 'https://www.w3school.com.cn/i/movie.ogg'
      })}
        地图
        ${$refs.chat.getDetail({
        type: 'map',
        longitude: '116.307852',
        latitude: '40.057031',
        address: '这是一个很长很长这是一个很长很长的地址',
        src: 'https://www.w3school.com.cn/i/movie.ogg'
      })}`,
      list: [{
        text: '1.微信线上申请',
        ask: '微信线上申请'
      }, {
        text: '2.电话申请',
        ask: '电话申请'
      }, {
        text: '3.到网点申请',
        ask: '到网点申请'
      }]
    }
  } else if (msg === '微信线上申请') {
    return '可关注***银行微信公众号，点击我要贷款，身份认证，发起申请。'
  } else if (msg === '电话申请') {
    return '可拨打24小时热线96668或********'
  } else if (msg === '到网点申请') {
    return '可就近选择网点，附网点列表及联系人'
  }
  return { text: '你说啥我听不懂啊' }
}

onMounted(() => {
  handleSubmit('如何贷款')
})
</script>