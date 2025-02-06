---
title: 卡片模式
createTime: 2025/02/06 09:19:45
permalink: /doc/crud-grid/
---

## 基本用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`grid`配置为卡片模式,`gridBtn`和列表切换按钮，默认为`true`，在`v3.4.7+`新增  `grid-status-change`切换状态回调方法"](../../../examples/crud/crud-grid/base.vue)

:::

## 配置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="一些配置用来改变布局和颜色"](../../../examples/crud/crud-grid/option.vue)

:::

## 方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`gridBackground`方法可以根据条件设置背景色"](../../../examples/crud/crud-grid/fun.vue)

:::

## 自定义
```css
.imgbox {
  position: absolute;
  width: 80px;
  right: 20px;
  bottom: 60px;
}

.imgbox img {
  width: 100%;
}

.imgbox .avue-crud__grid__label {
  display: none;
}
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="利用插槽自定义"](../../../examples/crud/crud-grid/slot.vue)

:::