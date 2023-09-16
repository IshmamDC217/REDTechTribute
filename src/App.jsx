import React from 'react';
import Spline from '@splinetool/react-spline';

export default function PhoneCoverPage() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-red-500 to-black">
      <div className="absolute left-0 top-0 h-full w-2/5 p-10">
        <h1 className="text-white font-bold text-5xl mb-6 max-w-xs">Tribute to Product <strong>(RED)</strong>:</h1>
        <p className="text-white text-xl mb-4 max-w-xs">
          I have immense appreciation for Apple's Product Red. It's not just a color, it's a statement. A cause that has impacted many lives. I felt it deserved a tribute. For an in-depth understanding, do check out the 3D iPhone display to the right.
        </p>
      </div>
      <div className="absolute right-0 top-0 h-full w-5/6 p-14">
        <div className="h-full bg-gradient-to-t from-red-500 to-black rounded-3xl shadow-xl border-2 border-gray-400 overflow-hidden">
          <Spline scene="https://prod.spline.design/qYdlWFWwqilLdKGi/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
