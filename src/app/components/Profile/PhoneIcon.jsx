import * as React from "react"

function SvgComponent( props ) {
    return (
        <svg
            width={ 22 }
            height={ 36 }
            viewBox="0 0 22 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            { ...props }
        >
            <title>{ "Phone Icon" }</title>
            <defs>
                <path id="prefix__a" d="M0 0h22v35.2H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="prefix__b" fill="#fff">
                    <use xlinkHref="#prefix__a" />
                </mask>
                <path
                    d="M19.8 6.599H2.2V4.4c0-1.215.986-2.201 2.2-2.201h13.2c1.214 0 2.2.986 2.2 2.201V6.6zm-17.6 15.4h17.6V8.8H2.2V22zm17.6 8.8A2.202 2.202 0 0117.6 33H4.4c-1.214 0-2.2-.987-2.2-2.201V24.2h17.6V30.8zM17.6 0H4.4A4.4 4.4 0 000 4.4V30.8c0 2.43 1.97 4.401 4.4 4.401h13.2c2.43 0 4.4-1.971 4.4-4.401V4.4A4.4 4.4 0 0017.6 0zM11 30.8a2.2 2.2 0 10-.001-4.401A2.2 2.2 0 0011 30.799z"
                    fill="#666"
                    mask="url(#prefix__b)"
                />
            </g>
        </svg>
    )
}

export default SvgComponent
