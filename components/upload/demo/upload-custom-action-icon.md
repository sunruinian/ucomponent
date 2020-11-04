---
order: 4
title:
  zh-CN: 自定义交互图标
---

## zh-CN

使用 `showUploadList` 设置列表交互图标。

## en-US

```jsx
import { Upload, Button } from 'ucomponent';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  showUploadList: {
    showPreviewIcon: true,
    showDownloadIcon: true,
    showRemoveIcon: true,
    removeIcon: (
      <CloseOutlined
        style={{ top: '5px' }}
        onClick={e => console.log(e, 'custom removeIcon event')}
      />
    ),
  },
};

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <UploadOutlined /> 上传照片
    </Button>
  </Upload>,
  mountNode,
);
```
