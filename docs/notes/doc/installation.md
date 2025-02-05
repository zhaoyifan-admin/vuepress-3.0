---
title: 快速上手
createTime: 2025/01/15 10:03:30
permalink: /doc/installation/
---

# 快速上手

### 介绍
通过本章节你可以了解到 Tvue 的安装方法和基本使用姿势。


### 安装

::: code-tabs
@tab npm

``` sh
npm i npm i @zhaoyifannan/tvue@3.1.2
npm i npm i @zhaoyifannan/tvue           (V2版本)
```

@tab pnpm

```sh
pnpm i npm i @zhaoyifannan/tvue@3.1.2
pnpm i npm i @zhaoyifannan/tvue           (V2版本)
```

:::

``` js
//需要先安装ElementPlus的依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import Tvue from '@zhaoyifannan/tvue';
import '@zhaoyifannan/tvue/lib/index.css';
const app =createApp({})
app.use(ElementPlus)
app.use(Tvue);

```

##### 使用字典和上传组件需要引入axios

``` js
import {createApp} from 'vue'
import axios from 'axios'
const app = createApp({})
app.use(Tvue,{axios})

```
