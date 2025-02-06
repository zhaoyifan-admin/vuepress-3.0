---
title: 数据字典
createTime: 2025/2/5 16:30:12
permalink: /doc/crud-dic/
---
:::tip
更多字典详细用法参考[Form 组件数据字典](/form/form-dic.html)

```js
//使用字典需要引入axios
import axios from "axios";
const app = createApp({});
app.use(Avue, { axios });
```

::::

## 字典使用

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="本地字典配置`dicData`为一个`Array`数组，网络字典可以配置`dicUrl`字段，自动加载字典到对应的组件中，注意返回的字典中 value 类型和数据的类型必须要对应，比如都是字符串或者都是数字。配置`dicFlag`为`true`，打开表单的时候会重新请求字典"](../../../examples/crud/crud-dic/base.vue)

:::

## 字典联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系，表格加载联动数据需要调用内置方法`dicInit`"](../../../examples/crud/crud-dic/cascader.vue)

:::
