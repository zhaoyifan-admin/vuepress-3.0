---
title: 表单数据格式
createTime: 2025/02/06 15:25:48
permalink: /form/form-data/
---

## 数据类型

- 组件正常接受数据格式为数组[1,2,3,4],而后台返回的类型为字符串1,2,3,4,设置dataType来进行数据转化
- 数据为字符串，字典类型为数字，设置dataType统一数据类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="有些数据是数组形式的，我们传入字符串是无法识别的，解决数据字典和字段类型不匹配问题,配置`dataType`属性(string / number),`separator`配置分隔符，默认为`,`"](../../examples/form/form-data/base.vue)

:::

## 深层结构数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`bind`绑定的对象数据是双向的，改变任意一个，另外一个也会改变"](../../examples/form/form-data/bind.vue)

:::

## 数据过滤

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`filterDic`设置为`true`返回的对象不会包含`$`前缀的字典翻译, `filterNull`设置为`true`返回的对象不会包含空数据的字段"](../../examples/form/form-data/filter.vue)

:::

## 清空过滤字段

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`filterParams`为点击清空按钮，表单不会清除的数据，默认主键`rowKey`是不会清空的，默认为`id`"](../../examples/form/form-data/filterParams.vue)

:::