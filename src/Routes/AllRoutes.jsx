import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import NewProduct from "../Pages/NewProducts"
import WomensProducts from "../Pages/WomenProducts"
import MensProducts from "../Pages/MensProducts"
import KidsProducts from "../Pages/KidsProducts"
import Collection from "../Pages/Collection"
import Brands from "../Pages/Brands"
import Sales from "../Pages/Sales"
import Gifts from "../Pages/Gifts"

function AllRoutes() {
     return (
          <>
               <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewProduct />} />
                    <Route path="/womans" element={<WomensProducts />} />
                    <Route path="/mens" element={<MensProducts />} />
                    <Route path="/kids" element={<KidsProducts />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/brand" element={<Brands />} />
                    <Route path="/sale" element={<Sales />} />
                    <Route path="/gifts" element={<Gifts />} />

               </Routes>
          </>
     )
}

export default AllRoutes
