import React from 'react'
import Nav from '../layouts/nav/nav'
import Hero from '../componets/landing/hero'
import Heroii from '../componets/landing/heroii'
import Advert from '../componets/landing/advert'
import Sadvert from '../componets/landing/sadvert'

export default function landing() {
  return (
    <div>
        <Nav />
        <Hero  />
        <Heroii />
        <Advert />
        <Sadvert />
    </div>
  )
}
