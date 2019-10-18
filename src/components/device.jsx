import React from 'react'
import styled from 'styled-components'

// copied from https://github.com/marvelapp/devices.css/blob/master/assets/scss/devices.scss

export default Device

const Container = styled.div`
  /* marvel-device */
  display: inline-block;
  position: relative;
  box-sizing: content-box !important;

  /* nexus5 */
  padding: 50px 15px 50px 15px;
  width: 320px;
  height: 568px;
  background: #1e1e1e;
  border-radius: 20px;

  &:before {
    border-radius: 600px / 50px;
    background: inherit;
    /* manual override */
    background-color: #181818;
    content: '';
    top: 0;
    position: absolute;
    height: 103.1%;
    width: calc(100% - 26px);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`

const TopBar = styled.div`
  /* top-bar */
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  /* background: white; */
  overflow: hidden;
  display: block;
  border-radius: 1px;
  /* box-shadow: 0 0 0 3px #111; */

  /* top-bar, bottom-bar */
  height: 3px;
  /* background: black; */
  width: 100%;
  display: block;

  /* nexus5 */
  width: calc(100% - 8px);
  height: calc(100% - 6px);
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: 20px;
  background: #181818;

  &:before {
    border-radius: 600px / 50px;
    background: inherit;
    /* manual override */
    background-color: #181818;
    content: '';
    top: 0;
    position: absolute;
    height: 103%;
    width: calc(100% - 26px);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`

const Sleep = styled.div`
  width: 3px;
  position: absolute;
  left: -3px;
  top: 110px;
  height: 100px;
  background: inherit;
  border-radius: 2px 0px 0px 2px;
`

const Volume = styled.div`
  width: 3px;
  position: absolute;
  right: -3px;
  top: 70px;
  height: 45px;
  background: inherit;
  border-radius: 0px 2px 2px 0px;
`

const Camera = styled.div`
  background: #3c3d3d;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 18px;
  left: 50%;
  z-index: 3;
  margin-left: -5px;
  border-radius: 100%;

  &:before {
    background: #3c3d3d;
    width: 6px;
    height: 6px;
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: -100px;
    z-index: 3;
    border-radius: 100%;
  }
`

const Screen = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  background: white;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  /* box-shadow: 0 0 0 3px #111; */
`

function Device (props) {
  const { children } = props

  return (
    <Container>
      <TopBar />
      <Sleep />
      <Volume />
      <Camera />
      <Screen>{children}</Screen>
    </Container>
  )
}
