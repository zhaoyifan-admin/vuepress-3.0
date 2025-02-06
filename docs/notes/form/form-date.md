---
title: Date日期
createTime: 2025/02/06 13:31:31
permalink: /form/form-date/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="基本单位由type属性指定。快捷选项需配置`shortcuts`，禁用日期通过 `disabledDate` 设置，传入函数"](../../examples/form/form-date/base.vue)

:::

## 日期格式化

:::tip 
请注意大小写
:::

| 格式   | 含义     | 备注                                           | 举例          |
| ------ | -------- | ---------------------------------------------- | ------------- |
| `YYYY` | 年       |                                                | 2017          |
| `M`    | 月       | 不补0                                          | 1             |
| `MM`   | 月       |                                                | 01            |
| `W`    | 周       | 仅周选择器的`format`可用；不补0                | 1             |
| `WW`   | 周       | 仅周选择器的`format`可用                       | 01            |
| `D`    | 日       | 不补0                                          | 2             |
| `DD`   | 日       |                                                | 02            |
| `H`    | 小时     | 24小时制；不补0                                | 3             |
| `HH`   | 小时     | 24小时制                                       | 03            |
| `h`    | 小时     | 12小时制，须和`A`或`a`使用；不补0              | 3             |
| `hh`   | 小时     | 12小时制，须和`A`或`a`使用                     | 03            |
| `m`    | 分钟     | 不补0                                          | 4             |
| `mm`   | 分钟     |                                                | 04            |
| `s`    | 秒       | 不补0                                          | 5             |
| `ss`   | 秒       |                                                | 05            |
| `A`    | AM/PM    | 仅`format`可用，大写                           | AM            |
| `a`    | am/pm    | 仅`format`可用，小写                           | am            |
| `X`    | JS时间戳 | 仅`value-format`可用；组件绑定值为`number`类型 | 1483326245000 |

## 格式化

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式"](../../examples/form/form-date/format.vue)

:::

## 其他日期单位

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-date/default.vue)

:::

## 日期范围

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-date/range.vue)

:::

## 下拉框样式
```css
.popperClass .available{
  background-color: rgba(0,0,0,.2);
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`popperClass`属性配置样式的`class`名字"](../../examples/form/form-date/popperClass.vue)

:::

## 默认的起始与结束时刻

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`defaultTime`可以控制选中起始与结束日期时所使用的具体时刻。`defaultTime`接受一个数组，数组每项值为字符串，形如`12:00:00`，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻"](../../examples/form/form-date/datetimerange.vue)

:::

## 自定义模板

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`名称加`Type`卡槽开启即可自定义日期框的内容"](../../examples/form/form-date/slot.vue)

:::