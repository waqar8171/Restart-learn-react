import React, { useState } from "react";
import Menu from "./MenuApi.jsx";
import MenuCard from "./MenuCard";
import "./style.css";
import Navebar from "./Navebar.jsx";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];

console.log(uniqueList);

const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] =useState(uniqueList)

  const filterItem = (category) => {

if(category==="All"){
  setMenuData(Menu)
  return
}


    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
     
    <Navebar  filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturants;
