import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuTop from "./layouts/MenuTop";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";
const Layout = () => {
  return (
    <body>
      <header id="header" style={{ minHeight: 169 }}>
        <div class="header_top">
          <div class="container_main">
            <MenuTop />
          </div>
        </div>

        <div id="main_menu"></div>

        <div class="header">
          <div class="container_main">
            <div class="logo">
              <a href="/">
                <img
                  src="https://static.gosugamers.net/71/b9/22/ab54bc111ecb4c5a8f7391e22376456bfa4c91fb45ea80a4f3e2f6fb1f.png?w=256"
                  alt="Logo"
                />
              </a>
            </div>

            <div id="main_menu">
              <MenuBox />
            </div>
          </div>
        </div>
      </header>

      <div class="news-home">
        <div class="container_main" style={{ minHeight: 5500 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Layout;

