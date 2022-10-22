import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 5,
        padding: 12,
        backgroundColor: '#211f1f',
        color: 'white',
        marginBottom: 10,
    },
    wrapper: {
        marginTop: 70,
        padding: 6,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 5,
    }),
    buttonText: {
        fontSize: 600,
        color: '#fff',
        fontSize: 17,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 30,
    }
})

const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to be at least 6 characters'),
    })

    const onLogin = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }} onSubmit={(values) => {
                    console.log(values)
                    onLogin(values.email, values.password);
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, {
                            borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#000' : 'red',
                            borderWidth: 1,
                        }]}>
                            <TextInput
                                placeholderTextColor='#5d5d5d'
                                placeholder='Phone number, email or username'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                style={{ color: 'white' }}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.password.length || values.password.length >= 6 ? '#000' : 'red',
                            borderWidth: 1,
                        }]}>
                            <TextInput
                                placeholderTextColor='#5d5d5d'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                style={{ color: 'white' }}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 25 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button(isValid)} onPressOut={handleSubmit}>
                            <Text style={styles.buttonText} >Log In</Text>
                        </TouchableOpacity>

                        <View style={styles.signupContainer}>
                            <Text style={{ color: '#fff' }}>Don't have an account?</Text>
                            <TouchableOpacity onPressOut={() => { navigation.push('SignupScreen') }}>
                                <Text style={{ color: '#6BB0F5' }}>  Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default LoginForm