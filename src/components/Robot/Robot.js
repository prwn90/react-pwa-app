import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #487eb0;
    padding: 1rem;
    text-align: center;
    margin: .5rem;
    color: #f5f6fa;
    width: 20rem;
    border-radius: 20px;
    justify-content: center;
    &:hover {
        box-shadow: 8px 12px 12px 13px #718093; 
    }
`;
const Image = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 4rem;
  pointer-events: none;
  margin-bottom: .8rem;
`;
const Name = styled.p`
    font-size: 1.7rem;
    font-weight: bold;
`;
const Username = styled.p`
    font-size: 1.2rem;
`;

const Robot = ({robot}) => (
    <>
        <Card>
            <Image src={`https://robohash.org/${robot.id}?size=300x300`} alt='logo'/>
            <Name>
                <h6>Name of robot:</h6>
                {robot.name}
            </Name>

            <Username>
                {robot.username}
            </Username>
        </Card>

    </>
);

export default Robot;