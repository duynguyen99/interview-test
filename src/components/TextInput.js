const TextInput = (props) =>{
    const {label, onChange  } = props;
    return <div className="input-wrapper">
         <span>{label || "Label Input "}</span> 
         <input type="text  " onChange={(e) => onChange(e)}></input>
    </div>
}

export default TextInput;