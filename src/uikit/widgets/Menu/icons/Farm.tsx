import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 23.3 23.3"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          '.prefix__st0,.prefix__st1{fill:#fff;stroke:#000;stroke-width:.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.prefix__st1{fill:none}'
        }
      </style>
      <ellipse className="prefix__st0" cx={11.7} cy={11.3} rx={5.7} ry={7.8} />
      <path className="prefix__st0" d="M.5 9.9L11.8 2l11.1 7.7c-2.4.9-6.3 2.1-11.3 2.1-4.9 0-8.7-1-11.1-1.9z" />
      <path d="M7.1 13l3.3.4v1.2zM16.2 13l-3.2.4v1.2z" />
      <path className="prefix__st1" d="M7.2 21.4c2.2-.2 1-4.7 4.5-4.7M16.3 21.4c-2.2-.2-1-4.7-4.5-4.7" />
    </Svg>
  )
}

export default Icon
