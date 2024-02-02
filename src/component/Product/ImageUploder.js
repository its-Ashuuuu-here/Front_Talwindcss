import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';

const { Dragger } = Upload;

const ImageUploder = () => {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
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
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} className="  rounded-md text-center  ">

      <p className="text-4xl text-gray-500 mt-5">
        <InboxOutlined />
      </p>
      <p className="text-2xl mb-10 mt-2 text-gray-600">Click or drag file to this area to upload</p>
    
    </Dragger>
  );
}

export default ImageUploder;
