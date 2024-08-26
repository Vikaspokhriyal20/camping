import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router'
import Loader from '../UI/Loader'

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  if (navigation.state === 'loading') return <Loader/>
  

  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout
