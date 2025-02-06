<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu>
      <el-button v-for="(item, index) in 5"
                 :key="index"
                 text
                 type="primary">操作{{ index + 1 }}</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 数据和选项
const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  menuWidth: 0,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

// 设置菜单宽度
const setMenuWidth = () => {
  setTimeout(() => {
    let width = 0;
    const list = document.querySelectorAll('.tvue-crud__menu');
    list.forEach(ele => {
      const childList = ele.children;
      let allWidth = 0;
      for (let i = 0; i < childList.length; i++) {
        const child = childList[i];
        allWidth += child.offsetWidth + 18;
      }
      if (allWidth >= width) width = allWidth;
    });
    option.value.menuWidth = width;
  });
};

// 在组件挂载后执行
onMounted(() => {
  setMenuWidth();
});
</script>
