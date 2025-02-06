<template>
  <h2>普通用户登录</h2>
  {{form}}
  <tvue-login v-model="form"
              :option="option"
              @submit="submit">
  </tvue-login>
  <hr />
  <h2>图片验证码登录</h2>
  <tvue-login :option="option1"
              @refresh="refresh"
              :codesrc="codesrc"
              @submit="submit">
  </tvue-login>
  <hr />
  <h2>手机号登录</h2>
  <tvue-login :option="option2"
              @submit="submit"
              @send="send"
              v-model="form">
  </tvue-login>
  <hr />
  <h2>改变字段</h2>
  <tvue-login :option="option4"
              @submit="submit"
              @send="send">
  </tvue-login>
  <hr />
  <h2>调整边距</h2>
  <tvue-login :option="option3"
              @submit="submit"
              @send="send">
  </tvue-login>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const codesrc = ref('');
const form = ref({});
const option = ref({
  width: 400,
  time: 60,
  codeType: 'phone',
  column: {
    username: {
      label: '用户名',
      autocomplete: 'off',
      rules: { required: true, message: '请输入用户名', trigger: 'blur' }
    },
    password: {
      label: '密码',
      autocomplete: 'off',
      rules: { required: true, message: '请输入密码', trigger: 'blur' }
    },
    code: {
      hide: true
    }
  }
});
const option1 = ref({
  width: 400,
  codeType: 'img',
  column: {
    username: {
      label: '用户名',
      placeholder: '手机号/邮箱/用户名',
      autocomplete: 'off',
      rules: { required: true, message: '请输入用户名', trigger: 'blur' }
    },
    password: {
      label: '密码',
      autocomplete: 'off',
      rules: { required: true, message: '请输入密码', trigger: 'blur' }
    },
    code: {
      label: '验证码',
      tip: '点击图片可以刷新验证码',
      autocomplete: 'off',
      rules: { required: true, message: '请输验证码', trigger: 'blur' }
    }
  }
});
const option2 = ref({
  width: 400,
  time: 60,
  codeType: 'phone',
  column: {
    username: {
      label: '手机号',
      prefixIcon: 'el-icon-mobile-phone',
      placeholder: '手机号/邮箱/用户名',
      autocomplete: 'off',
      rules: { required: true, message: '请输入手机号', trigger: 'blur' }
    },
    password: {
      hide: true,
    },
    code: {
      label: '验证码',
      autocomplete: 'off',
      rules: { required: true, message: '请输验证码', trigger: 'blur' }
    }
  }
});
const option3 = ref({
  width: 400,
  time: 60,
  labelWidth: 120,
  codeType: 'phone',
  column: {
    username: {
      label: '手机号',
      prefixIcon: 'el-icon-mobile-phone',
      placeholder: '手机号/邮箱/用户名',
      autocomplete: 'off',
      rules: { required: true, message: '请输入手机号', trigger: 'blur' }
    },
    password: {
      hide: true,
    },
    code: {
      label: '验证码',
      autocomplete: 'off',
      rules: { required: true, message: '请输验证码', trigger: 'blur' }
    }
  }
});
const option4 = ref({
  width: 400,
  column: {
    username: {
      label: '用户名',
      tip: '改变字段为user',
      prop: 'user',
    },
    password: {
      label: '密码',
      tip: '改变字段为pass',
      prop: 'pass',
    },
    code: {
      label: '验证码',
      tip: '改变字段为vaild',
      prop: 'vaild',
    }
  }
});

const refresh = () => {
  ElMessage.success('图片验证码刷新成功');
  codesrc.value = "https://pigx.pig4cloud.com/code?randomStr=" + new Date().getTime();
};

const send = (done) => {
  ElMessage.success(form.value.username + '验证码发送成功');
  done();
};

const submit = (form) => {
  ElMessage.success(JSON.stringify(form));
  console.log(form);
};

onMounted(() => {
  refresh();
});
</script>