---
title: Select选择框
createTime: 2025/02/06 10:26:20
permalink: /form/form-select/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`select`,同时配置`dicData`为字典值"](../../examples/form/form-select/base.vue)

:::

## 虚拟

>在某些使用情况下，单个选择器可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。 为了更好的用户和开发者体验

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`virtualize`为`true`即可开启虚拟Dom模式"](../../examples/form/form-select/virtualize.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-select/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-select/disabled.vue)

:::

## 禁用选项

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="返回的字典中数据配置`disabled`属性指定是否禁用"](../../examples/form/form-select/disabled-item.vue)

:::

## 可清空

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"](../../examples/form/form-select/clearable.vue)

:::

## 辅助语

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置下拉数据中`desc`字段"](../../examples/form/form-select/desc.vue)

:::

## 字典属性
>指定标签文本和值，默认为label和value
:::demo 配置`props`属性来指定标签文本和值，默认为`label`和`value`
form/form-select/dic-local
:::

## 下拉框样式
```css
.popperClass .el-select-dropdown__item{
  background-color: rgba(0,0,0,.2);
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`popperClass`属性配置样式的`class`名字,字典中`class`属性为单个框下拉样式"](../../examples/form/form-select/popperClass.vue)

:::


## 网络字典
>更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址"](../../examples/form/form-select/dic-net.vue)

:::

## 基础多选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`multiple`属性即可启用多选，此时值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示,`limit`限制选择个数"](../../examples/form/form-select/multiple.vue)

:::



## 创建条目和搜索

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`allowCreate`属性即可通过在输入框中输入文字来创建新的条目。注意此时`filterable`必须为真"](../../examples/form/form-select/search.vue)

:::

## 自定义模板

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"](../../examples/form/form-select/slot.vue)

:::

## 多级联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系"](../../examples/form/form-select/cascader.vue)

:::

## 远程搜索
>当你的下拉框数据量很大的时候，你可以启动远程搜索

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`remote`为`true`即可开启远程搜索，其中`dicUrl`中`'{{key}}'`为用户输入的关键字"](../../examples/form/form-select/remote.vue)

:::

## 分组

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`group`为`true`即可开启分组模式"](../../examples/form/form-select/group.vue)

:::

## 拖拽


``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js"></script>
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`drag`为`true`即可开启拖拽模式"](../../examples/form/form-select/drag.vue)

:::