import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Box, Link, Text } from 'rebass/styled-components'
import reset from 'styled-reset'
import shader from 'shader'
import Emoji from 'a11y-react-emoji'

import SEO from './seo'

import 'typeface-roboto'
import devicesCss from 'Devices.css/assets/devices.min.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${devicesCss}

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
    <Footer />
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

function Footer () {
  return (
    <Box
      as='footer'
      padding={3}
      bg='secondary.1'
      fontSize={[3, 4, 5]}
      fontFamily='body'
      textAlign='center'
    >
      <Link
        pr={2}
        target='_window'
        href='https://github.com/sunrise-choir/sunrise.social'
        color='primary.1'
        sx={{
          textDecoration: 'none',
          ':hover': { textDecoration: 'underline' }
        }}
      >
        sunrise.social
      </Link>
      made with
      <Text as={Emoji} px={2} symbol='❤️' label='heart' />
      by
      <Link
        pl={2}
        href='https://sunrisechoir.com'
        target='_window'
        color='primary.1'
        sx={{
          textDecoration: 'none',
          ':hover': { textDecoration: 'underline' }
        }}
      >
        the Sunrise Choir
      </Link>
    </Box>
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
