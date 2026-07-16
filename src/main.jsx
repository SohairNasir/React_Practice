import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/card'
let card = [
  {id : 1 , 
   image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVoQDQGiBS3IEJQrXv4taMG-2-ISbs07ryUxkL3dtGc25couOnIU52RpR&s=10',
   title : 'asthertic profile image',
   price: 7770 ,
   discountPrice: `${300} %`,
  }
  ,
  {id : 2 , 
   image : 'https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-illustration-of-gaming-guy-wearing-headphones-and-sitting-with-computer-vector-png-image_6833864.png',
   title : 'coder profile image',
   price: 70 ,
   discountPrice: `${0} %`,
  }
]

createRoot(document.getElementById('root')).render(

<StrictMode>
  <div style={{display:'flex' , flexDirection:'row' , gap:'10px' , flexWrap:'wrap   ' }}>
{card.map(({ image ,title, price , discountPrice , id})=>{

   return <Card key={id} image = {image} title ={title} price = {price} discountPrice = {discountPrice} />
  })}

    </div>
   </StrictMode>
)
