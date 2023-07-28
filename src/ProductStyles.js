import styled from 'styled-components';

export const ProductsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px 5px;
  margin-bottom: 4rem;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductCardContainer = styled.div`
  background-color: #8EB18A;
  min-width: 300px;
  display: flex;
  padding: 2%;
  flex-grow: 2;
  flex-basis: 22%;

  @media screen and (min-width: 1280px) {
    flex-basis: calc(33.33% - 20px);
  }

  @media screen and (max-width: 673px) {
    justify-content: space-around;
  }
`;

export const ProductInfoList = styled.ul`
  list-style-type: none;
`;

export const ProductImage = styled.div`
  display: flex;
  align-self: center;
`;

export const ProductSelect = styled.select`
  margin-left: 30%;
`;
