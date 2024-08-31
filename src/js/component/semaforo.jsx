import React, { useState } from "react";

const Semaforo= () =>{

    const [lightOn,setLighton] = useState ("green")

    const selectedColor = (color) => {
        setLighton (color)
    }

    return (
        <>
         <main>

            <div className= "support">

            </div>

            <div className= "blackSquare">

                <div className={`redLight ${lightOn == "red" ? "glowing" : ""}`}
                    onClick={()=> selectedColor("red")}
                > </div>
                <div className={`yellowLight ${lightOn == "yellow" ? "glowing" : ""}`}
                    onClick= {()=> selectedColor("yellow")}
                ></div>
                <div className={`greenLight ${lightOn == "green" ? "glowing" : ""}`}
                    onClick={()=> selectedColor("green")}
                ></div>

            </div>











         </main>
        
        
        
        
        
        
        
        </>




    )
  

};

export default Semaforo;
