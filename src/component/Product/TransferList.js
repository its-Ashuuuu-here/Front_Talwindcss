import React, { useState } from 'react';
import { Transfer, Checkbox, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const initialData = [
  { key: '0', title: 'Pakistan' },
  { key: '1', title: 'Uk' },
  { key: '2', title: 'UAE' },
  { key: '3', title: 'Canada' },
  { key: '4', title: 'England' },
  { key: '5', title: 'London' },
  { key: '6', title: 'Toronto' },
  { key: '7', title: 'Jamaica' },
];

const TransferList = () => {
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleTransferChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  return (
    <div className='ml-10 justify-center items-center'>
    <Transfer
      dataSource={initialData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={handleTransferChange}
      onSelectChange={handleSelectChange}
      render={(item) => item.title}
      style={{ width: '100%' }}
    
    />


    </div>

  );
};

export default TransferList;
