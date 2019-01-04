import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Icon = ({ visible, checkmark, iconBackground }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyles}>
      {checkmark && <Image style={styles.checkIcon} source={require('./images/check.png')} resizeMode="contain" />}
    </View>
  );
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
