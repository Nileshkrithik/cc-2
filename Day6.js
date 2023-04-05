import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"Lee",price:"3450",image:<div id="fru1"><img src="https://images3.alphacoders.com/218/thumbbig-218185.webp" alt=" "/></div>},
               {id:2,name:"Virat",price:"2490",image:<div id="fru2"><img src="https://images4.alphacoders.com/150/thumbbig-150724.webp" alt=" "/></div>},
               {id:3,name:"Dhoni",price:"6440",image:<div id="fru3"><img src="https://images4.alphacoders.com/298/thumbbig-298368.webp" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} . POSTER: {fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div>
    <h1 id="HEAD">DAY 6 LIST OF THE POSTER OF PLAYER</h1><br/>
        {dispmenu}
    </div>
  )
}