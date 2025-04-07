import React, { useState } from 'react'
import { Container,Form,Button,Alert } from 'react-bootstrap';
import {useForm} from "react-hook-form"
const Login = () => {
    const [signup,setSignup]=useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    {console.log("rendering login ocmponent....");
    }
  return (
    <div>
            <h1 className='text-center'>{signup===true?"signup":"Login"}</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5">
                {signup &&   <Form.Group>
                    <Form.Control type="email" {...register('name',{required:"Enter Name"})} placeholder='Enter Name'></Form.Control>
                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                </Form.Group>}
                <br/>
                <Form.Group>
                    <Form.Control type="email" {...register('email',{required:"Enter Email"})} placeholder='Enter email'></Form.Control>
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </Form.Group> <br/>
                <Form.Group>
                    <Form.Control type="password" {...register("password",{required:"Enter Password"})} placeholder='Enter Password' />
                    {errors.password &&<p className='text-danger'>{errors.password.message}</p>}
                </Form.Group> <br/> 
                <Button onClick={()=>{setSignup(!signup)}} className='btn-warning'>Create Account</Button><br />
                <Button type='submit'>{signup===true?"Sign Up":"Sign In"}</Button>
            </Form>

     
    </div>
  )
}

export default Login