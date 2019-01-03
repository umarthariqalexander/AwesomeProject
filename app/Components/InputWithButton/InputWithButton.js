import React from 'react';
import {
  Text, View, TouchableHighlight, TextInput,
} from 'react-native';
import propTypes from 'prop-types';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const { editable = true, onPress, buttonText } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackGroundColorBase).darken(styles.$buttonBackGroundColorModifier);
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} editable={editable} {...props} />
    </View>
  );
};
InputWithButton.propTypes = {
  editable: propTypes.bool,
  onPress: propTypes.func,
  buttonText: propTypes.string,
};

export default InputWithButton;
