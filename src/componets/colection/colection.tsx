import style from './style.module.css'

import imgLeblel from '../../images/Lebel-img/IMAGE.jpg'

function Colection(){
    return(
        <div className={style.colection}>

            <div className={style.colection__example}>
                <h1 className={style.colection__example__title}>
                    WAVE NFT
                </h1>
                <h1 className={style.colection__example__title}>
                    COLLECTION OF 777
                </h1>
                <img src={imgLeblel} />
            </div>

            <div className={style.colection__text}>

                <div className={style.colection__text__info}>
                    <div className={style.colection__text__info__line} />
                    <p>
                        META WAVE NFT is your pass to Meta Record Label ecosystem. 
                        It is your access to our industry experts, established artists, and partners.
                    </p>
                </div>

                <div>
                    <p>
                        Hac habitasse platea dictumst vestibulum rhoncus est. 
                        Sit amet dictum sit amet justo. 
                        Tortor aliquam nulla facilisi cras.
                    </p>
                    <p>
                        Maecenas ultricies mi eget mauris pharetra. 
                        Sit amet consectetur adipiscing elit ut aliquam purus. 
                        Porta nibh venenatis cras sed felis. 
                        Aenean vel elit scelerisque mauris pellentesque pulvinar. 
                        Et malesuada fames ac turpis egestas sed tempus. 
                        Enim sit amet venenatis urna cursus eget.
                    </p>
                    <p>
                        Maecenas ultricies mi eget mauris pharetra et ultrices. 
                        A condimentum vitae sapien pellentesque habitant morbi.
                    </p>
                </div>

                <button className={style.colection__text__btn}>
                    Get one on OpenSea
                </button>
            </div>

        </div>
    )
}

export default Colection