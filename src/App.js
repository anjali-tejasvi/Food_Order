import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './MenuCard';
import {MenuItems,Items} from './components/Data';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';
import { useStateValue } from './components/StateProvider';


function App() {

  //Main dish state
  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === "buger01")
  )

  const [{cart} ,dispatch] = useStateValue()
useEffect(() => {
  const menuLi = document.querySelectorAll('#menu li');
  console.log(menuLi);


function setMenuActive(){
  menuLi.forEach(n => n.classList.remove("active"));
  this.classList.add("active");
}


  menuLi.forEach((n) => n.addEventListener("click",setMenuActive));

  //MenuCard Active toggle
  const menuCards= document
  .querySelector('.rowContainer')
    .querySelectorAll(".rowMenuCard");

      function setMenuCardActive(){
        menuCards.forEach(n => n.classList.remove("active"));
        this.classList.add("active");
      }

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
},[isMainData, cart]);

//set main items on filter
const setData = (itemId) => {
  setMainData(Items.filter((element) => element.itemId === itemId))
}

  return (
    <div className="App">

      {/* Header Section */}
    <Header />
    







      {/* Main Container */}

      <main>
        <div className="mainContainer">
          {/* Banner*/}
          <div className="Banner">
          <img src="https://i.pinimg.com/originals/bb/4a/44/bb4a440abf2ef89e25f5ff64b7034c6d.jpg" alt="" 
               className="deliveryPic" /> 
            <BannerName name={"Anjali "} discount={"19"} link={"#"} />

          </div>
        </div>

          {/* dishContainer */}
          <div className="dishContainer">
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className='rowContainer'>

                {
                  MenuItems && MenuItems.map(data => (
                    <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard imgSrc = {data.imgSrc} name={data.name}
                       isActive = {data.id === 1 ? true : false}
                    />
                   </div>
                  ))
                }
            </div>
            <div className='dishitemContainer'>
              {
                isMainData && isMainData.map(data=> (
                  <ItemCard 
                  key={data.id}
                  itemId = {data.id}
                  imgSrc ={data.imgSrc}  
                  name={data.name} 
                  ratings={data.ratings} 
                  price={data.price}
                />
                ))
              }
               </div>
              </div>
        <div className="righMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
          <div></div>
          ) : (
            <div className='cartCheckOutContainer'>
            <SubMenuContainer name={"Carts Items"} />
              <div className='cartContainer'>
                <div className='cartItems'>
                  {
                    cart && cart.map(data => (
                      <CartItem 
                      key={data.id}
                      itemId ={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price} />
                    ))
                  }
                </div>
              </div>
              <div className='totalSection'>
                <h3>Total</h3>
                <p><span>$ </span>45.9
                </p>
              </div>
              <button className='checkOut'>Check out</button>
            </div>
         
          )
        }

      </div>
          
      </main>


      {/* Bottom menu */}
      <div className="bottomMenu">
      <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon = {<HomeRounded /> } />
           {/* prettier-ignore */}
           <MenuContainer link={'#'} icon = {<Chat /> } />
            {/* prettier-ignore */}
          <MenuContainer link={'#'} icon = {<AccountBalanceWalletRounded /> } />
           {/* prettier-ignore */}
           <MenuContainer link={'#'} icon = {<Favorite /> } />
            {/* prettier-ignore */}
          <MenuContainer link={'#'} icon = {<SummarizeRounded /> } />
           {/* prettier-ignore */}
           <MenuContainer link={'#'} icon = {<Settings /> } />

           <div className="indicator"></div>
      </ul>
    </div>

    </div>
  );
}

export default App;