import React from 'react'

function Header() {
  return (
    <div className='header-section'>
        <div className='left'>
            <div>
                <h1 className='title'>LifeStyle</h1>
            </div>
        </div>
         <div className='center'>
            <ul>
                <li>Womens</li>
                  <li>Mens</li>
                    <li>Kids</li>
                    <li>Beauty</li>
            </ul>
         </div>
         <div className='search-bar'>
            <input type='text' placeholder='search...'/> 
         </div>
          <div className='right'>
            SignUp/SignIn
            <div className='cart'>Cart</div>
          </div>
    </div>
  )
}

export default Header