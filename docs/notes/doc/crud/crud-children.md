---
title: 父子表
createTime: 2025/02/06 09:28:51
permalink: /doc/crud-children/
---

:::tip
由于有的表格包含了父子表，在父表填写的完后还要填写子表的内容，由于业务场景复发多元化，如果采用配置的方法去开发，将会边不可维护，所以这里采用一种灵活的方法去实现
::::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="如下用法可以根据场景灵活使用，你可以将`infoForm`自定义内容封装成一个组件使用,这样子将会达到很好的维护效果"](../../../examples/crud/crud-children.vue)

:::