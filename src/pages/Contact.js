import React from 'react'

const Contact = () => {
  return (
    <div className="py-10">
      <h1 className="uppercase text-2xl font-bold text-center mb-5">Feel free to contact us</h1>


      {/* EMBEDDED MAP */}
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004787002!2d77.04417384861837!3d28.527252739279792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1688899315825!5m2!1sen!2sin" title="Google Maps" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* FORM */}
        <form action="https://formspree.io/f/mbjeagak" method="POST" className="flex flex-col items-center gap-10 mt-10">
          <input type="text" placeholder="USERNAME" name="Username" required autoComplete="off" className="outline-none md:w-[500px] h-[40px] px-3 border-2 border-[#a1a1a1] w-[350px]"/>
          <input type="email" placeholder="E-MAIL" name="Email" autoComplete="off" required className="outline-none md:w-[500px] h-[40px] px-3 border-2 border-[#a1a1a1] w-[350px]" />
          <textarea placeholder="Enter your message..." name="Message" className="border-2 border-[#a1a1a1] md:w-[500px] h-[200px] w-[350px]   px-3 pt-2 outline-none"/>
            <input type="submit" placeholder="SEND" className="h-[40px] w-[150px] bg-[#6152ED] text-white cursor-pointer outline-none" />
        </form>
    </div>
  )
}

export default Contact