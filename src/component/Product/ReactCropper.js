import React, { useState } from "react";
import { Input, Button } from "antd";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  FaCropAlt,
  FaRecycle,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { MdOutlineZoomIn, MdOutlineZoomOut } from "react-icons/md";
import { FaRegArrowAltCircleDown, FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaArrowDownUpAcrossLine, FaRegSquareCheck } from "react-icons/fa6";
import { CiLock, CiUnlock } from "react-icons/ci";
import { ImSwitch } from "react-icons/im";
const ReactCropper = () => {
  const [cropper, setCropper] = useState();
  const [cropData, setCropData] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
  });

  const handleCrop = () => {
    if (cropper) {
      const data = cropper.getData();
      setCropData(data);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <Cropper
          style={{ height: 400, width: "100%", marginLeft: "15px" }}
          initialAspectRatio={16 / 9}
          preview=".img-preview"
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          ref={(cropper) => setCropper(cropper)}
        />

<div className="gap-3 m-4 w-full md:w-3/4 lg:w-2/2">
          <Input
            placeholder="X"
            value={cropData.x}
            onChange={(e) =>
              setCropData({ ...cropData, x: parseFloat(e.target.value) || 0 })
            }
            className="mb-3 border-gray-400 rounded-lg text-lg w-3/4"
            suffix="px"
            addonBefore="X"
          />
          <Input
            placeholder="Y"
            value={cropData.y}
            onChange={(e) =>
              setCropData({ ...cropData, y: parseFloat(e.target.value) || 0 })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="px"
            addonBefore="Y"
          />
          <Input
            placeholder="Width"
            value={cropData.width}
            onChange={(e) =>
              setCropData({
                ...cropData,
                width: parseFloat(e.target.value) || 0,
              })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="px"
            addonBefore="Width"
          />
          <Input
            placeholder="Height"
            value={cropData.height}
            onChange={(e) =>
              setCropData({
                ...cropData,
                height: parseFloat(e.target.value) || 0,
              })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="px"
            addonBefore="Height"
          />
          <Input
            placeholder="Rotate"
            value={cropData.rotate}
            onChange={(e) =>
              setCropData({
                ...cropData,
                rotate: parseFloat(e.target.value) || 0,
              })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="deg"
            addonBefore="Rotate"
          />
          <Input
            placeholder="Scale X"
            value={cropData.scaleX}
            onChange={(e) =>
              setCropData({
                ...cropData,
                scaleX: parseFloat(e.target.value) || 1,
              })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="px"
            addonBefore="Scale X"
          />
          <Input
            placeholder="Scale Y"
            value={cropData.scaleY}
            onChange={(e) =>
              setCropData({
                ...cropData,
                scaleY: parseFloat(e.target.value) || 1,
              })
            }
            className="mb-3 border-gray-400 rounded-lg w-3/4"
            suffix="px"
            addonBefore="Scale Y"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-2 md:flex-col sm:flex-auto">
        {/* Button  */}
        <div className="flex text-left flex-wrap gap-2 cursor-pointer">
          <div
            className="mt-2 border bg-[#0dcaf0] p-2 rounded-md "
            onClick={handleCrop}
          >
            <FaCropAlt />
          </div>
          <div
            className="mt-2 border bg-[#0dcaf0] p-2 rounded-md"
            onClick={handleCrop}
          >
            <FaCropAlt />
          </div>
          <div className="mt-2 border bg-[#4dca88] p-2 rounded-md">
            <MdOutlineZoomIn />
          </div>
          <div className="mt-2 border bg-[#4dca88] p-2 rounded-md">
            <MdOutlineZoomOut />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FaRegArrowAltCircleDown />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FaRegArrowAltCircleUp />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FaRegArrowAltCircleLeft />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FaRegArrowAltCircleRight />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FiRefreshCw />
          </div>

          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <RiArrowLeftRightFill />
          </div>
          <div className="mt-2 ml-7 border bg-[#6c757d] text-white rounded-md flex flex-row">
            <div className="bg-[#565e64] text-lg mr-2 rounded-md p-1 ">
              16:4
            </div>
            <div className=" text-lg mr-2 rounded-lg p-1">4:4</div>
            <div className=" text-lg mr-2 rounded-lg p-1">1:1</div>
            <div className=" text-lg mr-2 rounded-lg p-1 ">Free</div>
          </div>
        </div>

        {/* other row Button  */}
        <div className="flex text-left flex-wrap gap-2 cursor-pointer">
          <div className="mt-2 border bg-[#0dcaf0] p-2 rounded-md ">
            <FaArrowDownUpAcrossLine />
          </div>
          <div className="mt-2 border bg-[#0dcaf0] p-2 rounded-md">
            <FaRegSquareCheck />
          </div>
          <div className="mt-2 border bg-[#4dca88] p-2 rounded-md">
            <FaRecycle />
          </div>
          <div className="mt-2 border bg-[#4dca88] p-2 rounded-md">
            <CiLock />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <CiUnlock />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FiRefreshCw />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <FaDownload />
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-2 rounded-md">
            <ImSwitch />
          </div>
        
          <div className="mt-2 border bg-[#fc5a69] text-white p-1 rounded-md  ">
            Get Cropped
          </div>

          <div className="mt-2 ml-2 border bg-[#6c757d] text-white rounded-md flex flex-row">
            <div className="bg-[#565e64] text-sm mr-2 rounded-md p-1  text-center ">
              VMO
            </div>
            <div className=" text-sm mr-2 rounded-lg p-1  text-center">
              VMO1
            </div>
            <div className=" text-sm mr-2 rounded-lg p-1  text-center">
              VMO1
            </div>
          </div>
        </div>
        {/* 3rd row  */}

        <div className="flex flex-row text-center gap-2 cursor-pointer w-full">
          <div className="mt-2 border bg-[#fc5a69] text-white p-1 rounded-md text-center px-3">
            160*9
          </div>
          <div className="mt-2 border bg-[#fc5a69] text-white p-1 rounded-mdtext-center px-3">
            320 * 180
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            Get Data
          </div>

          <div className="mt-2 border bg-[#fc5a69] text-white p-1 rounded-md text-center px-3">
            Get data
          </div>

          <div className="mt-2 border bg-[#4dca88] text-white p-1 rounded-md text-center px-3">
            Toogle
          </div>
        </div>

        {/* 4th row  */}

        <div className="flex flex-row text-center gap-2 cursor-pointer w-full">
          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            Set canvas data
          </div>

          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            Get Image data
          </div>
        </div>

        {/* 5th row  */}

        <div className="flex flex-row text-center gap-2 cursor-pointer w-full">
          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            Get Crop Box Data
          </div>

          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            0,0
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            100%
          </div>
          <div className="mt-2 border bg-[#6c757d] text-white p-1 rounded-md text-center px-3">
            180
          </div>
        </div>

        {/* End of button main div  */}
      </div>
    </>
  );
};

export default ReactCropper;
