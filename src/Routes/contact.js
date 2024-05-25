import {Link} from "react-router-dom";

function Contact() {
    return (<div className={'Contact_Box'}>
            <div className={"Email_Line"}>
                <p className={'email'}> jacob_hayward26@outlook.com </p>
            </div>

            <div className={'Phone_Line'}>
                <p className={'phone_number'}>07526518630</p>
            </div>

            <div className={'Linked_Line'}>
                <Link className={'linked_link'}
                      to={'https://www.linkedin.com/in/jacob-hayward-9b1646251/'}>https://www.linkedin.com/in/jacob-hayward-9b1646251/</Link>
            </div>
        </div>);
};

export default Contact;