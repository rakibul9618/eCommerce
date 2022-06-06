import React from 'react'
import Header from "./components/Navigation/Header";
import Footer from "./components/Footer";
import {Container, ThemeProvider, Typography} from "@mui/material";
import  { BrowserRouter as Router , Route  , Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MyTheme from "./MyTheme";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";



export const App = () => {
    return (
    <Router>
        <ThemeProvider theme={MyTheme}>
        <Header />
        <main>
            <Container>
                <Routes>
                    <Route path='/' element={<HomeScreen />} exact />
                    <Route path='/product/:id' element={<ProductScreen />} />
                        <Route path='cart' element={<CartScreen />} exact />
                        <Route path='cart/:id' element={<CartScreen />} exact />
                        <Route path='cart/:id?' element={<CartScreen />} />
                </Routes>
            </Container>
        </main>
        <Footer />
        </ThemeProvider>

    </Router>
  )
}


export default App;