import { useProductListQuery } from "../redux/apiSlice"
import ProductItem from "./ProductItem";
import { Alert,Spinner,Container } from "react-bootstrap";
const ProductListContainer = () => {
    const {data,isLoading,error}=useProductListQuery();
    if(isLoading){
        return   <Container className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
    }
    if(error){
        return <Alert variant="danger">
        <strong>Error:</strong> {error?.message || 'Something went wrong.'}
      </Alert>
    }
  return (
      
      <div>
           {/* <h2>All ProductList</h2> */}

        
          {
            data.map(item=><ProductItem item={item}/>)
          }
      </div>
  )
}

export default ProductListContainer