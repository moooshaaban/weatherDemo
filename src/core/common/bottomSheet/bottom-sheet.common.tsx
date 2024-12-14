import { View, Modal, TouchableOpacity, ViewProps, Keyboard } from 'react-native';
import React, {
  FC,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import BottomSheet, {
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@core/slices/theme.slice';
import { style } from './styles';
import { height, isIos } from '@core/utils';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReduceMotion } from 'react-native-reanimated';
import { CustomBottomSheetProps } from './types';

const RNBottomSheet = (
  props: CustomBottomSheetProps,
  ref: Ref<BottomSheet>,
) => {
  const {
    children,
    snapPoints: externalSnapPoints,
    isOpenBottomSheet,
    onClose,
    ...rest
  } = props;

  // Create an internal reference for BottomSheet if none is provided
  const reference = useRef<BottomSheetMethods>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // Use the provided ref if available, otherwise use the internal reference
  const bottomSheetRef = useMemo(
    () => (ref != null ? ref : reference),
    [ref, reference],
  ) as React.RefObject<BottomSheetMethods>;

  // Get safe area insets for positioning adjustments
  const insets = useSafeAreaInsets();

  // Define snap points for the BottomSheet. Use external snap points if provided.
  const snapPoints = useMemo(
    () => (externalSnapPoints ? externalSnapPoints : ['30%', '50%', '95%']),
    [externalSnapPoints],
  );

  // State to manage the current snapping index
  const [indexSnapping, setIndexSnapping] = useState(1);

  // Spring-based animation configurations for the BottomSheet
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 60,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    mass: 2,
    stiffness: 300,
  });

  // Timing-based animation configurations for the BottomSheet
  const animationConfigs2 = useBottomSheetTimingConfigs({
    duration: isIos ? 600 : 320,
  });

  // Get theme colors and styles
  const colors = useColors();
  const styles = useMemo(() => style(colors), [colors]);

  // Manage the dynamic visibility of the modal
  const [openModalDynamically, setOpenModalDynamically] =
    useState(isOpenBottomSheet);

  // Effect to handle BottomSheet opening and closing
  useEffect(() => {
    if (isOpenBottomSheet) {
      setIndexSnapping(1);
      setOpenModalDynamically(isOpenBottomSheet);
      bottomSheetRef.current?.expand(); // Expand the BottomSheet if it is open
    } else {
      _onClose(); // Close the BottomSheet if it is not open
    }
  }, [isOpenBottomSheet]);

  // Callback function to handle BottomSheet closing
  const _onClose = useCallback(() => {
    if (isKeyboardVisible) {
      Keyboard.dismiss(); // Dismiss the keyboard if visible
      setTimeout(() => {
        bottomSheetRef.current?.snapToPosition(1); // Snap to the default position
      }, 100);
      setTimeout(() => {
        setOpenModalDynamically(false); // Hide the modal
      }, 700);
    } else {
      setTimeout(() => {
        bottomSheetRef.current?.snapToPosition(1); // Snap to the default position
      }, 100);
      setTimeout(() => {
        setOpenModalDynamically(false); // Hide the modal
      }, 700);
    }
  }, [isKeyboardVisible]);

  // Callback function to handle changes in the BottomSheet's index
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose(); // Trigger onClose callback when the BottomSheet is dismissed
      }
    },
    [onClose],
  );

  // Effect to manage keyboard visibility
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Update state when the keyboard is shown
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Update state when the keyboard is hidden
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Style for BottomSheet container, including optional overlay
  const containerStyle = useMemo(() => {
    return [styles.container, styles.overlay];
  }, [colors]);

  const animationConfigsMemo = useMemo(() => {
    return !isKeyboardVisible && !isIos ? animationConfigs : animationConfigs2;
  }, [isKeyboardVisible]);

  return (
    <Modal
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
      visible={openModalDynamically}>
      <GestureHandlerRootView style={styles.fullSize}>
        <View style={containerStyle}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.flexing}
            onPress={isKeyboardVisible ? Keyboard.dismiss : onClose}
          />

          <BottomSheet
            enableContentPanningGesture
            enableHandlePanningGesture
            onClose={() => {
              setOpenModalDynamically(false); // Close the modal
              setTimeout(() => {
                onClose(); // Call onClose callback
              }, 50);
            }}
            enablePanDownToClose
            topInset={insets.top + height(50)}
            animateOnMount
            // keyboardBehavior="interactive"
            // keyboardBlurBehavior="restore"
            ref={bottomSheetRef}
            index={indexSnapping}
            snapPoints={snapPoints}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            backgroundStyle={styles.backgroundStyle}
            handleStyle={styles.handleIStyle}
            animationConfigs={animationConfigsMemo}
            onChange={handleSheetChanges}
            {...rest}>
            {children}
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

// ForwardRef to pass ref to RNBottomSheet
export const AppBottomSheet = forwardRef(RNBottomSheet) as <T>(
  props: CustomBottomSheetProps & { ref?: Ref<BottomSheet> },
) => ReturnType<typeof RNBottomSheet>;

// Wrapper component to provide styling for BottomSheet content
const Wrapper: FC<ViewProps> = ({ children }) => {
  const colors = useColors();
  const styles = useMemo(() => style(colors), [colors]);
  return <View style={styles.flexing}>{children}</View>;
};
