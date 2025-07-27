import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName: string;
  className?: string;
}

export function ActiveLink({ children, activeClassName, className = '', ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const combinedClassName = asPath === rest.href 
    ? activeClassName : '';

  return (
    <Link {...rest} className={combinedClassName}>
      {children}
    </Link>
  );
}
