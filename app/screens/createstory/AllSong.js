import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { IMAGES, FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import SongoptionSheet from '../../components/bottomsheet/SongoptionSheet';
import MusicoptionSheet from '../../components/bottomsheet/MusicoptionSheet';

const musicData = [
    {
        id: '1',
        image: IMAGES.smallpic1,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '2',
        image: IMAGES.smallpic2,
        title: 'Chaleye (from "jawan") ',
        text: 'Anirudh ravichander,Arijit Sing '
    },
    {
        id: '3',
        image: IMAGES.smallpic3,
        title: 'Dil Jhoom ',
        text: 'Mithoon,Arijit Sing'
    },
    {
        id: '4',
        image: IMAGES.smallpic4,
        title: 'Amchaya Papani Ganpa ',
        text: 'Arijit Sing'
    },
    {
        id: '5',
        image: IMAGES.smallpic5,
        title: 'Meri Dhuniya hai  ',
        text: 'Sonu Nigam'
    },
    {
        id: '6',
        image: IMAGES.smallpic6,
        title: 'Muskurana Tera  ',
        text: 'Saaj Bhatt'
    },
    {
        id: '7',
        image: IMAGES.smallpic7,
        title: 'Happy Birthday ',
        text: 'Jovanie'
    },
    {
        id: '8',
        image: IMAGES.smallpic8,
        title: 'Chaleye  (Slpwed + Reverb) ',
        text: 'Rubi,Rabiul Rhmn'
    },
    {
        id: '9',
        image: IMAGES.smallpic9,
        title: 'Happy Birthday To You ',
        text: 'Muskan'
    },
    {
        id: '10',
        image: IMAGES.smallpic10,
        title: 'Dil Jhoom (Slpwed + Reverb) ',
        text: 'Sidhu'
    },
    {
        id: '11',
        image: IMAGES.smallpic11,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '12',
        image: IMAGES.smallpic1,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '13',
        image: IMAGES.smallpic2,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '14',
        image: IMAGES.smallpic3,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '15',
        image: IMAGES.smallpic4,
        title: 'Chaleye (from "jawan") ',
        text: 'Anirudh ravichander,Arijit Sing '
    },
    {
        id: '16',
        image: IMAGES.smallpic5,
        title: 'Dil Jhoom ',
        text: 'Mithoon,Arijit Sing'
    },
    {
        id: '17',
        image: IMAGES.smallpic6,
        title: 'Amchaya Papani Ganpa ',
        text: 'Arijit Sing'
    },
    {
        id: '18',
        image: IMAGES.smallpic7,
        title: 'Meri Dhuniya hai  ',
        text: 'Sonu Nigam'
    },
    {
        id: '19',
        image: IMAGES.smallpic8,
        title: 'Muskurana Tera  ',
        text: 'Saaj Bhatt'
    },
    {
        id: '20',
        image: IMAGES.smallpic9,
        title: 'Happy Birthday ',
        text: 'Jovanie'
    },
    {
        id: '21',
        image: IMAGES.smallpic10,
        title: 'Chaleye  (Slpwed + Reverb) ',
        text: 'Rubi,Rabiul Rhmn'
    },
    {
        id: '22',
        image: IMAGES.smallpic11,
        title: 'Happy Birthday To You ',
        text: 'Muskan'
    },
    {
        id: '23',
        image: IMAGES.smallpic5,
        title: 'Dil Jhoom (Slpwed + Reverb) ',
        text: 'Sidhu'
    },
    {
        id: '24',
        image: IMAGES.smallpic6,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '25',
        image: IMAGES.smallpic7,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
    {
        id: '26',
        image: IMAGES.smallpic8,
        title: 'Insane (Slpwed + Reverb) ',
        text: 'sid04'
    },
]

const AllSong = () => {

    const theme = useTheme();
    const { colors } = theme;

    const moresheet = React.useRef();

    const musicsheet = React.useRef();

  return (
    <SafeAreaView style={{backgroundColor:colors.card,flex:1}}>
          <Header
              title="For You"
          />
          <View style={{marginTop:20}}>
              
            <ScrollView>
                {musicData.map((data, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() => musicsheet.current.openSheet()}
                        >
                            <View style={[GlobalStyleSheet.container, GlobalStyleSheet.flexalingjust, { marginBottom: 15 }]}>
                                <View style={GlobalStyleSheet.flexaling}>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 8, marginRight: 10 }}
                                        source={data.image}
                                    />
                                    <View>
                                        <Text style={{ ...FONTS.font, ...FONTS.fontMedium, color: theme.colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontXs, color: theme.colors.text }}>{data.text}</Text>
                                    </View>
                                </View>
                                <View style={GlobalStyleSheet.flexaling}>
                                    <TouchableOpacity
                                        onPress={() => moresheet.current.openSheet()}
                                    >
                                        <Image
                                            style={[GlobalStyleSheet.image2, { marginRight: 10, tintColor: colors.title }]}
                                            source={IMAGES.more}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[GlobalStyleSheet.background, { backgroundColor: theme.dark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)' }]}>
                                            <Image
                                                style={[GlobalStyleSheet.image2, { tintColor: colors.title }]}
                                                source={IMAGES.play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
          </View>
          <SongoptionSheet
              ref={moresheet}
          />
          <MusicoptionSheet
              ref={musicsheet}
          />
   </SafeAreaView>
  )
}

export default AllSong