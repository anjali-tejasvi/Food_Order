import React  from 'react'
import {} from "@mui/material";
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";
function Header() {

  // useEffect(() => {
  //   const toggleMenu = document.querySelector(".toggleMenu");

  //   toggleMenu.addEventListener('click', () => {
  //     document.querySelector('.righMenu').classList.toggle('active');
  //   });
  // },[]);

 function toggleFun(){
  document.querySelector('.righMenu').classList.toggle('active');
 }

  return <header>

    {/* mui-icon */}
        <img src='https://static.vecteezy.com/system/resources/previews/005/906/492/non_2x/hot-fire-flame-burger-illustration-spicy-food-burger-template-emblem-burger-on-fire-3d-design-vector.jpg' alt=''  className='logo'/>

        <div className='inputBox'>
        <SearchRounded className= "searchIcon" />
        <input type="text" placeholder='Search' />
        </div>

        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <p className="cart_content">2</p>
        </div>

        <div className="profileContainer">
          <div className="imgBox">
            <img src="https://qph.fs.quoracdn.net/main-thumb-831089757-200-wxazeeszjtzyiveevivmuiucqdmxxusg.jpeg" alt="" 
            className="profilePic" />
          </div>

          <h2 className="userName">Anjali Tejasvi</h2>
        </div>


        <div className='toggleMenu' onClick={() => toggleFun()}>
          <BarChart className='toggleIcon' />
        </div>
        
    </header>;
}

export default Header