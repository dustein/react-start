import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return(
    
    <Link display="flex" alignItems="center" color="pink.400" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
        
  );
}