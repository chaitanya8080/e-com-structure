

import React from 'react'
import { useEffect } from 'react'

import {handleLaoding, storeData, handleError} from "../Redux/products/action";

import { useDispatch } from 'react-redux';
export const Store= () =>{

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(handleLaoding());
    fetch("http://localhost:8080/products")
    .then((res)=>res.json()).then((res)=>{
      dispatch(storeData(res))
    }).catch(()=>dispatch(handleError()))

   
  },[])


  return (
    <div>Store</div>
  )
}

