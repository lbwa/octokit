import NextLink, { LinkProps } from 'next/link'
import isString from 'lodash/isString'

const Link: React.FC<LinkProps> = function (props) {
  const { href } = props

  const isInternalLink =
    isString(href) && (href.startsWith('/') || href.startsWith('#'))

  const actualHref = isString(href) ? href : href.pathname
  const anchorProps = { ...{ ...props, href: actualHref } }

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...anchorProps} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...anchorProps} />
}

const MDXComponents = {
  a: Link
}

export default MDXComponents
