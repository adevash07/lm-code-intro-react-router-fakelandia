import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Confession from "./pages/Confession";
import Home from "./pages/Home";
import Misdemeanours from "./pages/Misdemeanours";
import NotFound from "./pages/NotFound";
import { CrimesProvider } from "./state/crimesProvider";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CrimesProvider>
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='misdemeanours' element={<Misdemeanours />} />
                <Route path='confession' element={<Confession />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Box>
    </CrimesProvider>
  </ChakraProvider>
);
