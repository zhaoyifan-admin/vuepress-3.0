---
title: 操作栏配置
createTime: 2025/2/5 16:30:12
permalink: /doc/crud-menu/
---
## 操作栏隐藏

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`menu`属性接受一个`Boolean`的属性达到隐藏操作栏的效果，默认为`false`"](../../../examples/crud/crud-menu/base.vue)

:::

## 操作栏对齐方式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`menuWidth`属性设置操作栏宽度,`menuTitle`属性设置操作栏目的文字,`menuAlign`属性设置对齐方式,`menuHeaderAlign`属性设置表头对齐方式"](../../../examples/crud/crud-menu/menuWidth.vue)

:::

## 操作栏自适应

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`js`计算元素宽度，动态给`menuWidth`去赋值，实现动态宽度"](../../../examples/crud/crud-menu/auto.vue)

:::

## 操作栏样式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`menuClassName`属性和`menuLabelClassName`属性配置操作栏列的单元格和表头样式名称"](../../../examples/crud/crud-menu/className.vue)

:::

## 自定义操作栏头部

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`menu-header`插槽为操作栏头部自定义"](../../../examples/crud/crud-menu/slot.vue)

:::

## 自定义操作栏

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`menu`为操作栏自定义,`menu-before`为按钮前置卡槽"](../../../examples/crud/crud-menu/headerSlot.vue)

:::

## 查看按钮

:::tip
[自定义按钮](/crud/crud-btn-slot.html#自定义查看按钮)
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`viewBtn`配置为`true`即可"](../../../examples/crud/crud-menu/viewBtn.vue)

:::

## 复制按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`copyBtn`为`true`时激活行复制功能,复制的数据会去除`rowKey`配置的主键"](../../../examples/crud/crud-menu/copyBtn.vue)

:::

## 打印按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`printBtn`设置为`true`即可开启打印功能"](../../../examples/crud/crud-menu/printBtn.vue)

:::

## 导出按钮

```html
<!-- 导入需要的包 （一定要放到index.html中的head标签里）-->
<script src="https://cdn.staticfile.net/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
<script src="https://cdn.staticfile.net/xlsx/0.18.2/xlsx.full.min.js"></script>
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`excelBtn`设置为`true`即可开启表格导出功能"](../../../examples/crud/crud-menu/excelBtn.vue)

:::

## 筛选按钮

:::tip
常用自定筛选条件
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`filterBtn`默认为`true`，可以自定义过滤条件，根据`filter`函数回调"](../../../examples/crud/crud-menu/filterBtn.vue)

:::

## 合并菜单

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`menuType`为`menu`表格的操作栏目菜单合并，`menuBtn`卡槽为自定义卡槽"](../../../examples/crud/crud-menu/filterBtn.vue)

:::

## 图标菜单

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`menuType`为`icon`时表格操作栏为图标按钮"](../../../examples/crud/crud-menu/icon.vue)

:::