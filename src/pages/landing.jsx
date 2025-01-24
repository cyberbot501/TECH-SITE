import React from 'react'
import Nav from '../layouts/nav/nav'
import Hero from '../componets/landing/hero'
import Heroii from '../componets/landing/heroii'
import Advert from '../componets/landing/advert'
import Sadvert from '../componets/landing/sadvert'
import Dadvert from '../componets/landing/dadvert'

export default function landing() {
  return (
    <div>
        <Nav />
        <Hero  />
        <Heroii />
        <Advert />
        <Sadvert />
        <Dadvert />
    </div>
  )
}
