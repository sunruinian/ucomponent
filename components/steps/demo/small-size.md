---
order: 3
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

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
        <Steps size="small" current={1}>
          <Step title="步骤一" />
          <Step title="步骤二" />
          <Step title="步骤三" />
        </Steps>
        <br />
        <Steps size="small" current={current} onChange={this.onChange}>
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
