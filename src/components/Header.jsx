import React from 'react'

function Header() {
  return (
    <div className='nav'>
        <div className='logo'>
            <a href="https://www.pizzahut.com/"><img src="https://www.pizzahut.com/assets/w/images/Logo_PH_Retro.png"
                width="60px" height="45px"></img></a>
        </div>
        <div className='dAndM'>
            <div><a href="https://www.pizzahut.com/deals">Deals</a></div>
            <div className='dropDown'>
                <button className='menu'>Menu</button>
                <div className='menuItems'>
                    <a href="">Pizza</a>
                    <a href="">Wings</a>
                </div>
            </div>
        </div>
        <div className='signIn'>
            <div className='sIImg'>
                <img id="loginImg" src="https://st4.depositphotos.com/21557188/23286/v/950/depositphotos_232864112-stock-illustration-simple-person-icon-linear-symbol.jpg"
                    width="50px" height="50px"></img>
            </div>
            <div className='hutSign'>
                <div className='hut'>HUT REWARDS</div>
                <div>Sign In</div>
            </div>
        </div>
        <div className='shoppingC'>
            <div className='cart'>
                <div className='amount'>0</div>
                <img src="https://www.pizzahut.com/assets/w/images/Cart_M.png"
                    height="30px" width="35px"></img>
            </div>
            <div>"$0.00"</div>
        </div>
    </div>
  )
}

export default Header
