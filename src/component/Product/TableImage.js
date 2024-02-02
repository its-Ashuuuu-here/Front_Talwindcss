import React from 'react';
import { Upload, Input } from 'antd';
import ColorPicker from '../ColorPicker'; // Import your ColorPicker component

const TableImage = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // Replace this with your actual upload endpoint
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="overflow-x-auto border w-full lg:w-full mx-auto">
      <table className="text-left text-sm font-light border-collapse bg-white w-full">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr className='text-center'>
            <th scope="col" className="py-2 text-center">Product </th>
            <th scope="col" className="py-2 text-center">Product Tag Name</th>
            <th scope="col" className="py-2 text-center">Color</th>
            <th scope="col" className="py-2 text-center">Price</th>
            <th scope="col" className="py-2 text-center">Payment</th>
            <th scope="col" className="py-2 text-center">Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap ">
              <Upload {...props}
              name="avatar"
              listType="picture-card"
              className="avatar-uploader text-xl font-semibold"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              
              >
               Upload 

              </Upload>


            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-48" placeholder="Product Name" />
            </td>
            <td className="whitespace-nowrap ">
              <ColorPicker defaultColor="gray" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Price" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Payment" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Size" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap ">
              <Upload {...props}
              name="avatar"
              listType="picture-card"
              className="avatar-uploader text-xl font-semibold"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              
              >
               Upload 

              </Upload>


            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-48" placeholder="Product Name" />
            </td>
            <td className="whitespace-nowrap ">
              <ColorPicker defaultColor="gray" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Price" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Payment" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Size" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap ">
              <Upload {...props}
              name="avatar"
              listType="picture-card"
              className="avatar-uploader text-xl font-semibold"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              
              >
               Upload 

              </Upload>


            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-48" placeholder="Product Name" />
            </td>
            <td className="whitespace-nowrap ">
              <ColorPicker defaultColor="gray" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Price" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Payment" />
            </td>
            <td className="whitespace-nowrap ">
              <Input type="text" className="rounded-lg border w-full lg:w-32" placeholder="Size" />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default TableImage;
