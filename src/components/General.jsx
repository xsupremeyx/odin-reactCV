// will display the General input information form only.

import { useState } from 'react'
import  Input  from './Input.jsx'
import '../styles/General.css'

export default function General(){
    const [generalInfo, setGeneralInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
    });

    function handleChange(e){
        const {name, value} = e.target;
        setGeneralInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(generalInfo);
    }

    return (
        <form className="GeneralInfo" onSubmit={handleSubmit} >
            <Input
                type="text"
                id="fullName"
                label="Full Name"
                placeholder="Full Name"
                value={generalInfo.fullName}
                onChange={handleChange}
                required
            />
            <Input
                type="email"
                id="email"
                label="Email"
                placeholder="Email"
                value={generalInfo.email}
                onChange={handleChange}
                required
            />
            <Input
                type="tel"
                id="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                value={generalInfo.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
            />
            <button type="submit">Submit</button>
        </form>
    );
}