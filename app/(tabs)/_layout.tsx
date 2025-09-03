import { Tabs } from 'expo-router'
import React from 'react'
import { House } from 'lucide-react-native';
import { ImageBackground, Text } from 'react-native';

const _layout = () => {
	return (
		<Tabs
    screenOptions={{
      tabBarShowLabel: false
    }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
          tabBarIcon: ({focused})=>(
            <ImageBackground className='bg-black flex flex-row'>
              <House />
              <Text className='font-bold'>Home</Text>
            </ImageBackground>
          )
          
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='saved'
				options={{
					title: 'Saved',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false
				}}
			/>
		</Tabs>
	)
}

export default _layout
