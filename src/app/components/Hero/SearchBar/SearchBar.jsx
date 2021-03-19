import React from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const SearchBarContainer = styled.div`
margin: 0 0 2.5em;
display: flex;
width: 90%;
max-width: 500px
`

const Input = styled.input`
padding: 1em;
border-radius: 7px 0 0 7px;
border: none;
flex: 1;
&::placeholder {
    color: #bfbfbf
};
&:focus {
    outline: none
}
`

const SearchIconWrapper = styled.div`
background-color: white;
border-radius: 0 7px 7px 0;
padding: 10px;
margin-left: -1px
`

function SearchBar( { setSearchText, searchText } ) {

    const handleChange = e => setSearchText( e.target.value )

    return (
        <SearchBarContainer>
            <Input placeholder='Start typing...' value={ searchText } onChange={ handleChange } />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

        </SearchBarContainer>
    )
}

export default SearchBar
