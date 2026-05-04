type FormInputProps = {
    ref?:React.RefObject<HTMLInputElement | null>
    name?:string,
    placeholder?:string,
    value?:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ref, name, placeholder, value, onChange}:FormInputProps){
    return(
        <input ref={ref} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    );
}