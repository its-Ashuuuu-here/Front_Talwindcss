import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const SideBar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const toggleSubMenu = () => {
  //   setIsSubMenuOpen(!isSubMenuOpen);
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (submenu) => {
    setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
  };

  return (
    <div className="flex">
      <div
        className={` bg-[#7557d9] w-${
          isMenuOpen ? "60" : "35"
        } p-3  flex flex-col text-white mt-4 ml-1 md:ml-5 mb-6 md:mb-30 transition-all rounded-2xl max-w-64 h-auto md:w-35  `}
      >
        <div className="flex items-center gap-2 px-1 py-3 cursor-pointer text-center ml-4">
          <MdOutlineShoppingBag fontSize={24} />
          <span className="text-neutral-100 text-lg">e-Bazar</span>
        </div>
        <ul className={`pl-8 pb-4 ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-white-900 rounded-lg hover:no-underline text-yellow-200 hover:text-yellow-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <div
              className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group"
              onClick={() => toggleSubMenu("product")}
            >
              <span className="group-hover:text-yellow-200">
                <Link
                  to="/products"
                  className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
                >
                  Product
                </Link>
              </span>
              {activeSubMenu === "product" ? <BsArrowUpShort /> : <BsArrowDownShort />}
            </div>
            <ul
              className={`pl-4 font-normal ${
                activeSubMenu === "product"? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/Productadd"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
                  Product Add
                </Link>
              </li>
              <li>
                <Link
                  to="/Productdetail"
                  className="text-white pb-5 text-md hover:text-yellow-200 hover:no-underline"
                >
                  Product Detail
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/cartdetail"
              className="flex items-center p-2  text-md text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
            >
              Cart Detail
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
            >
              CheckOut Detail
            </Link>
          </li>
          <li>
            <Link
              to="/Categories"
              className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
            >
              Categories List
            </Link>
          </li>

          <li>
            <div
              className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group"
              onClick={() => toggleSubMenu("order")}
            >
              <span className="group-hover:text-yellow-200">
                <Link
                  to="/orderlist"
                  className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
                >
                  Order
                </Link>
              </span>
              {activeSubMenu === "order" ? <BsArrowUpShort /> : <BsArrowDownShort />}
            </div>
            <ul
              className={`pl-4 font-normal ${
                activeSubMenu === "order" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/order"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
                  Order Detail 
                </Link>
              </li>
              <li>
                <Link
                  to="/orderinvoice"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
                  Order Invoivce
                </Link>
              </li>
            </ul>
          </li>

            <li>
            <div
              className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group"
              onClick={() => toggleSubMenu("customer")}
            >
              <span className="group-hover:text-yellow-200">
                <Link
                 to="/customer"
                  className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
                >
                  Customer
                </Link>
              </span>
              {activeSubMenu === "customer" ? <BsArrowUpShort /> : <BsArrowDownShort />}
            </div>
            <ul
              className={`pl-4 font-normal ${
                activeSubMenu === "customer" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/customerdetails"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
                Details
                </Link>
              </li>
             
            </ul>
          </li> 

          {/* Inventory  */}
          <li>
            <div
              className="flex items-center justify-between text-white-900 rounded-lg cursor-pointer group"
              onClick={() => toggleSubMenu("inventory")}
            >
              <span className="group-hover:text-yellow-200">
                <Link
                 to="/inventorylist"
                  className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
                >
                 Inventory
                </Link>
              </span>
              {activeSubMenu === "inventory" ? <BsArrowUpShort /> : <BsArrowDownShort />}
            </div>
            <ul
              className={`pl-4 font-normal ${
                activeSubMenu === "inventory" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/departments"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
                Department
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
               Suppliers
                </Link>
              </li>
              <li>
                <Link
                  to="/purchaseitem"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
               Purchase Item
                </Link>
              </li>
              <li>
                <Link
                  to="/returnitem"
                  className="text-white pb-5 hover:text-yellow-200 hover:no-underline"
                >
             Return Item 
                </Link>
              </li>
             
            </ul>
          </li> 
          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-white-900 rounded-lg hover:text-yellow-200 hover:no-underline group"
            >
              Store locator
            </Link>
          </li>
        </ul>

        <div
          onClick={toggleMenu}
          className={`cursor-pointer justify-items-end mt-2 md:mt-20 ml-2 md:ml-10 h-${
            isMenuOpen ? "10" : "10"
          } transition-all flex items-center rounded-3xl p-2`}
        >
          {isMenuOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
