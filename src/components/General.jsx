import { useState } from 'react';

import Input from './Input.jsx';

import '../styles/General.css';


export default function General({data, setData, markSubmitted}) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e){
        const {name, value} = e.target;
        setData({...data,[name]: value,});
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsEditing(false);
        markSubmitted(true);
    }

    function handleEdit(){
        setIsEditing(true);
        markSubmitted(false);
    }

    return (
        <div className="form-section">
            <h2>General Info</h2>
            <form className="GeneralInfo" onSubmit={handleSubmit}>
                <p className="section-mode">{isEditing ? "Editing Mode" : "Preview Mode"}</p>
                <Input
                    type="text"
                    id="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    value={data.fullName}
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
                    value={data.email}
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
                    value={data.phoneNumber}
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