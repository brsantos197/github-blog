import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS['base-post']};
  box-shadow: 0 2px 2px 0 rgba(0,0,0, .2);

  transition: border 0.4s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.COLORS['base-label']};
    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};

  h3 {
    font-size: ${({ theme }) => theme.FONT.SIZES['xl']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
    color: ${({ theme }) => theme.COLORS['base-title']};
  }

  span {
    flex: 45%;
    font-size: ${({ theme }) => theme.FONT.SIZES['sm']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
    color: ${({ theme }) => theme.COLORS['base-span']};
  }
`
export const CardContent = styled(ReactMarkdown)`
  font-size: ${({ theme }) => theme.FONT.SIZES['md']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  color: ${({ theme }) => theme.COLORS['base-text']};
`