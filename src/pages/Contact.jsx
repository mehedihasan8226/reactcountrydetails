import React from 'react'

const Contact = () => {

  const handleSubmit = (formData)=>{

        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);
        
        

  }

  return (
    <>
      <section className='container'>

        <div className='flex justify-center flex-col items-center h-screen '>
        
        <h1 className='text-3xl'>Contact Us</h1>
          <form action={handleSubmit}
          className='flex flex-col justify-center w-96'>
            <input 
            className='border border-gray-700 rounded-md p-3 mt-4 outline-none'
            type="text" 
            required 
            autoComplete='off' 
            placeholder='Enter your Name' 
            name='username'
            
            />

            <input 
            className='border border-gray-700 rounded-md p-3 mt-4 outline-none'
            type="email" 
            required 
            autoComplete='off' 
            placeholder='Enter your email' 
            name='email'
            
            />

            <textarea 
            className='border-1 border-gray-700 rounded-md p-3 mt-4 outline-none' 
            rows="10"
            placeholder='Enter your message'
            name="message" 
            required
            autoComplete='off'
            
            ></textarea>
              <button 
              className='border border-gray-700 flex start py-1 px-3 mt-3  rounded-md text-gray-300'
              type='submit' 
              value="send"
              >
                Send
              </button>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact