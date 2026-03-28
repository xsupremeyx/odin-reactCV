import { useState } from 'react';
import Input from './Input.jsx';
import '../styles/Experience.css';

export default function Experience() {
    const [isEditing, setIsEditing] = useState(true);

    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        to: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setExperience(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(experience);
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <div>
            <form className="experience" onSubmit={handleSubmit}>
                <p>{isEditing ? "Editing Mode" : "Preview Mode"}</p>

                <Input
                    type="text"
                    id="company"
                    label="Company"
                    placeholder="Company"
                    value={experience.company}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="position"
                    label="Position"
                    placeholder="Position"
                    value={experience.position}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="responsibilities"
                    label="Responsibilities"
                    placeholder="Responsibilities"
                    value={experience.responsibilities}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="from"
                    label="From"
                    value={experience.from}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="to"
                    label="To"
                    value={experience.to}
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