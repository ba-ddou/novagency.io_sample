/*
*
*
* Contact form
*
*/


import React, { Component } from 'react';
import './styles.scss';
import { observer, inject} from 'mobx-react'
import { Formik, Form} from 'formik';
import FormField from 'app/components/FormField'
import * as Yup from 'yup'

@inject('services')
export default class ContactForm extends Component{
    

    submit = async (values) => {
        var res = await this.props.services.submitInquiry(values);
        alert(res);
    }
    
    render(){
        return (
            <div id="contactForm" className={this.props.className}>
                <Formik
                    initialValues={{
                        fullname: '',
                        email: '',
                        company: '',
                        message: ''
                    }}
                    validationSchema={Yup.object({
                        fullname: Yup.string()
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        company: Yup.string(),
                        message: Yup.string()
                            .min(50, 'Must be 50 characters or more')
                            .required('Required')
                    })}
                    onSubmit={this.submit}
                >
                    <Form>
                        <FormField
                            name="fullname"
                            type="text"
                            placeholder="fullname"
                        />
                        <FormField
                            name="email"
                            type="email"
                            placeholder="email"
                            validate={true}
                        />
                        <FormField
                            name="company"
                            type="text"
                            placeholder="company"
                        />
                        <FormField
                            name="message"
                            textarea={true}
                            placeholder="what can we do for you ?"
                        />
                        <button type="submit">Send</button>
                    </Form>
                </Formik>
    
            </div >
        );
    }
}
