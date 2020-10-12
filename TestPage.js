import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
  Linking
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import * as MailComposer from "expo-mail-composer";
import photo from "./photo.jpg";

//This is from the documents it handles the opening of the weh browser Replacing the url is the what url it will take you to
const TestPage = () => {
  handlePressButtonAsyncOne = async () => {
    let result = await WebBrowser.openBrowserAsync("https://expo.io");
    this.setState({ result });
  };
  handlePressButtonAsyncTwo = async () => {
    let result = await WebBrowser.openBrowserAsync("https://www.google.com/");
    this.setState({ result });
  };
  handlePressButtonAsyncThree = async () => {
    let result = await WebBrowser.openBrowserAsync("https://twitter.com");
    this.setState({ result });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Image style={styles.mainImage} source={photo} />

        <Text style={styles.text1}>
          The Cancun airport is located 22 kilometer (13.5 miles) south of the
          Ultramar ferry terminal. The average trip takes about 35 minutes, but
          can take longer depending upon traffic.{"\n"}
          {"\t"}There are four transportation options available in a variety of
          price ranges.
        </Text>
        <TouchableOpacity onPress={this.handlePressButtonAsyncOne}>
          <Text style={styles.link}>Expo Link</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressButtonAsyncTwo}>
          <Text style={styles.link}>Google Link</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressButtonAsyncThree}>
          <Text style={styles.link}>Twitter Link</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            MailComposer.composeAsync({ recipients: ["perrymex@gmail.com"] })
          }
        >
          <Text style={styles.link}>Open Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("tel:8777111223");
          }}
        >
          <Text style={styles.link}>Perry Phone Number</Text>
        </TouchableOpacity>

        {/* You need to make a button for the action to be set off with. You/We can style the button howecer you want  */}

        <Image style={styles.imageInline} source={photo} />

        <Text style={styles.subhead}>Airport to ferry terminal</Text>
        <Text style={styles.text2}>
          Dummy text from here on out just to make scrollview work on larger
          screens. Dummy text from here on out just to make scrollview work on
          larger screens. Dummy text from here on out just to make scrollview
          work on larger screens. Dummy text from here on out just to make
          scrollview work on larger screens.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "yellow"
  },
  text1: {
    paddingHorizontal: 15,
    paddingTop: 10
  },
  text2: {
    paddingHorizontal: 15
  },
  scrollview: {
    paddingTop: 0
  },
  subhead: {
    fontWeight: "bold",
    color: "#00849C",
    paddingHorizontal: 15,
    paddingTop: 7,
    fontSize: 18
  },
  mainImage: {
    resizeMode: "contain",
    width: "100%",
    maxHeight: 250,
    borderWidth: 3,
    borderColor: "red"
  },
  imageInline: {
    resizeMode: "contain",
    width: "100%",
    marginTop: 10,
    maxHeight: 250,
    borderWidth: 3,
    borderColor: "blue"
  },
  link: { fontSize: 20 }
});

export default TestPage;
