import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'
import TreatmentHero from './TreatmentHero'

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TreatmentHero></TreatmentHero>
            
        </div>
    )
}

export default Home