import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff",
    },

    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    title: {
        fontSize: 28,
        marginTop: 28,
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },

    button: {
        backgroundColor: "#36691D",
        width: '100%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },

    registerText: {
        color: "#1a1a1a",
    }
})

export default styles;
