
import './App.css';
import Card from './myComponents/Card';
import NavBar from './myComponents/NavBar';
import menu from './myComponents/MenuApi';
import { useState } from 'react';



const uniqueList = [
  ...new Set ( menu.map((element) => {
    return element.category
  }) ) ,
  "All",
]

function App() {


  const [ menuData, setMenuData ] = useState(menu);
  const [ menuList, setMenuList ] = useState(uniqueList)


  const filterItem = (category) =>{
    if (category === "All") {
      setMenuData(menu)
      return;
    }
    const updateList = menu.filter((element) => {
      return element.category === category
    } )
    setMenuData(updateList)

  }

  return (
    <>
      

      <NavBar filterItem={filterItem} menuList={menuList}  />
      <Card menuData={menuData} />










    </>
  );
}

export default App;
