---
order: 1
title:
  zh-CN: 日期格式和尺寸
---

## zh-CN

三种大小的输入框，若不设置，则为 default。

## en-US

```jsx
import { DatePicker } from 'ucomponent';
import { Space } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <>
    <Space direction="vertical">
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        size="large"
        onChange={onChange}
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        size="default"
        onChange={onChange}
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        size="small"
        onChange={onChange}
      />
    </Space>
    <br />
    <Space direction="vertical">
      <DatePicker
        size="large"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
      <DatePicker
        size="default"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
      <DatePicker
        size="small"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
    </Space>
    <br />
    <Space direction="vertical">
      <DatePicker
        size="large"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        disabled
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
      <DatePicker
        size="default"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        disabled
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
      <DatePicker
        size="small"
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
        disabled
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
    </Space>
  </>,
  mountNode,
);
```

```css
.ant-picker-cell .ant-picker-cell-inner:hover {
  background-color: #e6f7ff !important;
}
```
