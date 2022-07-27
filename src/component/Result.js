import React from 'react'
import style from './Home.module.css'
const Result = (props) => {
    return (
        <div className={style.result}>
            {props.message}
        </div>
    )
}

export default Result