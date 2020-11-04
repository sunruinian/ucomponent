---
order: 0
title:
  zh-CN: 基本形式
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

```jsx
import { DatePicker } from 'ucomponent';
import { Space } from 'antd';

const { RangePicker } = DatePicker;

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
        onChange={onChange}
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        onChange={onChange}
        picker="week"
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        onChange={onChange}
        picker="month"
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        onChange={onChange}
        picker="quarter"
      />
      <DatePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        onChange={onChange}
        picker="year"
      />
    </Space>
    <br />
    <Space direction="vertical" size={12}>
      <RangePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
      />
      <RangePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        showTime
      />
      <RangePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        picker="week"
      />
      <RangePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        picker="month"
      />
      <RangePicker
        dateRender={current => {
          return <div className="ant-picker-cell-inner">{current.date()}</div>;
        }}
        picker="year"
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
