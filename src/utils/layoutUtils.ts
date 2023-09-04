import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
  getBottomSpace,
  isIphoneX as isIphoneXFn,
} from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('screen')
const { height: windowHeight } = Dimensions.get('window')

const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0
const headerBarHeight = Platform.OS === 'android' ? 58 : statusBarHeight + 50
const deviceWidth = width
const deviceHeight = height
const isSmallDevice = height < 700
const bottomSpace = getBottomSpace()
const androidNavbarHeight = height - windowHeight
const isPhoneX = isIphoneXFn()

export {
  statusBarHeight,
  headerBarHeight,
  deviceWidth,
  deviceHeight,
  isSmallDevice,
  bottomSpace,
  isPhoneX,
  androidNavbarHeight,
}
