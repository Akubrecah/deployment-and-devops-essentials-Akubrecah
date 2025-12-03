import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='animate-fadeIn pt-10 min-h-[60vh]'>
      <div className="text-center mb-16">
        <h2 className='text-[40px] font-bold text-dark mb-4'>Get in Touch</h2>
        <p className='text-gray-500 max-w-[600px] mx-auto text-[18px]'>We'd love to hear from you. Our friendly team is always here to chat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-[30px] shadow-card">
            <h3 className="text-[24px] font-bold text-dark mb-6">Send us a message</h3>
            <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="p-3 border border-gray-200 rounded-xl outline-none focus:border-primary bg-gray-50" />
                    <input type="text" placeholder="Last Name" className="p-3 border border-gray-200 rounded-xl outline-none focus:border-primary bg-gray-50" />
                </div>
                <input type="email" placeholder="Email Address" className="p-3 border border-gray-200 rounded-xl outline-none focus:border-primary bg-gray-50" />
                <textarea rows="5" placeholder="Your Message" className="p-3 border border-gray-200 rounded-xl outline-none focus:border-primary bg-gray-50 resize-none"></textarea>
                <button className="bg-primary text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mt-2">Send Message</button>
            </form>
        </div>

        <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-center gap-6 p-6 bg-white rounded-[24px] shadow-sm hover:shadow-card transition-shadow">
                <div className="w-[60px] h-[60px] bg-red-50 rounded-full flex items-center justify-center text-primary text-[24px]">
                    <FaEnvelope />
                </div>
                <div>
                    <h4 className="text-[18px] font-bold text-dark">Chat to us</h4>
                    <p className="text-gray-500">Our friendly team is here to help.</p>
                    <p className="text-primary font-medium mt-1">hi@tomato.com</p>
                </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white rounded-[24px] shadow-sm hover:shadow-card transition-shadow">
                <div className="w-[60px] h-[60px] bg-red-50 rounded-full flex items-center justify-center text-primary text-[24px]">
                    <FaMapMarkerAlt />
                </div>
                <div>
                    <h4 className="text-[18px] font-bold text-dark">Visit us</h4>
                    <p className="text-gray-500">Come say hello at our office HQ.</p>
                    <p className="text-primary font-medium mt-1">100 Smith Street, Collingwood VIC 3066 AU</p>
                </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white rounded-[24px] shadow-sm hover:shadow-card transition-shadow">
                <div className="w-[60px] h-[60px] bg-red-50 rounded-full flex items-center justify-center text-primary text-[24px]">
                    <FaPhoneAlt />
                </div>
                <div>
                    <h4 className="text-[18px] font-bold text-dark">Call us</h4>
                    <p className="text-gray-500">Mon-Fri from 8am to 5pm.</p>
                    <p className="text-primary font-medium mt-1">+1 (555) 000-0000</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
