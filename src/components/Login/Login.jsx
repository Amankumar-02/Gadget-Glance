import React from "react";

function Login() {
  return (
    <div className="my-6 lg:my-8 m-auto w-[94%] lg:w-[80%] min-h-[80vh] flex flex-col items-center justify-center gap-4">
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/491/062/non_2x/programmer-working-concept-for-web-banner-man-work-with-code-and-programming-at-computer-creates-software-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"
        alt=""
        className="w-[250px] lg:w-[360px]"
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-600">
        Working on it
      </h1>
      <p className="text-lg text-gray-500 text-center">
        Go ahead & explore.
      </p>
      <button
        className="p-2 bg-orange-400 rounded-lg text-white font-semibold text-lg lg:text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home
      </button>
    </div>
  );
}

export default Login;
