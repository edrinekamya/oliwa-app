import { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import EventListSlide from '../../components/Auth/EventListSlide';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Heading from '../../components/Heading';
import IconButton from '../../components/IconButton';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { View } from '../../components/Themed';
import { signup } from '../../features/authSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

const { width } = Dimensions.get('window');
const slides = 2;

export default function SignupScreen() {
  const { isLoading, error, config } = useAppSelector(
    (state) => state.auth.signup
  );
  const dispatch = useAppDispatch();
  const [name, setName] = useState(config.name);
  const currentIndex = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const validations = [name.length > 2, config.events.length > 4];
  const validated = validations.filter(Boolean);

  const progress = useDerivedValue(
    () => interpolate(validated.length, [0, validations.length], [0, 100]),
    [validations]
  );

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const offsetX = event.contentOffset.x;
    const slideIndex = Math.round(offsetX / width);
    currentIndex.value = slideIndex;
  });

  const prevStyle = useAnimatedStyle(() => ({
    opacity: currentIndex.value,
  }));

  const nextStyle = useAnimatedStyle(() => ({
    opacity: slides - currentIndex.value - 1,
  }));

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
  }));

  const handlePrev = () => {
    Keyboard.dismiss();
    const newIndex = Math.max(currentIndex.value - 1, 0);
    scrollViewRef.current?.scrollTo({ x: newIndex * width });
  };

  const handleNext = () => {
    Keyboard.dismiss();
    const newIndex = Math.min(currentIndex.value + 1, slides);
    scrollViewRef.current?.scrollTo({ x: newIndex * width });
  };

  const submit = () => {
    Keyboard.dismiss();
    dispatch(
      signup({
        name,
        events: config.events,
      })
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading>Tells us about you</Heading>
        <View style={styles.progressTrack}>
          <Animated.View style={[progressStyle, styles.progress]} />
        </View>
        <View style={styles.container}>
          <Animated.ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            ref={scrollViewRef}
            horizontal
            pagingEnabled>
            <View style={styles.slide}>
              <ScrollView>
                <TextInput
                  placeholder='Preferred Name'
                  value={name}
                  onChangeText={setName}
                />
              </ScrollView>
              <ErrorMessage>{error}</ErrorMessage>
            </View>
            <View style={styles.slide}>
              <EventListSlide />
            </View>
          </Animated.ScrollView>
          <View style={styles.buttonContainer}>
            <Animated.View style={prevStyle}>
              <IconButton onPress={handlePrev} name='chevron-back' />
            </Animated.View>
            <Animated.View style={nextStyle}>
              <IconButton onPress={handleNext} name='chevron-forward' />
            </Animated.View>
          </View>
        </View>
        <Button
          disabled={validated.length !== validations.length}
          loading={isLoading}
          title='Continue'
          style={styles.button}
          onPress={submit}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  info: {
    fontFamily: 'sans-light',
    color: 'gray',
  },
  slide: {
    flex: 1,
    width,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  button: {
    margin: 16,
  },
  progress: {
    borderRadius: 25,
    backgroundColor: 'teal',
    flex: 1,
  },
  progressTrack: {
    backgroundColor: '#00808022',
    height: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
});
