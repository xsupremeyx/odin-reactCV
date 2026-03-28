import { useState } from 'react';
import Input from './Input.jsx';
import '../styles/Education.css';

export default function Education({data, setData, markSubmitted}) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setData({...data,[name]: value,});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
        markSubmitted(true);
    }

    function handleEdit() {
        setIsEditing(true);
        markSubmitted(false);
    }

    return (
        <div>
            <form className="education" onSubmit={handleSubmit}>
                <p>{isEditing ? "Editing Mode" : "Preview Mode"}</p>

                <Input
                    type="text"
                    id="school"
                    label="Institute Name"
                    placeholder="Institute Name"
                    value={data.school}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="degree"
                    label="Degree"
                    placeholder="Degree"
                    value={data.degree}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="date"
                    label="Date of Completion"
                    value={data.date}
                    onChange={handleChange}
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