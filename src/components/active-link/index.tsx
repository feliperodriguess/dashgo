import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...otherProps
}: ActiveLinkProps) {
  const [isActive, setIsActive] = useState(false)
  const { asPath } = useRouter()

  useEffect(() => {
    if (shouldMatchExactHref && (asPath === otherProps.href || asPath === otherProps.as)) {
      setIsActive(true)
    }
    if (
      !shouldMatchExactHref &&
      (asPath.startsWith(String(otherProps.href)) || asPath.startsWith(String(otherProps.as)))
    ) {
      setIsActive(true)
    }
  }, [asPath, otherProps, shouldMatchExactHref])

  return (
    <Link {...otherProps}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
