import React from 'react'
import { Box, Flex, Text, Image, Link } from 'rebass/styled-components'
import shader from 'shader'
import { css, keyframes } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Emoji from 'a11y-react-emoji'

import Layout from '../components/layout'
import Device from '../components/device'
import googlePlayBadge from '../images/google-play-badge.png'
import fDroidBadge from '../images/f-droid-badge.png'
import icon from '../images/icon.svg'

function LandingPage () {
  return (
    <Layout header={<Hero />}>
      <BodyBackground>
        <BodyContent>
          <ScreensSection />
          <AboutSection />
          <DownloadSection />
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
      padding={[3, 4, 5]}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      css={`
        background: ${({ theme: { colors } }) =>
      `linear-gradient(160deg, ${colors.primary[0]}, ${
        colors.primary[1]
      })`};
        background-size: 200% 200%;
        animation: ${sunriseKeyframes} 30s ease infinite;
      `}
      sx={{
        height: '100vh',
        borderBottomWidth: 8,
        borderBottomStyle: 'solid',
        borderBottomColor: 'dark'
      }}
    >
      <Image flex='2' src={icon} />
      <Text
        as='h1'
        p={3}
        color={'secondary.1'}
        fontSize={[5, 6, 7]}
        fontFamily='headline'
        fontWeight='bold'
        flex='1'
        sx={{
          textShadow: `
           -2px -2px 0 #000,  
            2px -2px 0 #000,
            -2px 2px 0 #000,
             2px 2px 0 #000
          `
        }}
      >
        sunrise.social
      </Text>
      <DownloadBadges />
    </Flex>
  )
}

function ScreensSection (props) {
  return (
    <Section>
      <Screenshot />
    </Section>
  )
}

function AboutSection (props) {
  return (
    <Section fontSize={[5, 6, 7]} lineHeight={[4, 5, 6]}>
      <Flex flexDirection='row' justifyContent='center' alignItems='baseline'>
        <Text as={Emoji} mx={3} symbol='🌅' label='sunrise' />
        <Text as={Emoji} mx={3} symbol='📱' label='mobile' />
      </Flex>
      <Text mt={5} fontSize={[3, 4, 5]}>
        <Link
          pr={2}
          target='_window'
          href='https://github.com/sunrise-choir/sunrise.social'
          color='primary.1'
          fontWeight='bold'
          sx={{
            textDecoration: 'none',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          sunrise.social
        </Link>
        is a fully native Android app for the
        <Link
          href='https://scuttlebutt.nz'
          target='_blank'
          pl={2}
          color='primary.1'
          fontWeight='bold'
          sx={{
            textDecoration: 'none',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          Scuttlebutt social network
        </Link>
        .
      </Text>
      <Text mt={5} fontSize={[3, 4, 5]}>
        Welcome to the solarpunk future!
      </Text>
      <Flex
        mt={5}
        flexDirection='row'
        justifyContent='center'
        alignItems='baseline'
        fontSize={[5, 6, 7]}
      >
        <Text as={Emoji} mx={3} symbol='🌈' label='rainbow' />
        <Text as={Emoji} mx={3} symbol='🌱' label='seedling' />
      </Flex>
    </Section>
  )
}

function DownloadSection (props) {
  return (
    <Section>
      <DownloadBadges margin={0} />
    </Section>
  )
}

function Section (props) {
  return (
    <Flex
      margin={6}
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      {...props}
    />
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

function DownloadBadges (props) {
  return (
    <Flex
      flexDirection='row'
      justifyContent='center'
      alignItems='baseline'
      fontSize={[5, 6, 7]}
      margin={5}
      {...props}
    >
      <DownloadBadge src={googlePlayBadge} />
      <DownloadBadge src={fDroidBadge} />
    </Flex>
  )
}

function DownloadBadge (props) {
  return <Image margin={2} height={70} {...props} />
}

function Screenshot (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          screenshot: file(relativePath: { eq: "manyverse-screenshot.png" }) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Device>
          <Image as={Img} fluid={data.screenshot.childImageSharp.fluid} />
        </Device>
      )}
    />
  )
}
