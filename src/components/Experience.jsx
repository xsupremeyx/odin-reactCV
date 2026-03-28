import { useState } from 'react';
import Input from './Input.jsx';
import '../styles/Experience.css';

export default function Experience({data, setData, markSubmitted}) {
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
        <div className="form-section">
            <h2>Experience</h2>
            <form className="experience" onSubmit={handleSubmit}>
                <p className="section-mode">{isEditing ? "Editing Mode" : "Preview Mode"}</p>

                <Input
                    type="text"
                    id="company"
                    label="Company"
                    placeholder="Company"
                    value={data.company}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="position"
                    label="Position"
                    placeholder="Position"
                    value={data.position}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="text"
                    id="responsibilities"
                    label="Responsibilities"
                    placeholder="Responsibilities"
                    value={data.responsibilities}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="from"
                    label="From"
                    value={data.from}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={isEditing ? '' : 'disabled'}
                />

                <Input
                    type="date"
                    id="to"
                    label="To"
                    value={data.to}
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