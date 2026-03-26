import '../styles/Input.css'


export default function Input({type, id, label, ...rest}){
    return (
        <div className="InputCard">
            <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id}
                name={id}
                {...rest}
            />
        </div>
    );
}