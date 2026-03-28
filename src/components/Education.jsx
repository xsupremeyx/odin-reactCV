import { useState } from 'react';
import Input from './Input.jsx';
import '../styles/Education.css';

export default function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [education, setEducation] = useState({
        school: '',
        degree: '',
        date: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setEducation(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(education);
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
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
                    value={education.school}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="degree"
                    label="Degree"
                    placeholder="Degree"
                    value={education.degree}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="date"
                    label="Date of Completion"
                    value={education.date}
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