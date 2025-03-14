import { StyleSheet } from "react-native"

import { myColors } from "./Color"
export const Styles = StyleSheet.create({
 
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGreen: {
        width : 72,
        height : 72,
        backgroundColor: "#28A745",
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
     
        margin: 8,
      },
      
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
   
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    footer: {
        position: "absolute",
        bottom  :0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      footerText: {
        fontSize: 25,
        color: "grey",
      },
      header: {
        height: 60,
      
        justifyContent: "center",
        alignItems: "center",
       
       
      
      },
      headerText: {
        fontSize: 45,
        fontWeight: "bold",
        color: "grey", 
      }
      
    })