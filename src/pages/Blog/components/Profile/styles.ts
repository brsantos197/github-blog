import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 13.25rem;
  z-index: 100;
  position: relative;
  padding: 2rem 2.5rem;
  margin-bottom: 4.5rem;
  background: ${({ theme }) => theme.COLORS['base-profile']};

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  border-radius: 10px;

  box-shadow: 0 2px 28px 0 rgba(0,0,0, .2);
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`
export const GithubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const Name = styled.h2`
  ${({ theme }) => css`
  font-weight: ${theme.FONT.WEIGHT.bold};
  font-size: ${theme.FONT.SIZES['2xl']};
  line-height: ${theme.LINE_HEIGHT[130]};
  color: ${theme.COLORS['base-title']}
  `}
`

export const Bio = styled.p`
  color: ${({ theme }) => theme.COLORS['base-text']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  font-size: ${({ theme }) => theme.FONT.SIZES['md']};
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
  margin-bottom: 1.5rem;
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