import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Confession from "./pages/Confession"
import Home from "./pages/Home"
import Misdemeanours from "./pages/Misdemeanours"
import NotFound from "./pages/NotFound"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/confession" element={<Confession />} />
            <Route path="/misdemeanours" element={<Misdemeanours />} />

            <Route path="*" element={<NotFound />} />


          </Routes>
        </BrowserRouter>
      </Grid>
    </Box>
  </ChakraProvider>
)
