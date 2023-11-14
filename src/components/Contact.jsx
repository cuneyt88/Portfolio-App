import React from 'react'

const Contact = () => {

  function validateForm() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (email === "" || message === "") {
      errorMessage.innerHTML = "Name, Email, and Message are required fields.";
    } else {
      // Form is valid, you can submit it or perform additional actions
      document.getElementById("myForm").submit();
    }
  }

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-centerp-4'>
        <form id='myForm' method='POST' action="https://getform.io/f/c244c5d8-f16a-4be3-9c81-cb16e3e5d96c" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-xl'> Submit the form below or shoot me an email - cuneyt7088@gmail.com</p>
           </div> 
           <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
           <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email*' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message*' required ></textarea>
            <button  onclick={validateForm} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 rounded-xl py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        <div id="errorMessage" style={{ color: 'red' }}></div>
    </div>
  )
}

export default Contact