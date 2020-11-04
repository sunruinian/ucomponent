---
order: 7
title:
  zh-CN: 适应文本高度的文本域
---

## zh-CN

高度随着文本的高度自动变高，也可以指定最小行数和最大行数

## en-US

```jsx
import { Input } from 'ucomponent';

const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <TextArea placeholder="适应文本高度的文本域" autoSize />
        <div style={{ margin: '24px 0' }} />
        <TextArea placeholder="适应文本高度的文本域" autoSize={{ minRows: 2, maxRows: 6 }} />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="适应文本高度的文本域"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
