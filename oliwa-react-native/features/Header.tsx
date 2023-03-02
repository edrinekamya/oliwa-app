import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useSharedValue,
} from 'react-native-reanimated';

export default function Parallax() {
  const scrollOffsetY = useSharedValue(0);
  const scrollY = useAnimatedScrollHandler((event) => {
    scrollOffsetY.value = event.contentOffset.y;
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffsetY.value,
            [-200, 0, 200],
            [100, 0, -100],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        onScroll={scrollY}
        scrollEventThrottle={16}>
        <Animated.View style={[styles.header, style]}>
          <ImageBackground
            source={{ uri: 'https://via.placeholder.com/400x400' }}
            style={styles.backgroundImage}
            resizeMode='cover'>
            <View style={styles.overlay} />
            <Text style={styles.title}>Parallax Header</Text>
          </ImageBackground>
        </Animated.View>

        <View style={styles.content}>
          <Text style={styles.heading}>Lorem Ipsum</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            orci sit amet odio pharetra pretium sed ac augue. Duis gravida
            tincidunt augue, vel blandit elit lobortis nec. Sed nec fermentum
            mauris, ac rhoncus nisi. Nullam vehicula bibendum est, eget rhoncus
            dolor vehicula sed.
          </Text>
          <Text style={styles.paragraph}>
            Sed nec fermentum mauris, ac rhoncus nisi. Nullam vehicula bibendum
            est, eget rhoncus dolor vehicula sed. Praesent bibendum, augue nec
            faucibus iaculis, odio nibh tincidunt tellus, non volutpat velit
            quam non velit. Aenean hendrerit ultricies eros sit amet tempus.
          </Text>
          <Text style={styles.paragraph}>
            Sed nec fermentum mauris, ac rhoncus nisi. Nullam vehicula bibendum
            est, eget rhoncus dolor vehicula sed. Praesent bibendum, augue nec
            faucibus iaculis, odio nibh tincidunt tellus, non volutpat velit
            quam non velit. Aenean hendrerit ultricies eros sit amet tempus.
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 200,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
  },
  paragraph: {
    fontSize: 25,
  },
});
