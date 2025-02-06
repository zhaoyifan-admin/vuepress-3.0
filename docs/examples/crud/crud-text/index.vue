<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  align: 'center',
  menuAlign: 'center',
  menuWidth: 400,
  viewBtn: true,
  menuTitle: '其它',
  addTitle: '保存标题',
  editTitle: '编辑标题',
  viewTitle: '查看标题',
  searchBtnText: '搜索文案',
  emptyBtnText: '清空文案',
  addBtnText: '新增文案',
  addBtnIcon: 'el-icon-user',
  delBtnText: '删除文案',
  delBtnIcon: ' ',
  editBtnIcon: ' ',
  editBtnText: '编辑文案',
  viewBtnText: '查看文案',
  printBtnText: '打印文案',
  excelBtnText: '导出文案',
  updateBtnText: '修改文案',
  saveBtnText: '保存文案',
  cancelBtnText: '取消文案',
  printBtn: true,
  excelBtn: true,
  column: [
    { label: '姓名', prop: 'name', search: true },
    { label: '性别', prop: 'sex', search: true }
  ]
});
</script>
