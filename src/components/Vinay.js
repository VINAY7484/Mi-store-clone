import React from 'react'
import Vinay from "./Vinay.js"
//import "../styles/Videos.css"



const Videos = ({videos}) => {
    return (
        <div className="videos">
         {
             videos.map((item,index)=>(
                <Vinay  index={index} key={item.image} image={item.image} name={item.name}/>
             ))
         }
         <div>
            this is my code
         </div>
   </div>

    );
}

export default Videos