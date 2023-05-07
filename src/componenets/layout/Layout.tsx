import { BrowserRouter, Route, Routes } from "react-router-dom";
import'./Layout.css';
import Menu from "../menu/Menu";
import Header from "../header/Header";
import HomePage from "../people-container/HomePage";

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
                       
                    </Routes>


                </main>
              
            </BrowserRouter>
        </section>


    );

} export default Layout