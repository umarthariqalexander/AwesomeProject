import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    width: '$largeContainerSize',
    height: '$largeContainerSize',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '$largeImageSize',
    height: '$largeImageSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    color: '$white',
    marginTop: 15,
  },
});
