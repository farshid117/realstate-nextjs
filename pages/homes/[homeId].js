import React from 'react'
import { useRouter } from 'next/router'; 

 function SingleHome() {

    const route = useRouter()
    console.log("router: ", route.query);
    
  return (
    <div>SingleHome Details Page</div>
  )
}

export default SingleHome