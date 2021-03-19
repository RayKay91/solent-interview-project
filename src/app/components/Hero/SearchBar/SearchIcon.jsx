import * as React from "react"

function SvgComponent( props ) {
    return (
        <svg
            width={ 30 }
            height={ 30 }
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <title>{ "search" }</title>
            <path
                d="M12.857 2.571c5.695 0 10.285 4.59 10.285 10.286 0 5.695-4.59 10.285-10.285 10.285A10.266 10.266 0 012.57 12.857c0-5.696 4.59-10.286 10.286-10.286m0-2.571C5.772 0 0 5.772 0 12.857c0 7.085 5.772 12.856 12.857 12.856 3.082 0 5.91-1.088 8.128-2.906l6.818 6.817a1.29 1.29 0 001.82 0 1.273 1.273 0 000-1.808l-6.816-6.817a12.831 12.831 0 002.906-8.142C25.713 5.772 19.942 0 12.857 0"
                fill="#E30613"
                fillRule="evenodd"
            />
        </svg>
    )
}

export default SvgComponent
