import React from 'react';
import styled from 'styled-components';
import SalesHeader from './sales-info.component';
import PropTypes from 'prop-types';

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;    
    gap: 2px;
    text-align: left;
    border-radius: 5px;
    overflow: hidden;
`;

const SubSection = styled.div`
    flex: ${props => props.flex ?? "auto"};
    background-color: white;
    padding: 2%;
`;

const SalesText = styled.span`
    font-size: 0.9em;
    display: inline-block;
    padding: 2% 0;
`;

const Subtitle = styled.span`
    font-weight: bold;
    font-size: 0.9em;
    text-transform: uppercase;
    opacity: 0.5;
`;

const Percentage = styled.span`
    color: #22ab55;
    display: block;
    font-size: 2em;
`;

const SalesOverview = ({ salesOverview }) => {
    const { uploads, linesAttempted, successfulUploads, linesSaved } = salesOverview;
    const uploadSucces = Math.round((successfulUploads / uploads) * 100);
    const linesSavedPercentage = Math.round((linesSaved / linesAttempted) * 100);
    return (
        <Section>
            <SubSection flex="100%">
                <SalesHeader />
                <SalesText>
                    You had <b>{uploads} uploads</b> and <b>{linesAttempted}</b> lines added.
                </SalesText>
            </SubSection>
            <SubSection>
                <Percentage>{uploadSucces}%</Percentage>
                <Subtitle>Upload success</Subtitle>
            </SubSection>
            <SubSection>
                <Percentage>{linesSavedPercentage}%</Percentage>
                <Subtitle>Lines Saved</Subtitle>
            </SubSection>
        </Section>
    );
}

SalesOverview.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
    }),
};

export default SalesOverview;