---
order: 1
title:
  zh-CN: 按钮样式的多选组合
---

## zh-CN

方便的从数组生成 Checkbox 组。

多选按钮组合分为两种类型，一种是：“选中边框为蓝色”，另一种是：“选中背景为蓝色” <br/> 第一种类型： <br/> | 接收属性 | 接收参数 | 说明 | <br/> | mold | one-large | 大多选按钮组合 | <br/> | mold | one-middle | 中多选按钮组合 | <br/> | mold | one-small | 小多选按钮组合 | <br/> 第二种类型： <br/> | 接收属性 | 接收参数 | 说明 | <br/> | mold | two-large | 大多选按钮组合 | <br/> | mold | two-middle | 中多选按钮组合 | <br/> | mold | two-small | 小多选按钮组合 |

## en-US

```jsx
import { Checkbox } from 'ucomponent';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(
  <>
    大
    <br />
    <Checkbox onChange={onChange} defaultChecked mold="one-large">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-large">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-large">
      上海
    </Checkbox>
    <br />
    <br />
    中
    <br />
    <Checkbox onChange={onChange} defaultChecked mold="one-middle">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-middle">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-middle">
      上海
    </Checkbox>
    <br />
    <br />
    小
    <br />
    <Checkbox onChange={onChange} defaultChecked mold="one-small">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-small">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} mold="one-small">
      上海
    </Checkbox>
    <br />
    <br />
    中
    <br />
    <Checkbox onChange={onChange} defaultChecked mold="two-middle">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} mold="two-middle">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} mold="two-middle">
      上海
    </Checkbox>
    <br />
    <br />
    小
    <br />
    <Checkbox onChange={onChange} defaultChecked mold="two-small">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} mold="two-small">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} mold="two-small">
      上海
    </Checkbox>
  </>,
  mountNode,
);
```
