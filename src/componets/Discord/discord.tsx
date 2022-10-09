import style from './style.module.css'

import imgNFT from '../../images/Lebel-img/IMAGE-1.jpg'

export default function Discord(){
    return(
        <div className={style.conteiner}>

            <div className={style.title}>
                <h1>
                    Join our
                </h1>
                <h1 className={style.grin}>
                    Discord
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.
                </p>
                <button>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="36" height="36" fill="#8cfd1b00"/>
                        <path d="M8 8H28V28H8V8Z" fill="url(#pattern0)"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1_449" transform="scale(0.0166667)"/>
                        </pattern>
                        <image id="image0_1_449" width="60" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7ZpZjBVFFIZ/BwUGUcdlNCNxjTLjElETZUzURMQF1OiLmsgDEOKbRhPig7smPmpMjMY9UV7EBI2+oUESjAvy4hINsigGt3GFAEPCzv/nVA9NU9Vdt7vvDZf0n3wPt7urqk911amqcy7QqFGjRo0aNWrUIR2F+nQsOY9cSc4gA2Q5eQet6R5yHRkhG8kqsp6MogZVMbiPXEJmkmFyLZmQeWYbzPjNiNPx5HcyOXN9J1lBviLLyHdkEzqkXnI9WUJ+JvsKmIV4zYyobwN5zz3bizZKvX8XWUP25ryQ7v1PPiOLyc2I1w2ujMr+F9HOWnK3e7dapfn5Evk75wX2wHr/aXIHbD6X+QKTyPmujqdcnXty2v2HvOjesRadST5EuJe/Js+TIXI06pfqvMC18Q3CX11T7HTUoIfIdk8D/5JXyKVkPNqv8a6tl2FfNfs+8uIPFFVS5KW1tKwmJ3ju3UQ+DpQbBxvS55Bp5FxyMTmNnAQbtpI6UvNdS9APMCf4LfmFrIMNZZ9uJB95rmveXwibei1LnXEfwnPH1wk95FbyLPmS/Ilir5tlxJV9jtzm6syqL6f8vSipi2CLfqjiBbB1NxlqMnI1WjewiB+d8cnUUZtzc57/ggyGjMpzMlc5o0N6klzhGhl2L9QODTpmkM9hI292zvOaQnr3NWhR8r77upRVaFFTYNu5bjIyzQ6YgzxEPocgzSHHoHuluT7Hd8Nn8MlkOrpfmscnZi/6DL4MdsTrdumjXZ696DNYC/cAul/aZg5lL/oMvgW2U+p2yYbZMQ/9he7yyHlo19aTZ/BwxQa0/70TtiQInZ/Xd7C8j1x/tKBCxYo/zfXUOY/82oHyIeYjIA3n1ypU/Aj8w0fXHu1A+RCvIuWT0g30ww77ZfUJ7HCela4tR7Gqlg9JQcRTfDe0UOtkUrYnJyKs3g6UD6ET3HBSUfoLn+ooq6ox7jpj5GnJpv7kR9pgLdR9KK9pOfdijo5Vy4ek7eVYrCtrcJVengG/0xnn7rW7fEiyyRvcexfl54nQ0jHPU+98xC0rVcvnsdhTLz6tWKnQJkGbhWTjoCD5Tx0sH2KFz+CqO5rDmbWJkek5cxyOXI2lYsoY/Drs2KXA2uPkN1gvtlvJPH+MTIUdY9+ILOu1LTaGlQ6BKgyk7KDyTqNofajFMuramIWDQ0+DkeV3waN1kYWnwi8t7reTRbBAutIhexFvVIKyDUrjrCRvw5Jq/YE2Yw0em8PpuPRbsA38JOTrQfIM+SNzXQYq6ab0y1mwDKBSLYptD7jfkx3pVIu+3haYN1ad3+NAqmWje8anKe5dijTqbDtEeomFyE9NJsg4Ja6G0HmpTaWARlD8nrthycDgR9TW8n3YmC+qTD2vYXc/7Eu2W2fDDF0JfzYzi3zSEkRsl3Vq0YKvdTl2Dqonl5InYCeTOmLamm7TXZ1LXRuxfmADbAMzMbYx7T/1P45FLTSS8DDqM3hhifY/gAUie1BSV8Oyd3IqRUNdW7gJqE8yehmKlxyNxhdgf3eqRTJCf0uSV9Qc2uppWI0WhkVLSH+K8S2Z8uxKjcp5XoPIji57HFTlmqvK8iuzr53Mm7D1tx1SNEYBRnW0li2tq/rP1k40atSoUaNGjRodrtoPvmObj5Di6yoAAAAASUVORK5CYII="/>
                        </defs>
                    </svg>
                    Join Discord
                </button>
            </div>

            <img src={imgNFT} />
            
        </div>
    )
}