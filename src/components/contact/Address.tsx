import React from 'react'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
export default function Address() {
    return (
        <>
            <div className='main-container flex justify-between'>
                <div className='flex flex-col'>
                    <div>
                        <button className='bg-slate-300 px-2 py-3 rounded-md font-bold text-blue-700'>Contact Us</button>
                        <p className='text-5xl font-sans font-bold mt-6'>We’re Ready to Help You! Say Hello or Contact Us</p>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <p className='font-bold font-sans text-2xl mt-8 '><MailOutlinedIcon />Email Address</p>
                            <p className='font-semibold text-3xl text-slate-500 '>info@myjob.net.in</p>
                            <p className='font-bold font-sans text-2xl mt-8 '><MailOutlinedIcon />Website</p>
                            <p className='font-semibold text-3xl text-slate-500 '> www.myjob.net.in</p>
                        </div>
                        <div>
                            <p className='font-bold font-sans text-2xl mt-8 '><MailOutlinedIcon />Phone Number</p>
                            <p className='font-semibold text-3xl text-slate-500 '>18008890094</p>
                            <p className='font-bold font-sans text-2xl mt-8 '><MailOutlinedIcon />Location</p>
                            <p className='font-semibold text-3xl text-slate-500 '> Plot No: 15, 2381, Bhubaneswar, Odisha 751030</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button className='bg-slate-300 px-2 py-3 rounded-md font-bold text-blue-700'>Get In Touch</button>
                        <p className='text-5xl font-sans font-bold mt-6'>Get Every Single Updates Message us</p>
                    </div>
                    <form className="w-full max-w-lg mx-auto mt-10" >
                        <div className="mb-6">
                            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"

                                className=" px-3 py-2  rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Website</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Website"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your message"
                               
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
                    </form>
                </div>

            </div>
        </>
    )
}


