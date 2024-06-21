import React from 'react';
import Lang from './Lang';
import PakistanFlag from '../../assets/flags/pakistani-flag.jpg'
import AmericanFlag from '../../assets/flags/american-flag.jpg'
import IranianFlag from '../../assets/flags/iranian-flag.jpg'
import SaudiArabianFlag from '../../assets/flags/saudi-arabian-flag.jpg'

const CoveredLangs = () => {
    return (
        <div className='flex lg:flex-row flex-col xl:gap-x-14 lg-custom:gap-x-20 lg:gap-x-16 gap-y-10'>
            <div className='lg-custom:w-4/12 lg:w-[35%]'>
                <h3 className='text-[rgb(60,146,255)] font-semibold text-[16.5px] tracking-wide'>High Professional Translation Agency</h3>
                <h2 className='text-[rgb(19,40,126)] text-3xl font-black mt-3 w-[500px] leading-10'>Languages We Cover</h2>
                <p className='mt-6 text-[rgb(129,135,150)] leading-7 w-full'>
                    We cover a wide range of languages. Our team of professional translators and interpreters are ready to help
                    you by translating upto 4 languages. We aim to provide you with the best quality.
                </p>
            </div>
            <div className='lg-custom:w-8/12 lg:w-[65%] overflow-hidden grid grid-cols-2 gap-y-12 xl:gap-x-10 mt-5'>
                <Lang
                    imgUrl={AmericanFlag}
                    title="English Languages"
                    desc="English is the primary global language for communication, business, and diplomacy."
                />
                <Lang
                    imgUrl={PakistanFlag}
                    title="Urdu Languages"
                    desc="Urdu is a widely spoken South Asian language with a rich literary heritage."
                />
                <Lang
                    imgUrl={IranianFlag}
                    title="Persian Languages"
                    desc="Persian is an influential Iranian language with a rich literary legacy."
                />
                <Lang
                    imgUrl={SaudiArabianFlag}
                    title="Arabic Languages"
                    desc="Arabic is a versatile and ancient language, pivotal in science, philosophy, and religion."
                />
            </div>
        </div>
    );
}

export default CoveredLangs;
