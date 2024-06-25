import React from 'react';
import Hero from '../components/shared/Hero/Hero';
import ContactForm from '../components/contact-us/ContactForm'

const ContactUs = () => {
    console.log("Contact Page Loaded");
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <Hero pageName='Contact Us' />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <div>
                    <div className='flex flex-col items-center'>
                        <div className='font-bold tracking-wide'>
                            <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Contact Us</h3>
                            <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Contact With Us</h2>
                        </div>
                        <p className='text-center sm:w-[610px] w-full mt-5 leading-8 text-[rgb(129,135,150)]'>
                            We allow our customers to contact us via email or phone. Any questions or concerns can
                            easily be directed to us. Feel free to contact us.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
