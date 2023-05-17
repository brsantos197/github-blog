import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';

export const PostContent = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme.COLORS['base-text']};
  line-height: ${({ theme }) => theme.LINE_HEIGHT[160]};
`;
