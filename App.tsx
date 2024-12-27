import { useState } from 'react';
import Footer from './assets/src/component/Footer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './assets/src/context/Themecontext';
import { myColors } from './assets/src/styles/Color';
import Button from './assets/src/component/styles/Button';
import Mykeyboard from './assets/src/component/Mykeyboard';
import Header from './assets/src/component/Header';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: '#000' }]
        }
      >
        <StatusBar style="auto" />
        {/* Header and Switch in a Row */}
        <View style={styles.headerRow}>
          <Switch
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <Header />
        </View>
        <Mykeyboard />
        <Footer />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 25,
  },
});
