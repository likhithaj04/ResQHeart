import React from 'react'
import Hero from '../About/Hero'
import Info from '../About/Info'
import Mission from '../About/Mission'

import card1 from '../../assets/Hero/feed.jpeg';
import card2 from '../../assets/Hero/adopt.webp' ;
import card3 from '../../assets/Hero/shelter.avif';

export default function Home() {
  

  return (
    <>
    <Hero/>
    <Info images={[card1,card2,card3]}/>
    <Mission/>
    </>
  )
}
