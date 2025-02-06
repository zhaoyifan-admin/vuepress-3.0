---
title: Cascader级联选择器
createTime: 2025/02/06 13:18:15
permalink: /form/form-cascader/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`cascader`,同时配置`dicData`为字典值,通过`expandTrigger`可以定义展开子级菜单的触发方式,默认为`hover`"](../../examples/form/form-cascader/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-cascader/value.vue)

:::

## 多选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`multiple`为`true`在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用`collapseTags`为`true`来折叠Tag,你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示"](../../examples/form/form-cascader/multiple.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-cascader/disabled.vue)

:::

## 禁用选项

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="返回的字典中数据配置`disabled`属性指定是否禁用"](../../examples/form/form-cascader/disabled-item.vue)

:::

## 下拉框样式
```css
.popperClass .el-cascader-node{
  background-color: rgba(0,0,0,.2);
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`popperClass`属性配置样式的`class`名字"](../../examples/form/form-cascader/popperClass.vue)

:::

## 网络字典
>更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址"](../../examples/form/form-cascader/dic.vue)

:::


## 仅显示最后一级
>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。


::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="属性`showAllLevels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级"](../../examples/form/form-cascader/showAllLevels.vue)

:::


## 选中单节点
>在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置`false`，则只返回该节点的值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-cascader/emitPath.vue)

:::

## 任意一级
>在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可通过`checkStrictly` 为`true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的"](../../examples/form/form-cascader/checkStrictly.vue)

:::


## 搜索
>可以快捷地搜索选项并选择。

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="将`filterable`赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由`showAllLevels`决定)中包含输入值的选项"](../../examples/form/form-cascader/showAllLevels.vue)

:::

## 自定义模版

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容"](../../examples/form/form-cascader/slot.vue)

:::

## 懒加载

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-cascader/lazy.vue)

:::