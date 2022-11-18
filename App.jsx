import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { openDatabase } from './src/services/helpers';

import { DbContext } from './src/contexts/db-context';
import { clearDB, initializeDbSchema, insertTestData } from './src/helpers/db';
import { Menu } from './src/screens/menu/menu';
import { ROUTES } from './src/screens/routes';
import { Tariffs } from './src/screens/tariffs/tariffs-list/tariffs-list';
import { TariffDetails } from './src/screens/tariffs/tariff-details/tariff-details';

const db = openDatabase();

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbChanged, setDbChanged] = useState({});

  useEffect(() => {
    const fn = async () => {
      await clearDB(db);
      await initializeDbSchema(db);
      await insertTestData(db);
    };

    fn();
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
            name={ROUTES.MENU}
            component={Menu}
            options={{ title: 'Menu' }}
          />
          <Stack.Screen
            title="Cenniki"
            name={ROUTES.TARIFFS}
            component={Tariffs}
            options={{ title: 'Cenniki' }}
          />
          <Stack.Screen
            title="Cennik"
            name={ROUTES.TARIFF_DETAILS}
            component={TariffDetails}
            options={{ title: 'Szczegóły cennika' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DbContext.Provider>
  );
}
