import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext/ThemeContext'

const Feacture = () => {

  let {theme} = useContext(ThemeContext)

  return (


    <div>
        this my device theme : {theme}
    </div>


  )
}

export default Feacture