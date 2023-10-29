/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HomeProps } from '../type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import Layout from '../components/Layout';
import { themeColor } from '../utils/themeColor';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

function HomeScreen({ navigation }: HomeProps) {

    return (
        <Layout>
            <View style={styles.container}>
                <StatusBar />
                <SafeAreaView style={{ width: '100%', maxWidth: 400 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./../assets/images/logo_main.png')} style={{ width: 80, height: 80 }} />
                    </View>
                    <Text variant="headlineSmall" style={{ textAlign: 'center', color: themeColor.PRIMARY_COLOR }}>Sign In</Text>
                    <TextInput
                        style={{ marginVertical: 5 }}
                        outlineStyle={{ borderRadius: 8 }}
                        label="Email Address"
                        mode="outlined"
                    />
                    <TextInput
                        style={{ marginVertical: 5 }}
                        outlineStyle={{ borderRadius: 8 }}
                        label="Password"
                        mode="outlined"
                    />
                    <Button
                        textColor="#fff"
                        buttonColor={themeColor.PRIMARY_COLOR}
                        style={{ borderRadius: 8, marginVertical: 20 }}
                        contentStyle={{ height: 51 }}
                        mode="elevated"
                        onPress={() => navigation.navigate('Profile')}
                    >Sign In</Button>
                    <View style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{ marginBottom: 5, marginRight: 5 }}>
                            <Text style={{ textDecorationLine: 'underline' }}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Divider style={{ marginVertical: 4, flex: 0.6 }} />
                        <Text style={{ flex: 0.1, textAlign: 'center' }} >or</Text>
                        <Divider style={{ marginVertical: 4, flex: 0.6 }} />
                    </View>
                    {/* <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                    />; */}
                    <Button
                        icon="google"
                        textColor="#000"
                        buttonColor="#ffff"
                        rippleColor="#e6e6e663"
                        style={{ borderRadius: 8, marginVertical: 10 }}
                        contentStyle={{ height: 51 }}
                        mode="elevated"
                        onPress={() => navigation.navigate('Profile')}
                    ><Text >Sign in with Google</Text></Button>
                </SafeAreaView>
            </View>
        </Layout >
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        fontFamily: 'Kanit-Regular',
    },
    img: {
        width: '100%',
        height: '100%',
    },
});
