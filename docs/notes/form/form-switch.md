---
title: Switch开关
createTime: 2025/02/06 11:23:08
permalink: /form/form-switch/
---

## 基础用法
>表示两种相互对立的状态间的切换，多用于触发「开/关」

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`switch`,同时配置`dicData`为字典值"](../../examples/form/form-switch/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-switch/value.vue)

:::

## 禁用状态


::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-switch/disabled.vue)

:::

## 字典属性
>指定标签文本和值，默认为label和value

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`属性来指定标签文本和值，默认为`label`和`value`"](../../examples/form/form-switch/dic.vue)

:::

## 网络字典
>更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址，默认只会取前2项"](../../examples/form/form-switch/dic-net.vue)

:::

## 按钮颜色

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用使用 CSS var `--el-switch-on-color`和`--el-switch-off-color`控制颜色"](../../examples/form/form-switch/color.vue)

:::

## 图标
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`activeIcon`属性与`inactiveIcon`属性来设置状态的图标`inlinePrompt`属性可以让图标内置。使用`activeActionIcon`属性与`inactiveActionIcon`属性来设置按钮状态图标。当使用图标时，文字属性就不会展示"](../../examples/form/form-switch/icon.vue)

:::

## 阻止切换

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`beforeChange`函数回调done方法传入`true/false`"](../../examples/form/form-switch/loading.vue)

:::