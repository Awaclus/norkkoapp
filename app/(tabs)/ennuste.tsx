import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, ScrollView, Dimensions } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabTwoScreen() {

  const vw = Dimensions.get('window').width;
  const vh = Dimensions.get('window').height;

  return (   <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Selite</Text>
      <Image source={{
        uri: 'https://norkko.fi/wp-content/uploads/2023/06/selite_fi-1.png'
      }} style={{width: vw, height: vw*0.84}}></Image>
      <Text style={styles.disclaimer}>NorkkoApp by Awaclus</Text>
        <Text style={styles.disclaimer}>NorkkoApp perustuu Turun yliopiston siitepölytiedotuksen julkaisemaan kaikkien saatavilla olevaan dataan. Turun yliopiston siitepölytiedostus ei vastaa siitä, että NorkkoApp toimii oikein, enkä minä vastaa siitä, että Turun yliopiston siitepölytiedotus julkaisee jatkossakin datan sellaisessa muodossa, että tämä sovellus osaa sen parsia.</Text>
        <Text style={styles.disclaimer}>Jos tiedot eivät näy sovelluksessa oikein, käytä Turun yliopiston siitepölytiedotuksen virallista norkko.fi -sivustoa selaimessasi.</Text>
        <Text style={styles.disclaimer}>Sovelluksen lähdekoodi löytyy osoitteesta https://github.com/Awaclus/norkkoapp</Text>
      
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  marginTop: 50,
  backgroundColor: '#cccccc',
  flex: 1
},
title: {
  fontSize: 20,
  textAlign: 'center'
},
disclaimer: {
  fontSize: 10,
  textAlign: 'center',
  fontStyle: 'italic',
  marginLeft: 9,
  marginRight: 9
}
});