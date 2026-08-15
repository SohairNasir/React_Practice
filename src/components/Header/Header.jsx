import React, { useState , createContext, useContext} from 'react'
import './Header.css'
import Feacture from '../Feacture/Feacture'
import ThemeContext from '../ThemeContext/ThemeContext.jsx'


const Header = () => {

  let {theme , setTheme} = useContext(ThemeContext)    
    console.log(theme)

  return (
<>
    <ul className='nav-con'>
        <li>home</li>
        <li>about us</li>
        <li>settings</li>
        <li>contact</li>
    </ul>

    <div>
      <ul className='nav-con'>
        <li 
          onClick={()=>{
          setTheme('dark')
        }}
         className={theme}
         >dark</li>
        
        <li 
        onClick={()=> setTheme('light')}
         className={theme}
         >light</li>
      </ul>
    </div>

< Feacture />

</>
  )
}

export default Header