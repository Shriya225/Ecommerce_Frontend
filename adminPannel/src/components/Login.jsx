
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLoginAdminMutation } from '../redux/apiSlice';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';import  {ToastContainer} from "react-toastify";
import { setAccessToken } from '../redux/authSlice';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const [loginAdmin]=useLoginAdminMutation();
  const navigate=useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async(data) => {
    try{
        const response = await loginAdmin(data).unwrap();
        dispatch(setAccessToken(response.access));
        toast.success("Successfully Loggedin..");
        navigate("/");

    }
    catch(err){
 
      toast.error("UnAuthorized");
    }
  };

  return (
    <div   style={{ 
    minHeight: '100vh',
    backgroundColor: '#f8f9fa' 
  }}>


    <Container className="d-flex align-items-center justify-content-center"   style={{ 
    minHeight: '100vh',
    backgroundColor: '#f8f9fa' 
  }}>
      <Card className="w-100" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4"><h2>Admin Panel
            </h2></Card.Title>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                isInvalid={!!errors.username}
                {...register('username', {
                  required: 'Username is required'
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                isInvalid={!!errors.password}
                {...register('password', {
                  required: 'Password is required'
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    <ToastContainer position="top-right" autoClose={3000} />
        </div>
  );
};

export default Login;