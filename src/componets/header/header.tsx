import style from './style.module.css'

import svgLogo from '../../images/logo/IMAGE.svg'
import iconDiscord from '../../images/Meta/Discord.svg'
import iconTelegram from '../../images/Meta/Telegram.svg'
import iconTwitter from '../../images/Meta/Twitter.svg'
import iconYouTube from '../../images/Meta/YouTube.svg'


function Header(){
    return(
        <header className={style.container}>

            <main className={style.box}>
                <img src={svgLogo}></img>
                <a>Wave NFTs</a>
                <a>Stories</a>
                <a>Contact</a>
            </main>
            
            <div />

            <nav className={style.box__nav}>
                <img src={iconTwitter} />
                <img src={iconDiscord} />
                <img src={iconYouTube} />
                <img src={iconTelegram} />
            </nav>

        </header>
    )
}

export default Header