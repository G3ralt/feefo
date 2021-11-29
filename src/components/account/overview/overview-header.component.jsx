import React from 'react';
import styled from 'styled-components';
import SupportInfo from './support-contact.component';
import PropTypes from 'prop-types';

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f4f4;
    background-clip: content-box;
    margin-bottom: 5%;
`;

const Title = styled.p`
    font-size: 2em;
    flex: 2;
    text-align: left;
    margin: 0;
    margin-right: 2%;
`;

const OverviewHeader = ({ supportContact }) => {
    const { email } = supportContact;
    return (
        <Header>
            <Title>Account Overview</Title>
            <SupportInfo email={email} />
        </Header>
    );
};

OverviewHeader.propTypes =  {
    supportContact: PropTypes.shape({
        email: PropTypes.string,
        name: PropTypes.string
      }).isRequired,
};

export default OverviewHeader;
