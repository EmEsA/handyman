import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { openDatabase } from './src/services/helpers';

import { DbContext } from './src/contexts/db-context';
import { clearDB, initializeDbSchema, insertTestData } from './src/helpers/db';
import { Menu } from './src/screens/menu/menu';
import { ROUTES } from './src/screens/routes';
import { Tariffs } from './src/screens/tariffs/tariffs';
import { TariffDetails } from './src/screens/tariff-details/tariff-details';
import { CategoryDetails } from './src/screens/category-details/category-details';
import { NewService } from './src/screens/new-service/new-service';
import { EditService } from './src/screens/edit-service/edit-service';
import { HomeButon } from './src/components/common/home-button/home-button';

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
          initialRouteName={ROUTES.MENU}
          screenOptions={{
            contentStyle: { padding: 10 },
            headerRight: HomeButon,
          }}
        >
          <Stack.Screen
            name={ROUTES.MENU}
            component={Menu}
            options={{ title: 'Menu', headerRight: null }}
          />
          <Stack.Screen
            name={ROUTES.TARIFFS}
            component={Tariffs}
            options={{ title: 'Cenniki' }}
          />
          <Stack.Screen
            name={ROUTES.TARIFF_DETAILS}
            component={TariffDetails}
            options={{ title: 'Szczegóły cennika' }}
          />
          <Stack.Screen
            name={ROUTES.CATEGORY_DETAILS}
            component={CategoryDetails}
            options={{ title: 'Szczegóły kategorii' }}
          />
          <Stack.Screen
            name={ROUTES.NEW_SERVICE}
            component={NewService}
            options={{ title: 'Dodaj usługę' }}
          />
          <Stack.Screen
            name={ROUTES.SERVICE_DETAILS}
            component={EditService}
            options={{ title: 'Edytuj usługę' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DbContext.Provider>
  );
}
