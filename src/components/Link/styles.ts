import styled from 'styled-components';

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.blue};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT.SIZES['xs']};
  text-decoration: none;
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
  border: 1px solid transparent;
  transition: border 0.4s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.blue};
  }
`