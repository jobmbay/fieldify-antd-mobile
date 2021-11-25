import React, { useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View, StyleSheet, Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Button, Flex, WhiteSpace, WingBlank, Accordion, Tabs } from '@ant-design/react-native';
// import { multiply } from '@fieldify/antd-mobile';
const tabs = [
  { title: 'Visual Editor' },
  { title: 'JSON Schema' }
];
export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  const [isBuilderShown, setIsBuilderShown] = useState(true);
  const [isFormShown, setIsFormShown] = useState(true);
  const [isRenderShown, setIsRenderShown] = useState(true);

  React.useEffect(() => {
    // multiply(3, 7).then(setResult);
  }, []);

  const [activeSections, setActiveSections] = useState([2, 0]);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View style={styles.container}>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4, flex: 1 }}>
              <Image
                style={[styles.tinyLogo, {flex: 1}]}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAACn0lEQVRoge2bv2sTYRjHv3epIq0WWwg4KFSxCA6NwSFToQ6Zg5NLKKj/geBgXZzs4CAuDtop5h9wlI4uxqVNKWL9GaHgEDUxTnrxXnnKE0nrXRvMk9zlnvczBe7y3vu5e+953vc9HgchFHP1kwAWAeQBXABwPOzcGNIEsA5gFUCpXElvB3XxH/lirk6SywCuAzg0QsJheABWACyVK+lm9zm75Iu5+hyApwBm4tBrYWoACuVKeqPT7F95Fn8OYDIBomG0AMx3bsCOPA/1tYQ+8b3QCMjSK+DygWUl4mDPu/TD4aj+ISHBrVcoCJ5xOZ1pEifId9HlPK6RPMlnlMpnSH4qBh2Jgik3fn0aHlZeK6rlx6QbvLjgYnI6dKXcN23P4MUzH96v/tsSl796awzO4Nx3+PjKw/Z703c74sN+0OKS2ICnFSuvFSuvFfE83wuNusGXz//3X983+NGQ6Uck8k/u/cbWuh/FpXcRybD3+5+ciWADnlasvFZsnpfEmIOXtafOOhifCL7vlAhqrw1a3wafEuhzlehVZuccjB8Nt5/NOLh0ObVvG2+qPh7cbEt2KxDxJ/92w/DzC2b6xP7ixMSx4eyI2ICnFSuvFSuvFfFUV7iWwunz4feUNiO+fzU4fCQ4ndEkafPlcNb64vL5K6kDZngO7t/w8G4z+kV9JF9snFQ8PuvYgKcVK68VKy9Ju4dluPczHnvX4nn+0Z02Zs6Fp7JWw+DTVjzkxXdyRgn177zQZ7+Ro0HyVaXyVZfLrzSySvIlrjzQBPmWXC64W1Em/5i8O9F+iauONECet9FJdVxpWOC6syTT4sLCJrrzPBfazSd4BNS6Cwqxd5LDB7IAHiYoCHrsk+0WJ3qtoqYipFGqxaGJG81fwquoAfwBWHur1tz2iAAAAAAASUVORK5CYII=',
                }}
              />
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4, flex: 6, paddingTop: 6, alignItems: 'left' }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', flex: 5}}>@Fieldify/antd-mobile</Text>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4, flex: 6, paddingTop: 6, alignItems: 'left' }}>
              <Text><Text style={{color: '#5c38eb'}} onPress={() => Linking.openURL('https://github.com/mykiimike/fieldify')}>Fieldify Engine</Text> v1.2.3 / <Text style={{color: '#5c38eb'}} onPress={() => Linking.openURL('https://github.com/Fieldify/antd')}>Antd mobile</Text> v1.0.0</Text>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button style={{backgroundColor: isBuilderShown ? '#5c38eb' : '#ffffff'}} onPress={() => {
                setIsBuilderShown(!isBuilderShown);
              }} size="small"><Text style={{color: isBuilderShown ? 'white' : 'black'}}>Show Builder</Text></Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button style={{backgroundColor: isFormShown ? '#5c38eb' : '#ffffff'}} onPress={() => {
                setIsFormShown(!isFormShown);
              }} size="small"><Text style={{color: isFormShown ? 'white' : 'black'}}>Show Form</Text></Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button style={{backgroundColor: isRenderShown ? '#5c38eb' : '#ffffff'}} onPress={() => {
                setIsRenderShown(!isRenderShown);
              }} size="small"><Text style={{color: isRenderShown ? 'white' : 'black'}}>Show Render</Text></Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Accordion
          onChange={(activeSections) => {
            setActiveSections(activeSections)
          }}
          activeSections={activeSections}
        >
          {
            isBuilderShown && 
            <Accordion.Panel header="Pass #1 - Building">
              <View style={{ flex: 1, backgroundColor: 'red', height: '50%' }}>
                <Tabs style={{ flex: 1 }} tabs={tabs} initialPage={0} onChange={(tab, index) => {
                  setCurrentTab(index);
                  console.log(tab, index)
                }}>
                  <View>
                    <Text>Content of First Tab.</Text>
                  </View>
                  <View>
                    <Text>Content of Second Tab.</Text>
                  </View>
                </Tabs>
              </View>
            </Accordion.Panel>
          }
          {
            isFormShown &&
            <Accordion.Panel header="Pass #2 - Filling Form">
              this is panel content2 or other
            </Accordion.Panel>
          }
          {
            isRenderShown && 
            <Accordion.Panel header="Pass #3 - Final result">
              Text text text text text text text text text text text text text
              text text
            </Accordion.Panel> 
          }
        </Accordion>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
