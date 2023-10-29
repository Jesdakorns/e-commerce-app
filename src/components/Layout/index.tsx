import React, {ReactNode} from 'react';
import {ImageBackground, View} from 'react-native';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({children}: Props) => {
  return (
    <View>
      <ImageBackground
        source={require('./../../assets/images/bg.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layout;
