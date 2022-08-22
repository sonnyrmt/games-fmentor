import styled from "styled-components";

const ContainerFilters = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: auto;
  }
`;
const FiltersBG = styled.div`
  padding: 25px;
  border-radius: 20px;
  width: 75%;
  background-color: #3a3b3c;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const SelectOption = styled.select`
  margin: 0 10px;
  color: #929292;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

const ResetFilters = styled.button`
  margin: 0 10px;
  color: #929292;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-radius: 15px;
`;

const Filters = () => {
  return (
    <ContainerFilters>
      <FiltersBG>
        <SelectOption name="order" id="order-select">
          <option value="">Order</option>
        </SelectOption>
        <SelectOption name="platforms" id="platforms-select">
          <option value="">Platform</option>
        </SelectOption>
        <SelectOption name="genres" id="genre-select">
          <option value="">Genres</option>
        </SelectOption>
        <SelectOption name="source" id="source-select">
          <option value="">Source</option>
        </SelectOption>
        <ResetFilters>Reset</ResetFilters>
      </FiltersBG>
    </ContainerFilters>
  );
};

export default Filters;
