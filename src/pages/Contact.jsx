import React from "react";
import emailjs from '@emailjs/browser';

export default function Contact(){
    // const [formData,setFormData] = React.useState({
    //     name: String,
    //     email: String,
    //     message: String
    // })
    const [submitted, setSubmitted] = React.useState(false)
    // function handleChange(event){
    //     event.preventDefault();
    //     const {name,value} = event.target
    //     setFormData((prevData)=>({ ...prevData, [name]: value }))
    // }
async function handleSubmit(event){
    event.preventDefault();
    setSubmitted(true)
    emailjs
    .sendForm('Contact', 'Contact_me', event.target, {
      publicKey: 'Gcaxdc0z9KXdy3fRw',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    )
    event.target.reset();
}
    // fetch('http://localhost:5020/',{
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // }).then(response => {
    //         console.log(response)

    //         setFormData({name:'',email:'',message:''})
            
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    


    return(
        <section id= "contact" className="contact">
            <form onSubmit={handleSubmit}>
                {submitted&& <h3>Thank you for your submission</h3>}
                <label htmlFor="text"> Name</label>
                <input 
                name="name"
                placeholder="Enter your name"
                // onChange={handleChange}
                // value={formData.name}
                type="text" 
                 />
                
                <label htmlFor="text"> Email </label>
                <input 
                name="email"
                placeholder="Email"
                // onChange={handleChange}
                // value={formData.email}
                type="email" 
                />
               
                <label htmlFor="text"> Message </label>
                <textarea
                name="message" 
                placeholder="Message"
                // onChange={handleChange}
                // value={formData.message}
                type="text"
                 />
                
                <button>Submit</button>
            </form>
        </section>
    )
}