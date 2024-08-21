import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#36691D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
    },
    errorText: {
        color: '#e74c3c',
        marginTop: 10,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
});

export default styles;
