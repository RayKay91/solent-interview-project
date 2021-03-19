import * as React from "react"

function SvgComponent( props ) {
    return (
        <svg
            width={ 30 }
            height={ 30 }
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <title>{ "circle-arrow" }</title>
            <g
                transform="translate(1 1)"
                stroke="#575757"
                strokeWidth={ 2 }
                fill="none"
                fillRule="evenodd"
            >
                <circle cx={ 23 } cy={ 23 } r={ 23 } />
                <path
                    d="M17.525 35.945L30 23.435M17.525 9.998L30 23.436"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    )
}

export default SvgComponent
