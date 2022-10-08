import style from './style.module.css'

function RunningLineTeams(){
    return(
        <div className={style.main}>
            <div className={style.main__animation}>
                <p className={style.main__text}>team</p>
                <p className={style.main__text}>team</p>
                <p className={style.main__text}>team</p>
                <p className={style.main__text}>team</p>

            </div>
        </div>
    )
}

export default RunningLineTeams