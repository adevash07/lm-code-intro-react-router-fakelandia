import { Box, HStack, Image, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import FakeLandiaLogo from '../assets/fakeLogo.svg'

type Props = {}

const Header = (props: Props) => {
    return (
      <Box  className="home__header">
     <nav className="home__nav">
                      <HStack
                          bg="gray.100"
                            p="0rem 2rem"
                          justifyContent="space-between">
                    <Link as={RouterLink} to="/"
                            _active={{ color: "red", textDecoration: "underline" }}
                    >
                              <Image boxSize="150px" src={FakeLandiaLogo}
                               alt="FakeLandia" />
                
                          </Link>
                            <HStack spacing="2rem">
                        <Link as={RouterLink} to="/"
                           _active={{ color: "red", textDecoration: "underline" }} 
                        
                        >Home</Link>
                        <Link
                            _active={{ color: "red", textDecoration: "underline" }} as={RouterLink} to="/misdemeanours">Misdeameanours</Link>
                          <Link _active={{ color: "red", textDecoration: "underline" }} as={RouterLink} to="/confession">Confess your sins</Link>
                          </HStack>
                        </HStack>
        </nav>
        </Box>
  )
}

export default Header