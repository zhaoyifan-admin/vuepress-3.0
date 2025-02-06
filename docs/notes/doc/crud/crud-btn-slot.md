---
title: 按钮自定义
createTime: 2025/2/5 16:56:05
permalink: /doc/crud-btn-slot/
---
## 自定义新增按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="这里利用了`menu-left`卡槽,同时设置`addBtn`为`false`，调用内置的新增打开弹窗方法`rowAdd`"](../../../examples/crud/crud-btn/add.vue)

:::


## 自定义编辑和删除按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="这里利用了`menu`卡槽,同时设置`editBtn`和`delBtn`为`false`，调用内置的编辑和删除方法`rowEdit`和`rowDel`,这里需要传入卡槽返回的2个值`{row,index}`当前行的数据和当前行的序号"](../../../examples/crud/crud-btn/menu.vue)

:::


## 自定义查看按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="这里利用了`menu`卡槽,调用内置查看方法`rowView`,这里需要传入卡槽返回的2个值`{row,index}`当前行的数据和当前行的序号"](../../../examples/crud/crud-btn/view.vue)

:::

## 自定义弹窗内按钮

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="新增和更新按钮要根据返回的`type`值判断，在`menu-form`卡槽中自定义按钮，调用内置方法即可"](../../../examples/crud/crud-btn/dialog.vue)

:::