import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10.5rem;
  z-index: 100;
  position: relative;
  padding: 2rem;
  background: ${({ theme }) => theme.COLORS['base-profile']};
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0,0,0, .2);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`

export const BackLink = styled(NavLink)`
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

export const Title = styled.h2`
  margin-bottom: .5rem;
  ${({ theme }) => css`
    font-weight: ${theme.FONT.WEIGHT.bold};
    font-size: ${theme.FONT.SIZES['2xl']};
    line-height: ${theme.LINE_HEIGHT[130]};
    color: ${theme.COLORS['base-title']};
  `}
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
`

export const InfoItem = styled.div`
  display: flex;
  gap: .5rem;
  color: ${({ theme }) => theme.COLORS['base-subtitle']};
  font-size: ${({ theme }) => theme.FONT.SIZES['md']};

  svg {
    color: ${({ theme }) => theme.COLORS['base-label']};
    font-size: ${({ theme }) => theme.FONT.SIZES['lg']};
  }
`