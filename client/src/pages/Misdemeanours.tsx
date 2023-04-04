import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Misdemeanours = (props: Props) => {
  return (
      <Box className="home__misdemeanours">
          <Heading
              as="h3"
          
              className="home__misdemeanours__title"> Welcome to Misdemeanour Central</Heading>
          


     </Box>
  )
}

export default Misdemeanours