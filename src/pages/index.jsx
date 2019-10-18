import React from 'react'
import { Box, Flex, Text, Image, Link } from 'rebass/styled-components'
import { keyframes } from 'styled-components'
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
          <FooterSection />
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
        background-size: 250% 250%;
        animation: ${sunriseKeyframes} 25s ease infinite;
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
          '-webkitTextStroke': '2px #000',
          textShadow: `
             4px 4px 0 #000,
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
    <StaticQuery
      query={graphql`
        query {
          feed: file(
            relativePath: { eq: "screenshots/sunrise-social-feed.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          profile: file(
            relativePath: { eq: "screenshots/sunrise-social-profile.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          search: file(
            relativePath: { eq: "screenshots/sunrise-social-search.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Section
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Screenshot source={data.feed} />
          <Box padding={4} />
          <Screenshot source={data.profile} />
          <Box padding={4} />
          <Screenshot source={data.search} />
        </Section>
      )}
    />
  )
}

function AboutSection (props) {
  return (
    <Section fontSize={[3, 4, 5]} lineHeight={[4, 5, 6]}>
      <Flex
        fontSize={[5, 6, 7]}
        flexDirection='row'
        justifyContent='center'
        alignItems='baseline'
      >
        <Text as={Emoji} mx={3} symbol='🌅' label='sunrise' />
        <Text as={Emoji} mx={3} symbol='📱' label='mobile' />
      </Flex>
      <Text mt={5}>
        <Link
          pr={2}
          target='_window'
          href='https://github.com/sunrise-choir/sunrise-android'
          color='primary.1'
          fontWeight='bold'
          sx={{
            textDecoration: 'none',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          Sunrise
        </Link>
        is a fully native Android app for the{' '}
        <ExternalLink href='https://scuttlebutt.nz'>
          Scuttlebutt social network
        </ExternalLink>
        .
      </Text>
      <Text mt={5}>Welcome to the solarpunk future!</Text>
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

function FooterSection () {
  return (
    <Section as='footer' fontSize={[3, 4, 5]} lineHeight={[4, 5, 6]}>
      <Text>
        <ExternalLink href='https://github.com/sunrise-choir/sunrise.social'>
          sunrise.social
        </ExternalLink>{' '}
        made with <Text as={Emoji} symbol='❤️' label='heart' /> by{' '}
        <ExternalLink href='https://sunrisechoir.com'>
          the Sunrise Choir.
        </ExternalLink>
      </Text>
      <Text mt={5}>
        Please support{' '}
        <ExternalLink href='https://opencollective.com/sunrise-choir'>
          our Open Collective
        </ExternalLink>
        ! <Text as={Emoji} symbol='💸' label='money' />
      </Text>
    </Section>
  )
}

function Section (props) {
  return <Box marginY={[5, 5, 6]} marginX={[2, 3, 4]} {...props} />
}

function BodyBackground (props) {
  return (
    <Box
      css={`
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
        maxWidth: '64rem'
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
      flexWrap='wrap'
      fontSize={[5, 6, 7]}
      marginY={5}
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
  const { source } = props
  return (
    <Box as={Device}>
      <Image as={Img} fluid={source.childImageSharp.fluid} />
    </Box>
  )
}

function ExternalLink (props) {
  const { href } = props
  return (
    <Link
      href={href}
      target='_window'
      color='primary.1'
      sx={{
        textDecoration: 'none',
        ':hover': { textDecoration: 'underline' }
      }}
      {...props}
    />
  )
}
