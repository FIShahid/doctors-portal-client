import React from 'react'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'
import TreatmentHero from './TreatmentHero'

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TreatmentHero></TreatmentHero>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home