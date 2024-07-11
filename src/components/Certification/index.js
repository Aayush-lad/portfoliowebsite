import React from 'react';
import styled from 'styled-components';
import CertificationCard from '../Cards/CertificationCard'; // Ensure you have a corresponding CertificationCard component
import { certifications } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const CertificationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
`;

const CertificationsSection = () => {
    return (
        <Container id="certification">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>
                    My certifications and professional qualifications achieved throughout my career.
                </Desc>
                <CertificationsContainer>
                    {certifications.map((certification, index) => (
                        <CertificationCard key={index} certification={certification} />
                    ))}
                </CertificationsContainer>
            </Wrapper>
        </Container>
    );
};

export default CertificationsSection;
