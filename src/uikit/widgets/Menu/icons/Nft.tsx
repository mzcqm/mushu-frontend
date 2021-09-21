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
          '.prefix__st0{fill:#fff;stroke:#000;stroke-width:.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
        }
      </style>
      <path
        className="prefix__st0"
        d="M11.7.4C5.5.4.5 5.4.5 11.6s5 11.2 11.2 11.2c6.2 0 11.2-5 11.2-11.2S17.9.4 11.7.4zm4.2 15.5H7.5V7.5h8.4v8.4zM10.7 3.5V5M12.5 3.5V5M10.7 18.3v1.5M12.5 18.3v1.5M5 10.8H3.4M5 12.6H3.4M19.9 10.8h-1.5M19.9 12.6h-1.5"
      />
    </Svg>
  )
}

export default Icon
