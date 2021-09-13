import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { CartContext } from '../context/CartContext';


const UserForm = ({ sendOrder, items, total, setLoader }) => {

    const { setItems } = useContext(CartContext);

    const date = new Date();

    const formik = useFormik({
        initialValues: {
            userName: '',
            userPhone: '',
            userMail: '',
            userAddress: ''
        },
        onSubmit: () => {
            sendOrder(formik.values, items, total, date);
            setItems([]);
            setLoader(true);
        }
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="userName" className="form-label">Full name</label>
                <input type="text" onChange={formik.handleChange} value={formik.values.userName} className="form-control" id="userName" name="userName" placeholder="Your name here" required/>

                <label htmlFor="userPhone" className="form-label">Phone</label>
                <input type="tel" onChange={formik.handleChange} value={formik.values.userPhone} className="form-control" id="userPhone" name="userPhone" pattern="[0-9]{10}" placeholder="1123456789" required/>

                <label htmlFor="userMail" className="form-label">Email</label>
                <input type="email" onChange={formik.handleChange} value={formik.values.userMail} className="form-control" id="userMail" name="userMail" placeholder="name@example.com" required/>

                <label htmlFor="userAddress" className="form-label">Address</label>
                <input type="text" onChange={formik.handleChange} value={formik.values.userAddress} className="form-control" id="userAddress" name="userAddress" placeholder="Your purchase goes here" required/>
                
                <button type="submit" className="btn btn-outline-success col-12 mt-3" style={{borderRadius: 0}}>
                    Close deal
                </button>
                
            </form>

        </div>
    );
}

export default UserForm;