---
title: 表格列配置项
createTime: 2025/2/5 14:01:52
permalink: /doc/crud-column/
---

## 主键

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="对开开放了`cell-style`和`row-style`方法"](../../../examples/crud/crud-column/rowKey.vue)

:::

## 宽度

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`width`属性控制每列的宽度，如果不配置则会自适应"](../../../examples/crud/crud-column/width.vue)

:::

## 索引

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设`index`属性为`true`即可，`indexLabel`设置表格的序号的标题,默认为`#`"](../../../examples/crud/crud-column/index.vue)

:::

## 自定义索引

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-column/index-slot.vue)

:::

## 内容超出隐藏

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`overHidden`设置`true`即可超出列表宽度的内容以省略号显示"](../../../examples/crud/crud-column/overHidden.vue)

:::

## 内容格式化

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`formatter`方法格式化内容"](../../../examples/crud/crud-column/formatter.vue)

:::

## 支持 html 转译

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`html`设置为`true`即可支持`formatter`转义`html`代码"](../../../examples/crud/crud-column/html.vue)

:::

## 列隐藏

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="一共是有 4 列的`hide`和`showColumn`可以达到控制列显隐控制"](../../../examples/crud/crud-column/hide.vue)

:::

## 持久化存储

:::tip
如果有远程字典类的配置或者加载错误情况，需要初始化下组件[CRUD 初始化](/crud/crud-ajax)
::::
::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-column/session.vue)

:::

## 筛选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`filters`为`true`，字典用法和普通用法一致,`filterMethod`为自定义的筛选逻辑，`filter-multiple`筛选的数据为多选还是单选，默认为 `true`"](../../../examples/crud/crud-column/filters.vue)

:::

## 默认排序

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`defaultSort`一个属性接受`prop`排序的字段和`order`排序的方式俩个属性，初始化的时候根据设置默认排序,`order`中接受 `ascending` 表示升序，`descending` 表示降序，回调`sort-change`方法返回排序参数"](../../../examples/crud/crud-column/defaultSort.vue)

:::

## 冻结列

:::tip
配置`fixed`为`true`即可实现冻结列
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`indexFixed`,`selectionFixed`,`expandFixed`可以配置序号，多选，面板是否为冻结,当然你也可以配置他们的宽度`indexWdth`,`selectionWidth`,`expandWidth`"](../../../examples/crud/crud-column/fixed.vue)

:::

## 单元格和表头样式

:::tip
配置`className`和`labelClassName`配置单元格和表头样式名称
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`indexClassName`,`selectionClassName`,`expandClassName`可以配置序号，多选，面板列单元格的样式名称,配置`indexLabelClassName`,`selectionLabelClassName`,`expandLabelClassName`表头样式名称"](../../../examples/crud/crud-column/className.vue)

:::

## 列拖拽排序

```html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js"></script>
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`columnSort`设置为`true`即可开启拖拽功能，没有回调用方法直接修改`option`中的顺序，`column-sortable-change`拖拽回调方法"](../../../examples/crud/crud-column/columnSort.vue)

:::

## 自定义列

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置列的属性`slot`为`true`时，在卡槽中用`prop`作为卡槽的名字即可"](../../../examples/crud/crud-column/slot.vue)

:::

## render 渲染

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-column/render.vue)

:::

## 列合并

:::tip
如果数据不确定参考[动态数据行和列合并](/crud/crud-rc.html)
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过给传入`spanMethod`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象"](../../../examples/crud/crud-column/spanMethod.vue)

:::