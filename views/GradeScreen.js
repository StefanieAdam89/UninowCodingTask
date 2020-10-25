
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GradeList from './GradeList';
import GradeStatistics from './GradeStatistics';

export default function GradeScreen({ navigation }) {
  const TabList = createBottomTabNavigator();
  return (
    <TabList.Navigator>
      <TabList.Screen name="Grades" component={GradeList} />
      <TabList.Screen name="Statistics" component={GradeStatistics} />
    </TabList.Navigator>
  );
}