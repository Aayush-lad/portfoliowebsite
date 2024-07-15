import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  max-width: 100%;
  border-radius: 0.5rem; /* Slightly rounded corners */
  overflow: hidden; /* Ensure content is clipped to the rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 3D effect */
  background-color: #001f3f; /* Navy blue background */
  display: block;
  margin: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensures no extra space at the bottom */
  border-radius: 0.5rem; /* Slightly rounded corners */

  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`;

const CertificationCard = ({ certification }) => {
  return (
    <Card href={certification.link} target="_blank" rel="noopener noreferrer">
      <Image src={certification.image} alt={certification.name} />
    </Card>
  );
};

export default CertificationCard;
