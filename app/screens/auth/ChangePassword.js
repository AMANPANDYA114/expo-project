import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import Button from '../../components/button/Button';

const ChangePassword = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    const [show, setshow] = React.useState(true);

    const [show2, setshow2] = React.useState(true);

    const [inputFocus, setFocus] = React.useState({
        onFocus1: false,
        onFocus2: false
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: COLORS.secondary, flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <LinearGradient colors={['rgba(255, 255, 255, 0.00)', 'rgba(255, 255, 255, 0.08)']} style={GlobalStyleSheet.cricleGradient1}>
                        </LinearGradient>
                        <LinearGradient colors={['rgba(255, 255, 255, 0.00)', 'rgba(255, 255, 255, 0.08)']} style={GlobalStyleSheet.cricleGradient2}>
                        </LinearGradient>
                        <View
                            style={{
                                paddingTop: 40,
                                paddingBottom: 20
                            }}
                        >
                            <Image
                                style={{ width: 80, height: 80 }}
                                source={IMAGES.logo}
                            />
                        </View>
                        <Text style={GlobalStyleSheet.formtitle}>Change Password</Text>
                        <Text style={GlobalStyleSheet.forndescription}>Please enter your credentials to access your account and detail</Text>
                    </View>
                    <View style={[GlobalStyleSheet.loginarea, { backgroundColor: colors.card }]}>
                        

                        <Text style={[GlobalStyleSheet.inputlable, { color: colors.title }]}> New Password</Text>
                        <View
                            style={[
                                GlobalStyleSheet.inputBox, {
                                    backgroundColor: colors.input,
                                },
                                inputFocus.onFocus1 && {
                                    borderColor: COLORS.primary,
                                }
                            ]}
                        >
                            <Image
                                style={[
                                    GlobalStyleSheet.inputimage,
                                    {
                                        tintColor: theme.dark ? colors.title : colors.text,
                                    }
                                ]}
                                source={IMAGES.lock}
                            />

                            <TextInput
                                style={[GlobalStyleSheet.input, { color: colors.title }]}
                                placeholder='Enter your new password'
                                placeholderTextColor={colors.placeholder}
                                secureTextEntry={show}
                                keyboardType='number-pad'
                                onFocus={() => setFocus({ ...inputFocus, onFocus1: true })}
                                onBlur={() => setFocus({ ...inputFocus, onFocus1: false })}
                            />
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    position: 'absolute',
                                    right: 15,

                                }}
                                onPress={() => {
                                    setshow(!show)
                                }}
                            >
                                <Image
                                    style={[GlobalStyleSheet.inputSecureIcon, {
                                        tintColor: theme.dark ? colors.title : colors.text,
                                    }]}
                                    source={
                                        show
                                            ?
                                            IMAGES.eyeclose
                                            :
                                            IMAGES.eyeopen
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={[GlobalStyleSheet.inputlable, { color: colors.title }]}> Confirm Password</Text>
                        <View
                            style={[
                                GlobalStyleSheet.inputBox, {
                                    backgroundColor: colors.input,
                                },
                                inputFocus.onFocus2 && {
                                    borderColor: COLORS.primary,
                                }
                            ]}
                        >
                            <Image
                                style={[
                                    GlobalStyleSheet.inputimage,
                                    {
                                        tintColor: theme.dark ? colors.title : colors.text,
                                    }
                                ]}
                                source={IMAGES.lock}
                            />

                            <TextInput
                                style={[GlobalStyleSheet.input, { color: colors.title }]}
                                placeholder='Enter your confirm password'
                                placeholderTextColor={colors.placeholder}
                                secureTextEntry={show2}
                                keyboardType='number-pad'
                                onFocus={() => setFocus({ ...inputFocus, onFocus2: true })}
                                onBlur={() => setFocus({ ...inputFocus, onFocus2: false })}
                            />
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    position: 'absolute',
                                    right: 15,

                                }}
                                onPress={() => {
                                    setshow2(!show2)
                                }}
                            >
                                <Image
                                    style={[GlobalStyleSheet.inputSecureIcon, {
                                        tintColor: theme.dark ? colors.title : colors.text,
                                    }]}
                                    source={
                                        show2
                                            ?
                                            IMAGES.eyeclose
                                            :
                                            IMAGES.eyeopen
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{marginTop:10}}>
                            <Button
                                title="Submit"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>

                        <View style={{ flex: 1 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <Text style={{ ...FONTS.font, color: colors.text }}>Already have an account
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={{ ...FONTS.font, color: COLORS.primary, textDecorationLine: 'underline', textDecorationColor: '#2979F8', marginLeft: 5 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChangePassword;