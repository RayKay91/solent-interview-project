import React from 'react';
import styled from 'styled-components'
import SearchBar from './SearchBar/SearchBar'

const HeroContainer = styled.section`
background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ props => props.backgroundImage });
background-position: 30%;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
`

const HeroMainHeading = styled.h1`
color: white;
text-align: center;
font-size: 2.5rem;
margin-top: 1.75em;
padding: 0 0.75em;
@media screen and (min-width: 800px){
    & {
        margin-top: 4em;
    }
}
`

const HeroSubHeading = styled( HeroMainHeading )`
font-size: 1rem;
margin-bottom: 2rem;
`

const Hero = ( { mainHeading, subHeading, backgroundImage, showSearch, searchText, setSearchText } ) => (
    <HeroContainer backgroundImage={ backgroundImage }>
        <HeroMainHeading>{ mainHeading }</HeroMainHeading>
        <HeroSubHeading>{ subHeading }</HeroSubHeading>
        {showSearch && <SearchBar searchText={ searchText } setSearchText={ setSearchText } /> }
    </HeroContainer>
);

export default Hero;
