import style from './style.module.css'

function RunningLineArtists(){
    return(
        <div className={style.main}>
            <div className={style.main__animation}>
                <p className={style.main__text}>Artists</p>
                <p className={style.main__text}>Artists</p>
                <p className={style.main__text}>Artists</p>
                <p className={style.main__text}>Artists</p>

            </div>
        </div>
    )
}

export default RunningLineArtists