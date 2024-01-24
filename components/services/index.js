import React from 'react'
import style from './style.module.scss';
import { SERVICES_TYPE } from '../../constants';

const Services = () => {
  return (
    <div className={style.services}>
        <h1>O que fazemos?</h1>
        <div className={style.servicesCards}>
            {SERVICES_TYPE.map((types, index) => (
              <div className={style.servicesStyleCards}>
                <div key={index}>{types.title}</div>
                <div key={index}>{types.description}</div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Services;