import React, { useState } from 'react';

const ContactForm = () => {
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedSubject, setIsFocusedSubject] = useState(false);
    const [isFocusedMessage, setIsFocusedMessage] = useState(false);

    return (
        <div className='w-full flex justify-center mt-24'>
            <form className='flex flex-col items-center md:w-[750px] w-full gap-y-8' method='post'>
                <div className='flex gap-x-10 w-full'>
                    {/* Name */}
                    <div className='flex flex-col w-full relative'>
                        <label htmlFor="name" className={`italic transition-all duration-300 absolute ${isFocusedName ? 'text-blue-800 -top-3 text-[13px]' : 'text-blue-900 top-1 text-sm'}`}>
                            Name
                        </label>
                        <input required={true} id='name' onFocus={() => setIsFocusedName(true)} onBlur={() => setIsFocusedName(false)} className={`${isFocusedName ? 'border-blue-800' : 'border-gray-400'} w-full focus:outline-none border-b-2 mt-8 px-1 text-[15px] text-blue-950`} type="text" name='name'
                        />
                    </div>
                    {/* Email */}
                    <div className='flex flex-col w-full relative'>
                        <label htmlFor="email" className={`italic transition-all duration-300 absolute ${isFocusedEmail ? 'text-blue-800 -top-3 text-[13px]' : 'text-blue-900 top-1 text-sm'}`}>
                            Email
                        </label>
                        <input required={true} id='email' onFocus={() => setIsFocusedEmail(true)} onBlur={() => setIsFocusedEmail(false)} className={`${isFocusedEmail ? 'border-blue-800' : 'border-gray-400'} w-full focus:outline-none border-b-2 mt-8 px-1 text-[15px] text-blue-950`} type="email" name='email' />
                    </div>
                </div>
                {/* Subject */}
                <div className='flex flex-col w-full relative'>
                    <label htmlFor="subject" className={`italic transition-all duration-300 absolute ${isFocusedSubject ? 'text-blue-800 -top-3 text-[13px]' : 'text-blue-900 top-1 text-sm'}`}>
                        Subject
                    </label>
                    <input required={true} id='subject' onFocus={() => setIsFocusedSubject(true)} onBlur={() => setIsFocusedSubject(false)} className={`${isFocusedSubject ? 'border-blue-800' : 'border-gray-400'} w-full focus:outline-none border-b-2 mt-8 px-1 text-[15px] text-blue-950`} type="text" name='subject'
                    />
                </div>
                {/* Message */}
                <div className='flex flex-col w-full relative'>
                    <label htmlFor="subject" className={`italic transition-all duration-300 absolute ${isFocusedMessage ? 'text-blue-800 -top-3 text-[13px]' : 'text-blue-900 top-1 text-sm'}`}>
                        Message
                    </label>
                    <textarea rows={4} onFocus={() => setIsFocusedMessage(true)} onBlur={() => setIsFocusedMessage(false)} className={`${isFocusedMessage ? 'border-blue-800' : 'border-gray-400'} w-full focus:outline-none border-b-2 mt-8 px-1 text-[15px] text-blue-950`} required={true} name="message" id="message"></textarea>
                </div>
                <button className='w-[155px] transition-all duration-200 ease-in text-[13px] bg-yellow-400 font-semibold hover:text-white hover:bg-[rgb(255,193,7)] text-blue-950 rounded-lg py-3 xs:px-5 2xs-custom:px-4 px-3 tracking-[1.5px]'>SEND MESSAGE</button>
            </form>
        </div>
    );
}

export default ContactForm;
