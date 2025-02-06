<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-input-tree default-expand-all
                       v-model="form"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      父类可选值: {{ form }}<br />
      <tvue-input-tree checkStrictly
                       default-expand-all
                       v-model="form"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      包含父类值: {{ form1 }}<br />
      <tvue-input-tree multiple
                       v-model="form1"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      不包含父类值: {{ form2 }}<br />
      <tvue-input-tree leaf-only
                       multiple
                       v-model="form2"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      半选是否包含父类值: {{ form33 }}<br />
      半选是不包含父类值: {{ form3 }}<br />
      <tvue-input-tree ref="tree"
                       include-half-checked
                       multiple
                       v-model="form3"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      父子不关联: {{ form4 }}<br />
      <tvue-input-tree :check-strictly="true"
                       multiple
                       v-model="form4"
                       placeholder="请选择内容"
                       :dic="dic"></tvue-input-tree>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const form = ref('');
const form1 = ref([0, 1, 2, 3, 4]);
const form2 = ref([1, 2, 3]);
const form3 = ref([2, 1]);
const form33 = ref([]);
const form4 = ref([0]);

const dic = [
  {
    label: '选项1',
    value: 0,
    children: [
      { label: '选项3', value: 2 },
      { label: '选项4', value: 3 }
    ]
  },
  { label: '选项2', value: 1 }
];

const treeRef = ref(null);

watch(form3, () => {
  if (treeRef.value) {
    form33.value = treeRef.value.getHalfList();
  }
}, { deep: true });

onMounted(() => {
  if (treeRef.value) {
    form33.value = treeRef.value.getHalfList();
  }
});
</script>
