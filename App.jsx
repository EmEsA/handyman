import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { openDatabase } from './src/services/db';

import { DbContext } from './src/contexts/db-context';
import { ServicesScreen } from './src/screens/services/services-screen';
import { NewServiceScreen } from './src/screens/new-service/new-service-screen';
import { EditServiceScreen } from './src/screens/edit-service/edit-service-screen';
import { MenuScreen } from './src/screens/menu/menu-screen';

const db = openDatabase();

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbChanged, setDbChanged] = useState({});

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists services (id INTEGER PRIMARY KEY NOT NULL, name TEXT, description TEXT, price REAL);'
      );
    });
  }, []);

  const contextValue = { db, dbChanged, markDbChanged: () => setDbChanged({}) };

  return (
    <DbContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="/"
          screenOptions={{
            headerStyle: { elevation: 0 },
            contentStyle: { padding: 10 },
          }}
        >
          <Stack.Screen
            title="Menu"
            name="/"
            component={MenuScreen}
            options={{ title: 'Menu' }}
          />
          <Stack.Screen
            name="/services"
            component={ServicesScreen}
            options={{ title: 'List usług' }}
          />
          <Stack.Screen
            name="/services/new"
            component={NewServiceScreen}
            options={{ title: 'Nowa usługa' }}
          />
          <Stack.Screen
            name="/services/edit"
            component={EditServiceScreen}
            options={{ title: 'Edytuj usługę' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DbContext.Provider>
  );
}
