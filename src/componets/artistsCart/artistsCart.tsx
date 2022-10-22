import Daniela_Youth from '../../images/META_Artists/Daniela Youth.png'
import Ivor from '../../images/META_Artists/Ivor.png'
import Mark_Popson from '../../images/META_Artists/Mark Popson.png'
import Pete_Bentz from '../../images/META_Artists/Pete Bentz.png'
import Roman_Gore from '../../images/META_Artists/Roman Gore.png'
import Somae_Petit from '../../images/META_Artists/Somae Petit.png'
import Tonya from '../../images/META_Artists/Tonya.png'

import style from './style.module.css'

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
export { Daniela_Youth, Ivor, Mark_Popson, Pete_Bentz, Roman_Gore, Somae_Petit, Tonya }
export default Cart