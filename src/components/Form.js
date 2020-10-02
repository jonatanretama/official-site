import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Form.css'
import { useForm } from 'react-hook-form';
import './styles/Button.css';

export default function Form() {
    const onSubmit = (data) => {
        console.log(data)
        window.alert("Message sent successfully!!")
        resetForm();
    };

    const { register, handleSubmit, errors } = useForm();

    const resetForm = () => {
        document.getElementById("contactForm").reset();
    }

    return (
        <div className = "container-form">
            <form className = "form-container" onSubmit = {handleSubmit (onSubmit)} id = "contactForm">
                <div>
                    <h1 className = "title-form">Send me your comments or proposals</h1>
                    <h3 className = "subtitle-form">I will contact you. <i className = "far fa-envelope"></i></h3>
                </div>
                
                <label>First Name</label>
                <input name = "firstName" ref = { register( { required: true }) } />
                {errors.firstName && errors.firstName.type === "required" && 
                (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                )}


                <label>Last Name</label>
                <input name = "lastName" ref = { register( { required: true }) } />
                    {errors.lastName && errors.lastName.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}

                <label>Purpose</label>
                <select name = "purpose" ref = { register( { required: true }) } >
                    <option value = "" >Select...</option>
                    <option value = "Work" >Work</option>
                    <option value = "Interest" >Interest</option>
                    <option value = "Dubts" >Dubts</option>
                    <option value = "Comments" >Comments</option>
                    <option value = "Tips" >Tips</option>
                    <option value = "Other" >Other</option>
                </select>
                    {errors.purpose && errors.purpose.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}


                <label>Email</label>
                <input name = "email" 
                ref = { register( { required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        }
                    }) } />
                    {errors.email && errors.email.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}
                    {errors.email && errors.email.type === "pattern" && 
                    (<p className = "text-warning" >Invalid email address <i class="far fa-hand-pointer"></i></p>
                    )}
                    
                
                <label>Phone</label>
                <input name = "phone" ref = { register( { required: true,
                    pattern: {
                        value: /^(\+\s?)?(1\s?)?(\(\d{3}\)|\d{3})((\s)|(-))?\d{3}((\s)|(-))?\d{4}$/
                        }
                    
                    }) } />
                    {errors.phone && errors.phone.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}

                    {errors.phone && errors.phone.type === "pattern" && 
                    (<p className = "text-warning" >Invalid number <i class="far fa-hand-pointer"></i></p>
                    )}

                <label>Topic</label>
                <input name = "topic" ref = { register( { required: true }) } />
                    {errors.topic && errors.topic.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}

                <label>Comment</label>
                <textarea name = "textarea" ref = { register( { required: true }) } />
                    {errors.textarea && errors.textarea.type === "required" && 
                    (<p className = "text-warning" >This field is required <i class="far fa-hand-pointer"></i></p>
                    )}

                <input type = "submit" className = "btn btn--send btn--medium" value = "Send Comments" />
                
            </form>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement)
