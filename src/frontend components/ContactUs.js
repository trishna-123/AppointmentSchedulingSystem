import React, { Component } from 'react'
import '../css/ContactUs.css';
import contactus from '../images/contactus.gif'
import { MainHeader } from '../MainHeader';


export class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
            <MainHeader/>
                {/* <div className="col-md-12 text-center"> */}
                    <h3 className="main-heading"> Contact Us</h3>
                    {/* </div> */}
                <div className='underline mx-auto'></div>

                    <img src={contactus} alt="contactus"  />
                <p>

                    <li>For queries related to Online appointments
                        Please contact us at: <a className='mail' href="http://localhost:3000/">prathyusha4501@gmail.com</a>
                    </li>
                    <li> For queries related to Care 4 All Hospital experience
                        Please contact us at: <a className='mail' href="http://localhost:3000/">trishna367263@gmail.com</a>
                    </li>

                    <li>For Corporate and Bulk medical pharma inquiries
                        Please contact us at: <a className='mail' href="http://localhost:3000/"> wbhutia780@gmail.com</a>
                    </li>
                </p>

                <div className='card' id='box1'>
                    <h6>Our Goal and Mission</h6>

                    <p2>
                        Care 4 All strives to provide the best experience for the user's welfare.
                    </p2>
                </div>



            </>


        )
    }
}