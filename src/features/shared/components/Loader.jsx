import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Loader = () => {
  return (
    <div className="h-screen w-full fixed z-50 inset-0 flex items-center justify-center bg-primary ">
      <DotLottieReact
        src="https://lottie.host/f0e0d019-eef0-4022-ae32-5b99427edcaa/Y4zHyklta5.lottie"
        autoplay
        loop
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};
