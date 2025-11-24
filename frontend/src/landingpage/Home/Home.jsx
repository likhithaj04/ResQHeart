import React from 'react'
import Hero from './Hero'
import Rescue from './Rescue'
import Stats from './Stats';
import  stray1 from '../../assets/stray1.webp';
import  stray2 from '../../assets/stray 2.jpg';
import  stray3 from '../../assets/stray3.avif';
import  stray4 from '../../assets/stray4.webp';
import  stray5 from '../../assets/pawprint.webp';
import adoption1 from '../../assets/adoption1.webp';
import adoption2 from '../../assets/adoption2.jpg';
import adoption3 from '../../assets/adoption3.jpg';
import adoption4 from '../../assets/adoption4.jpg';
import About from './AboutPeek'
import review1 from '../../assets/review1.jpg';
import review2 from '../../assets/review2.jpg';
import review3 from '../../assets/review3.jpg';
import review4 from '../../assets/adoption3.jpg'

import AdoptionSteps from './AdoptionSteps';
import Review from './Review';

export default function Home() {
  return (
    <div>
        <Hero />
        <Rescue images={[stray1,stray2,stray3,stray4,stray5]}/>
        <AdoptionSteps images={[adoption1,adoption2,adoption3,adoption4]}/>
        <About images={[adoption1,adoption2]}/>
        <Review images={[review1,review2,review3,review4]}/>
        <Stats/>
    </div>
  )
}
