import styled from "styled-components";


export const ContainerFiltro = styled.div`
  display: flex;

  h1 {
    margin-top: 32px;
    margin-left: 84px;
    font-size: 16px;
    font-weight: 400;
  }

  div {
    width: 60%;
    height: 60px;
    border-bottom: 1px solid black;
    margin-left: 150px;
    margin-bottom: 28px;
    margin-top: 80px;
  
  
    label {
      font-family: var(--font-text);
      font-weight: 600;
      font-size: 16px;
      margin-right: 8px;
    }
  
    select  {
      width: 220px;
      height: 38px;
      background: #FFFFFF;
      border: 2px solid rgba(158, 158, 158, 0.87);
      border-radius: 8px;
      cursor: pointer;
      margin-right: 24px;
      font-size: 16px;
      font-weight: 400;
      color: #313131;
      padding: 0 10px;
    }
  
    input {
      width: 220px;
      height: 40px;
      background: #FFFFFF;
      border: 2px solid rgba(158, 158, 158, 0.87);
      border-radius: 8px;
      padding: 0 10px;
  
      ::placeholder,
      ::-webkit-input-placeholder {
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        color: #989898;
    }
    }
  }
`

export const ContainerGlobal = styled.section`
  display: flex;
  font-family: var(--font-text);
`

export const FiltroContainer = styled.section`
  margin-left: 84px;
  width: 200px;

  div {
    display: flex;

    img {
      height: 25px;
      width: 25px;
    }

    h2 {
      font-size: 20px;
    }
`;

export const CategoriasRelacionadas = styled.div`

  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
    width: 235px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

`

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 600;
    font-size: 17px;
    margin: 16px 0;
  }

  input {
      margin: 8px;
    }
`;

export const Celulares = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  gap: 50px;
`

export const FilterByPrice = styled.div`
    margin-top: 37px;
`
