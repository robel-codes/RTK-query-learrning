import AddProducts from "./components/AddProducts"
import AllProducts from "./components/AllProducts"
import DeleteProduct from "./components/DeleteProduct"
import SpecificProduct from "./components/SpecificProduct"
import UpdateProduct from "./components/UpdateProduct"

const App = () => {
  return (
    <>
    <DeleteProduct />
    -----------------------------------------------------------------
    <UpdateProduct />
    -----------------------------------------------------------------
    <AddProducts />
    -----------------------------------------------------------------
    <AllProducts />
    -------------------------------------------
    <SpecificProduct />
    </>
  )
}

export default App