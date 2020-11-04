---
order: 5
title:
  zh-CN: 复合型输入框
---

## zh-CN

复合型输入框

## en-US

```jsx
import { Input } from 'ucomponent';
import { Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

ReactDOM.render(
  <>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="http://" addonAfter=".com" defaultValue="默认域名" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="默认域名" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonAfter={<SettingOutlined />} defaultValue="默认域名" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="http://" suffix=".com" defaultValue="默认域名" />
    </div>
  </>,
  mountNode,
);
```
