"use client"

import type React from "react"
import "../styles/Button.css"

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <div className={`button is-green is-secondary ${className}`} onClick={onClick}>
      <div className="button-text">{text}</div>
      <div className="button-circle-wrapper">
        <div className="button-icon _1">
          <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.66699 11.3332L11.3337 4.6665"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.66699 4.6665H11.3337V11.3332"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="button-icon _2">
          <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.66699 11.3332L11.3337 4.6665"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.66699 4.6665H11.3337V11.3332"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="button-circlee background-color-green"></div>
    </div>
  )
}

export default Button
