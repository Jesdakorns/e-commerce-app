/* eslint-disable prettier/prettier */

import React from 'react';
import { Button, View } from 'react-native';
import { ProfileProps} from '../type';
import Layout from '../components/Layout';

function ProfileScreen({ navigation}: ProfileProps) {
    return (
        <Layout>
            <View >
                {/* <StatusBar />
            <Image source={require('./../assets/images/bg.png')} /> */}
                <View>
                    <Button
                        title="Go to Home Screen"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </Layout>
    );
}

export default ProfileScreen;
