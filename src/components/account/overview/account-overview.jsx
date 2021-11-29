import React from 'react';
import styled from 'styled-components';
import OverviewHeader from './overview-header.component';
import SalesOverview from './sales-overview.component';

const StyledOverview = styled.section`
  padding: 5%;
  font-size: 1rem;
  background-color: #f4f4f4;
`;

export const AccountOverview = ({ data }) => {
  const { supportContact, salesOverview } = data;

  return (
    <StyledOverview>
      <OverviewHeader supportContact={supportContact} />
      <SalesOverview salesOverview={salesOverview} />
    </StyledOverview>
  )
}

export default AccountOverview;