import React, { Component } from 'react'
import '../css/AboutUs.css';
import aboutcheck from '../images/aboutcheck.gif';
import { MainHeader } from '../MainHeader';

export class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <body >
                <MainHeader />
                <section className="section">
                    <div>
                        <h6> Care 4 ALL</h6>
                    </div>
                    <div className='underline mx-auto'></div>
                    {/* <div className="image"> */}
                    <img src={aboutcheck} alt="aboutus" class="center" />
                    {/* </div> */}

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading"> ABOUT US</h3></div>
                        <div className="underline mx-auto"></div>
                        <p className='para1'>
                            <li className='pa1'> At Care 4 All , your safety and well-being are always our top priorities.
                                <li className='pa1'>You can count on us to deliver the care you need just as we always have - safely and effectively.</li>

                                <li className='pa2'>We continue to strongly encourage vaccination as the best defense against COVID-19. As an academic medical center, we are proud to share the latest advances in education, research, and clinical care. Our COVID-19 Updates and Vaccination websites offer tip sheets, educational resources, answers to frequently asked questions, and links to immediate scheduling for vaccination, both for adults and children ages 12-15. Vaccine information for children 5-11 is available through our partner Children's Health.</li>

                                <li className='pa2'>Beginning Oct. 24, 2022, based on the low level of COVID-19 transmission in our community, masks are no longer required within most Care 4 All clinical environments if you are symptom-free, but they remain a welcome precaution. Masks should continue to be worn by patients and guests visiting our Cancer Center clinics, Transplant clinics, Bone Marrow Transplant Unit, and Emergency Department.

                                    Thank you for helping protect our community. We look forward to serving you.</li>
                            </li>
                        </p>

                        <div className="col-md-4 text-center" id='box1'>
                            <h6>Our Goal and Mission</h6>

                            <p2>
                                Care 4 All strives to provide the best experience for the user's welfare.
                            </p2>
                        </div>

                    </div>
                    <p>
                        <li className='pa1'> Care 4 All is one of India’s trusted pharmacy. </li>
                        <li className='pa1'>  It is one of India's  largest branded pharmacy network, with over 4500 outlets in key locations.</li>

                        <li className='pa2'> Accredited with - International Quality Certification, Care 4 All offers genuine medicines round-the-clock, through our 24-hour Pharmacies. Care 4 All also provides customer care any time of the day!</li>

                        <li className='pa2'>Quality is the cornerstone of our existence. We have gained experience in pharmacy operations management over the last 2 decades and are committed to delivering best service in the industry.</li>

                        <li className='pa2'> Care 4 All is well stocked with medicines, OTC and FMCG products, manned by a team of qualified and experienced staff available to cater to your every need.</li>

                        <li className='pa2'>Care 4 All has more than 5000 products in various categories like Vitamins and Supplements, Baby Care, Personal Care, Health & Nutrition Foods and OTC. In addition to this we have more than 400 Apollo Brand Products in the following categories like vitamins and supplements, health food, oral care, skincare, personal care, baby care, OTC etc.
                        </li>
                    </p>
                </section>
            </body>
        )
    }
}