import { Image, StyleSheet, Platform, View, Dimensions, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextDecoder } from 'text-encoding';

export default function HomeScreen() {

  const vw = Dimensions.get('window').width;
  const vh = Dimensions.get('window').height;

  const [fileContent, setFileContent] = useState([""]);
  const url = 'https://siirto.siitepoly.fi/media/sptied.txt';

  

  useEffect(() => {
    fetchTextFile();
  }, []);


  const fetchTextFile = async () => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();

      const encodings = ['ISO-8859-1'];
      let decodedText = '';

      for (let encoding of encodings) {
        try {
          const decoder = new TextDecoder(encoding);
          decodedText = decoder.decode(arrayBuffer);
          break;
        } catch (e) {
          console.log(`Failed to decode with ${encoding}`);
        }
      }

      const lines = decodedText.split('\n');
      setFileContent(lines);
    } catch (error) {
      console.error('Virhe ladattaessa tiedostoa:', error);
    };
  }

  const returnLine = (number: number) => {
    if (fileContent.length >= number) {
      return (fileContent[number-1]);
    } else {
      return "---";
    }
  }

  const returnInfo = () => {
    var info = returnLine(28) + "\n\n";
    for (let i = 32; returnLine(i) != "---"; i++) {
      info += returnLine(i) + "\n";
    }
    return info;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.disclaimer}>Näkymää voi vierittää alaspäin</Text>
        <Text style={styles.title}>Tilanne</Text>
        <Text style={styles.title}>{returnLine(3)}</Text>
        <Image source={{
          uri: 'https://siirto.siitepoly.fi/media/tilanne.png'
        }} style={{width: vw, height: vw*1.77}}></Image>
        <Text style={styles.title}>Ennuste</Text>
        <Text style={styles.title}>{returnLine(14)}</Text>
        <Image source={{
          uri: 'https://siirto.siitepoly.fi/media/ennuste.png'
        }} style={{width: vw, height: vw*1.77}}></Image>
        <Text style={styles.info}>{returnInfo()}</Text>
        <Text style={styles.disclaimer}>NorkkoApp by Awaclus</Text>
        <Text style={styles.disclaimer}>NorkkoApp perustuu Turun yliopiston siitepölytiedotuksen julkaisemaan kaikkien saatavilla olevaan dataan. Turun yliopiston siitepölytiedostus ei vastaa siitä, että NorkkoApp toimii oikein, enkä minä vastaa siitä, että Turun yliopiston siitepölytiedotus julkaisee jatkossakin datan sellaisessa muodossa, että tämä sovellus osaa sen parsia.</Text>
        <Text style={styles.disclaimer}>Jos tiedot eivät näy sovelluksessa oikein, käytä Turun yliopiston siitepölytiedotuksen virallista norkko.fi -sivustoa selaimessasi.</Text>
        <Text style={styles.disclaimer}>Sovelluksen lähdekoodi löytyy osoitteesta</Text>
        <Text style={styles.disclaimer}>https://github.com/Awaclus/norkkoapp</Text>
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
  info: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  disclaimer: {
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    marginLeft: 9,
    marginRight: 9
  }
});