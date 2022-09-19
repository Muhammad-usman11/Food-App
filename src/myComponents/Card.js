import React from 'react'

export default function Card( {menuData} ) {
  return (
    <>
        <div className="section py-12 px-0">    
            
            {
                menuData.map((element) =>{
                    const {id, image, name, price, description, category } = element

                    return(
                        <>
                            <div key={id} className="card-sec bg-red-300  py-9 px-0 w-[500px] h-[400px] mt-5 ml-8 ">
                                <div className="card-body pl-4">
                                    <h2> {id} </h2>
                                    <span> {category} </span>
                                    <h1> {name} </h1>
                                    <p> {description} </p>
                                    <span>Read</span>
                                    <img src= {image}  alt="" className="h-[100px] w-[450px] " />
                                    <span> {price} </span> <br />
                                    <span>Order Now</span>

                                </div>
                            </div>
                        
                        </>
                    )
                })

                
            }
            
            

            

            











        </div>
    
    
    
    
    </>
  )
}
