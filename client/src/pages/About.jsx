import React from 'react'

const About = () => {
  return (
    <div className='animate-fadeIn pt-10 min-h-[60vh]'>
      <div className="text-center mb-16">
        <h2 className='text-[40px] font-bold text-dark mb-4'>About Tomato</h2>
        <p className='text-gray-500 max-w-[600px] mx-auto text-[18px]'>Delivering happiness to your doorstep, one meal at a time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-[30px] overflow-hidden shadow-card h-[400px]">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex flex-col gap-6">
            <h3 className="text-[32px] font-bold text-primary">Our Story</h3>
            <p className="text-gray-600 leading-relaxed text-[16px]">
                Founded in 2024, Tomato started with a simple mission: to make great food accessible to everyone. We believe that dining should be an experience, not just a necessity.
            </p>
            <p className="text-gray-600 leading-relaxed text-[16px]">
                We partner with the best local restaurants to bring you a diverse selection of cuisines. Whether you're craving a comforting bowl of pasta, a fresh salad, or a decadent dessert, we've got you covered.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-4">
                <div className="text-center">
                    <h4 className="text-[32px] font-bold text-dark">10k+</h4>
                    <p className="text-gray-500">Happy Users</p>
                </div>
                <div className="text-center">
                    <h4 className="text-[32px] font-bold text-dark">500+</h4>
                    <p className="text-gray-500">Restaurants</p>
                </div>
                <div className="text-center">
                    <h4 className="text-[32px] font-bold text-dark">30m</h4>
                    <p className="text-gray-500">Delivery Time</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
