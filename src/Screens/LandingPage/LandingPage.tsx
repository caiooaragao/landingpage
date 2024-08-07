import React from 'react'
import "./LadingPange.css"
import ButtonDefault from '@/Components/ButtonDefault/ButtonDefault'
import CardWithImage from '@/Components/Card/CardWithImage'
import ButtonOutline from '@/Components/ButtonOutline/ButtonOutline'



const LandingPage = () => {
    return (
        <main>
            <div className='container bg-gradient-to-br from-black to-rose-950 max-w-max'>

                <section className='p-5 grid grid-cols-5 gap-4'>

                    <div className='col-span-3 col-start-2 flex justify-center items-center   flex-col '>
                        <div className='h2 text-slate-200 p-10'>LOGO OU NOME DO CURSO</div>
                        <div className='h1 text-slate-400 text-4xl text-center font-bold '> Assista o vídeo e aprenda a fazer uma sequência de stories que
                            <div className='text-purple-500'> gera engajamento, respostas no directs e transformar cada conversa em uma venda.
                            </div>
                        </div>
                        <div className='w-full mt-20 '>
                            <iframe src="https://www.youtube.com/embed/nF32JsWHI0E" className='youtube-player rounded-md ' frameBorder="0"></iframe>

                        </div>
                        <div className='w-full mt-20 flex items-center justify-center'>
                            <ButtonDefault buttonText={'QUERO APRENDER MÁGICA AGORA'} onclick={() => console.log('clicked')} />
                        </div>
                        <div className='w-full items-center justify-center flex mt-10'>
                            <img src="/images/payments.png" alt="erro" />


                        </div>


                        {/* <div className=''>

                            {  <iframe width="1422" height="522" src="https://www.youtube.com/embed/nF32JsWHI0E" title="Mágica pra sua quarentena!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

                        </div> */}
                    </div>
                </section>

                <section className='p-5 grid grid-cols-8 gap-4'>
                    <div className='col-span-6 col-start-2 flex justify-center items-center gap-10  flex-col '>
                        <div className='text-7xl font-bold w-full text-center tracking-wider text-slate-400'>Como o curso de <div className='text-purple-500 inline'>Mágica</div> funciona</div>
                        <p className='text-slate-400 leading-8 pr-20 pl-20'>O stories 10x é uma forma de usar os stories do instagram para gerar conexão profunda com o público que te segue.
                            Através de temas pré definidos e conteúdo que o próprio público te dá (você vai aprender a fazer isto dentro do S10x), colocando o foco em assuntos que despertam a atenção e o interesse genuíno das pessoas.

                            Quando você acerta dá o que as pessoas realmente se interessam, gerando curiosidade e desejo, elas ficam viciadas no seu conteúdo e no que você tem a dizer
                            Com isso, consequentemente melhora o engajamento, aumenta os views, se conecta de verdade com seu público e consegue fazer mais vendas.
                        </p>
                    </div>

                </section>
                <section className='grid grid-cols-8 gap-4'>
                    <div className='col-span-8 mt-20 w-full'>
                        <div className='text-slate-400 text-7xl font-bold tracking-wider text-center'>Os grandes mágicos do mercado já fizeram o curso <p className='text-purple-500 leading-10 inline'>mágica 20x</p></div>

                    </div>
                </section>
                <section className='mt-32'>
                    <div className='w-full flex gap-20 flex-wrap items-center justify-center'>

                        <CardWithImage imgSrc='/images/pessoa_pexels.jpg' />
                        <CardWithImage imgSrc='/images/pessoa_pexels.jpg' />
                        <CardWithImage imgSrc='/images/pessoa_pexels.jpg' />
                        <CardWithImage imgSrc='/images/pessoa_pexels.jpg' />
                        <CardWithImage imgSrc='/images/pessoa_pexels.jpg' />

                    </div>
                </section>


                <section className=' pt-44'>
                    <div className='grid grid-cols-8 gap-16'>
                        <div className=' col-span-6 col-start-2 text-slate-400 text-3xl text-center leading-8'>
                            Ainda não está convencido? Faça o download do nosso <span className='text-purple-500'>PDF</span>
                        </div>
                        <div className='col-span-6 col-start-2 text-slate-300 text-6xl font-bold text-center'>Faça o download do PDF com os <span className='text-purple-400'>resultados de milhares de pessoas</span> que estão no  <span className='text-purple-400'>curso</span> </div>

                        <div className="col-span-8 flex flex-col gap-8 items-center justify-center">
                            <ButtonOutline textoButtonOutline='Fazer download do PDF' />
                            <p className='text-center text-slate-400 text-2xl'>Você vai ficar impressionado <br /> e por isso não se assuste com o poder do S10x.</p>
                        </div>



                    </div>
                </section>

                <section className=' pt-44'>
                    <div className='grid grid-cols-8 gap-16'>

                        <div className='col-span-6 col-start-2 text-slate-300 text-6xl font-bold '>Curso de <span className='text-purple-400'>Mágica 10x </span>  </div>

                        <div className="col-span-6 col-start-2 flex flex-col gap-8 items-center justify-center">

                            <p className=' text-slate-400 text-2xl'>Ao entrar no Stories 10x, você leva 365 dias grátis do App Stories 10x. Ferramenta para você criar em pouco tempo, stories envolventes que fazem sua audiência engajar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ea!.</p>
                        </div>
                        <div className="col-span-6 col-start-2">
                            <div className='w-full mt-10 flex-col justify-center border-2 border-indigo-500/50  items-center '>
                                <iframe src="https://www.youtube.com/embed/nF32JsWHI0E" className='youtube-player rounded-md ' frameBorder="0"></iframe>

                            </div>

                        </div>
                        <div className='col-span-6 col-start-2'>
                            <p className='text-slate-200 text-2xl leading-8'>Infinitas ideias de stories, criação de sequências que geram interações verdadeiras, trackeamento de vendas. Todos os processos organizados em um único lugar Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet?.</p>
                            <div className='mt-8'>
                                <p className='text-slate-300 text-xl'>Diponível em:</p>
                                <img className='mt-3' src="/images/mobile_icons.png" alt="erro" />

                            </div>

                        </div>
                        <div className="col-span-4 col-start-3 flex flex-col items-center justify-center">
                            <div className='w-full mt-20 flex items-center justify-center'>
                                <ButtonDefault customTextColor='text-slate-900' customColor='bg-white' buttonText={'QUERO APRENDER MÁGICA 10X MAIS RÁPIDO AGORA'} onclick={() => console.log('clicked')} />
                            </div>
                            <div className='w-full items-center justify-center flex mt-10'>

                                <img src="/images/payments.png" alt="erro" />

                            </div>
                        </div>



                    </div>
                </section>
                <footer className='mt-32 h-12 w-full flex justify-center align-middle bg-black '>
                    <p className='text-slate-200 text-center p-6 '>
                        @raphasantacruz all rights reserved 2024
                    </p>

                </footer>


            </div >




        </main >
    )
}

export default LandingPage