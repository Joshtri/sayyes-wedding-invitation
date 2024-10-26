// import React from 'react'
import Layout from './Layout'
// import HeroSection from '../components/Home/HeroSection'
// import Features from '../components/Home/Features'
// import CustomerCarousel from '../components/CustomerCarousel'
import HomeSection from '../components/Home/HomeSection'
import KenapaSection from '../components/Home/KenapaSection'
import WhyBestChoice from '../components/Home/WhyBestChoice'
import Faq from '../components/Home/Faq'
import Katalog from '../components/Home/Katalog'
// import StatsSection from '../components/Home/StatsSection'
import FiturUndangan from '../components/Home/FiturUndangan'
import PesanSekarang from '../components/Home/PesanSekarang'


function HomePage() {
  return (
    <Layout>
        <HomeSection/>
        <WhyBestChoice/>
        <KenapaSection/>
        <Katalog/>
        {/* <StatsSection/> */}

        <FiturUndangan/>
        <PesanSekarang/>
        <Faq/>

        {/* <Features/> */}
        {/* <CustomerCarousel /> */}

    </Layout>
  )
}

export default HomePage