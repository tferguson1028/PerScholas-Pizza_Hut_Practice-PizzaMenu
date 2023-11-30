import React from 'react'

function Header() {

    return ( 
    <div className='nav'>
        <div className='navLf'>
            <div className='logo'>
                <a href="https://www.pizzahut.com/"><img src="https://www.pizzahut.com/assets/w/images/Logo_PH_Retro.png"
                    width="60px" height="45px"></img></a>
            </div>
            <div className='dAndM'>
                <div className='deal'>Deals</div>
                <div className='dropDown'>
                    <button className='menu'>Menu</button>
                    <div className='menuItems'>
                        <a href="">Pizza</a>
                        <a href="">Wings</a>
                        <a href="">Sides</a>
                        <a href="">Pasta</a>
                        <a href="">Desserts</a>
                        <a href="">Drinks</a>
                        <a href="">Dips</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='navRt'>
            <div className='signIn'>
                <div className='sIImg'>
                    <img id="loginImg" src="https://st4.depositphotos.com/21557188/23286/v/950/depositphotos_232864112-stock-illustration-simple-person-icon-linear-symbol.jpg"
                        width="50px" height="50px"></img>
                </div>
                <div className='hutSign'>
                    <div className='hut'>HUT REWARDS</div>
                    <div className='si'>Sign In</div>
                </div>
            </div>
            <div className='shoppingC'>
                <div className='cart'>
                    <div className='amount'>0</div>
                    <div  className='shop'><img src="https://www.pizzahut.com/assets/w/images/Cart_M.png"
                        height="30px" width="35px"></img>
                    </div>
                </div>
                <div className='total'>$0.00</div>
            </div>
        </div>
    </div>

  )
}

export default Header
