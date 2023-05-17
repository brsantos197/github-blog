import styled from 'styled-components';

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme.COLORS['base-text']};
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
  
  b {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  }

  a {
    color: ${({ theme }) => theme.COLORS.blue};
    text-decoration: underline;
  }
`;
