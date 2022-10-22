import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";


const styles = StyleSheet.create({
    inputField: {
        borderRadius: 5,
        padding: 12,
        backgroundColor: '#f7fcfc',
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
        marginTop: 20,
    }),
    buttonText: {
        fontSize: 600,
        color: '#fff',
        fontSize: 17,
    },
    loginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 30,
    }
})

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        username: Yup.string().required().min(2, 'A username is required'),
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to be at least 6 characters'),
    })
    const onSignup = async (email, password, username) => {
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "patients", user.email), {
                patient_uid: user.uid,
                username: username,
                email: user.email,
                profile_picture: `https://avatars.dicebear.com/api/bottts/${username}.png?background=%235C5857`
            });
        }).catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ username: '', email: '', password: '' }} onSubmit={(values) => {
                    onSignup(values.email, values.password, values.username);
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.username.length || values.username.length > 2 ? '#ccfcfc' : 'red',
                            borderWidth: 1,
                        }]}>
                            <TextInput
                                placeholderTextColor='#5d5d5d'
                                placeholder='Username'
                                autoCapitalize='none'
                                autoFocus={true}
                                textContentType='username'
                                style={{ color: 'white' }}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccfcfc' : 'red',
                            borderWidth: 1,
                        }]}>
                            <TextInput
                                placeholderTextColor='#5d5d5d'
                                placeholder='Email'
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
                            borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccfcfc' : 'red',
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
                        <View>
                            <Text>Doctor</Text>
                            <Text>Patient</Text>
                        </View>

                        <TouchableOpacity style={styles.button(isValid)} onPressOut={handleSubmit}>
                            <Text style={styles.buttonText} >Sign Up</Text>
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <Text style={{ color: '#fff' }}>Already have an account?</Text>
                            <TouchableOpacity onPressOut={() => { navigation.push('LoginScreen') }}>
                                <Text style={{ color: '#6BB0F5' }}>  Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignupForm