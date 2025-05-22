import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetailQuery } from '../redux/apiSlice';
import { Container, Row, Col, Button, Image, Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useAddToCartMutation } from '../redux/apiSlice';
import { incrementCartCount } from '../redux/cartCountSlice';


const ProductDetail = () => {
  const navigate=useNavigate();
  const accessToken = useSelector(state => state.auth.accessToken);
  const [mainImgUrl, setMainImgUrl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams();
  const { data, error, isLoading } = useProductDetailQuery(id);
  const [addToCart,{ isLoading: isAddToCartLoading }]=useAddToCartMutation();
  const dispatch=useDispatch();

  console.log(data,id);
  
  let product_imgs = data?.product_images;
  let image_url = data?.product_images[0]?.image_url;

  useEffect(() => {
    if (!isLoading && !error) {
      const main_img = product_imgs.filter(img => img?.is_main === true);
      if (main_img.length > 0) {
        setMainImgUrl(main_img[0]?.image_url);
      } else if (product_imgs?.length > 0) {
        setMainImgUrl(product_imgs[0]?.image_url);
      }
    }
  }, [data]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart=async()=>{
    try{
      dispatch(incrementCartCount());
      const response=await addToCart({"product":id,"size":selectedSize});
      toast.success("added to Cart");
    }
    catch(err){
      toast.error("unable to add plz login");
    }
    
  }


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <Container className="my-4">
      <Row>
        {/* Product Images Column */}
        <Col md={6}>
          <Row>
            <Col xs={3} className="d-flex flex-column">
              {product_imgs?.map(img => (
                <Button
                  key={img.id}
                  variant="outline-light"
                  className="mb-2 p-0 border"
                  onClick={() => setMainImgUrl(img?.image_url)}
                >
                  <Image src={img?.image_url} alt="Product thumbnail" fluid />
                </Button>
              ))}
            </Col>
            <Col xs={9}>
              <div className="border p-2" style={{ height: '100%' }}>
                {mainImgUrl && (
                  <Image src={mainImgUrl} alt="Main product" fluid className="w-100 h-100" style={{ objectFit: 'contain' }} />
                )}
              </div>
            </Col>
          </Row>
        </Col>

        {/* Product Info Column */}
        <Col md={6} className="ps-md-4" style={{"margin-top":"40px"}}>

          <h2 className="mb-3">{data?.name}</h2>
          <div className="mb-3">
            <span className="text-muted">★★★★★ (122)</span>
          </div>
          <h3 className="mb-3">{data?.price}</h3>
          <p className="mb-4">
           {data?.description}
          </p>



          <div className="mb-4">
            <h4>Select Size</h4>
            <div className="d-flex gap-2 mt-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'dark' : 'outline-dark'}
                  onClick={() => handleSizeSelect(size)}
                  className="px-4 py-2"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>



          <Button variant="dark" size="lg" className="mb-4 w-100 py-3" onClick={handleAddToCart}>
            ADD TO CART
          </Button>

          <hr className="my-4" />
          <div>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>




        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;