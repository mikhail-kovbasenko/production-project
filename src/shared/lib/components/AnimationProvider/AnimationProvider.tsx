import {
  createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

export interface AnimationContextPayload {
  Gesture?: GestureType,
  Spring?: SpringType,
  isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = () => Promise.all(
  [
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ],
);

export const useAnimationLibs = () => useContext(AnimationContext);

function AnimationProvider(props: { children: ReactNode}) {
  const { children } = props;

  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;

      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationProvider;
