import React from 'react'
import styled from 'styled-components'
import StaffPreview from './StaffPreview'
const SearchResultsSection = styled.section`
background-color: rgb(236,236,236);
display: flex;
flex-direction: column;
align-items: center;
padding: 2em 0;
min-height: 50vh
`


function SearchResults( { results, searchText } ) {
    const regex = new RegExp( searchText, 'i' )
    results = results.filter( staff => staff.name.first.match( regex ) || staff.name.last.match( regex ) )

    return (

        <SearchResultsSection>


            { results.map( result => <StaffPreview key={ result.login.uuid } fName={ result.name.first } sName={ result.name.last } img={ result.picture.thumbnail } profile={ result } /> ) }

        </SearchResultsSection>
    )
}

export default SearchResults
