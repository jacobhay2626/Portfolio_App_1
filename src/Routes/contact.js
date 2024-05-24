import {AiFillLinkedin} from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import {Link} from "react-router-dom";

function Contact() {
    return (<div className={'Contact_Box'}>
            <div className={"Email_Line"}>
                <AiFillMail className={"email_logo"}/>
                <p className={'email'}> jacob_hayward26@outlook.com </p>
            </div>

            <div className={'Phone_Line'}>
                <AiFillPhone className={'phone_logo'}/>
                <p className={'phone_number'}>07526518630</p>
            </div>

            <div className={'Linked_Line'}>
                <AiFillLinkedin className={'linked_logo'}/>
                <Link className={'linked_link'}
                      to={'https://www.linkedin.com/in/jacob-hayward-9b1646251/'}>https://www.linkedin.com/in/jacob-hayward-9b1646251/</Link>
            </div>
        </div>);
};

export default Contact;