import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../Components/List';
import { connectAlert } from '../Components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = 'ios';


class Options extends Component {
    static propTypes = {
      navigation: PropTypes.object,
      alertWithType: PropTypes.func,
    }

    handleThemesPress = () => {
      this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {
      Linking.openURL('http://fixer.io').catch(() => { this.props.alertWithType('error', 'Sorry!', 'Fixer.io cant be opened right now'); });
    }

    render() {
      return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem
            text="Themes"
            onPress={this.handleThemesPress}
            customIcon={
              <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
            }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
              }
          />
          <Separator />
        </ScrollView>
      );
    }
}

export default connectAlert(Options);
