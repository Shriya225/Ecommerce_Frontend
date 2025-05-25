import { useProductListQuery } from "../redux/apiSlice"
import ProductItem from "./ProductItem";
const ProductListContainer = () => {
    const {data,isLoading,error}=useProductListQuery();
    if(isLoading){
        return <>
        isLoading
        </>
    }
  return (
      
      <div>
           {/* <h2>All ProductList</h2> */}

          {console.log(data)}
          {
            data.map(item=><ProductItem item={item}/>)
          }
      </div>
  )
}

export default ProductListContainer