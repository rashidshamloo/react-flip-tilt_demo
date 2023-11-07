// types
interface FishParallaxProps {
  index: number;
}

const FishParallaxBack = ({ index }: FishParallaxProps) => {
  return (
    <div className="pointer-events-none relative h-full w-full [&>img]:absolute [&>img]:-inset-[7%] [&>img]:h-[114%] [&>img]:w-[114%] [&>img]:max-w-none">
      <img
        data-parallax-offset="-5"
        src="./images/fish_parallax/01.webp"
        alt=""
      />
      <img
        data-parallax-offset="-3.5"
        data-parallax-rotation="0;5"
        src="./images/fish_parallax/02.webp"
        alt=""
      />
      <img
        data-parallax-offset="-2"
        data-parallax-rotation="5;0"
        src="./images/fish_parallax/03.webp"
        alt=""
      />
      <img
        data-parallax-offset="0"
        src="./images/fish_parallax/04.webp"
        alt=""
      />
      <img
        data-parallax-offset="2"
        src="./images/fish_parallax/05.webp"
        alt=""
      />
      <img
        data-parallax-offset="3.5"
        src="./images/fish_parallax/06.webp"
        alt=""
      />
      <img
        data-parallax-offset="2"
        src={`./images/fish_parallax/fish${String(index).padStart(
          2,
          '0'
        )}.webp`}
        alt=""
        className="animate-float"
      />
      {index === 5 && (
        <img
          data-parallax-offset="1"
          src={`./images/fish_parallax/fish05_2.webp`}
          alt=""
          className="animate-float2"
        />
      )}
      <img
        data-parallax-offset="5"
        src="./images/fish_parallax/07.webp"
        alt=""
        className="animate-float3"
      />
    </div>
  );
};

export default FishParallaxBack;
