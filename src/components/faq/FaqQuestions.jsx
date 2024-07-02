import React, { useState } from 'react';
import FaqImgSm from '../../assets/faq/faq-sm.png';
import FaqImgTab from '../../assets/faq/faq-tab.png';
import FaqImgXl from '../../assets/faq/faq-xl.png';
import Feature from '../Feature';
import Feature1 from '../../assets/uniqueFeatures/quality1.png';
import Feature2 from '../../assets/uniqueFeatures/quality2.png';
import Feature3 from '../../assets/uniqueFeatures/quality3.png';

const FaqQuestions = () => {
    const [showAnswer, setShowAnswer] = useState({
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    function toggleAnswer(id) {
        setShowAnswer(prevState => {
            const updatedState = {};

            // Close all answers first
            for (let key in prevState) {
                updatedState[key] = false;
            }

            // Toggle the clicked answer
            updatedState[id] = !updatedState[id];

            return updatedState;
        });
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <div className='font-bold tracking-wide'>
                    <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Our Company FAQ</h3>
                    <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Frequent Questions</h2>
                </div>
                <p className='text-center sm:w-[610px] w-full mt-5 leading-8 text-[rgb(129,135,150)]'>
                    We are commited to answering all your questions regarding our services. It is our duty to help you by providing solutions to all of your problems.
                </p>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-x-20 gap-y-16 mt-16'>
                <div className='lg:w-[52%] w-full border-8 border-blue-500 lg:block flex xl:h-[500px] lg:h-[500px] md:h-[520px] xs-custom:h-[370px] 2xs-custom:h-[500px] h-[380px] mt-10'>
                    <img className='xl:block hidden xl:h-[550px] w-full lg:relative bottom-10 left-10' src={FaqImgXl} alt="" />
                    <img className='lg:hidden xs-custom:block hidden xl:h-[450px] lg:h-full w-full lg:relative bottom-10 left-10' src={FaqImgTab} alt="" />
                    <img className='xl:hidden lg:block xs-custom:hidden block lg:h-[550px] h-full w-full lg:relative bottom-10 left-10' src={FaqImgSm} alt="" />
                </div>
                <div className='lg:w-[48%] w-full mt-6'>
                    <div className='h-full w-full flex flex-col'>
                        {/* First */}
                        <div className='h-full w-full'>
                            <div className='bg-blue-700 hover:bg-blue-800 cursor-pointer px-7 py-3 rounded-xl' onClick={() => toggleAnswer(1)}>
                                <p className='text-white text-[17px] tracking-wide'>What are the benefits of using our service?</p>
                            </div>
                            {showAnswer[1] && (
                                <p className='text-[15.5px] tracking-wide text-gray-500 leading-7 mt-5 mb-8 ms-4'>
                                    At Quick Translate, our expert translators ensure your documents are accurate and culturally appropriate. We deliver high-quality work quickly, offering a range of services from document translation to website localization, tailored to your needs.
                                </p>
                            )}
                        </div>

                        {/* Second */}
                        <div className='h-full w-full'>
                            <div onClick={() => toggleAnswer(2)} className='bg-blue-700 hover:bg-blue-800 cursor-pointer px-7 py-3 rounded-xl'>
                                <p className='text-white text-[17px] tracking-wide'>How is this platform better than others?</p>
                            </div>
                            {showAnswer[2] && (
                                <p className='text-[15.5px] tracking-wide text-gray-500 leading-7 mt-5 mb-8 ms-4'>
                                    Our company stands out with expert translators, fast delivery, and high-quality, accurate translations. Our personalized services, from document translation to website localization, are tailored to meet your specific needs, ensuring superior results every time.
                                </p>
                            )}
                        </div>

                        {/* Third */}
                        <div className='h-full w-full'>
                            <div onClick={() => toggleAnswer(3)} className='bg-blue-700 hover:bg-blue-800 cursor-pointer px-7 py-3 rounded-xl'>
                                <p className='text-white text-[17px] tracking-wide'>What are the best features of our service?</p>
                            </div>
                            {showAnswer[3] && (
                                <p className='text-[15.5px] tracking-wide text-gray-500 leading-7 mt-5 mb-8 ms-4'>
                                    We excel with a team of expert linguists, ensuring accurate, culturally appropriate translations. We offer rapid delivery and a range of tailored services, from business documents translation to website content, guaranteeing high-quality results for every project.
                                </p>
                            )}
                        </div>

                        {/* Fourth */}
                        <div className='h-full w-full'>
                            <div onClick={() => toggleAnswer(4)} className='bg-blue-700 hover:bg-blue-800 cursor-pointer px-7 py-3 rounded-xl'>
                                <p className='text-white text-[17px] tracking-wide'>Why is this platform important to me?</p>
                            </div>
                            {showAnswer[4] && (
                                <p className='text-[15.5px] tracking-wide text-gray-500 leading-7 mt-5 mb-8 ms-4'>
                                    Our service is essential for you because it guarantees precise, culturally relevant translations delivered swiftly. Our expert team and customized services ensure your unique needs are met, enhancing your communication and helping you succeed in a global market.
                                </p>
                            )}
                        </div>

                        {/* Fifth */}
                        <div className='h-full w-full'>
                            <div onClick={() => toggleAnswer(5)} className='bg-blue-700 hover:bg-blue-800 cursor-pointer px-7 py-3 rounded-xl'>
                                <p className='text-white text-[17px] tracking-wide'>How can I get started with Quick Translate?</p>
                            </div>
                            {showAnswer[5] && (
                                <p className='text-[15.5px] tracking-wide text-gray-500 leading-7 mt-5 mb-8 ms-4'>
                                    Getting started with Quick Translate is easy! Simply contact us through our website, provide the details of your translation project, and our team will promptly get in touch to guide you through the process. We're here to make your translation experience smooth and efficient.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqQuestions;
