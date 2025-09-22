import React, { useRef } from 'react'

const Form = ({fetchweather}) => {
  
  const searchKey=useRef('')
  // const [key,setKey]=useState('')

  return (
    <div className='w-100 d-flex justify-content-center mt-3'>
        <input ref={searchKey} type="text" className='form-control mx-5' placeholder='Enter-country' />
        <input onClick={()=>fetchweather(searchKey.current.value)} type="button" value='search' className='btn ms-2 me-5 bg-dark text-white'/>
    </div>
  )
}

export default Form