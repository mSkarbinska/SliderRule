import React, { useRef } from 'react';
import {Animated, View, StyleSheet, PanResponder, Image} from 'react-native';

const SliderRule = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const pan2 = useRef(new Animated.ValueXY()).current;
  
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x }]),
        onPanResponderRelease: () => {
          pan.extractOffset();
        },
      })
    ).current;
  
    const panResponder2 = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan2.x }]),
        onPanResponderRelease: () => {
          pan2.extractOffset();
        },
      })
    ).current;
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.ruleBase}
          source={require('./assets/slider_rule_base.png')}
        />
        <View>
          <Animated.View
            style={{
              transform: [{ translateX: pan2.x }, { translateY: pan2.y }],
            }}
            {...panResponder2.panHandlers}
          >
            <Image
              style={styles.ruleMiddle}
              source={require('./assets/slider_rule_middle.png')}
            />
          </Animated.View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ruleMiddle: {
      flex: 1,
      resizeMode: 'contain',
    },
    ruleBase: {
      position: 'absolute',
      bottom: 178,
    },
  });
  
  export default SliderRule;