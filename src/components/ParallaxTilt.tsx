// components
import { FlipTilt, FlipTiltProps } from 'react-flip-tilt';

// config
import { base } from '../config/config.ts';

// types
interface ParallaxTiltProps extends FlipTiltProps {
  rounded?: boolean;
}

const ParallaxTilt = ({ rounded = false, ...props }: ParallaxTiltProps) => {
  return (
    <FlipTilt
      borderWidth="20px"
      front={base + '/images/01-front.webp'}
      borderRadius={rounded ? '50%' : '16px'}
      tabIndex={0}
      className="outline-none [&>div]:focus-visible:outline [&>div]:focus-visible:outline-2 [&>div]:focus-visible:outline-black"
      role="figure"
      aria-label={`FlipTilt component with direction=${
        props.direction ?? 'horizontal'
      },flipReverse=${props.flipReverse ?? 'false'}, and flipBackReverse=${
        props.flipBackReverse ?? 'false'
      }`}
      back={
        <div
          className="pointer-events-none grid h-full select-none transform-style-3d backface-hidden"
          aria-hidden="true"
        >
          <img
            src={base + '/images/parallax/bg.webp'}
            className={
              'col-start-1 col-end-1 row-start-1 row-end-1 inline-block h-full w-full backface-hidden' +
              (rounded ? ' rounded-[50%]' : '')
            }
            alt="background"
          />
          <img
            src={base + '/images/parallax/flower.webp'}
            className="col-start-1 col-end-1 row-start-1 row-end-1 translate-z-16 scale-110 backface-hidden"
            alt="flower"
          />
          <img
            src={base + '/images/parallax/text.webp'}
            className="col-start-1 col-end-1 row-start-1 row-end-1 translate-z-36 scale-110 backface-hidden"
            alt="Saffron"
          />
        </div>
      }
      {...props}
    />
  );
};

export default ParallaxTilt;
