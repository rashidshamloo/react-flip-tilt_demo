// components
import ParallaxTilt from '../components/ParallaxTilt.tsx';

const FlipDirectionDemo = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-x-16 gap-y-8 bg-slate-300 bg-[url('/images/ft-bg.webp')] bg-contain bg-fixed bg-left bg-no-repeat py-4 font-inter xl:flex-row">
      <h1 className="sr-only">Flip-Tilt Flip Direction Demo</h1>
      <div>
        <div className="rounded-xl border-[1px] border-slate-100/50 bg-slate-200 px-8 py-2 text-center text-xl text-slate-600/90">
          direction = <span className="text-sky-700">"horizontal"</span>
        </div>
        <div>
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div>
              <ParallaxTilt width={230} rounded={true} />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-red-700/90">false</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-red-700/90">false</span>
                </p>
              </div>
            </div>
            <div>
              <ParallaxTilt width={230} flipReverse={true} rounded={true} />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-green-800/90">true</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-red-700/90">false</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div>
              <ParallaxTilt width={230} rounded={true} flipBackReverse={true} />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-red-700/90">false</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-green-800/90">true</span>
                </p>
              </div>
            </div>
            <div>
              <ParallaxTilt
                width={230}
                flipReverse={true}
                rounded={true}
                flipBackReverse={true}
              />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-green-800/90">true</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-green-800/90">true</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-4/5 max-w-3xl border-y-[1px] border-b-white/30 border-t-slate-400/80 xl:hidden" />
      <div>
        <div className="rounded-xl border-[1px] border-slate-100/50 bg-slate-200 px-8 py-2 text-center text-xl text-slate-600/90">
          direction = <span className="text-sky-700">"vertical"</span>
        </div>
        <div>
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div>
              <ParallaxTilt width={230} direction="vertical" />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-red-700/90">false</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-red-700/90">false</span>
                </p>
              </div>
            </div>
            <div>
              <ParallaxTilt
                width={230}
                flipReverse={true}
                direction="vertical"
              />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-green-800/90">true</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-red-700/90">false</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div>
              <ParallaxTilt
                width={230}
                direction="vertical"
                flipBackReverse={true}
              />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-red-700/90">false</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-green-800/90">true</span>
                </p>
              </div>
            </div>
            <div>
              <ParallaxTilt
                width={230}
                flipReverse={true}
                direction="vertical"
                flipBackReverse={true}
              />
              <div className="mt-2 rounded-xl border-[1px] border-slate-100/50 bg-slate-200 p-1 text-center text-slate-600/90">
                <p>
                  flipReverse = <span className="text-green-800/90">true</span>
                </p>
                <p>
                  flipBackReverse ={' '}
                  <span className="text-green-800/90">true</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FlipDirectionDemo;
