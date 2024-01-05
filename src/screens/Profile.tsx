import {
  Dimensions,
  Image,
  ListRenderItem,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { Fragment } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Tabs } from "react-native-collapsible-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/Itheme";
import BackArrow from "../icons/BackArrow";
import Dot3 from "../icons/Dot3";
import Logo from "../components/Logo";
import Stats from "../components/Stats";
import DescriptionItem from "../components/DescriptionItem";
import { typography, typographyStyles } from "../constants/typography";
import Link from "../icons/Link";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import AddUser from "../icons/AddUser";
import StatusAvatar from "../components/StatusAvatar";
import Grid from "../icons/Grid";
import ContactBook from "../icons/ContactBook";
import Video from "../icons/Video";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
const DATA = [0, 1, 2, 3, 4];

const identity = (v: unknown): string => v + "";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}
    >
      {/* Profile Information */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
        }}
      >
        {/* logo */}
        <Logo />
        <Stats title="109" description="Posts" />
        <Stats title="409" description="Followers" />
        <Stats title="40" description="Following" />
      </View>
      {/* Description */}
      <View style={{ flexDirection: "column", gap: 4 }}>
        {/* username */}
        <Text
          style={{ fontSize: 16, fontWeight: "800", color: colors.content }}
        >
          TheHexaTown
        </Text>
        {/* username badge */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "auto",
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: colors.disable,
              borderRadius: 12,
            }}
          >
            <Text style={typographyStyles.badge}>@ thehexatown</Text>
          </View>
        </View>
        {/* company name */}
        <Text
          style={{
            ...typographyStyles.contentDefault,
          }}
        >
          Software Company
        </Text>

        <Text style={{ ...typographyStyles.contentDefault }}>
          Bespoke Software development
        </Text>

        {/* list */}
        <View>
          <DescriptionItem dec="Making apps of tomorrow" />
          <DescriptionItem dec="Helping Brands achieve their goals" />
        </View>

        {/* tags and mentions */}
        <View style={{ flexDirection: "row", columnGap: 4, flexWrap: "wrap" }}>
          <Text
            style={{
              ...typographyStyles.contentDefault,
            }}
          >
            Founders
          </Text>
          <Text
            style={{
              ...typographyStyles.contentDefault,
              color: colors.accent,
            }}
          >
            @muhammad797
          </Text>
          <Text
            style={{
              ...typographyStyles.contentDefault,
              color: colors.accent,
            }}
          >
            @thisshahiderali
          </Text>

          <Text
            style={{
              ...typographyStyles.contentDefault,
              color: colors.accent,
              letterSpacing: 0,
            }}
          >
            #app
          </Text>

          <Text
            style={{
              ...typographyStyles.contentDefault,
              color: "#B0C9FF",
              letterSpacing: -1,
            }}
          >
            #dev
          </Text>

          <Text
            style={{
              ...typographyStyles.contentDefault,
              color: "#B0C9FF",
              letterSpacing: -1,
            }}
          >
            #agency
          </Text>
        </View>
        {/* link */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
          <Link style={{ width: 20, height: 20 }} tintColor={colors.content} />
          <Text
            style={{ color: colors.accent, fontSize: 18, fontWeight: "600" }}
          >
            www.thehexatown.com/
          </Text>
        </View>

        {/* buttons */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginTop: 8,
          }}
        >
          <Button title={"Follow"} bgColor={colors.active} />
          <Button title={"Message"} bgColor={colors.disable} />
          <Button title={"contact"} bgColor={colors.disable} />
          <IconButton icon={AddUser} bgColor={colors.disable} />
        </View>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingLeft: 12,
          paddingTop: 12,
          columnGap: 12,
        }}
      >
        <StatusAvatar />
        <StatusAvatar />
        <StatusAvatar />
        <StatusAvatar />
        <StatusAvatar />
        <StatusAvatar />
        <StatusAvatar />
      </ScrollView>
    </View>
  );
};

type Props = {};
const Profile = (props: Props) => {
  const insets = useSafeAreaInsets();
  const layout = useWindowDimensions();

  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  return (
    <Fragment>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.background}
      />
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          height: 44 + insets.top,
          position: "absolute",
          zIndex: 99,
          top: 0,
          left: 0,
          width: SCREEN_WIDTH,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 32,
            }}
          >
            <BackArrow
              tintColor={colors.content}
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 26, fontWeight: "800", color: "white" }}>
              theHexatown
            </Text>
          </View>
          <Dot3 tintColor={colors.content} style={{ width: 32, height: 32 }} />
        </View>
      </SafeAreaView>

      <Tabs.Container
        tabBarHeight={200}
        headerContainerStyle={{
          paddingTop: 44 + insets.top,
          backgroundColor: colors.background,
        }}
        renderHeader={Header}
        // headerHeight={{}}
        allowHeaderOverscroll={false}
        revealHeaderOnScroll
      >
        <Tabs.Tab
          name={"A"}
          label={() => (
            <Grid
              tintColor={colors.content}
              style={{ width: 32, height: 32 }}
            />
          )}
        >
          <Tabs.FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            // contentOffset={{ y: 440 + insets.top, x: 0 }}
            contentContainerStyle={Platform.select({
              ios: {
                paddingTop: Platform.select({
                  ios: 44 + insets.top,
                  android: 0,
                }),
                gap: 2,

                backgroundColor: colors.background,
              },
              android: {
                gap: 2,
                marginTop: 44,
                backgroundColor: colors.background,
              },
            })}
            numColumns={3}
            renderItem={({ item }) => (
              <View
                style={{
                  width: SCREEN_WIDTH / 3,
                  height: SCREEN_WIDTH / 3,
                  backgroundColor: "red",
                  marginRight: 2,
                }}
              >
                <Image
                  source={require("../../assets/theHexaImage.jpeg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            )}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab
          name="B"
          label={() => (
            <Video
              tintColor={colors.content}
              style={{ width: 32, height: 32 }}
            />
          )}
        >
          <Tabs.FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            // contentOffset={{ y: 440 + insets.top, x: 0 }}
            contentContainerStyle={{
              paddingTop: 44 + insets.top,
              gap: 2,
              backgroundColor: colors.background,
            }}
            numColumns={3}
            renderItem={({ item }) => (
              <View
                style={{
                  width: SCREEN_WIDTH / 3,
                  height: SCREEN_WIDTH / 3 + 60,
                  backgroundColor: "red",
                  marginRight: 2,
                }}
              >
                <Image
                  source={{
                    uri: "https://instagram.fkhi5-1.fna.fbcdn.net/v/t51.2885-15/414689831_1308952906472538_6506941225055492897_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkciJ9&_nc_ht=instagram.fkhi5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6xjitto9W7EAX90XQyx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI3MTMyNzY0NjY5NTYyNDU2NQ%3D%3D.2-ccb7-5&oh=00_AfDdNE_QWQf-AefKjZ9a2tEtCiSvnDzo6aMpPwHlmgJGIg&oe=659A83DF&_nc_sid=ee9879",
                  }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            )}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab
          name={"C"}
          label={() => (
            <ContactBook
              tintColor={colors.content}
              style={{ width: 32, height: 32 }}
            />
          )}
        >
          <Tabs.FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            // contentOffset={{ y: 440 + insets.top, x: 0 }}
            contentContainerStyle={{
              paddingTop: 44 + insets.top,
              gap: 2,
              backgroundColor: colors.background,
            }}
            numColumns={3}
            renderItem={({ item }) => (
              <View
                style={{
                  width: SCREEN_WIDTH / 3,
                  height: SCREEN_WIDTH / 3,
                  backgroundColor: "red",
                  marginRight: 2,
                }}
              >
                <Image
                  source={{
                    uri: "https://instagram.fkhi5-1.fna.fbcdn.net/v/t51.2885-15/414689831_1308952906472538_6506941225055492897_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkciJ9&_nc_ht=instagram.fkhi5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6xjitto9W7EAX90XQyx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI3MTMyNzY0NjY5NTYyNDU2NQ%3D%3D.2-ccb7-5&oh=00_AfDdNE_QWQf-AefKjZ9a2tEtCiSvnDzo6aMpPwHlmgJGIg&oe=659A83DF&_nc_sid=ee9879",
                  }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            )}
            keyExtractor={identity}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </Fragment>
  );
};

export default Profile;

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: "100%",
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    // height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
});
