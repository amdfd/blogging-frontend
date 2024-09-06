import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1c1c1c;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff2d55;
  margin-bottom: 20px;
  text-align: center;
`;

export const Content = styled.p`
  font-size: 1.25rem;
  color: #c9c9c9;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const Author = styled.p`
  font-size: 1rem;
  color: #ff2d55;
  text-align: right;
  font-style: italic;
  margin-top: 30px;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #ff2d55;
`;

export const BackButton = styled.button`
  background-color: #ff2d55;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #ff4466;
    transition: background-color 0.3s ease;
  }
`;
