---
title: 搜索
createTime: 2025/2/5 13:24:35
permalink: /doc/crud-search/
---

## 搜索变量

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`search`变量为搜索的表单对象"](../../../examples/crud/crud-search/params.vue)

:::

## 搜索按钮文字和图标配置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchBtnText`和`emptyBtnText`为搜索和清空的文字`searchBtnIcon`和`emptyBtnIcon`为搜索和清空的图标"](../../../examples/crud/crud-search/text.vue)

:::

## 搜索方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`search-change`为点击搜索后执行方法，`done`方法为关闭等待框,`search-reset`点击清空的执行方法"](../../../examples/crud/crud-search/search-change.vue)

:::

## 搜索字段标题宽度

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchLabelWidth`为标题的宽度，默认为`110`，可以配置到`option`下作用于全部,也可以单独配置每一项"](../../../examples/crud/crud-search/labelWidth.vue)

:::

## 搜索字段排序

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchOrder`为排序字段，不写默认为`0`搜索字段排序不影响表格顺序"](../../../examples/crud/crud-search/order.vue)

:::

## 搜索过滤

::: tabs
@tab vue2

@tab:active vue3

@[demo vue ](../../../examples/crud/crud-search/filter.vue)

:::

## 搜索验证规则
:::tip
具体参考[async-validator](https://github.com/yiminghe/async-validator)
::::
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="配置验证字段的`searchRules`的数据对象即可"](../../../examples/crud/crud-search/rules.vue)

:::

## 搜索范围和宽度

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchSpan`搜索框的宽度，`searchRange`配置后可以开启范围搜索"](../../../examples/crud/crud-search/span.vue)

:::

## 搜索默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchValue`为搜索的默认值"](../../../examples/crud/crud-search/value.vue)

:::

## 局部展开收缩
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchIcon`是否启用功能按钮, `searchIndex`配置收缩展示的个数,默认为`2`个"](../../../examples/crud/crud-search/index.vue)

:::

## 辅助提示语

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchTip`为提示的内容,`searchTipPlacement`为提示语的方向，默认为`bottom`"](../../../examples/crud/crud-search/tip.vue)

:::

## 隐藏搜索折叠按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchShowBtn`设置为:`false`"](../../../examples/crud/crud-search/showBtn.vue)

:::

## 按钮是否单独成行

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="前提的`searchMenuSpan`可以控制搜索按钮的长度"](../../../examples/crud/crud-search/menuSpan.vue)

:::

## 定义类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`searchType`属性可以重新定义搜索框的类型"](../../../examples/crud/crud-search/type.vue)

:::

## 自定义搜索卡槽

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`search`和`searchMenu`卡槽可以自定义搜索内容，不需要单独设置列`search`:`true`"](../../../examples/crud/crud-search/searchMenu.vue)

:::

## 自定义列搜索
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="列的`prop`加`-search`作为卡槽的名称即可开启自定义"](../../../examples/crud/crud-search/slot.vue)

:::

## 多级联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`cascader`为需要联动的子选择框`prop`值，可以写多个，形成一对多的关系,需要手动调用内部的`dicInit`方法去初始化表格联动数据"](../../../examples/crud/crud-search/cascader.vue)

:::

## 单独日期搜索

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="配置`dateBtn`为`true`即可激活,搜索后回调`date-change`方法"](../../../examples/crud/crud-search/dateBtn.vue)

:::