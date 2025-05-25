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
      <Row>
        <Col md={12} className="mb-3">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" multiple {...register('product_images')} />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" {...register('name', { required: true })} />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" {...register('price', { required: true })} />
        </Col>

        <Col md={12} className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} {...register('description')} />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Product Category</Form.Label>
          <Form.Select {...register('category', { required: true })}>
            <option value="">Select</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Subcategory</Form.Label>
          <Form.Select {...register('subcategory', { required: true })}>
            <option value="">Select</option>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </Form.Select>
        </Col>

        <Col md={12} className="mb-3">
          <Form.Label>Sizes</Form.Label>
          <div className="d-flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <Form.Check
                key={size}
                label={size}
                type="checkbox"
                value={size}
                {...register('sizes')}
              />
            ))}
          </div>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Check
            type="checkbox"
            label="Add to Bestseller"
            {...register('bestSeller')}
          />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" {...register('stock')} defaultValue={0} />
        </Col>
      </Row>

      <Button variant="dark" type="submit">Add</Button>
    </Form>
  );
};

export default AddProduct;
