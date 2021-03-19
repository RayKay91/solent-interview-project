import React, { useState, useEffect } from 'react';
import axios from 'axios'
//components
import Hero from '../components/Hero/Hero'
import SearchResults from '../components/SearchResults/SearchResults'
//images
import background from '../../../public/images/background.jpg'



const Homepage = () => {

    const [ searchText, setSearchText ] = useState( '' )
    const [ staffList, setStaffList ] = useState( '' )


    useEffect( () => {

        axios.get( 'https://randomuser.me/api/?results=10&inc=name,email,id,picture,dob,cell,login' ).then( resp => setStaffList( resp.data.results ) ).catch( err => console.log( err ) )

    }, [] )

    return (
        <>
            <Hero
                backgroundImage={ `/${ background }` }
                mainHeading='Find a member of staff'
                subHeading='Use the search box to get started'
                showSearch
                searchText={ searchText }
                setSearchText={ setSearchText }
            />

            {staffList && <SearchResults searchText={ searchText } results={ staffList } /> }
        </>
    );
};

export default Homepage;
