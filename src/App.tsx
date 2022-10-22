import React from 'react';

import Daniela_Youth from './images/META_Artists/Daniela Youth.png'
import Ivor from './images/META_Artists/Ivor.png'
import Mark_Popson from './images/META_Artists/Mark Popson.png'
import Pete_Bentz from './images/META_Artists/Pete Bentz.png'
import Roman_Gore from './images/META_Artists/Roman Gore.png'
import Somae_Petit from './images/META_Artists/Somae Petit.png'
import Tonya from './images/META_Artists/Tonya.png'

import Baky_Hike from './images/team/Baky_Hike.jpg'
import Shaky_Lake from './images/team/Shaky_Lake.jpg'
import Vania_Do from './images/team/Vania_Do.jpg'

import imgMainLeblel from './images/Lebel-img/main.jpg'
import imgLeblel from './images/Lebel-img/IMAGE.jpg'
import imgNFT from './images/Lebel-img/IMAGE-1.jpg'

import twitter from './images/Meta/Twitter.svg'
import telegram from './images/Meta/Telegram.svg'

import Header from './componets/header/header';
import RunningLineArtists from './componets/running_line/runningLineArtists/runningLineArtists';
import Cart from './componets/artistsCart/artistsCart';

import RunningLineTeams from './componets/running_line/runningLineTeam/runningLineTeam';
import RunningLineLogoholder from './componets/running_line/logoholder/runningLineLogoholder';
import {Story, listStoris} from './componets/story/story';
import Roadmap from './componets/roadmap/story';
import Footer from './componets/footer/footer';

import style from './style.module.css'




function App() {
  return (
    <div className="App">
      <Header />
        <main>
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
          <RunningLineArtists />
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
          <Story storis={listStoris} />
          <Roadmap />
          <RunningLineLogoholder />
          <div className={style.FAQ}>
              <div className={style.FAQ__title}>
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
              <div className={style.FAQ__list}>
                  <div className={style.FAQ__list__paragraph}>
                      <div className={style.FAQ__list__paragraph__question}>
                          <p>
                              How can I get into Meta RL?
                          </p>
                          <div></div>
                      </div>

                      <p className={style.FAQ__list__paragraph__answer}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </p>
                  </div>
                  <div className={style.FAQ__list__paragraph}>
                      <div className={style.FAQ__list__paragraph__question}>
                          <p>
                              When is the NFT launch?
                          </p>
                          <div></div>
                      </div>
                      <p className={style.FAQ__list__paragraph__answer}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </p>
                  </div>
                  <div className={style.FAQ__list__paragraph}>
                      <div className={style.FAQ__list__paragraph__question}>
                          <p>
                              Can I hold META WAVE NFT as an investment?
                          </p>
                          <div/>
                      </div>
                      
                      <p className={style.FAQ__list__paragraph__answer}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique. 
                          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </p>
                  </div>
                  <div className={style.FAQ__list__paragraph}>
                      <div className={style.FAQ__list__paragraph__question}>
                          <p >
                              Where can I get a WAVE NFT?
                          </p>
                          <div/>
                      </div>
                      
                      <p className={style.FAQ__list__paragraph__answer}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Suspendisse varius enim in eros elementum tristique. 
                          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </p>
                  </div>

              </div>
          </div>
          <RunningLineTeams />
          <div className={style.team__conteiner}>
              <div className={style.team}>
                  <div className={style.team__img}>
                      <img src={Shaky_Lake}></img>
                  </div>
                  <p className={style.team__name}>
                      Shaky Lake
                  </p>
                  <p className={style.team__job}>
                      Founder
                  </p>
                  <div className={style.team__links}>
                      <a>
                          <img src={twitter} />
                      </a>
                      <a>
                          <img src={telegram} />
                      </a>
                  </div>
                  <p className={style.team__texts}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
              </div>

              <div className={style.team}>
                  <div className={style.team__img}>
                      <img src={Baky_Hike}></img>
                  </div>
                  <p className={style.team__name}>Baky Hike</p>
                  <p className={style.team__job}>Co-founder</p>
                  <div className={style.team__links}>
                      <a>
                          <img src={twitter} />
                      </a>
                      <a>
                          <img src={telegram} />
                      </a>
                  </div>
                  <p className={style.team__texts}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
              </div>

              <div className={style.team}>
                  <div className={style.team__img}>
                      <img src={Vania_Do}></img>
                  </div>
                  <p className={style.team__name}>Vania Do</p>
                  <p className={style.team__job}>Producer</p>
                  <div className={style.team__links}>
                      <a>
                          <img src={twitter} />
                      </a>
                      <a>
                          <img src={telegram} />
                      </a>
                  </div>
                  <p className={style.team__texts}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
              </div>
          </div>
          <div className={style.discord}>

              <div className={style.discord__title}>
                  <h1>
                      Join our
                  </h1>
                  <h1 className={style.discord__grin}>
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
        </main>
      <Footer />
    </div>
  );
}




export default App;
