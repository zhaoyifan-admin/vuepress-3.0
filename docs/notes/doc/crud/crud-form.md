---
title: 弹窗表单配置
createTime: 2025/02/05 17:08:32
permalink: /doc/crud-form/
---
# 弹窗表单配置

:::tip
表格中的弹出的表单是内置组件`avue-form`组件,配置属性可以参考[FORM 组件文档](/form/form)
::::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`value`为字段默认值"](../../../examples/crud/crud-form/value.vue)

:::

## 打开表单前

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="打开表单前会执行`beforeOpen`方法，相关返回的方法值可以判断表单当前打开的类型是新增还是编辑，调用`done`方法打开弹窗"](../../../examples/crud/crud-form/beforeOpen.vue)

:::

## 加载数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="打开表单前会执行`beforeOpen`方法，调用`loading`加载等待数据，调用`done`完成加载"](../../../examples/crud/crud-form/beforeOpenLoading.vue)

:::

## 关闭表单前

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="关闭表单前会执行`beforeClose`方法，执行返回的`done`方法后才会彻底关闭表单"](../../../examples/crud/crud-form/beforeClose.vue)

:::

## 不关弹窗连续添加

:::tip
源码中涉及自定义卡槽和按钮的操作方法可以下面介绍

- [自定义按钮](/crud/crud-btn-slot.html#自定义弹窗内按钮)
- [按钮方法](/crud/crud-fun.html)
  ::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="关闭表单前会执行`beforeClose`方法，执行返回的`done`方法后才会彻底关闭表单"](../../../examples/crud/crud-form/next.vue)

:::

## 表单按钮位置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dialogMenuPosition`属性值即可，默认为`right`"](../../../examples/crud/crud-form/position.vue)

:::

## 打开表单方式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dialogType`为弹窗的方式,`dialogDirection`为弹窗的位置"](../../../examples/crud/crud-form/type.vue)

:::

## 防重提交

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="为了防止数据重复提交，加入了防重提交机制，`rowSave`方法和`rowUpdate`方法返回`done`用于关闭表单方法和`loading`用于关闭禁止的表单不关闭表单"](../../../examples/crud/crud-form/done.vue)

:::

## 标题字段宽度

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`labelWidth`为标题的宽度，默认为`90`，可以配置到`option`下作用于全部,也可以单独配置每一项"](../../../examples/crud/crud-form/labelWidth.vue)

:::

## 验证

:::tip
具体参考[async-validator](https://github.com/yiminghe/async-validator)
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置验证字段的`rules`的数据对象"](../../../examples/crud/crud-form/rules.vue)

:::

## 自定义验证

:::tip
自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-form/rules2.vue)

:::

## 组件对象

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="打开表单的时候可以获取相关字段的 ref 对象"](../../../examples/crud/crud-form/ref.vue)

:::

## 字段不同状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`disabled`、`display`、`detail`等字段在新增和编辑不同状态下，字段的不同状态展示"](../../../examples/crud/crud-form/status.vue)

:::

## 深结构绑定

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`bing`绑定深层次的结构对象，`prop`也是需要填写"](../../../examples/crud/crud-form/bind.vue)

:::

## 字段排序

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`order`的序号可以实现表单和表格字段不同的顺序"](../../../examples/crud/crud-form/order.vue)

:::

## 表单窗口拖拽

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`dialogDrag`设置为`true`即可拖动表单"](../../../examples/crud/crud-form/drag.vue)

:::

## 改变结构配置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-form/defaults.vue)

:::

## 与其它字段交互

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-form/control.vue)

:::

## 表单分组

:::tip

- [表单分组详细用法](/form/form-group.html)
  ::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-form/group.vue)

:::

## 数据过滤

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`filterDic`设置为`true`返回的对象不会包含`$`前缀的字典翻译, `filterNull`设置为`true`返回的对象不会包含空数据的字段"](../../../examples/crud/crud-form/filter.vue)

:::

## render 渲染表单

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-form/render.vue)

:::

## 自定义表单

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="在卡槽中指定列的`prop`加上`-form`作为卡槽的名称开启自定义"](../../../examples/crud/crud-form/formslot.vue)

:::

## 自定义表单错误提示

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="在卡槽中指定列的`prop`加上`-error`作为卡槽的名称开启自定义"](../../../examples/crud/crud-form/errorslot.vue)

:::

## 自定义表单标题

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="在卡槽中指定列的`prop`加上`-label`作为卡槽的名称开启自定义"](../../../examples/crud/crud-form/labelslot.vue)

:::