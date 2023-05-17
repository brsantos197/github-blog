import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.COLORS['base-input']};
  border: 1px solid ${({ theme }) => theme.COLORS['base-border']};
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0, .2);

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS['blue']};
  }
  
  input {
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;

    font-size: ${({ theme }) => theme.FONT.SIZES.lg};
    line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
    color: ${({ theme }) => theme.COLORS['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS['base-label']};
    }

   
  }
`;
