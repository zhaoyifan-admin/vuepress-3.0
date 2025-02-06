---
title: Tree树型选择框
createTime: 2025/02/06 14:39:44
permalink: /form/form-input-tree/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-input-tree/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-input-tree/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-input-tree/disabled.vue)

:::

## 禁用选项

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="返回的字典中数据配置`disabled`属性指定是否禁用"](../../examples/form/form-input-tree/disabled-item.vue)

:::

## 可清空

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"](../../examples/form/form-input-tree/clearable.vue)

:::

## 辅助语

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置下拉数据中`desc`字段"](../../examples/form/form-input-tree/desc.vue)

:::

## 下拉框样式
```css
.popperClass .el-tree-node__content{
  background-color: rgba(0,0,0,.2);
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`popperClass`属性配置样式的`class`名字"](../../examples/form/form-input-tree/popperClass.vue)

:::

## 字典属性
>指定标签文本和值，默认为label和value

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`属性来指定标签文本和值，默认为`label`和`value`"](../../examples/form/form-input-tree/dic.vue)

:::

## 网络字典
>更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址"](../../examples/form/form-input-tree/dic-net.vue)

:::

## 基础多选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`multiple`属性即可启用多选，此时值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示"](../../examples/form/form-input-tree/multiple.vue)

:::

## 选择任意级别

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="当属性`checkStrictly`为`true` 时，任何节点都可以被选择，否则只有子节点可被选择"](../../examples/form/form-input-tree/checkStrictly.vue)

:::

## 基础过滤

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="filterable 属性即可启用筛选功能"](../../examples/form/form-input-tree/filter.vue)

:::

## 手风琴模式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`accordion`对于同一级的节点，每次只能展开一个"](../../examples/form/form-input-tree/accordion.vue)

:::

## 节点事件

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-input-tree/node.vue)

:::

## 自定义模板

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`prop`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"](../../examples/form/form-input-tree/slot.vue)

:::

## 懒加载

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`cacheData`懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签"](../../examples/form/form-input-tree/lazy.vue)

:::