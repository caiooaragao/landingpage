import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardWithImage.css'

interface ICardProps {
    imgSrc: string
}
const CardWithImage = (props: ICardProps) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='image group grid grid-rows-3 grid-flow-col p-4 border-2 border-rose-900/100 '>
                <div className='row-span-1 col-span-3'></div>
                <div className='row-span-1 col-span-3 flex items-center justify-center '>
                    <div className='play-button bg-rose-800 group-hover:bg-rose-400 transition duration-300'></div>
                </div>
                <div className='row-span-1 col-span-3 flex items-end '>
                    <p className='font-bold text-white text-3xl '>Exemplo de depoimento Lorem, ipsum dolor.</p>
                </div>

            </div>
            <div className='flex flex-col mt-3'>
                <p className='font-bold text-3xl tracking-wider text-white'>
                    Anna Miller
                </p>
                <p className='text-purple-300 text-xl'>
                    1.5M <span></span>
                    <span className='text-slate-400 inline'>
                        de seguidores
                    </span>
                </p>
            </div>

        </div>

    )
}

export default CardWithImage