import React from 'react'
import Box from '../../components/Box/Box'
import next from '../../assets/img/main/next.png'
import prev from '../../assets/img/main/prev.png'

import './_single.scss'

export default function Single() {
  return (
    <div className="single">
        <div className="container">
            <div className="single__box">
                <Box />
            </div>

            <div className="single__slide">
                <img src={prev} alt="prev" />
                <img src={next} alt="next" />
            </div>
        </div>
    </div>
  )
}
