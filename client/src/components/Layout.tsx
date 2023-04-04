import { Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

type Props = {
  
}

const Layout: React.FC<Props> = () => {
  return (
      <Container maxW="container.xl">
      <Header />
      <>
        <Outlet />
      </>
        </Container>
  )
}

export default Layout