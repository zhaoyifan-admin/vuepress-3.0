---
title: Map坐标选择器
createTime: 2025/02/06 11:43:17
permalink: /form/form-input-map/
---

``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<!-- 高德地图api更新必须配合安全密钥使用 -->
<script>
  window._AMapSecurityConfig = {
    securityJsCode: 'xxxxx',
  }
</script>
<script type="text/javascript" src='https://webapi.amap.com/maps?v=2.0&key=xxxxxxxx&plugin=AMap.PlaceSearch,AMap.Geocoder'></script>
<script src="https://webapi.amap.com/ui/1.1/main.js?v=1.0.11"></script>
```

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-input-map/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-input-map/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-input-map/disabled.vue)

:::

## 高德参数

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-input-map/params.vue)

:::