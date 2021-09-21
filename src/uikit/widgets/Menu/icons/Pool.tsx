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
          '.prefix__st1,.prefix__st2{fill:#fff;stroke:#000;stroke-width:.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.prefix__st2{fill:none}'
        }
      </style>
      <path fill="#fff" d="M8.2 9.6l6.6-3.2 5.9 8.4-10.2.8z" />
      <circle className="prefix__st1" cx={3.2} cy={7.5} r={0.8} />
      <circle className="prefix__st1" cx={16.4} cy={17.7} r={0.5} />
      <path
        className="prefix__st2"
        d="M8.2 18.4v.5M8.2 20v.5M7.1 19.4h.5M8.7 19.4h.5M20.7 2.9v.5M20.7 4.5V5M19.7 3.9h.4M21.3 3.9h.4M3.9 14.9v.8M3.9 17.7v.8M2 16.6h.8M4.8 16.6h.8"
      />
      <path
        className="prefix__st1"
        d="M13.6 7.3s-.1-.5-1-.5-1.9.9-1.8 1.6M10.1 9.9s-.1-.2-.4-.2-.9.3-.9.8.3 1.1 1.2 1.1 1.5-.8 1.5-1.6-.5-1.9-2-1.9-2.1 1.5-2 1.7c0 0-1.7-.3-3 1s-2.8 1.7-4.1 0c0 0 1.1 1.9 2.6 1.9s1.8-.5 2.5-.4c1.2.1 1.7 1.6 2.2 2.1 1 .9 2 .3 2 .3M20.6 13.7c.1.3.2 1.8-.9 2.3-1.1.5-2 0-2.2-.4"
      />
      <path
        className="prefix__st1"
        d="M13.8 15.3s-.3.9-1.6.9-2.5-1-2.5-2.4M19.6 13.8s3.3.1 3.3-3.4-3.8-3.6-4.6-2.9c0 0-.6-1.3-2.5-1.3s-3 2.2-2.8 2.9"
      />
      <path
        className="prefix__st1"
        d="M18.3 15s-.6.9-2.4.9-2.8-1.1-3-1.5c-.2-.4-.5-1.5-.1-2.1.4-.6.9-1.2 1.6-1.2s1.5.4 1.5 1.5-.7 1.2-1.1 1.2-.8-.3-.8-.7.2-.5.2-.5"
      />
    </Svg>
  )
}

export default Icon
