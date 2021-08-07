import React, { useState } from 'react';
import './Register.css';
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function Register() {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState ({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, result){
            console.log(result)
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    }

    

    return (
        <div className="form-container">
        <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
            <h1 className="header-text">Register</h1>
            <Form.input
            label="First name"
            placeholder="First name here"
            name="first_name"
            type= "text"
            value={values.first_name}
            error={errors.first_name}
            onChange={onChange} />

            <Form.input
            label="Last name"
            placeholder="Last name here"
            name="last_name"
            type= "text"
            value={values.last_name}
            error={errors.last_name}
            onChange={onChange} />
            
            <Form.input
            label="Username"
            placeholder="Username here"
            name="username"
            type= "text"
            value={values.username}
            error={errors.username}
            onChange={onChange} />

            <Form.input
            label="Email"
            placeholder="Email here"
            name="email"
            type= "email"
            value={values.email}
            error={errors.email}
            onChange={onChange} />

            <Form.input
            label="Password"
            placeholder="Password here"
            name="password"
            type="password"
            value={values.password}
            error={errors.password}
            onChange={onChange} />

            <Form.input
            label="Confirm Password"
            placeholder="Confirm your password here"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChange={onChange} />

            <Button type="submit" dark>
                Register
            </Button>
        </Form>
        <div className="ui-error-message">
            <ul classname="list">
                {Object.values(errors).map(value => (
                    <li key={value}>{value}</li>
                ))}
            </ul>
        </div>
        </div>
    )
}

const REGISTER_USER = gql`
mutation register(
    $first_name: String!
    $last_name: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
) {
    register(
        registerInput: {
            first_name: $first_name
            last_name: $last_name
            username: $username
            password: $password
            confirmPassword: $confirmPassword
        }
    ){
        id first_name last_name username email createdAt token
    }
}`;