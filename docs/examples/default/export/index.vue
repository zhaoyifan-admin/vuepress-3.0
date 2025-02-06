<template>
  <div style="width:400px">
    <el-button type="primary"
               @click="handleExcel">下载 excel</el-button>
    <el-button type="success"
               @click="handleExcel1">下载 多级表头excel</el-button>
  </div>
</template>

<script setup>
import { $Export } from '@smallwei/avue';

const handleExcel = () => {
  const opt = {
    title: '文档标题',
    column: [{
      label: '标题',
      prop: 'title'
    }],
    data: [{
      title: "测试数据1"
    }, {
      title: "测试数据2"
    }]
  };
  $Export.excel({
    title: opt.title,
    columns: opt.column,
    data: opt.data
  });
};

const handleExcel1 = () => {
  const opt = {
    title: '文档标题',
    column: [{
      label: '多级表头',
      prop: 'header',
      children: [
        {
          label: '标题1',
          prop: 'title1'
        }, {
          label: '标题2',
          prop: 'title2'
        }
      ]
    }],
    data: [{
      title1: "测试数据1",
      title2: "测试数据2"
    }, {
      title1: "测试数据2",
      title2: "测试数据2"
    }]
  };
  $Export.excel({
    title: opt.title,
    columns: opt.column,
    data: opt.data
  });
};
</script>
