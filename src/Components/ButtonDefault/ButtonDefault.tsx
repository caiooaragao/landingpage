import React from 'react'


interface IButtonDefaultProps {
    buttonText: string
    onclick: Function
    customColor?: string
    customTextColor?: string
}
const ButtonDefault = (props: IButtonDefaultProps) => {
    return (
        <>
            <button className={` rounded-md font-bold ${props.customColor ? props.customColor : 'bg-slate-800'} ${props.customTextColor ? props.customTextColor : 'text-slate-300'} p-5 hover:bg-rose-900  hover:text-slate-50`} >{props.buttonText}</button>
        </>
    )
}

export default ButtonDefault