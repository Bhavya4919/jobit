import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const loadFonts = async () => {
    await Font.loadAsync({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });
};

const Layout = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadAppResources = async () => {
            try {
                await loadFonts();
                setFontsLoaded(true);
            } catch (error) {
                console.error('Error loading fonts:', error);
            }
        };

        loadAppResources();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
