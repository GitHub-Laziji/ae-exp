# AE表达式

使用方式: AE导入所需jsx文件


## trans.jsx
### 弹性变化
- 函数原型 `elastic(freq, decay)`
- 使用条件 `关键帧数>=2`
- 适用属性 `全部`
- 参数说明

| 参数名 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| `freq` | `Number` | `6`| 次数 |
| `decay` | `Number` | `4`| 衰退率 |

- 示例

```js
exp = eval(footage("trans.jsx").sourceText)
exp.elastic(6, 4)
```

### 重力反弹
- 函数原型 `gravityRebound(e, g, freq)`
- 使用条件 `关键帧数==2`
- 适用属性 `位置`
- 参数说明

| 参数名 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| `e` | `Number` | `0.7`| 弹性 |
| `g` | `Number` | `1000`| 重力 |
| `freq` | `Number` | `9`| 次数 |

- 示例

```js
exp = eval(footage("trans.jsx").sourceText)
exp.gravityRebound(0.7, 1000, 9)
```
