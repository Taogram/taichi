<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-11 00:02:06
 * @LastEditors: lax
 * @LastEditTime: 2023-05-06 20:07:54
 * @FilePath: \nutation\readme.md
-->
# TaiChi.js

## use

### create
```
const { Phases } = require("tao_taichi.js");
<!-- 0~4=>金水木火土 -->
const ele = new Phases(0~4);
```
### 生=>我生者
```
ele.promotion();
ele.sheng();
ele.get("生");
```
### 被生/泄=>生我者
```
ele.promoted();
ele.xie();
ele.get("泄");
```
### 被克/耗=>克我者
```
ele.restrained();
ele.hao();
ele.get("耗");
```
### 克=>我克者
```
ele.restraint();
ele.ke();
ele.get("克");
```
### 旺
```
ele.vigorous();
ele.wang();
ele.get("旺");
```
### 相
```
ele.second();
ele.xiang();
ele.get("相");
```
### 休
```
ele.rest();
ele.xiu();
ele.get("休");
```
### 囚
```
ele.imprison();
ele.qiu();
ele.get("囚");
```
### 死
```
ele.death();
ele.si();
ele.get("死");
```
### 输出字或序号
```
ele => 金
ele.death(true) => "木"
ele.death() => 2
```
### 判断与另外一个五行关系
```
ele.with("金")
result: 0~4=>旺相休囚死/X生泄耗克
```


