---
title: 表单操作按钮
createTime: 2025/02/06 15:15:40
permalink: /form/form-submit/
---

## 提交按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`submit`方法为表单提交按钮回调"](../../examples/form/form-submit/submit.vue)

:::

## 清空按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`reset-change`方法为表单清空按钮回调"](../../examples/form/form-submit/reset.vue)

:::

## 隐藏按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用`submitBtn`和`emptyBtn`属性去隐藏按钮"](../../examples/form/form-submit/hide.vue)

:::

## 按钮文案

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用`submitText`和`emptyText`属性去隐藏按钮"](../../examples/form/form-submit/text.vue)

:::

## 行内按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用列的`span`属性和`menuSpan`属性达到行内表单"](../../examples/form/form-submit/inline.vue)

:::

## 按钮位置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用`menuPosition`属性设置按钮的位置"](../../examples/form/form-submit/position.vue)

:::

## 自定义按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用`menu-form`卡槽去自定义按钮"](../../examples/form/form-submit/slot.vue)

:::

## 打印按钮
>你可以可以调用全局[$Print打印方法](/default/print)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`printBtn`打开表单打印功能"](../../examples/form/form-submit/print.vue)

:::

## 模拟数据按钮
>一键生成模拟数据方便测试


``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Mock.js/1.0.0/mock-min.js"></script>
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`mock`设置`true`，在列中配置对应的规则即可，当然你可以自己写模拟逻辑，在`mock`写方法，会返回当前表单的数据,最后`return`即可，详情参考如下例子"](../../examples/form/form-submit/mock.vue)

:::