import { useState } from 'react'

import style from './style.module.css'

import imgMainLeblel from '../../images/Lebel-img/main.jpg'

function Lebel(){

    const [bigImg, setBigImg] = useState(2)
    console.log(bigImg)
    return(
        <div className={style.lable}>
            
            <div className={style.lable__text}>
                <h1>META RECORD LABEl</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                <button className={style.lable__btn}>
                    Learn more
                </button>
            </div>


            <img src={imgMainLeblel} className={style.lable__img}/>
        </div>
    )
}

export default Lebel