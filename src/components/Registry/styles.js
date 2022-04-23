import styled from 'styled-components';

export const FormContainer = styled.div`
    // enter styles
`;

export const FormInput = styled.input`
    color: #000;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    width: 20rem;
`;

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    height: 100%;
    row-gap: 0.5rem;
    padding: 3rem;
`;

export const InputButton = styled.input.attrs({ 
    type: 'button',
  })`
    outline: none;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 2.75rem;
    font-size: 0.75rem;
    background: #00ab55;
    color: #fff;
    margin-top: 1rem;
    transition: background 0.3s ease-in-out; 

    :hover {
        cursor: pointer;
        background: #00cc55;
    }
  `