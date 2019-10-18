import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Box, Link, Text } from 'rebass/styled-components'
import reset from 'styled-reset'
import shader from 'shader'
import Emoji from 'a11y-react-emoji'

import SEO from './seo'

import 'typeface-roboto'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`

const Layout = ({ header, children }) => (
  <Main>
    <SEO
      keywords={[
        'open',
        'source',
        'scuttlebutt',
        'peer-to-peer',
        'mobile',
        'social',
        'network',
        'native',
        'app'
      ]}
    />
    <GlobalStyle />
    {header}
    <Body>{children}</Body>
  </Main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

function Main (props) {
  return (
    <Box
      as='main'
      {...props}
      css={`
        background-color: ${({ theme }) => shader('#ff', 0.95)};
      `}
    />
  )
}

function Body (props) {
  return (
    <Box
      {...props}
      sx={{
        margin: '0 auto',
        minHeight: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto'
      }}
    />
  )
}
export default Layout

export function withLayout (PageComponent) {
  return function PageWithLayout (props) {
    return (
      <Layout>
        <PageComponent {...props} />
      </Layout>
    )
  }
}
