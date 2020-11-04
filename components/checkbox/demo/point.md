---
order: 2
title:
  zh-CN: 不可点
---

## zh-CN

多选按钮组合不可点击为“官方添加方式直接加 disabled”

## en-US

```jsx
import { Checkbox } from 'ucomponent';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(
  <>
    <br />
    <Checkbox onChange={onChange} defaultChecked disabled mold="one-large">
      北京
    </Checkbox>
    <Checkbox onChange={onChange} disabled mold="one-large">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} disabled mold="one-large">
      上海
    </Checkbox>
    <Checkbox onChange={onChange} disabled mold="one-large">
      深圳
    </Checkbox>
    <br />
    <br />
    <Checkbox onChange={onChange} defaultChecked disabled mold="two-middle">
      北京市
    </Checkbox>
    <Checkbox onChange={onChange} disabled mold="two-middle">
      天津
    </Checkbox>
    <Checkbox onChange={onChange} disabled defaultChecked mold="two-middle">
      上海
    </Checkbox>
    <Checkbox onChange={onChange} disabled mold="two-middle">
      深圳
    </Checkbox>
  </>,
  mountNode,
);
```
