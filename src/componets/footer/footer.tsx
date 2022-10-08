import style from './style.module.css'

import svgLogo from '../../images/logo/IMAGE.svg'
import iconDiscord from '../../images/Meta/Discord.svg'
import iconTelegram from '../../images/Meta/Telegram.svg'
import iconTwitter from '../../images/Meta/Twitter.svg'
import iconYouTube from '../../images/Meta/YouTube.svg'

function Footer(){
    return(
        <footer className={style.footer}>

            <div className={style.footer__logo}>
                <div>
                    <img src={svgLogo}></img>
                </div>
                <p>© 2022 All rights reserved</p>
            </div>

            <div className={style.footer__colum}>
                <p>Wave NFTs</p>
                <p>Stories</p>
                <p>Contact</p>  
            </div>

            <div className={style.footer__colum}>
                <p>Licencing</p>
                <p>Style Guide</p>
                <p>Changelog</p>  
            </div>

            <div className={style.footer__colum}>
                <p>Powered by Webflow</p>
                <p>Developed by Anastasiia G.</p>
            </div>
            
            <nav className={style.footer__nav}>
                <img src={iconTwitter} />
                <img src={iconDiscord} />
                <img src={iconYouTube} />
                <img src={iconTelegram} />
            </nav>
        </footer>
    )
}

export default Footer