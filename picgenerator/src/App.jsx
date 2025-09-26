import React from 'react'
import Picgen from './component/Picgen'

const App = () => {
  return (
    <div className='  '>
         <h1 className='text-center mt-[10px] text-3xl text-white '>Generate Pic</h1>
     
      <div className='flex justify-center'>
 <Picgen/>
      </div>
     </div>
  )
}

export default App