import { ReactNode } from 'react'

import NextLink from 'next/link'

import { Button } from '@chakra-ui/react'

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    __hover: {
      opacity: '0.9',
    },
  },
  outlin: {
    variant: 'outline',
    color: 'primary',
    bg: 'white',
  },
}

export type LinkProps = {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  icon?: JSX.Element
  shallow?: boolean // MEMO: https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating#shallow-routing
}

export const Link = ({
  href,
  children,
  variant = 'link',
  icon,
  shallow = false,
}: LinkProps) => {
  return (
    // MEMO: https://chaika.hatenablog.com/entry/2023/03/26/083000
    <Button
      as={NextLink}
      shallow={shallow}
      href={href}
      leftIcon={icon}
      {...variants[variant]}
    >
      {children}
    </Button>
  )
}
