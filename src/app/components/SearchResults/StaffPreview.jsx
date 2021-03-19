import React from 'react'
import styled from 'styled-components'
import CircleArrow from './CircleArrow'
import { Link } from 'react-router-dom'



const StaffImg = styled.img`
border: 1px solid black;
border-radius: 50%;
height: 50px;
width: 50px;
`

const StaffName = styled.p`
color: #555;
flex: 1;
margin-left: 0.5em;
`

const StaffPreviewContainer = styled.div`
background-color: white;
display: flex;
align-items: center;
padding: 0.5em;
border-radius: 5px;
border: 1px solid black;
margin: 0.75em ;
width: 90vw;
max-width: 500px
`

function StaffPreview( { img, fName, sName, profile } ) {
    return (
        <Link to={ { pathname: `staff/${ fName }_${ sName }`, state: profile } } style={ { textDecoration: 'none' } } >
            <StaffPreviewContainer >
                <StaffImg src={ img } alt={ ( fName, sName ) } />
                <StaffName>{ fName } { sName }</StaffName>
                <CircleArrow />
            </StaffPreviewContainer>
        </Link>
    )
}

export default StaffPreview
