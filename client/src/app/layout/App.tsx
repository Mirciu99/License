import {
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/about/AboutPage";
import CaloriesCalculatorPage from "../../features/calories_calculator/CaloriesCalculatorPage";
import CarbsCyclingCalculator from "../../features/carbs_cycling_calculator/CarbsCyclingCalculator";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/BasketSlice";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import PrivateRoute from "./PrivateRoute";
import Orders from "../../features/orders/Orders";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";
import i18n from "../../i18n";
import ReactGa from "react-ga";

function App() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
            await dispatch(fetchBasketAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, [initApp]);

    const [darkMode, SetDarkMode] = useState(false);
    const paletteType = darkMode ? "dark" : "light";
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === "light" ? "#eaeaea" : "#121212",
            },
        },
    });

    function handleThemeChange() {
        SetDarkMode(!darkMode);
    }
    function handleClickLang(lang: any) {
        i18n.changeLanguage(lang);
    }
    useEffect(() => {
        ReactGa.initialize("UA-222867122-3");
        console.log("aici!");
        //to report page view
        ReactGa.pageview(window.location.pathname);
    }, [darkMode]);

    if (loading) return <LoadingComponent message="Initialising..." />;

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position="bottom-right" hideProgressBar />
            <CssBaseline />
            <Header
                darkMode={darkMode}
                handleThemeChange={handleThemeChange}
                handleClickLang={handleClickLang}
            />
            <Container>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/catalog" component={Catalog} />
                    <Route path="/catalog/:id" component={ProductDetails} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route
                        path="/calories_calculator"
                        component={CaloriesCalculatorPage}
                    />
                    <Route
                        path="/carbs_cycling_calculator"
                        component={CarbsCyclingCalculator}
                    />
                    <Route path="/basket" component={BasketPage} />
                    <PrivateRoute
                        path="/checkout"
                        component={CheckoutWrapper}
                    />
                    <PrivateRoute path="/orders" component={Orders} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </ThemeProvider>
    );
}

export default App;
