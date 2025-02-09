import React, { useRef } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/styleSheet'
import HomeHeader from './HomeHeader';
import StoryList from './StoryList';
import PostList from './PostList';
import PostShareSheet from '../../components/bottomsheet/PostShareSheet';
import PostoptionSheet from '../../components/bottomsheet/PostoptionSheet';


const HomeScreen = () => {

  const theme = useTheme();
  const { colors } = theme;
  const sheetRef = useRef();
  const moresheet = useRef();
  const scrollRef = useRef();


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.card,
      }}
    >
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => scrollRef.current.handleScroll(e)}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyleSheet.container}>

          <HomeHeader theme={theme} />
          <StoryList theme={theme} />
          <PostList
            sheetRef={sheetRef}
            optionSheet={moresheet}
            ref={scrollRef}
          />
        </View>
      </ScrollView>
      <PostShareSheet
        ref={sheetRef}
      />
      <PostoptionSheet
        ref={moresheet}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;