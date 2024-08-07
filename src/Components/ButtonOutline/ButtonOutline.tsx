import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';

interface IButtonOutlineProps {
    textoButtonOutline: string
}
const ButtonOutline = (props: IButtonOutlineProps) => {
    return (
        <div>
            <button className='w-80 h-14 border-2 border-slate-100 bg-transparent hover:border-slate-300 hover:text-slate-300 text-slate-100 rounded-sm bg-slate-300'>
                {props.textoButtonOutline}
                <DownloadIcon />
            </button>

        </div>
    )
}

export default ButtonOutline