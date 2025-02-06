---
title: 增删改查方法
createTime: 2025/2/5 16:47:22
permalink: /doc/crud-fun/
---

:::tip
可以参考[自定义按钮](/crud/crud-btn-slot.html)更加灵活
::::


## 新增数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="新增数据保存回调`rowSave`方法,执行`done`关闭当前表单,`loading`用于添加失败后不关闭弹窗，重新提交"](../../../examples/crud/crud-fun/add.vue)

:::

## 修改数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="修改数据保存回调`rowUpdate`方法,执行`done`关闭当前表单,`loading`用于添加失败后不关闭弹窗，重新提交"](../../../examples/crud/crud-fun/update.vue)

:::


## 删除数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="修改数据保存回调`rowDel`方法"](../../../examples/crud/crud-fun/del.vue)

:::

## 刷新数据

:::tip
 这里刷新按钮回调可以配合[分页参数和方法](/crud/crud-page.html)去请求数据
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="点击刷新按钮回调`refresh-change`方法"](../../../examples/crud/crud-fun/refresh.vue)

:::

## 综合用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="在操作过程中吧数据放入`done`中,可以直接修改本地数据，做到及时刷新"](../../../examples/crud/crud-fun/crud.vue)

:::