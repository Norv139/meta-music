import Daniela_Youth from '../../images/META_Artists/Daniela Youth.png'
import Ivor from '../../images/META_Artists/Ivor.png'
import Mark_Popson from '../../images/META_Artists/Mark Popson.png'
import Pete_Bentz from '../../images/META_Artists/Pete Bentz.png'
import Roman_Gore from '../../images/META_Artists/Roman Gore.png'
import Somae_Petit from '../../images/META_Artists/Somae Petit.png'
import Tonya from '../../images/META_Artists/Tonya.png'

import style from './style.module.css'

function Artists(){
    return(
        <div className={style.artists}>
            <div className={style.artists__grid}>
                <Cart src={Daniela_Youth} name='Daniela Youth' />
                <Cart src={Ivor} name='Ivor' />
                <Cart src={Mark_Popson} name='Mark Popson' />
                <Cart src={Pete_Bentz} name='Pete Bentz' />
                <Cart src={Roman_Gore} name='Roman Gore' />
                <Cart src={Somae_Petit} name='Somae Petit' />
                <Cart src={Tonya} name='Tonya' />
            </div>
        </div>
    )
}

interface ICart{
    src: any,
    name: String
}

function Cart({src, name}:ICart){
    return(
        <div className={style.cart}>
            <img src={src} />
            <p>{name}</p>
        </div>
    )
}

export default Artists