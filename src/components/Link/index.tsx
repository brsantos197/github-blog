import { AnchorHTMLAttributes } from 'react';
import { LinkContainer } from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <LinkContainer {...props}>
      {children}
    </LinkContainer>
  );
}