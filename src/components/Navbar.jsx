




import React from 'react'
import { Flex ,Image, Text, Spacer} from '@chakra-ui/react';

import {Link} from "react-router-dom"

function Navbar() {
  return (

   <Flex background='teal' justifyContent='center' p={3}>
         <Image   borderRadius='full'boxSize='3rem'src='https://bit.ly/dan-abramov'alt='Dan Abramov' marginLeft={"1rem"}/>
         <Spacer></Spacer>
         <Link to="/"><Text color={"white"} px={2} py={2}>Home</Text>  </Link>
         <Spacer></Spacer>
         <Link to="/fitness"><Text color={"white"} px={2} py={2}>Fitness</Text></Link>
         <Spacer></Spacer>
         <Link to="/care"><Text color={"white"} px={2} py={2}>Care</Text></Link>
         <Spacer></Spacer>
         <Link to="/products"><Text color={"white"} px={2} py={2}>Shop</Text></Link>
         <Spacer></Spacer>
         <Link to="/login"><Text color={"white"} px={2} py={2}>Login</Text></Link>
         <Link to="/signIn"><Text color={"white"} px={2} py={2}>SignIn</Text></Link>
       
         <Spacer></Spacer>
         <Link to="/cart"><Text color={"white"} px={2} py={2}>Cart</Text></Link>
         <Spacer></Spacer>
   </Flex>
  )
}

export default Navbar