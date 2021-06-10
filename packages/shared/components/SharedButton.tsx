import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const SharedButton = ({ onPress, title }: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "white",
  },
});

export { SharedButton };
