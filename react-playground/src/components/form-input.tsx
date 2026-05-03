type FormInputProps = {
    name?:string,
    placeholder?:string,
    value?:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({name, placeholder, value, onChange}:FormInputProps){
    return(
        <input name={name} placeholder={placeholder} value={value} onChange={onChange} />
    );
}