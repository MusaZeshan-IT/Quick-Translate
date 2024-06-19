import React from 'react';
import ProcessCard from './ProcessCard';
import Step1 from '../assets/howItWorks/step1.png';
import Step2 from '../assets/howItWorks/step2.png';
import Step3 from '../assets/howItWorks/step3.png';
import Step4 from '../assets/howItWorks/step4.png';

const HowItWorks = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='font-bold tracking-wide'>
                    <h3 className='text-center text-lg text-[rgb(60,146,255)]'>Our Process</h3>
                    <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>How It Works</h2>
                </div>
                <p className='text-center w-[610px] mt-5 leading-8 text-[rgb(129,135,150)]'>We make our process as simple as possible so that you can focus on what matters and let us take care of the rest. It is just a few clicks.</p>
            </div>
            <div className="grid grid-cols-4 gap-10 mt-10">
                <ProcessCard
                    stepNum='01'
                    title='Order Translation'
                    imgUrl={Step1}
                    desc='Make sure you order the translation you need.'
                />
                <ProcessCard
                    stepNum='02'
                    title='Choose Package'
                    imgUrl={Step2}
                    desc='Select the package that is the best option for you.'
                />
                <ProcessCard
                    stepNum='03'
                    title='Check Translation'
                    imgUrl={Step3}
                    desc='Do not forget to check the translation before delivery.'
                />
                <ProcessCard
                    stepNum='04'
                    title='Confirm Delivery'
                    imgUrl={Step4}
                    desc='When you are ready make sure to confirm the delivery.'
                />
            </div>
        </div>
    );
}

export default HowItWorks;
