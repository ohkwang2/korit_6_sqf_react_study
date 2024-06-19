function Button({ text, setNumber }) {

    const handleClick = () => {
        if(text === "증가") {
            setNumber(n => n + 1);
        }
        
        if(text === "감소") {
            setNumber(n => n - 1);
        }
    }

    return <button onClick={handleClick}>{text}</button>
}

export default Button;