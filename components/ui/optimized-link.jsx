import Link from 'next/link'
import { forwardRef } from 'react'

const OptimizedLink = forwardRef(({ 
  href, 
  children, 
  className, 
  prefetch = true, 
  scroll = true, 
  replace = false, 
  ariaLabel, 
  ...props 
}, ref) => {
  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      scroll={scroll}
      replace={replace}
      aria-label={ariaLabel}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
})

OptimizedLink.displayName = 'OptimizedLink'

export default OptimizedLink 