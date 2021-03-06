// import liraries
import React from 'react';
import {
  FlatList, View, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../Components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';
// create a component
class CurrencyList extends React.Component {
    static propTypes = {
      navigation: PropTypes.object,
    }

    handlePress = () => {
      this.props.navigation.goBack(null);
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="default" translucent={false} />
          <FlatList
            data={currencies}
            renderItem={({ item }) => (
              <ListItem
                text={item}
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={this.handlePress}
              />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
          />
        </View>
      );
    }
}

// make this component available to the app
export default CurrencyList;
