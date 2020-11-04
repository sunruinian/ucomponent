---
order: 1
title:
  zh-CN: 可点击
---

## zh-CN

设置 `onChange` 后，Steps 变为可点击状态。

## en-US

```jsx
import { Steps } from 'ucomponent';

const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps current={current} onChange={this.onChange}>
          <Step title="步骤一" />
          <Step title="步骤二" />
          <Step title="步骤三" />
        </Steps>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
