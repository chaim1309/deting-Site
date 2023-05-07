import { BrowserRouter, Route, Routes } from "react-router-dom";
import'./Layout.css';
import Menu from "../menu/Menu";
import Header from "../header/Header";
import HomePage from "../people-container/HomePage";
import Login from "../loginPage/Login";


function Layout() {

    return (


        <section className="Layout">
            <BrowserRouter>
                <header>
                    <Header />
                </header>
                <aside>
                    <Menu />
                </aside>
                <main>

                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    </Routes>


                </main>
              
            </BrowserRouter>
        </section>


    );

} export default Layout