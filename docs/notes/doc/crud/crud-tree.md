---
title: 表格树
createTime: 2025/02/06 09:26:50
permalink: /doc/crud-tree/
---

:::tip
- 配置rowKey主键(默认为id)
- 配置rowParentKey父类主键(默认为parentId)
::::

## 普通用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`defaultExpandAll`属性是否全部展开,其他用法和普通crud一致,一定要配置`rowKey`主键和`rowParentKey`父类主键，如果非懒加载树形不显示，删除据中`hasChildren`字段"](../../../examples/crud/crud-tree/base.vue)

:::

## 表格树懒加载

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`lazy`为`true`,同时接受`tree-load`函数的回调即可，通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点"](../../../examples/crud/crud-tree/lazy.vue)

:::

## 左树右表

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="这是`tree`组件和`crud`组件的结合使用，主要是用`nodeClick`回调刷新`crud`数据"](../../../examples/crud/crud-tree/crud.vue)

:::

