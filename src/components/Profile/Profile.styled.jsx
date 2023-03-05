import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #e7ecf2;
  width: 450px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Description = styled.div`
  width: 70%;
  background-color: white;
  margin-top: 50px;
  padding-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  background-color: #f5f5dc;
  margin-bottom: 30px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;

  color: #bec4cb;
`;

export const Location = styled.p`
  font-weight: 700;
  color: #bec4cb;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  border-top: 2px solid #E4E9F0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  background-color: #f3f6f9;
  width: 70%;
  list-style: none;
`;

export const StatsElement = styled.li`
  width: 1fr;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    border-right: 2px solid #E4E9F0;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
