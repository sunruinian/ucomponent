---
order: 1
title:
  zh-CN: 拖拽上传
---

## zh-CN

把文件拖入指定区域，完成上传，同样支持点击上传。

设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。

## en-US

```jsx
import { Upload } from 'ucomponent';
import { message } from 'antd';
import { ContainerOutlined, CloseOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  showUploadList: {
    removeIcon: (
      <CloseOutlined
        style={{ top: '5px' }}
        onClick={e => console.log(e, 'custom removeIcon event')}
      />
    ),
  },
};

ReactDOM.render(
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <ContainerOutlined />
    </p>
    <p className="ant-upload-text">点击或将文件拖拽到这里上传</p>
    <p className="ant-upload-hint">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
  </Dragger>,
  mountNode,
);
```
