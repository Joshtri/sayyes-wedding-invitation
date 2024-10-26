import React from 'react'
import CustomNavbar from '../components/Common/CustomNavbar'


function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <main className="flex-grow">
            {children}
        </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout