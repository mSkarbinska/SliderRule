import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import SliderRule from './SliderRule';

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, PinchGestureHandler, State } from 'react-native-gesture-handler';

export default function App() {
  const [baseScale, setBaseScale] = useState(1);
  const pinchRef = React.createRef();

  const onPinchEvent = event => {
    if (event.nativeEvent.scale !== undefined) {
      setBaseScale(event.nativeEvent.scale);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PinchGestureHandler
      ref={pinchRef}
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {

        }
      }}
    >
      <View style={styles.container}>
        <View style={{ transform: [{ scale: baseScale }] }}>
          <Text style={styles.text}>Pinch to Zoom</Text>
          <SliderRule />
        </View>
      </View>
    </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});