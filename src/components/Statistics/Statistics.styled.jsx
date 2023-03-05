import styled from 'styled-components';

export const StatisticsContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  background-color: #e7ecf2;
  width: 450px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
export const Title = styled.h2`
  font-weight: 700;
  margin: 0;
  margin-top: 50px;
  height: 100px;
  width: 70%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;


export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  border-top: 2px solid #E4E9F0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-content: center;
  background-color: #f3f6f9;
  width: 70%;
  list-style: none;    
`

export const StatItem = styled.li`
      width: 1fr;
      margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 2px solid #E4E9F0;
  }
`

export const Label = styled.span`
      font-weight: 600;
  font-size: 20px;
`

export const Percentage = styled.span`
      font-weight: 500;
`


