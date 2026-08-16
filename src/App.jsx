import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Restorunts from "./components/Restorunts/restorunts";
import Menu from "./components/Menu/menu";
import Blog from "./components/Blog/blog";
import CSR from "./components/CSR/csr";
import Jobs from "./components/Jobs/jobs";
import Contacts from "./components/Contacts/contacts";
import Aboutus from "./components/About us/aboutus";
import Dilivery from "./components/Dilivery/dilivery";
import Layout from "./Layout";
import WisqviliTerasa from "./components/Restorunts/Wisqvili Terasa/WisqviliTerasa";
import EtosWisqvili from "./components/Restorunts/Etno Wisqvili/EtosWisqvili";
import LudisMoedani from "./components/Restorunts/Ludis moedani/LudisMoedani";
import GvinisEzo from "./components/Restorunts/Gvinis Ezo/GvinisEzo";
import Sanadimo from "./components/Restorunts/Sanadimo/Sanadimo";
import WisqviliMcxetashi from "./components/Restorunts/Wisqvili Mcxetashi/WisqviliMcxetashi";
import WisqviliWknetshi from "./components/Restorunts/Wisqvili Wknetshi/WisqviliWknetshi";
import LudisMoedaniSaburTalo from "./components/Restorunts/LudisMoedaniSaburTalo/ludisMoedaniSaburTalo";
import Teatri from "./components/Restorunts/Teatri/Teatri";
import LudisMoednidan from "./components/Dilivery/ludisMoednidan/ludisMoednidan";
import Mcxetidan from "./components/Dilivery/mcxetidan/mcxetidan";
import Tsknetidan from "./components/Dilivery/tsknetidan/tsknetidan";
import DishesList from "./components/Menu/allDieshes/dishes/dishesList";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="aboutus" element={<Aboutus />} />
              <Route path="restorunts" element={<Restorunts />} />
              <Route path="delivery" element={<Dilivery />} />
              <Route path="menu" element={<Menu />} />
              <Route path="blog" element={<Blog />} />
              <Route path="csr" element={<CSR />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="lumina-terrace" element={<WisqviliTerasa />} />
              <Route path="rustic-mill-tavern" element={<EtosWisqvili />} />
              <Route path="brewers-courtyard" element={<LudisMoedani />} />
              <Route path="crimson-vineyards" element={<GvinisEzo />} />
              <Route path="grand-feast-hall" element={<Sanadimo />} />
              <Route
                path="valley-riverhouse"
                element={<WisqviliMcxetashi />}
              />
              <Route path="pine-and-stone-retreat" element={<WisqviliWknetshi />} />
              <Route path="gamoidzaxe-mcxetidan" element={<Mcxetidan />} />
              <Route path="gamoidzaxe-tsknetidan" element={<Tsknetidan />} />
              <Route path="menu-list" element={<DishesList />} />
              <Route path="the-velvet-stage" element={<Teatri />} />
              <Route
                path="golden-hearth"
                element={<LudisMoedaniSaburTalo />}
              />
              <Route
                path="gamoidzaxe-ludisMoednidan"
                element={<LudisMoednidan />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
