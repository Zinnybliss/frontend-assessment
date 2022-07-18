import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='w-100 d-flex justify-content-end contact items'>
    <div className='w-50 text-white p-5 mt-5'>
       <div >
        <h2 className='text-center'>Hey, We are still in the works <br/>but you can send us a message!</h2>
       </div>
       <form className='text-left'>
       <div className="mb-3">
    <label for="firstName"  class="form-label text-left">First Name</label>
    <input type="lastname" placeholder="Enter your First Name" class="form-control" id="inputyourfirstname"/>
  </div>
  <div className="mb-3">
    <label for="lastName"  class="form-label text-left">Last Name</label>
    <input type="lasstName" placeholder="Enter your last name" class="form-control" id="inputyourlastname"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Email address</label>
    <input type="email" placeholder="Enter your email address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Tell us what you need help with!</label>
  <textarea class="form-control" placeholder="Enter a topic like Channel Problem  " id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    
    </div>
    </div>
  )
}

export default Contact;