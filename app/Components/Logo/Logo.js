import React, { Component } from 'react';
import {
  View, Platform, ImageBackground, Text, Keyboard, Animated,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor() {
    super();
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.imageWidth, { toValue: styles.$smallImageSize, duration: ANIMATION_DURATION }).start();
    // Animated.parallel().start(); when we have multiple animation to run parallay
  }

  keyboardHide = () => {
    Animated.timing(this.imageWidth, { toValue: styles.$largeImageSize, duration: ANIMATION_DURATION }).start();
  }

  render() {
    const containerImageStyle = [styles.containerImage, { width: this.containerImageWidth, height: this.containerImageWidth }];
    const imageStyle = [styles.logoImage, { width: this.imageWidth }];
    return (
      <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={require('./images/background.png')} style={containerImageStyle}>
          <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
