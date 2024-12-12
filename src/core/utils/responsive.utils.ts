import {Dimensions, Platform} from 'react-native';
const {height: screenH, width: screenW} = Dimensions.get('window');

export const BAR_HEIGHT = 150; // from design

const screenHeight = screenH;
const screenWidth = screenW;

// ipad 11  834*1194
// Base dimensions for ipad and tablet (ipad 11 dimensions can be replaced based on design if exist)
const _ipadDesignWidth = 834;
const _ipadDesignHeight = 1194;

// check if ipad or tablet - max size before going for ipad responsive numbers --
// (680*1000) is a number based on testing -- should be tested more and modified if require
const isIpad = screenWidth > 680 && screenHeight > 1000;

// _ipadMaxScreenWidth / Height - to prevent components from getting extra big (can be modified after testing on ipad 11-13inch and tablets)
// 900 * 1200 looks fine for most ipads/tablets based on previous apps -- can be modified if required
const _ipadMaxScreenWidth = screenWidth < 900 ? screenWidth : 900;
const _ipadMaxScreenHeight = screenHeight < 1200 ? screenWidth : 1200;

// Base dimensions based on the design (---> 360 * 720)
const _phoneDesignWidth = 360;
const _phoneDesignHeight = 720;
// _phoneMaxScreenWidth - to prevent components from getting so big on phones with wide screens >= 576
// max width 576 can be modified based on designer preference for wide screens phones or landscape
const _phoneMaxScreenWidth = screenWidth < 576 ? screenWidth : 576;

// Max size
// combine the Max size (check if ipad or phone ---> return the best value for max screen width/hight)
const maxScreenWidth = isIpad ? _ipadMaxScreenWidth : _phoneMaxScreenWidth;
const maxScreenHeight = isIpad ? _ipadMaxScreenHeight : screenHeight;

// design size
// combine the design size (check if ipad or phone ---> return the best responsive value for phone width/hight)
const designWidth = isIpad ? _ipadDesignWidth : _phoneDesignWidth;
const designHeight = isIpad ? _ipadDesignHeight : _phoneDesignHeight;

// full/final scale for all devices
//Calculate the scaling factor for (width/hight) based on the device's screen (width/hight) and the design (width/hight) .
export const _scaleWidth = maxScreenWidth / designWidth;
const _scaleHeight = maxScreenHeight / designHeight;

//Set the scaling for text to be the same as the width scaling .
const _scaleText = _scaleWidth;

//Scale a given width value based on _scaleWidth .
const width = (value: number) => value * _scaleWidth;

//Scale a given height value based on _scaleWidth .
const height = (value: number) => value * _scaleHeight;

//Scale a given fontSize value based on _scaleText .
const fontSize = (value: number) => value * _scaleText;

export {
  width,
  height,
  fontSize,
  designWidth,
  designHeight,
  isIpad,
  maxScreenHeight,
  screenHeight,
  screenWidth,
};
