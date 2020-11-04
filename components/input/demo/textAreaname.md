---
order: 8
title:
  zh-CN: 适应文本高度的文本域
---

## zh-CN

字数限制的文本域

## en-US

```jsx
import { Input } from 'ucomponent';

const { TextArea } = Input;

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <>
        <TextArea placeholder="限制3个字" autoSize maxLength={3} />
        <br />
        <br />
        <TextArea placeholder="限制10个字" maxLength={10} autoSize={{ minRows: 2, maxRows: 6 }} />
        <br />
        <br />
        <TextArea maxLength={10} placeholder="限制10个字" autoSize={{ minRows: 3, maxRows: 5 }} />
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
