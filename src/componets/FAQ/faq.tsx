import style from './style.module.css'

import imgNFT from '../../images/Lebel-img/IMAGE-1.jpg'

function FAQ(){
    return(
        <div className={style.conteiner}>
            <div className={style.conteiner__title}>
                <p>
                    Frequently
                    <br/>
                    <span>
                        asked
                    </span>
                    <br/>
                    questions
                </p>
                <img src={imgNFT} />
            </div>

            <div className={style.conteiner__list}>
                <div className={style.conteiner__list__paragraph}>
                    <div className={style.conteiner__list__paragraph__question}>
                        <p>
                            How can I get into Meta RL?
                        </p>
                        <div></div>
                    </div>

                    <p className={style.conteiner__list__paragraph__answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={style.conteiner__list__paragraph}>
                    <div className={style.conteiner__list__paragraph__question}>
                        <p>
                            When is the NFT launch?
                        </p>
                        <div></div>
                    </div>
                    <p className={style.conteiner__list__paragraph__answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={style.conteiner__list__paragraph}>
                    <div className={style.conteiner__list__paragraph__question}>
                        <p>
                            Can I hold META WAVE NFT as an investment?
                        </p>
                        <div/>
                    </div>
                    
                    <p className={style.conteiner__list__paragraph__answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={style.conteiner__list__paragraph}>
                    <div className={style.conteiner__list__paragraph__question}>
                        <p >
                            Where can I get a WAVE NFT?
                        </p>
                        <div/>
                    </div>
                    
                    <p className={style.conteiner__list__paragraph__answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default FAQ