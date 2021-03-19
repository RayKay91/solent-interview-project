import * as React from "react"

function SvgComponent( props ) {
    return (
        <svg
            width={ 32 }
            height={ 32 }
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <title>{ "Dob Icon" }</title>
            <path
                d="M29.714 25.143H2.286V14.112l4.226 3.625 1.914 1.638 1.447-2.063 5.744-8.207c.128.01.253.038.383.038s.255-.028.383-.038l5.744 8.207 1.447 2.063 1.914-1.638 4.226-3.625v11.03zM2.286 29.714h27.428V27.43H2.286v2.285zM16 2.286a2.286 2.286 0 110 4.571 2.286 2.286 0 010-4.571zM24 16l-5.382-7.69a4.56 4.56 0 001.953-3.739A4.57 4.57 0 0016 0a4.57 4.57 0 00-4.571 4.571 4.56 4.56 0 001.953 3.74L8 16 0 9.143V32h32V9.143L24 16z"
                fill="#666"
                fillRule="evenodd"
            />
        </svg>
    )
}

export default SvgComponent
