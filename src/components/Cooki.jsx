import React, { useEffect, useState } from 'react'
import phrases from '../utils/phrases.json'

const Cooki = ({number}) => {

  const [luckyCooki, seTluckyCooki] = useState(0)

  const luckyPhase = () => {
        seTluckyCooki(Math.floor(Math.random() * phrases.length))
}
  useEffect(() => {
  luckyPhase()
  }, [number])
  

  return (
        <article className='editCooki'>
            <p>{phrases[luckyCooki].phrase}</p>
        </article>
  )
}

export default Cooki
