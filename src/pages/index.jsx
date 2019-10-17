import React from 'react'
import { Box, Flex, Text, Image } from 'rebass/styled-components'
import shader from 'shader'
import { css, keyframes } from 'styled-components'

import Layout from '../components/layout'

function LandingPage () {
  return (
    <Layout header={<Hero />}>
      <BodyBackground>
        <BodyContent>
          <Why />
          <How />
          <Download />
        </BodyContent>
      </BodyBackground>
    </Layout>
  )
}

export default LandingPage

const sunriseKeyframes = keyframes`
  0%{
    background-position:50% 100%
  }
  50%{
    background-position:50% 0%
  }
  100%{
    background-position:50% 100%
  }
`

function Hero () {
  return (
    <Flex
      as='header'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      css={`
        background: ${({ theme: { colors } }) =>
      `linear-gradient(160deg, ${colors.primary[0]}, ${
        colors.primary[1]
      })`};
        background-size: 400% 400%;
        animation: ${sunriseKeyframes} 45s ease infinite;
      `}
      sx={{
        height: '100vh',
        borderBottomWidth: 8,
        borderBottomStyle: 'solid',
        borderBottomColor: 'dark'
      }}
    >
      <Text as='h1' p={3} fontSize={[5, 6, 7]} fontFamily='headline'>
        sunrise.social
      </Text>
      <Box />
    </Flex>
  )
}

function Why (props) {
  return (
    <Section>
      <Image src='https://via.placeholder.com/150' />
    </Section>
  )
}

function How (props) {
  return (
    <Section
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr'
      }}
    >
      <Image src='https://via.placeholder.com/150' />
      <Image src='https://via.placeholder.com/150' />
      <Image src='https://via.placeholder.com/150' />
    </Section>
  )
}

function Download (props) {
  return (
    <Section
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}
    >
      <Image src='https://via.placeholder.com/150' />
      <Image src='https://via.placeholder.com/150' />
    </Section>
  )
}

function BodyBackground (props) {
  return (
    <Box
      css={`
        background-size: 400% 400%;
        background: ${({ theme: { colors } }) =>
      `linear-gradient(180deg, ${colors.secondary[0]}, ${
        colors.secondary[1]
      });`};
      `}
      {...props}
    />
  )
}

function BodyContent (props) {
  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: '64rem',
        minHeight: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto'
      }}
      {...props}
    />
  )
}

function Section (props) {
  return (
    <Box
      css={{ display: 'grid', justifyContent: 'center' }}
      padding={4}
      {...props}
    />
  )
}
