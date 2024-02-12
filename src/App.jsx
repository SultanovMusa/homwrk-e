import { BrowserRouter, Routes } from "react-router-dom";
import Providers from "./providers/Providers";
import { Route } from "react-router-dom";
import WelcomPages from "./pages/welcom/WelcomPages";
import LoginPages from "./pages/login/LoginPages";
import RegistrationPages from "./pages/registration/RegistrationPages";
import HomePages from "./pages/home/HomePages";
import CardPages from "./pages/card/CardPages";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Providers />
			<Header/>
				<Routes>
					<Route path="/"  element={<WelcomPages/>}/>
					<Route path="/login"  element={<LoginPages/>}/>
					<Route path="/registration"  element={<RegistrationPages/>}/>
					<Route path="/home"  element={<HomePages/>}/>
					<Route path="*"  element={<CardPages/>}/>
				</Routes>
			<Footer/>
			</BrowserRouter>
		</>
	);
}

export default App;
