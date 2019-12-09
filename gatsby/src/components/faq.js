import React, { useState, useRef } from 'react';
import './Faq.css';
import Chevron from '../components/Chevron.js';

const FAQ = (props) => {
    const [ active, setActive ] = useState("");
    const [ height, setHeight ] = useState("0px");
    const [ rotate, setRotate ] =useState("accordion__icon")

    const content = useRef(null);

    let toggleAccordion = e => {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion__icon" : "accordion__icon rotate")
    }

    return (
        <div className='accordion__section'>

            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.question}</p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{maxHeight:`${height}`}} className="accordion__content">
                <div 
                className="accordion__text"
                dangerouslySetInnerHTML = {{ __html: props.response }}
                />
            </div>
        </div>
    )
}

function FaqAccordion (props) {
    return (
        <>
            <FAQ question="Why is it important for everyone to be counted in the Census?"
            response="
            Some federal funds, grants, and support to states, counties and communities are based on population. It is critical for everyone to be counted, regardless of immigration status. When you respond to the Census, you help your community get its fair share of federal funds. Businesses use Census data to decide where to build factories, offices and stores, and this creates jobs. Developers use Census data to build new homes and revitalize neighborhoods. Local governments use Census data for public safety and emergency preparedness.
            " />
            <FAQ question="How do you get counted?"
            response="
            Starting mid-March 2020, each household will receive a postcard in the mail informing them of the options for filling out the Census questionnaire. That includes online, by phone, or with a paper form. Households that do not fill out the questionnaire during the self-response period will be contacted by the U.S. Census Bureau during Non-Response Follow-Up. March 12-20: Households will receive an invitation to respond online to the 2020 Census. Some households will also receive paper questionnaires. March 16-24: A reminder letter will be sent. If you still have not responded: March 26-April 3: A reminder postcard will be sent to households that have not responded. April 8-16: A reminder letter and paper questionnaire will be sent. April 20-27: A final reminder postcard before the U.S. Census Bureau follows up in person. U.S. Census Bureau enumerators may contact households that submit partially filled-out questionnaires in an effort to obtain complete answers.
            " />
            <FAQ question="What should a Texan be aware of when filling out the Census?"
            response="
            It is critical to be cautious of any requests that seem suspicious. The U.S. Census Bureau will never ask for the following: Payment to fill out the questionnaire Social Security number Financial information U.S. Census Bureau field staff will always show a valid Census Bureau ID. You can confirm that they are a U.S. Census Bureau employee by entering their name into the Census Bureau Staff Search or by contacting the Texas Regional Office at 1-800-852-6159. It is a federal crime to impersonate a federal official, and anyone who violates this law is subject to imprisonment.
            " />
            <FAQ question="Is private information protected?"
            response="
            The United States Census Bureau (USCB) is required by law to protect any personal information it collects and keep it confidential. The U.S. Census Bureau is bound by Title 13 of the United States Code. These laws not only provide the Bureau with authority for its work, but also stipulate strong protections for the information the Census collects from individuals and businesses. The U.S. Census Bureau uses responses to produce statistics. Private information may not be published when it is collected. After 72 years, it may be published for historical purposes by the National Archives. It is against the law to disclose or publish any private information that identifies an individual or business, such as names, addresses (including GPS coordinates), Social Security numbers, and telephone numbers. Answers cannot be used for law enforcement purposes or to determine personal eligibility for government benefits. Personal information cannot be used against respondents for the purposes of immigration enforcement. U.S. Census Bureau employees are sworn to protect confidentiality. Every person with access to data is sworn for life to protect personal information and understands that the penalties for violating this law are applicable for a lifetime. Violating confidentiality or sharing the information other than for statistical purposes is a serious federal crime. Anyone who violates this law will face severe penalties, including a federal prison sentence of up to five years, a fine of up to $250,000, or both.
            " />
            <FAQ question="Will the 2020 Census include a question about Citizenship?"
            response="
            The 2020 Census questionnaire will NOT include a question about an individual’s citizenship status. Everyone, regardless of their immigration status, has certain basic rights. For those who have concerns about opening your doors, there are other ways you can participate. You can participate from the comfort of your home online and over the phone, or at community run assistance center. Please complete your Census questionnaire. An incomplete questionnaire may increase your chances of nonresponse follow-up by the U.S. Census Bureau. Households will receive an invitation to respond online to the 2020 Census beginning March 12, 2020. Your participation is vital, and your information is protected.
            " />
            <FAQ question="What is the Austin-Travis County Complete Count Committee doing to encourate participation?"
            response="
            The Austin-Travis County Complete Count Committee is supporting a coordinated outreach and communication effort focused on reaching the hard-to-count (HTC) population. This Committee is collaborating and leveraging support from local governments, regional and statewide community-based organizations, nonprofit, education, and other agencies to ensure the hardest to count communities are reached. Communication efforts will aim to help our residents understand that their information will remain private and dispel misinformation. Take a look at our Interactive Map for a list of upcoming events to get involved or to learn more, e-mail census@traviscountytx.gov.
            " />

        </>
    )
}


export default FaqAccordion;