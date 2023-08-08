"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useSearchParams, useRouter } from "next/navigation";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [pieces, setPieces] = useState(200);
  const router = useRouter();
  const email = searchParams.get("email");
  const name = searchParams.get("name");

  useEffect(() => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  }, []);

  if (!email && !name) router.push("/");

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-[#FFDBC3] shadow-xl flex flex-col gap-4 overflow-y-auto  rounded-lg lg:w-3/4 w-[90%] items-center lg:p-6 p-4 text-center">
        <Player
          autoplay
          loop
          src="https://lottie.host/c9e7e06e-c54c-4aac-901d-cbbd2f7a97d9/a8mIk2hxH4.json"
          style={{ width: "300px", height: "300px" }}
        />
        <h1 className="text-3xl pb-4 font-bold">Thanks for the email {name}</h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {email}. We will get back to you as
          soon as we can!
        </p>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="px-10 w-[200px] py-3 bg-blue-500 text-white rounded-lg"
        >
          Back
        </button>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
}
