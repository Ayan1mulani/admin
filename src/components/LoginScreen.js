import { ArrowLeft, Check, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// This component is unchanged
const Checkbox = ({ checked, onChange, label }) => (
    <TouchableOpacity style={loginStyles.checkboxContainer} onPress={() => onChange(!checked)}>
        <View style={[loginStyles.checkbox, checked && loginStyles.checkboxChecked]}>
            {checked && <Check color="#fff" size={14} />}
        </View>
        <Text style={loginStyles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
);

// This component is unchanged
const AccountSelector = ({ accounts, onSelect, onBack }) => (
    <View style={loginStyles.accountSelectorContainer}>
        <View style={loginStyles.accountHeader}>
            <TouchableOpacity style={loginStyles.backButton} onPress={onBack}>
                <ArrowLeft color="#3b82f6" size={24} />
            </TouchableOpacity>
            <Text style={loginStyles.accountSelectorTitle}>Select Account</Text>
        </View>
        <Text style={loginStyles.accountSelectorSubtitle}>
            Your login details are associated with multiple accounts. Please select one to continue.
        </Text>
        <ScrollView style={loginStyles.accountsList} showsVerticalScrollIndicator={false}>
            {accounts.map((account, index) => (
                <TouchableOpacity key={index} style={loginStyles.accountItem} onPress={() => onSelect(account)}>
                    <View style={loginStyles.accountItemIcon}>
                        <Text style={loginStyles.accountItemIconText}>
                            {account.split(' - ')[0].charAt(0)}
                        </Text>
                    </View>
                    <View style={loginStyles.accountItemContent}>
                        <Text style={loginStyles.accountItemText}>{account}</Text>
                        <Text style={loginStyles.accountItemSubtext}>
                            {account.includes('Admin') ? 'Administrator' : 'User Account'}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
);

// The LoginScreen now receives the `navigation` prop from React Navigation
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTenant, setIsTenant] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showAccountSelector, setShowAccountSelector] = useState(false);

    const mockAccounts = [
        "Factech - Sahil Mulani Admin",
        "Factech - CL1-T112",
        "Demo - Sahil Mulani",
        "Demo - Sahil Mulani Admin",
        "Demo - HOLLYWOODACTORS8888",
        "Demo - HOLLYWOODACTORS2165",
        "Factech - CL3-TT12165",
    ];

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        setShowAccountSelector(true);
    };

    // This function now uses the `navigation` prop to change screens
    const handleAccountSelection = (account) => {
        Alert.alert('Success', `Logged in as ${account}`);
        navigation.replace('MainApp'); 
    };

    const handleBackToLogin = () => {
        setShowAccountSelector(false);
    };

    return (
        <SafeAreaView style={loginStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#3b82f6" />
            
            {!showAccountSelector && (
                <View style={loginStyles.appBar}>
                    <View style={loginStyles.appBarLeft}>
                        <Image 
                            source={{ uri: 'https://ism-users.s3.amazonaws.com/logo/290/logo_290.jpeg' }}
                            style={loginStyles.appBarLogo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={loginStyles.appBarTitle}>Sign In</Text>
                </View>
            )}

            <ScrollView 
                contentContainerStyle={loginStyles.scrollContainer} 
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {showAccountSelector ? (
                    <AccountSelector 
                        accounts={mockAccounts} 
                        onSelect={handleAccountSelection}
                        onBack={handleBackToLogin}
                    />
                ) : (
                    <View style={loginStyles.formContainer}>
                        <TouchableOpacity style={loginStyles.otpButton}>
                            <Text style={loginStyles.otpButtonText}>Login with OTP</Text>
                        </TouchableOpacity>

                        <View style={loginStyles.inputGroup}>
                            <View style={loginStyles.inputWrapper}>
                                <Text style={loginStyles.inputLabel}>Email or Phone Number</Text>
                                <View style={loginStyles.inputContainer}>
                                    <TextInput
                                        style={loginStyles.input}
                                        placeholder="Enter your email or phone"
                                        placeholderTextColor="#94a3b8"
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                    />
                                </View>
                            </View>

                            <View style={loginStyles.inputWrapper}>
                                <Text style={loginStyles.inputLabel}>Password</Text>
                                <View style={loginStyles.inputContainer}>
                                    <TextInput
                                        style={loginStyles.input}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#94a3b8"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity 
                                        style={loginStyles.eyeIcon}
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff color="#64748b" size={20} /> : <Eye color="#64748b" size={20} />}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={loginStyles.checkboxWrapper}>
                            <Checkbox
                                checked={isTenant}
                                onChange={setIsTenant}
                                label="Login as tenant"
                            />
                        </View>

                        <TouchableOpacity 
                            style={[loginStyles.button, (!email || !password) && loginStyles.buttonDisabled]} 
                            onPress={handleLogin}
                            disabled={!email || !password}
                        >
                            <Text style={loginStyles.buttonText}>Sign In</Text>
                        </TouchableOpacity>

                        <View style={loginStyles.footerLinks}>
                            <TouchableOpacity style={loginStyles.linkButton}>
                                <Text style={loginStyles.linkText}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={loginStyles.linkButton}>
                                <Text style={loginStyles.linkText}>Send Password to Tenant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

// Styles are now complete
const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b82f6',
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: StatusBar.currentHeight || 0,
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
    },
    appBarLeft: {
        marginRight: 12,
    },
    appBarLogo: {
        width: 50,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    scrollContainer: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 28,
        marginTop: 30,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
    otpButton: {
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#f1f5f9',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 28,
    },
    otpButtonText: {
        color: '#3b82f6',
        fontSize: 14,
        fontWeight: '600',
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        paddingHorizontal: 16,
        borderWidth: 1.5,
        borderColor: '#e2e8f0',
        minHeight: 56,
    },
    input: {
        flex: 1,
        color: '#1f2937',
        fontSize: 16,
        fontWeight: '400',
    },
    eyeIcon: {
        padding: 8,
    },
    checkboxWrapper: {
        marginBottom: 28,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderRadius: 4,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    checkboxChecked: {
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
    },
    checkboxLabel: {
        fontSize: 15,
        color: '#4b5563',
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#3b82f6',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 28,
        boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)',
    },
    buttonDisabled: {
        backgroundColor: '#9ca3af',
        boxShadow: 'none',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    linkButton: {
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    linkText: {
        color: '#3b82f6',
        fontSize: 12,
        fontWeight: '600',
    },
    accountSelectorContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 24,
        marginTop: 20,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
    accountHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        padding: 8,
        marginRight: 12,
        borderRadius: 8,
        backgroundColor: '#f1f5f9',
    },
    accountSelectorTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1f2937',
    },
    accountSelectorSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 24,
        lineHeight: 20,
    },
    accountsList: {
        maxHeight: 400,
    },
    accountItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    accountItemIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3b82f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    accountItemIconText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
    accountItemContent: {
        flex: 1,
    },
    accountItemText: {
        fontSize: 16,
        color: '#1f2937',
        fontWeight: '600',
        marginBottom: 2,
    },
    accountItemSubtext: {
        fontSize: 13,
        color: '#6b7280',
        fontWeight: '400',
    },
});
