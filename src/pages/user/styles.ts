import { StyleSheet, Dimensions } from "react-native";
import {themas} from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: '100%',
        height: 50
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333'
    },
    divider: {
        width: '80%',
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 20
    },
    infoSection: {
        width: '100%'
    },
    saveButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 10
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    logoutButton: {
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})