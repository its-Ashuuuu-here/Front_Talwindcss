import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "../component/Product/ProductCard";
import ViewModeButton from "../component/ViewModeButton";
import { FaCircle } from "react-icons/fa6";
import { Checkbox, Rate } from "antd";
import ProductList from "../component/Product/ProductList";
import { Slider, InputNumber } from "antd";

const Products = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(99);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    categories: false,
    gameAccessories: false,
    bags: false,
    FlowerPot: false,
    Watch: false,
    Accessories: false,
  });
  const [iscolor, setIscolor] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const toggleColor = () => {
    setIscolor(!iscolor);
  };
  const toggleSelect = () => {
    setIsSelect(!isSelect);
  };

  const toggleSubMenu = (itemName) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const [viewMode, setViewMode] = useState("grid");

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const products = [
    {
      id: 1,
      title: "Note Daries ",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries",
      image:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries ",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries",
      image:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
    {
      id: 1,
      title: "Note Daries 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Description 1",
      price: 99.99,
      Reference: "2356",
    },
  ];

  const handleMinChange = (value) => {
    setMinValue(value);
  };

  const handleMaxChange = (value) => {
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-12">
      {/* Header with view mode buttons */}
      <div className="flex-1 flex items-center md:flex-row p-2">
        <div className="w-full flex md:ml-5 md:mr-5">
          <h1 className="text-3xl font-bold text-black md:text-4xl p-3">
            Products
          </h1>
        </div>
        <ViewModeButton
          viewMode={viewMode}
          onClickGrid={() => toggleViewMode("grid")}
          onClickList={() => toggleViewMode("list")}
        />
      </div>
      <hr className="w-full text-black md:mb-2 sm:mb-1" />

      {/* Main section start */}
      <div className="container mx-auto lg:p-2 lg:pt-5">
        <div className="flex flex-col lg:flex-row md:flex-col mt-0 gap-3">
          {/* Left side */}
          <div className="lg:w-[30%] lg:mt-0 md:w-full ">
            {/* Filter Section */}
            <div className="lg:w-full flex  bg-white">
              <div className="flex-1 border-gray-200 bg-white flex items-center border   ">
                <div className="w-[50%] flex  md:mr-5 md:mt-1">
                  <h1 className="text-xl md:text-2xl font-normal text-black  ml-3">
                    Filter
                  </h1>
                </div>
                <div className="md:w-[80%] p-4 text-right ">
                  <button className="bg-[#7258db] p-2 md:p-4 text-sm md:text-1xl text-white rounded-md px-4 md:px-4 py-2">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className=" lg:w-[30%] flex  mt-2 ">
              <div className="flex-1 md:flex-row items-center bg-white border ">
                <ul className="p-2 md:flex-row">
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("categories")}
                  >
                    <div
                      className="flex items-center justify-between text-white-900
                    flex-1 rounded-lg cursor-pointer group  "
                    >
                      <span className="text-lg font-normal ">Categories</span>
                      <div className="md:ml-28 text-right">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.categories ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md md:w-full" />
                      </li>
                    </ul>
                  </li>
                  {/* next list item */}
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("gameAccessories")}
                  >
                    <div className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group">
                      <span className="text-lg font-normal  ">
                        Game Accessories
                      </span>
                      <div>
                        <IoIosArrowDown className="text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.gameAccessories ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md w-[100%]" />
                      </li>
                    </ul>
                  </li>
                  {/* next */}
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("bags")}
                  >
                    <div className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group">
                      <span className="text-lg font-normal ">Bags</span>
                      <div className="md:ml-28">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.bags ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md w-[100%]" />
                      </li>
                    </ul>
                  </li>
                  {/* next */}
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("FlowerPot")}
                  >
                    <div className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group">
                      <span className="text-lg font-normal ">Flower Pot</span>
                      <div className="md:ml-28">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.FlowerPot ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md w-[100%]" />
                      </li>
                    </ul>
                  </li>
                  {/* next */}
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("Watch")}
                  >
                    <div className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group">
                      <span className="text-lg font-normal ">Watch</span>
                      <div className="md:ml-28">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.Watch ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md w-[100%]" />
                      </li>
                    </ul>
                  </li>
                  {/* next */}
                  <li
                    className="p-2 md:w-2/2"
                    onClick={() => toggleSubMenu("Accessories")}
                  >
                    <div className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group">
                      <span className="text-lg font-normal ">Accessories</span>
                      <div className="md:ml-28">
                        <IoIosArrowDown className="text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSubMenuOpen.Accessories ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2">
                        <input type="text" className="rounded-md w-[100%]" />
                      </li>
                    </ul>
                  </li>
                  {/* next */}
                </ul>
              </div>
            </div>

            {/* Select Size Section */}
            <div className="md:w-full border flex mt-2">
              <div className=" bg-white flex  border border-gray-300 md:flex-col w-full sm:flex-col ">
                <div className="flex text-left items-start text-white-900 rounded-lg cursor-pointer group">
                  <h5 className="text-1xl font-normal p-3 text-left">
                    Select Size
                  </h5>
                </div>

                <div className=" flex flex-row gap-3 mb-10 justify-center items-center m-3 font-semibold text-md ">
                  <button className="text-white-900 rounded-md  border w-[30%] cursor-pointer group ">
                    XS{" "}
                  </button>
                  <button className="text-white-900 rounded-md  border w-[30%] cursor-pointer group">
                    S{" "}
                  </button>
                  <button className="text-white-900 rounded-md  border w-[30%] cursor-pointer group">
                    M{" "}
                  </button>
                  <button className="text-white-900rounded-md  border w-[30%] cursor-pointer group">
                    L{" "}
                  </button>
                  <button className="text-white-900rounded-md  border w-[30%] cursor-pointer group">
                    XL{" "}
                  </button>
                </div>
              </div>
            </div>
            {/* Select color section */}
            <div className="border lg:w-full flex  mt-2">
              <div className="flex-1 md:flex-row items-center bg-white border-gray-300 ">
                <ul className="p-2 md:flex-row">
                  <li className="p-2 md:w-2/2" onClick={toggleColor}>
                    <div
                      className="flex items-center justify-between text-white-900
                    flex-1 rounded-lg cursor-pointer group  "
                    >
                      <span className="text-lg font-normal ">Select color</span>
                      <div className="md:ml-23 text-right">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal cursor-pointer   ${
                        iscolor ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <FaCircle className="text-[red] text-1xl mt-2  " />
                          Red
                        </div>
                      </li>
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <FaCircle className="text-[yellow] text-1xl mt-2  " />
                          Yellow
                        </div>
                      </li>
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <FaCircle className="text-[green] text-1xl mt-2  " />
                          Green
                        </div>
                      </li>

                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <FaCircle className="text-[black] text-1xl mt-2  " />
                          Black
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Select  */}
            <div className="border lg:w-full flex mt-2">
              <div className="flex-1 md:flex-row items-center bg-white border-gray-300">
                <div className="flex items-center justify-between text-white-900 flex-1 rounded-lg cursor-pointer group">
                  <span className="text-lg font-normal m-3">Select Range</span>
                  <div className="md:ml-23 text-right">
                    <IoIosArrowDown className="text-right text-2xl font-bold text-[#7258db] m-3" />
                  </div>
                </div>

                <div className="font-normal  md:flex-row flex  w-full gap-1  ">
                  <div className="flex flex-col items-center gap-1 m-3 mt-1 md:w-full">
                    <label className="text-left">Min:</label>
                    <InputNumber
                      min={0}
                      max={100}
                      defaultValue={0}
                      value={minValue}
                      onChange={handleMinChange}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1 m-3 mt-1 w-full">
                    <label className="text-left">Max:</label>
                    <InputNumber
                      min={0}
                      max={99}
                      defaultValue={100}
                      value={maxValue}
                      onChange={handleMaxChange}
                    />
                  </div>
                </div>
                <div className="  mt-2 items-center mb-2 m-2">
                  <Slider
                    range={{ draggableTrack: true }}
                    defaultValue={[0, 100]}
                    onChange={(values) => {
                      handleMinChange(values[0]);
                      handleMaxChange(values[100]);
                    }}
                    className=" text-2xl"
                  />
                </div>
              </div>
            </div>
            {/* Select rating  */}
            <div className="border lg:w-full flex  mt-2">
              <div className="flex-1 md:flex-row items-center bg-white border-gray-300 ">
                <ul className="p-2 md:flex-row">
                  <li className="p-2 md:w-2/2" onClick={toggleSelect}>
                    <div
                      className="flex items-center justify-between text-white-900
                    flex-1 rounded-lg cursor-pointer group "
                    >
                      <span className="text-lg font-normal ">
                        Select Rating
                      </span>
                      <div className="md:ml-23 text-right">
                        <IoIosArrowDown className=" text-right text-2xl font-bold text-[#7258db]" />
                      </div>
                    </div>
                    <ul
                      className={` font-normal   ${
                        isSelect ? "block" : "hidden"
                      }`}
                    >
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <Checkbox className=" text-1xl mt-2  ">
                            <Rate allowHalf defaultValue={5} />
                          </Checkbox>
                        </div>
                      </li>
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <Checkbox className=" text-1xl mt-2  ">
                            <Rate allowHalf defaultValue={4} />{" "}
                          </Checkbox>
                        </div>
                      </li>
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <Checkbox className=" text-1xl mt-2  ">
                            <Rate allowHalf defaultValue={3} />
                          </Checkbox>
                        </div>
                      </li>

                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <Checkbox className=" text-1xl mt-2  ">
                            <Rate allowHalf defaultValue={2} />
                          </Checkbox>
                        </div>
                      </li>
                      <li className="mt-2 ">
                        <div className="text-left  flex-row flex mt-2  gap-2 mb-2 ">
                          <Checkbox className=" text-1xl mt-2  ">
                            <Rate allowHalf defaultValue={1} />
                          </Checkbox>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Left side end */}
          </div>

          {/* Right */}
          {/* <div className="flex flex-col md:flex-row border w-full gap-3">

            <div
              className={`flex ${
                viewMode === "grid" ? "flex-wrap justify-around" : "flex-col"
              }`}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row md:w-full p-2">
            {/* Product Cards Section */}

            {viewMode === "grid" ? (
              <div
                className={`flex ${
                  viewMode === "grid" ? "flex-wrap justify-around" : "flex-col"
                }`}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    Reference={product.Reference}
                    description={product.description}
                    price={product.price}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="bg-white  p-2 md:w-full border  flex flex-col justify-between rounded-me shadow-sm  text-center mb-3">
                  {products.map((product) => (
                    <ProductList
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      Reference={product.Reference}
                      price={product.price}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right side end */}
        </div>
      </div>
    </div>
  );
};

export default Products;
