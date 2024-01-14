import Image from "next/image";
import navbar from "./components/navbar";
import Canvas from "./components/canvas";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center p-5 sm:p-10 md:p-20 bg-gray-900 text-gray-50">
      <Suspense
        key="canvas"
        fallback={
          <div className="w-full h-full items-center justify-center animate-pulse text-3xl">
            Loading...
          </div>
        }
      >
        <Canvas />
      </Suspense>
    </main>
  );
}
