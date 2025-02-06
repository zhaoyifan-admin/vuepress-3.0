---
title: 表单布局
createTime: 2025/02/06 15:07:57
permalink: /form/form-layout/
---

:::tip
 - size
 - span
 - gutter
 - offset
 - labelWidth
 - labelPosition
  
 以上属性配置到`option`下作用于全部列，优先列中配置属性生效，更多用法可以参考[Element-plus-Layout 布局](https://element-plus.gitee.io/zh-CN/component/layout.html)和[Element-plus-Form 表单](https://element-plus.gitee.io/zh-CN/component/form.html)
::::

## 栏大小

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`size`属性调节栏的大小，默认为`small`"](../../examples/form/form-layout/size.vue)

:::

## 栏距列数

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`span`属性调节栏列数,默认为12"](../../examples/form/form-layout/span.vue)

:::

## 栏距间隔

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`gutter`属性调节栏列数,默认为0"](../../examples/form/form-layout/gutter.vue)

:::

## 分栏偏移

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`offset`属性调节栏列数,默认为12"](../../examples/form/form-layout/offset.vue)

:::

## 栏成行

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`row`属性栅格后面的内容是否从新的一行开始展示"](../../examples/form/form-layout/row.vue)

:::

## 栏排序

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设`order`属性可排序与`column`中顺序不同"](../../examples/form/form-layout/order.vue)

:::

## 栏隐藏

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`display`属性隐藏栏目"](../../examples/form/form-layout/display.vue)

:::

## 标题宽度

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`labelWidth`为标题的宽度，默认为`110`"](../../examples/form/form-layout/labelWidth.vue)

:::

## 标题位置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`labelPosition`为标题的位置，默认为`left`"](../../examples/form/form-layout/labelPosition.vue)

:::

## 样式布局
```css
.upload {
  right: 20px;
  bottom: 100px;
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用`className`去布局"](../../examples/form/form-layout/class.vue)

:::

## 标题辅助语

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`labelTip`为标题提示的内容,`labelTipPlacement`为标题提示语的方向，默认为`bottom`"](../../examples/form/form-layout/labelTip.vue)

:::

## 内容辅助语

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`tip`为提示的内容,`tipPlacement`为提示语的方向，默认为`bottom`"](../../examples/form/form-layout/tip.vue)

:::


## 详情编辑

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`detail`控制是否为详情页"](../../examples/form/form-layout/detail.vue)

:::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`detail`控制是否为详情页"](../../examples/form/form-layout/detail2.vue)

:::

## 分组展示
>将表单已分组的形式展示

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="用法普通的form组件分组用法一样，在`group`中配置结构体即可"](../../examples/form/form-layout/group.vue)

:::

## 选项卡展示
>将表单已选项卡的形式展示

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`tabs`为true即可开启选项卡,`tabsVerifyAll`是否单独提交，默认为`false`"](../../examples/form/form-layout/tabs.vue)

:::