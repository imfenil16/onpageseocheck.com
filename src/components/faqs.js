import React from 'react';
import faqData from '../utils/faqData';
import Faq from './faq';

const Faqs = () => {

    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-24 mb-8">On-page SEO Improvement Tips!</h2>
            {faqData.map(({ que, ans, id }) => (
                <Faq que={que} ans={ans} key={id} />
            ))}
        </>
    )
}

export default Faqs