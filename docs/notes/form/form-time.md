---
title: Time 时间
createTime: 2025/02/06 13:34:13
permalink: /form/form-time/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-time/base.vue)

:::

## 下拉框样式

```css
.popperClass .el-time-spinner__item {
  background-color: rgba(0, 0, 0, 0.2);
}
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`popperClass`属性配置样式的`class`名字"](../../examples/form/form-time/popperClass.vue)

:::

## 固定时间点

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可设置`pickerOptions`中分别通过`start`、`end`和`step`指定可选的起始时间、结束时间和步长"](../../examples/form/form-time/step.vue)

:::

## 格式化

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式"](../../examples/form/form-time/format.vue)

:::

## 时间范围

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-time/range.vue)

:::

## 固定时间范围

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="若先选择开始时间，则结束时间内备选项的状态会随之改变"](../../examples/form/form-time/default.vue)

:::

## 方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`visibleChange` 下拉列表出现/消失时触发"](../../examples/form/form-time/fun.vue)

:::