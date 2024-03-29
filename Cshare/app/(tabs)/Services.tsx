import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// a Créez un composant CommonScreen pour la page commune :

const CommonScreen = () => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Titre de la page commune
      </Text>
      {/* Ajoutez ici le contenu de la page commune */}
    </View>
  );
};

const ServicesScreen = () => {
  const [services] = useState([
    {
      title: 'Covoiturage',
      subtitle: 'trouvez des personnes diponibles !',
      href: '',
      icon: 'car',
    },
    {
      title: 'Échanges de compétences',
      subtitle: 'aides aux matière, échanges de compétences',
      href: '',
      icon: 'swap-horiz',
    },
    {
      title: 'Lecture',
      subtitle: 'à la recherche d\'un livre ?',
      href: '',
      icon: 'book',
    },
    {
      title: 'Loisirs',
      href: '',
      subtitle: 'partagez et amusez vous (jeux, sport ...)',
      href: '',
      icon: 'gamepad',
    },
    {
      title: 'Cinéma',
      subtitle: 'Regardez vos films & series à plusieurs !',
      href: '',
      icon: 'movie',
    },
    {
      
      title: 'Événements Sportifs ',
      subtitle: 'assister à des événements sportifs en groupe,',
      href: '',
      icon: 'sports-soccer',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Profitez des services mis à votre disposition :
      </Text>
      {services.map((service, loadingPage) => (
        <TouchableOpacity
          key={loadingPage}
          onPress={() => navigation.navigate('depotService', { /* Données supplémentaires à transmettre à la page si nécessaire */ })}
          activeOpacity={0.8} // Réglez l'opacité du TouchableOpacity
        >
          <ListItem
            bottomDivider
            style={styles.listItem}
          >
            <Icon name={service.icon} type="material-community" />
            <ListItem.Content>
              <ListItem.Title>{service.title}</ListItem.Title>
              <ListItem.Subtitle>{service.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{ title: 'Choix Services' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 10,
  },
});

export default App;