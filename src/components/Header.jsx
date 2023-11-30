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
                <img id="loginImg" src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg"
                    width="25px" height="25px"></img>
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
