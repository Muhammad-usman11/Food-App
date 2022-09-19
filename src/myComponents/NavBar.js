import React from 'react'

export default function NavBar( {filterItem, menuList} ) {
  return (
    <div>

      <nav className="text-center" >
        {
          menuList.map((e)=>{
            return(
              <>
                <button onClick={()=> filterItem(e)}
                  className="ml-7 uppercase font-semibold text-xl" >
                  {e}
                </button>
              </>
            )
          })
        }

      </nav>


        
    </div>
  )
}
