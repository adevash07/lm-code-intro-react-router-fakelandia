import { Box,  Heading,  Text, VStack,  } from '@chakra-ui/react'



type Props = {}

const Home = (props: Props) => {
  return (
      <Box className="home">
          
              <Box className="home__content">
                 
                  <Box mt="4" className="home__body">
                      <VStack spacing="2rem" className="home__body__content">
                          <VStack spacing="2rem" className="home__body__content__title">
                              <Heading as="h1" size="4xl">Welcome to FakeLandia</Heading>
                              <Heading as="h2" size="2xl">The land of harmony and peace</Heading>
                          </VStack>
                          <VStack spacing="4rem"
                          className="home__body__content__description">
                              <Text>
                                  Here in FakeLandia, we are all equal. We are all one. We are all
                                  brothers and sisters. 

                                  We are all FakeLandians.
                                  
                                  In line with this, we have a few rules and regulations that we 
                                  would like you to follow.
                              </Text>

                              <Text>
                                  Here you can browse through the list of misdemeanours committed by
                                  FakeLandians. You can also confess your sins and let justice take
                                  its course.
                                  
                              </Text>
                              

                                </VStack>  
                          </VStack>    
                    </Box>
              </Box>
   
      </Box>
    
  )
}

export default Home