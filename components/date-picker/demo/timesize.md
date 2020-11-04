---
order: 2
title:
  zh-CN: 时间格式和尺寸
---

## zh-CN

三种大小的输入框，若不设置，则为 default。

## en-US

```jsx
import { TimePicker } from 'ucomponent';
import { Space } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

ReactDOM.render(
  <>
    <Space direction="vertical">
      <TimePicker size="large" />
      <TimePicker size="default" />
      <TimePicker size="small" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <TimePicker size="large" defaultValue={moment('00:00:00', 'HH:mm:ss')} />
      <TimePicker size="default" defaultValue={moment('00:00:00', 'HH:mm:ss')} />
      <TimePicker size="small" defaultValue={moment('12:08', format)} format={format} />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <TimePicker size="large" disabled />
      <TimePicker size="default" disabled />
      <TimePicker size="small" disabled />
    </Space>
  </>,
  mountNode,
);
```
