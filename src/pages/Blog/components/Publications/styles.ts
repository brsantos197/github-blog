import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
  margin-bottom: 0.75rem;
`;

export const Title = styled.b`
  color: ${({ theme }) => theme.COLORS['base-subtitle']};
  font-size: ${({ theme }) => theme.FONT.SIZES.lg};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
`

export const PublicarionsCounter = styled.span`
  color: ${({ theme }) => theme.COLORS['base-span']};
  font-size: ${({ theme }) => theme.FONT.SIZES.sm};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
`