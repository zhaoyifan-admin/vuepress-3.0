---
title: Rate评价
createTime: 2025/02/06 14:50:37
permalink: /form/form-rate/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`rate`"](../../examples/form/form-rate/base.vue)

:::


## 辅助文字
>用辅助文字直接地表达对应分数

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`rate`"](../../examples/form/form-rate/text.vue)

:::

## 自定义图标
>当有多层评价时，可以用不同类型的 icon 区分评分层级

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`iconClasses`属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用`voidIconClass`指定了未选中时的图标类名"](../../examples/form/form-rate/icon.vue)

:::

## 自定义个数

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="长度应等于最大值`max`"](../../examples/form/form-rate/max.vue)

:::

## 只读
>只读的评分用来展示分数，允许出现半星

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `showScore`，则会在右侧显示目前的分值。可以提供 `scoreTemplate` 作为显示模板，模板为一个包含了 `{value}` 的字符串，`{value}` 会被解析为分值"](../../examples/form/form-rate/disabled.vue)

:::