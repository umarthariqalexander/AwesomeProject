import React, { Component } from 'react';
import { Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../Components/Container';
import { Logo } from '../Components/Logo';
import { InputWithButton } from '../Components/InputWithButton';
import { ClearButton } from '../Components/Buttons';
import { LastConverted } from '../Components/Text';
import { Header } from '../Components/Header';

const BASE_PRICE_TEXT = 'USD';
const BASE_QUOTE_TEXT = 'GPD';
const BASE_PRICE_VALUE = '80';
const BASE_QUOTE_VALUE = '100';
const TEMP_CONVERSTION_RATE = 0.7974;
const TEMP_CONVERSTION_DATE = new Date();

class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
    };

    handlePressBaseCurrency = () => {
      console.log('handlePressBaseCurrency');
      this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
    }

    handlePressQuoteCurrency = () => {
      console.log('handlePressBaseCurrency');
      this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
    }

    handleTextChange = (text) => {
      console.log(text);
    }

    handleSwapCurrencies = () => {
      console.log('pressed swap currencies');
    }

    handleOptionPress = () => {
      this.props.navigation.navigate('Options');
    }

    render() {
      return (
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleOptionPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton buttonText={BASE_PRICE_TEXT} onChangeTexts={this.handleTextChange} defaultValue={BASE_PRICE_VALUE} keyboardType="numeric" onPress={this.handlePressBaseCurrency} onChangeText={this.handleTextChange} />
            <InputWithButton buttonText={BASE_QUOTE_TEXT} defaultValue={BASE_QUOTE_VALUE} editable={false} onPress={this.handlePressQuoteCurrency} value={BASE_QUOTE_VALUE} />
            <LastConverted
              base={BASE_PRICE_TEXT}
              quote={BASE_QUOTE_TEXT}
              date={TEMP_CONVERSTION_DATE}
              conversionRate={TEMP_CONVERSTION_RATE}
            />
            <ClearButton
              text="Reverse Currencies"
              onPress={this.handleSwapCurrencies}
            />
          </KeyboardAvoidingView>
        </Container>
      );
    }
}

export default Home;
