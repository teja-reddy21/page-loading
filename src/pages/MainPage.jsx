import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Collection from '../component/Collection'
import Footer from '../component/Footer'
import {Gents} from '../component/data'
import { Ladies } from '../component/data'
import { useState } from 'react'
import WomensCollection from '../component/WomensCollection'
function MainPage() {


  const [gentsFashion,setgentsFashion]=useState(Gents)
  const [ladiesFashion,setLadiesFashion]=useState(Ladies)


  console.log(Gents)

  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFashion={gentsFashion} />
          <WomensCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
      
    </div>
  )
}

export default MainPage