

import React from 'react'
import { useSelector } from 'react-redux'
export const Fitness=()=> {

   const data = useSelector((state)=>state.products)

   console.log(data);
  return (
    <div>Fitness</div>
  )
}

