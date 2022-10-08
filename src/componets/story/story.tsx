import { useState } from 'react'
import style from './style.module.css'

import foundersImg from '../../images/imgStory/founders.jpg'
import futureImg from '../../images/imgStory/Future.jpg'
import bigImg from '../../images/imgStory/big.jpg'

function Story(){

    const [btn, setBtn] = useState(0)

    return(
        <div className={style.container}>
            
            <div className={style.container__title}>
                MRL.
                <div>the story.</div>
            </div>

            <div className={style.container__grid}>
                <div className={style.container__grid__input}>
                    <button className={ btn === 0 ? (style.btn__on):('')} onClick={()=>{setBtn(0)}}>Our founders</button>
                    <button className={ btn === 1 ? (style.btn__on):('')} onClick={()=>{setBtn(1)}}>Partners</button> 
                    <button className={ btn === 2 ? (style.btn__on):('')} onClick={()=>{setBtn(2)}}>The future</button>
                </div>

                <div className={style.container__grid__info}> 
                    {
                        btn === 0?(
                            Founders()
                        ):(
                            btn === 1?(
                                Partners()
                            ):(
                                Future()
                            )
                        )
                    }
                </div>

            </div>
        </div>
    )
}

function Founders(){
    return(
        <div className={style.info}>
            <img src={foundersImg} />
            <div className={style.info__text}>
                <div className={style.info__text__node}>
                    META record label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.
                </div>
                <p>
                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                </p>
                <p>
                    Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                </p>
                <p>
                    Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.
                </p>
            </div>
        </div>
    )
}

function Partners(){
    return(
        <div className={style.info}>
        <img src={bigImg} />
        <div className={style.info__text}>
            <div className={style.info__text__node}>
            Tempus ipsum urna dictum venenatis cras lectus mattis sed sed arcu pulvinar consectetur efficitur eleifend.
            </div>
            <p>
                Dictum et eget dictum amet mattis vitae luctus amet, consectetur amet efficitur amet, est. Nisi amet elit. Lectus pellentesque elit. Odio. Sapien est. Amet id et mattis orci, mollis malesuada malesuada sed tortor, mollis in nunc leo, vel non pellentesqu.
            </p>
            <p>
                Et venenatis non eleifend eget nec libero, augue sapien pulvinar nunc ornare vulputate habitasse non vel eget quam, amet, lectus elit. Mollis libero, nunc et sit vitae imperdiet leo, non non eget est. Dolor accumsan vitae arcu lorem mattis vestibulum mollis sit id augue faucibus. Mollis sit et et. Ege.
            </p>
            <p>
                Dictum et eget dictum amet mattis vitae luctus amet, consectetur amet efficitur amet, est. Nisi amet elit. Lectus pellentesque elit. Odio. Sapien est. Amet id et mattis orci, mollis malesuada malesuada sed tortor, mollis in nunc leo, vel non pellentesqu.
            </p>
            <p>
                Et venenatis non eleifend eget nec libero, augue sapien pulvinar nunc ornare vulputate habitasse non vel eget quam, amet, lectus elit. Mollis libero, nunc et sit vitae imperdiet leo, non non eget est. Dolor accumsan vitae arcu lorem mattis vestibulum mollis sit id augue faucibus. Mollis sit et et. Ege.
            </p>
            <p>
                Dictum et eget dictum amet mattis vitae luctus amet, consectetur amet efficitur amet, est. Nisi amet elit. Lectus pellentesque elit. Odio. Sapien est. Amet id et mattis orci, mollis malesuada malesuada sed tortor, mollis in nunc leo, vel non pellentesqu.
            </p>
            <p>
                Et venenatis non eleifend eget nec libero, augue sapien pulvinar nunc ornare vulputate habitasse non vel eget quam, amet, lectus elit. Mollis libero, nunc et sit vitae imperdiet leo, non non eget est. Dolor accumsan vitae arcu lorem mattis vestibulum mollis sit id augue faucibus. Mollis sit et et. Ege.
            </p>
        </div>
    </div>
    )
}
function Future(){
    return(
        <div className={style.info}>
            <img src={futureImg} />
            <div className={style.info__text}>
                <div className={style.info__text__node}>
                    Sed luctus in est. Et efficitur et amet justo amet.
                </div>
                <p>
                    Eget dictumst. Elit. Vulputate habitasse quis, eleifend molestie luctus aenean nunc lectus sit vulputate dolor in non accumsan consectetur ha.
                </p>
                <p>
                    Morbi nec molestie accumsan amet ut. Quis, ornare dapibus et accumsan sit augue velit eget elit. Efficitur sed aenean tempus mattis dui tempus sit venenatis dui nisi non augue dui vestibulum eleifend ipsum aenean odio. Justo mauris ut. Ultricies. In aenean interdum cras luctus molestie tortor, sed tempus malesuada in vel odio. Nec luctus sodales molestie hac dictum. Lorem dolor quam, interdum cursus orci, dictumst. Non amet, lectus imperdiet sit sed quis, augue vulputate sit leo, accumsan non habitasse est.
                </p>

            </div>
        </div>
    )
}


export default Story