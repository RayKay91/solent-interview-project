import React from 'react'
import styled from 'styled-components'
//icons
import EmailIcon from './EmailIcon'
import DobIcon from './DobIcon'
import PhoneIcon from './PhoneIcon'

const ProfileContainer = styled.section`
background-color: rgb(236, 236, 236);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

`
const ProfileImgContainer = styled.div`
border-radius: 50%;
border: 1px solid rgb(200,200,200);
height: 135px;
width: 135px;
`

const ProfileImg = styled.img`
border-radius: 50%;
border: 10px solid white;
height: auto;
width: 100%
`

const ProfileDetailsWrapper = styled.div`
display: flex;
flex-direction: column;
@media screen and (min-width: 800px){
    & {
        flex-direction: row
    }
}
`

const ProfileDetailsContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2em;
align-items: center;
@media screen and (min-width: 800px){
    & {
        flex-direction: row;
        margin-right: 2em;

    }
}

`

const ProfileDetailText = styled.p`
color: #666;
font-size: 1.2rem;
margin-top: 0.3em;
@media screen and (min-width: 800px){
    & {
        margin-left: 0.5em
    }
}
`

const ProfileName = styled( ProfileDetailText )`
font-size: 1.5rem;
margin-bottom: 1.3em;
margin-left: 0;
color: #666;
font-weight: bold;

`

const formatDate = date => {

    let dateOfBirth = date.substring( 0, 10 );
    dateOfBirth = dateOfBirth.split( '-' );
    dateOfBirth.reverse();
    dateOfBirth = dateOfBirth.join( '/' );

    return dateOfBirth
}


function Profile( { location } ) {

    const { name, email, dob, cell, picture } = location.state



    return (

        <ProfileContainer>

            <ProfileImgContainer>
                <ProfileImg src={ picture.large } alt={ `${ name.first } ${ name.last }` } />
            </ProfileImgContainer>
            <ProfileName>
                { name.first } { name.last }
            </ProfileName>
            <ProfileDetailsWrapper>
                <ProfileDetailsContainer>
                    <EmailIcon />
                    <ProfileDetailText>
                        { email }
                    </ProfileDetailText>
                </ProfileDetailsContainer>
                <ProfileDetailsContainer>
                    <DobIcon />
                    <ProfileDetailText>
                        { formatDate( dob.date ) }
                    </ProfileDetailText>
                </ProfileDetailsContainer>
                <ProfileDetailsContainer>
                    <PhoneIcon />
                    <ProfileDetailText>
                        { cell }
                    </ProfileDetailText>
                </ProfileDetailsContainer>
            </ProfileDetailsWrapper>

        </ProfileContainer>
    )
}

export default Profile
