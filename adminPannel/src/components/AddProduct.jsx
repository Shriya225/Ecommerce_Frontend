import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useAddProductMutation } from '../redux/apiSlice';

const categories = ['Men', 'Women', 'Kids'];
const subcategories = ['TopWear', 'BottomWear', 'WinterWear'];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append basic fields
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('stock', data.stock || 0);
    formData.append('bestSeller', data.bestSeller ? 'true' : 'false');
    formData.append('category', data.category);
    formData.append('subcategory', data.subcategory);

    // Sizes (multi-value)
    if (data.sizes) {
      data.sizes.forEach((size) => formData.append('size', size));
    }

    // Images
    if (data.product_images?.length) {
      for (let i = 0; i < data.product_images.length; i++) {
        formData.append('product_images', data.product_images[i]);
      }
    }

    try {
        for (let pair of formData.entries()) {
  console.log(pair[0] + ':', pair[1]);
}

        
      const response = await addProduct(formData).unwrap();
      console.log('Product added:', response);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
   <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
  <Row className="gy-3">
    {/* Upload Images */}
    <Col xs={12}>
      <Form.Label>Upload Images</Form.Label>
    <Form.Control
  type="file"
  multiple
  {...register('product_images', {
    onChange: (e) => {
      if (e.target.files.length > 4) {
        alert('You can upload a maximum of 4 images.');
        e.target.value = ''; // reset file input
      }
    },
  })}
  className="w-50"
/>
    </Col>

    {/* Product Name */}
    <Col md={6}>
      <Form.Label>Product Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Type here"
        {...register('name', { required: true })}
        className="w-50"
      />
       <Form.Label>Product Price</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter price"
        {...register('price', { required: true })}
        className="w-50"
      />
    </Col>

    {/* Product Price */}
    <Col md={6}>
     
    </Col>

    {/* Description (full row) */}
    <Col xs={12}>
      <Form.Label>Product Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Write content here"
        {...register('description')}
        className="w-25"
      />
    </Col>

    {/* Category */}
    <Col md={6}>
      <Form.Label>Product Category</Form.Label>
      <Form.Select
        {...register('category', { required: true })}
        className="w-50"
      >
        <option value="">Select</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </Form.Select>
      <Form.Label>Sub Category</Form.Label>
      <Form.Select
        {...register('subcategory', { required: true })}
        className="w-50"
      >
        <option value="">Select</option>
        {subcategories.map((sub) => (
          <option key={sub} value={sub}>{sub}</option>
        ))}

      </Form.Select>
        <Form.Label>Stock</Form.Label>
      <Form.Control
        type="number"
        {...register('stock')}
        defaultValue={0}
        className="w-50"
      />
    </Col>

  

    {/* Sizes */}
    <Col xs={12}>
      <Form.Label>Product Sizes</Form.Label>
      <div className="d-flex gap-3 flex-wrap">
        {sizes.map((size) => (
          <Form.Check
            key={size}
            type="checkbox"
            value={size}
            label={size}
            {...register('sizes')}
          />
        ))}
      </div>
    </Col>

    {/* Bestseller */}
    <Col md={6}>
      <Form.Check
        type="checkbox"
        label="Add to Bestseller"
        {...register('bestSeller')}
        className="mt-2"
      />
    </Col>

    {/* Stock */}
    <Col md={6}>
    
    </Col>
  </Row>

  <Button variant="dark" type="submit" className="mt-4 px-5">
    ADD
  </Button>
</Form>

  );
};

export default AddProduct;
