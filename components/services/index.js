import React from 'react'
import style from './style.module.scss';
import { SERVICES_TYPE } from '../../constants';

const Services = () => {
  return (
    <div className={style.services}>
        <h1>O que fazemos?</h1>
        <div className={style.servicesCards}>
            {SERVICES_TYPE.map((types, index) => (
              <div key={index} className={style.servicesStyleCards}>{types.title}</div>
            ))}
        </div>
    </div>
  )
}

export default Services;