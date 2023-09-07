// types
interface FishParallaxProps {
  index: number;
}

const FishParallaxFront = ({ index }: FishParallaxProps) => {
  return (
    <div className="relative h-full w-full [&>img]:absolute [&>img]:-inset-[7%] [&>img]:h-[114%] [&>img]:w-[114%] [&>img]:max-w-none pointer-events-none">
      <img
        src={`images/fish/${String(index).padStart(2, '0')}.webp`}
        alt=""
        className=" brightness-[115%] contrast-[90%] grayscale-[30%]  saturate-[75%]"
      />
    </div>
  );
};

export default FishParallaxFront;
