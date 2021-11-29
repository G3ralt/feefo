import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SupportInfoStyled = styled.section`
    flex: 3;
    min-width: fit-content;
`;

const SupportHeader = styled.header`
    font-size: 1em;  
    font-weight: 800;
    text-align: left;
    opacity: 0.5;
    text-transform: uppercase;
    margin-bottom: 2%;
`;

const ContactBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Square = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;    
    border-radius: 0.5em;
    background: #f9cf03;    
    margin-right: 2%;
    min-width: 35px;

    ::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`;

const SupportDetails = styled.div`
    flex: 9;
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    column-gap: 5%;
`;

const DetailsTitle = styled.p`
    flex: 100%;
    font-size: 0.9em;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
`;

const DetailsText = styled.p`
    font-size: 0.9em;
    margin: 0;
    margin-right: 1%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    gap: 2%;
`;

const SupportInfo = ({ email } ) => {
    return (
        <SupportInfoStyled>
            <SupportHeader>Your feefo support contact</SupportHeader>
            <ContactBlock>
                <Square><b>S</b></Square>
                <SupportDetails>
                    <DetailsTitle>
                        Support
                    </DetailsTitle>
                    <DetailsText>
                        <FontAwesomeIcon icon={faEnvelope} />
                        {email}
                    </DetailsText>
                    <DetailsText>
                        999 9999 9999
                    </DetailsText>

                </SupportDetails>
            </ContactBlock>

        </SupportInfoStyled>
    );
};

SupportInfo.propTypes = {
    email: PropTypes.string.isRequired,
};

export default SupportInfo;