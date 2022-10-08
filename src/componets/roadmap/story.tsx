import { ReactNode, useState } from 'react'
import style from './style.module.css'

import img from '../../images/Lebel-img/IMAGE.jpg'
import img1 from '../../images/Lebel-img/IMAGE-1.jpg'
import img2 from '../../images/Lebel-img/IMAGE-2.jpg'

import guitarist from '../../images/guitarist.jpg'

interface IPoint{
    status: boolean,
    number: number,
    title: string,
    puncts: string[],
    text: string,
    imgSrc: string,
    key: string
}



const puncts = [
    {
        number:1, 
        status:true, 
        title:'Spring 2022 - pre launch', 
        puncts:['Website 1.2', 'Discord community promotion', 'MINTING WAVE NFTs'], 
        text:'WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection',
        imgSrc: img2,
        key: '1'
    },
    {
        number:2, 
        status:false, 
        title:'Summer 2022 - GROWTH',
        puncts:['Hiring for 10 positions in', 'Partnerships with main Metaverse players', 'Partnerships with WEB 2.0 music destribution channels', 'Onboarding 100 new artists'], 
        text:'META Record Labels is holding the first screening of aspiring artists from the list of WAVE NFT holders',
        imgSrc: img,
        key: '2'
    },
    {
        number:3, 
        status:false, 
        title:'Summer 2022 - YOuR new stage',
        puncts:['Onboarding new partners', 'First live concert in Sandjar', 'Live concert in Decentrafield'], 
        text:'We secured dates for out artists to peform in front of the live audience of Metaverse. Check the concert schedule in our Discord',
        imgSrc: img1,
        key: '3'
    }
]

function Roadmap(){
    return(
        <div className={style.roadmap}>
            <div className={style.roadmap__img}>
                <img src={guitarist} />
            </div>
            
            <h1>Roadmap</h1>

            <div className={style.circle} style={{'top': '-394px','right': '-48px'}}>
                <div className={style.circle__0}>
                    <div className={style.circle__1}>
                        <div className={style.circle__2}>
                            <div className={style.circle__3}>
                            <div className={style.circle__4}></div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
 
            <Point {...puncts[0]} />
            <div className={style.roadmap__line} />

            <div className={style.circle} style={{'right': '-745px', 'top': '-300px'}}>
                <div className={style.circle__0}>
                    <div className={style.circle__1}>
                        <div className={style.circle__2}>
                            <div className={style.circle__3}>
                            <div className={style.circle__4}></div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 

            <Point {...puncts[1]} />
                <div className={style.roadmap__line} />
            
                <div className={style.circle} style={{'right': '-19px', 'top': '-58px'}}>
                    <div className={style.circle__0}>
                        <div className={style.circle__1}>
                            <div className={style.circle__2}>
                                <div className={style.circle__3}>
                                <div className={style.circle__4}></div>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div> 

            <Point {...puncts[2]} />
            
            
        </div>
    )
}


function Point({status, number, title, puncts, text, imgSrc, key}:IPoint){

    const completed = status?(style.point__title__number__completed):(style.point__title__number)

    const listItems = puncts.map((text, i) => <p key={i+text}>{text}</p>);

    return(
            <div className={style.point} key={key}>
                <div className={style.point__title}>
                    <div className={completed}>
                        {number}
                    </div>

                    <div className={style.point__title__main}>
                        <div className={style.point__title__main__phase}>
                            Phase {number}{status?(' - completed'):('')}
                        </div>
                        <div className={style.point__title__main__text}>
                           {title}
                        </div>
                    </div>

                </div>
                <div className={style.point__main}>
                    <div>
                        <div className={style.point__main__puncts}>
                            {
                                listItems
                            }
                        </div>
                        <div className={style.point__main__text}>
                            {text}
                        </div>
                    </div>
                    <img src={imgSrc} />
                </div>
            </div>
    )
}



export default Roadmap