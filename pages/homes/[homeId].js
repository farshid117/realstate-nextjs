import React from 'react'
import { useRouter } from 'next/navigation'

function SingleHome() {

    const router = userRouter()
    console.log("router: ", router.query);
    
  return (
    <div>SingleHome</div>
  )
}

export default SingleHome