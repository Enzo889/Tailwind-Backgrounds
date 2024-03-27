import { useState } from "react";
import { ArrowRight, Github, Twitter } from "lucide-react";
import ScrollButton from "./components/ScrollButton";
import { BACKGROUND_OPTIONS } from "./components/background";
import Playground from "./components/playground";
import { TextEncrypted } from "./components/TextEncrypted";
import { Toaster } from "sonner";
import Spline from "@splinetool/react-spline";

import "./App.css";

function App() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const resetBg = () => {
    setPreview(null);
    setTheme("light");
  };

  return (
    <>
      <Toaster />
      <Spline
        scene="https://prod.spline.design/BeGuwjvdHAf2S2Pt/scene.splinecode"
        className="absolute "
      />
      <ScrollButton />
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <header
            id="header"
            className="flex items-center justify-between py-8"
          >
            <div />
            <nav className="flex gap-6">
              <a
                href="https://twitter.com/enzonicolas24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Twitter
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://github.com/Enzo889/Tailwind-Backgrounds"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Github
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <a
                  href="https://bg.ibelick.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px] hover:border-emerald-400 border border-transparent ">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)] " />
                    <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                      website inspired 🧊
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        by{" "}
                        <ArrowRight
                          className="pl-0.5 text-black dark:text-white"
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
                Simplified Tailwind{" "}
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-800 to-neutral-900 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  <TextEncrypted text="Backgrounds" interval={80} />
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-950 dark:text-gray-200">
                Elevate Your Design Effortlessly with Seamless Copy-Paste
                Integration of Tailwind Backgrounds.
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 dark:bg-neutral-50 dark:text-neutral-900 px-6 font-medium text-neutral-200 transition hover:scale-110 ">
                    <span className="flex items-center">
                      Go to Github <ArrowRight className="pl-0.5" size={16} />
                    </span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20 dark:bg-emerald-400/80"></div>
                    </div>
                  </button>
                </a>

                <button
                  className="relative overflow-hidden rounded-md dark:bg-neutral-800 bg-neutral-300 text-black dark:text-white px-5 py-2.5  transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 hover:scale-110 "
                  onClick={resetBg}
                >
                  Reset background
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4 ">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
            <div className="inline-flex max-w-2xl rounded-md border border-fuchsia-200 bg-sky-200 p-2 text-sm text-neutral-900 dark:border-neutral-900 dark:bg-black  dark:text-neutral-200 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]">
              {`These backgrounds are specifically designed for full-page background use. Please note that the preview may vary from the actual outcome. Click on the preview to evaluate it. Remember to customize it according to your requirements.`}
            </div>
          </div>
          <footer>
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Made by
                <a
                  href="https://twitter.com/enzonicolas24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  @enzonicolas24{" "}
                </a>
              </span>
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                inspired by
                <a
                  href="https://bg.ibelick.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100 hover:border-b  border-black dark:border-white"
                >
                  bg.ibelick.com
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
