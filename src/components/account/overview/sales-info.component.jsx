import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

const SalesHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 1%;
    margin-bottom: 1%;
`;

const Title = styled.b`
    font-size: 1.2em;
    margin-right: auto;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: #3eb0eb;
`;

const SalesHeader = () => {


    return (
        <SalesHeaderStyled>
            <StyledIcon icon={faUpload} color={""} />
            <Title>Sales</Title>
            <FontAwesomeIcon icon={faInfoCircle} color={"gray"} />
        </SalesHeaderStyled>
    );
}



export default SalesHeader;