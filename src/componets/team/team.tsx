import style from './style.module.css'

import imgNFT from '../../images/Lebel-img/IMAGE-1.jpg'

import Baky_Hike from '../../images/team/Baky_Hike.jpg'
import Shaky_Lake from '../../images/team/Shaky_Lake.jpg'
import Vania_Do from '../../images/team/Vania_Do.jpg'

import twitter from '../../images/Meta/Twitter.svg'
import telegram from '../../images/Meta/Telegram.svg'

function Team(){
    return(
        <div className={style.conteiner}>

            <div className={style.card}>
                <div className={style.card__img}>
                    <img src={Shaky_Lake}></img>
                </div>
                <p className={style.card__name}>
                    Shaky Lake
                </p>
                <p className={style.card__job}>
                    Founder
                </p>
                <div className={style.card__links}>
                    <a>
                        <img src={twitter} />
                    </a>
                    <a>
                        <img src={telegram} />
                    </a>
                </div>
                <p className={style.card__texts}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>

            <div className={style.card}>
                <div className={style.card__img}>
                    <img src={Baky_Hike}></img>
                </div>
                <p className={style.card__name}>Baky Hike</p>
                <p className={style.card__job}>Co-founder</p>
                <div className={style.card__links}>
                    <a>
                        <img src={twitter} />
                    </a>
                    <a>
                        <img src={telegram} />
                    </a>
                </div>
                <p className={style.card__texts}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>

            <div className={style.card}>
                <div className={style.card__img}>
                    <img src={Vania_Do}></img>
                </div>
                <p className={style.card__name}>Vania Do</p>
                <p className={style.card__job}>Producer</p>
                <div className={style.card__links}>
                    <a>
                        <img src={twitter} />
                    </a>
                    <a>
                        <img src={telegram} />
                    </a>
                </div>
                <p className={style.card__texts}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            
        </div>
    )
}

export default Team