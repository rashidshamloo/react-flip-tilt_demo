// react
import { useRef, useLayoutEffect, useState, useCallback } from 'react';

// react-responsive
import { useMediaQuery } from 'react-responsive';

// react-flip-tilt
import { FlipTilt, FlipTiltRef } from 'react-flip-tilt';

// components
import FishParallaxFront from '../components/FishParallaxFront';
import FishParallaxBack from '../components/FishParallaxBack';
import Footer from '../components/Footer';

// utility
import { animate } from '../utility/utility';

// types
type direction = 'horizontal' | 'vertical' | 'alternating';
type lineGlare = 'on-blur' | 'on-no-blur' | 'off';

// data
const imageCount = 8;

function App() {
  // mediaqueries
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' });
  const isMedium = useMediaQuery({
    query: '(min-width: 640px) and (max-width: 1024px)',
  });

  // variables
  let imageIndex = 0;

  // states
  const [direction, setDirection] = useState<direction>('horizontal');
  const [itemCount, setItemCount] = useState(8);
  const [col, setCol] = useState(isSmall ? 3 : 4);
  const [borderRadius, setBorderRadius] = useState('16px');
  const [lineGlare, setLineGlare] = useState<lineGlare>('on-blur');
  const [itemMaxWidth, setItemMaxWidth] = useState('auto');
  const [disabled, setDisabled] = useState(false);
  const [borderWidth, setBorderWidth] = useState('5px');

  // refs
  const refs = useRef<Array<FlipTiltRef>>(Array(itemCount));
  const logRef = useRef<HTMLParagraphElement>(null);
  const disableCheckbox = useRef<HTMLInputElement>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationIsRunning = useRef(false);

  // reset values
  if (animationIsRunning.current) animationIsRunning.current = false;

  // functions

  // shows the log and clears it after 1 second
  const showLog = useCallback((text: string): void => {
    if (logRef.current) {
      logRef.current.classList.remove('opacity-0');
      logRef.current.textContent = text;
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(
        () => logRef.current?.classList.add('opacity-0'),
        1000
      );
    }
  }, []);

  // gets number of columns based on number of items
  const getCol = useCallback((): number => {
    switch (itemCount) {
      case 3:
        return 3;
      case 8:
        return 4;
      case 18:
        return 6;
      case 32:
        return 8;
    }
    return 1;
  }, [itemCount]);

  // gets item max width
  const getItemMaxWidth = useCallback((): string => {
    if (isSmall || isMedium) return 'auto';
    if (itemCount === 32) return '142px';
    if (itemCount === 18) return '190px';
    return '250px';
  }, [isSmall, isMedium, itemCount]);

  // gets number of columns based on screen size and number of items
  const getRelativeCol = useCallback((): number => {
    let newCol = getCol();
    if (isSmall && newCol > 3) newCol = 3;
    else if (isMedium && newCol > 4) newCol = 4;
    return newCol;
  }, [isSmall, isMedium, getCol]);

  // sets number of columns and max item width
  useLayoutEffect(() => {
    // column limit for small screens
    setCol(getRelativeCol());
    // item width
    setItemMaxWidth(getItemMaxWidth);
  }, [getItemMaxWidth, getRelativeCol]);

  return (
    <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-start bg-slate-300 bg-[url('/images/ft-bg.webp')] bg-contain bg-fixed bg-left bg-no-repeat py-2 font-inter text-sm xs:text-base">
      <header className="w-[95%] md:w-auto [&_label]:mr-2 [&_label]:text-slate-600 [&_label]:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.8)] md:[&_label]:mr-1 lg:[&_label]:mr-2 [&_select]:flex-grow [&_select]:rounded-full [&_select]:border-[1px] [&_select]:border-slate-100/50 [&_select]:bg-slate-100/80 [&_select]:px-1 [&_select]:text-slate-600 [&_select]:outline-0 focus-within:[&_select]:outline-1">
        <div className="z-1 relative mx-auto flex flex-col gap-x-3 gap-y-4 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-4 md:flex-row md:text-sm lg:gap-x-8 lg:px-8 lg:text-[0.925rem] [&>div]:flex">
          <h1 className="sr-only">Flip-Tilt Demo (Parallax)</h1>
          <div className="">
            <label htmlFor="direction">Direction :</label>
            <select
              id="direction"
              onChange={(e) => setDirection(e.target.value as direction)}
              defaultValue={direction}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
              <option value="alternating">Alternating</option>
            </select>
          </div>
          <div>
            <label htmlFor="item-count">Item Count :</label>
            <select
              id="item-count"
              onChange={(e) => {
                setItemCount(Number(e.target.value));
              }}
              defaultValue={itemCount}
            >
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="8">8</option>
              <option value="18">18</option>
              <option value="32">32</option>
            </select>
          </div>
          <div>
            <label htmlFor="border-radius">Border Radius :</label>
            <select
              id="border-radius"
              onChange={(e) => setBorderRadius(e.target.value)}
              defaultValue={borderRadius}
            >
              <option value="0">0px</option>
              <option value="8px">8px</option>
              <option value="16px">16px</option>
              <option value="48px">48px</option>
              <option value="50%">50%</option>
            </select>
          </div>
          <div>
            <label htmlFor="line-glare">Line Glare :</label>
            <select
              id="line-glare"
              onChange={(e) => setLineGlare(e.target.value as lineGlare)}
              defaultValue={String(lineGlare)}
            >
              <option value="on-blur">On - blur</option>
              <option value="on-no-blur">On - no blur</option>
              <option value="off">Off</option>
            </select>
          </div>
        </div>
        <div className="mx-auto -mt-[1px] flex w-[90%] flex-col-reverse items-start justify-between gap-y-[0.65rem] rounded-b-lg border-[1px] border-slate-100/50 bg-[rgb(214,222,232)] px-4 pb-3 pt-[13px] text-xs text-slate-700 xs:text-base md:flex-row md:pb-1 md:pt-[5px] md:text-sm lg:items-center lg:pb-[6px] lg:pt-[7px]">
          <div className="flex w-full gap-x-2 opacity-80 md:w-auto">
            Event :
            <span
              ref={logRef}
              className="transition-opacity duration-500"
            ></span>
          </div>
          <div className="flex w-full flex-col items-stretch justify-between gap-x-4 gap-y-[0.65rem] md:w-auto md:flex-row md:items-center md:justify-center md:gap-y-0 lg:gap-x-8">
            <div className="flex items-center justify-center">
              <label htmlFor="border-width">Border Width :</label>
              <select
                id="border-width"
                onChange={(e) => setBorderWidth(e.target.value)}
                defaultValue={borderWidth}
              >
                <option value="0">0</option>
                <option value="2px">2px</option>
                <option value="5px">5px</option>
                <option value="10px">10px</option>
                <option value="15px">15px</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex items-center justify-center">
                <label htmlFor="disabled">Disable All :</label>
                <input
                  ref={disableCheckbox}
                  id="disabled"
                  type="checkbox"
                  defaultChecked={disabled}
                  onChange={() => setDisabled((prev) => !prev)}
                />
              </div>
              <button
                className="relative overflow-hidden rounded-full border-emerald-200/50 bg-emerald-400 px-5 py-1 text-xs font-bold text-slate-100 transition-all duration-500 before:absolute before:bottom-0 before:right-0 before:top-0 before:w-0 before:rounded-full before:bg-emerald-500 before:shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.2)] before:transition-[width] before:duration-500 hover:bg-emerald-500/70 hover:shadow-[0_0_2px_2px_#022c2211] before:hover:left-0 before:hover:right-[unset] before:hover:w-full xs:text-sm md:px-3 md:text-xs"
                onClick={() => {
                  document
                    .querySelectorAll<HTMLSelectElement>('select')
                    .forEach((ele) => {
                      ele.disabled = true;
                    });
                  let restoreDisableState = false;
                  if (disableCheckbox.current) {
                    if (disableCheckbox.current.checked) {
                      restoreDisableState = true;
                      disableCheckbox.current.checked = false;
                      setDisabled((prev) => !prev);
                    }
                    disableCheckbox.current.disabled = true;
                  }
                  animate(refs, animationIsRunning, col, itemCount, () => {
                    if (disableCheckbox.current) {
                      disableCheckbox.current.disabled = false;
                      if (restoreDisableState) {
                        disableCheckbox.current.checked = true;
                        setDisabled((prev) => !prev);
                      }
                    }
                    document
                      .querySelectorAll<HTMLSelectElement>('select')
                      .forEach((ele) => {
                        ele.disabled = false;
                      });
                  });
                }}
              >
                <span className="relative z-[1]">Animate</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main
        className="mb-2 mt-2 inline-grid max-w-[95%] flex-grow place-content-center gap-[12px] md:max-w-[90%]"
        style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` }}
      >
        {[...Array(itemCount)].map((_, i) => {
          imageIndex++;
          if (imageIndex > imageCount) imageIndex = 1;
          let dir: direction;
          if (direction !== 'alternating') dir = direction;
          else {
            dir = i % 2 ? 'vertical' : 'horizontal';
            const currentRow = Math.floor(i / col);
            if (currentRow % 2)
              dir = dir === 'vertical' ? 'horizontal' : 'vertical';
          }
          return (
            <div key={i} className="flex items-center justify-center">
              <FlipTilt
                type="parallax"
                overflowHiddenEnable={true}
                ref={(r) => {
                  if (r && refs.current) refs.current[i] = r;
                }}
                direction={dir}
                front={<FishParallaxFront index={imageIndex} />}
                back={<FishParallaxBack index={imageIndex} />}
                borderRadius={borderRadius}
                borderWidth={borderWidth}
                lineGlareEnable={lineGlare !== 'off'}
                lineGlareBlurEnable={lineGlare === 'on-blur'}
                lineGlareMixBlendMode="overlay"
                lineGlareMaxOpacity={0.15}
                tabIndex={0}
                className="aspect-[35/46] w-[350px] outline-none [&>div]:focus-visible:outline [&>div]:focus-visible:outline-2 [&>div]:focus-visible:outline-black"
                aria-label={'Flip-Tilt Component ' + (i + 1)}
                role="figure"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                style={{
                  maxWidth: itemMaxWidth,
                }}
                onFlip={() => {
                  showLog(
                    `${!isSmall && !isMedium ? 'onFlip() - i' : 'I'}mage #${
                      i + 1
                    } flipped!`
                  );
                }}
                onFlipBack={() => {
                  showLog(
                    `${!isSmall && !isMedium ? 'onFlipBack() - i' : 'I'}mage #${
                      i + 1
                    } flipped back!`
                  );
                }}
                disabled={disabled}
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
