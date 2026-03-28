import { useState } from 'react';

import Input from './Input.jsx';

import '../styles/General.css';


export default function General(){
    const [isEditing, setIsEditing] = useState(true);

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
        setIsEditing(false);
    }

    function handleEdit(){
        console.log("Edit button clicked");
        setIsEditing(true);
    }

    return (
        <div>
            <form className="GeneralInfo" onSubmit={handleSubmit}>
                <p>{isEditing ? "Editing Mode" : "Preview Mode"}</p>
                <Input
                    type="text"
                    id="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    value={generalInfo.fullName}
                    onChange={handleChange}
                    required
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Email"
                    value={generalInfo.email}
                    onChange={handleChange}
                    required
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
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
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />
                {isEditing && (
                <button type="submit">Submit</button>
                )}
                {!isEditing && (
                <button type="button" onClick={handleEdit}>Edit</button>
                )}
            </form>
            
        </div>
    );
}