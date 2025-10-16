import { StyleSheet, Dimensions } from "react-native";
import {themas} from "../../global/themes";

export const style = StyleSheet.create({
    scroll: {
        flexGrow: 1,
        backgroundColor: themas.colors.bigScreen
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: themas.colors.primary,
        marginBottom: 10
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: themas.colors.primary,
        marginBottom: 20
    },
    inputArea: {
        width: "100%",
        backgroundColor: themas.colors.secondary,
        borderRadius: 10,
        padding: 20,
        elevation: 3
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: themas.colors.gray,
        marginTop: 10
    },
    input: {
        width: "100%",
        backgroundColor: themas.colors.lightGray,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    dateButton: {
        width: "100%",
        backgroundColor: themas.colors.lightGray,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    dateText: {
        fontSize: 16,
        color: themas.colors.gray
    },
    logoutButton: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: themas.colors.secondary,
        borderRadius: 50,
        padding: 10,
        elevation: 4,
        borderWidth: 1,
        borderColor: themas.colors.lightGray
       
    },
    saveButton: {
        backgroundColor: themas.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 15
    },
    saveButtonText: {
        color: themas.colors.bigScreen,
        fontWeight: "bold",
        fontSize: 16
    }
})