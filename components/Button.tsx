import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
} from "react-native";

const CButton = ({ title, onPress, color }: any) => {

  let Touch:any=TouchableNativeFeedback;
  if(Platform.OS==='ios'){
    Touch=TouchableOpacity;
  }
  const { container, text } = styles;
  return (
    <Touch onPress={onPress}>
      <View style={[container, { backgroundColor: color }]}>
        <Text style={text}>{title}</Text>
      </View>
    </Touch>
  );
};

export default CButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 40,
    width: 120,
    overflow:'hidden'
  },
  text: {
    color:'white',
    fontSize: 14,
    fontWeight: "bold",
  },
});
