"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "../ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function HeaderInput({
  isFocused,
  setIsFocused,
}: {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [target, setTarget] = useState<string>("");
  const router = useRouter();
  useEffect(
    function () {
      const inputElement = input.current;
      if (inputElement) {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        inputElement.addEventListener("click", handleFocus);
        inputElement.addEventListener("blur", handleBlur);

        return () => {
          inputElement.removeEventListener("click", handleFocus);
          inputElement.removeEventListener("blur", handleBlur);
        };
      }
    },
    [setIsFocused]
  );
  function handleSubmit() {
    if (!target) return;
    router.replace("/list");
  }
  return (
    <div
      className={`flex close transition-all duration-300  items-center ${
        isFocused ? "w-[50%]" : "w-[30%]"
      } border px-3 border-zinc-300 rounded-full`}
    >
      <Input
        onChange={(e) => setTarget(e.target.value)}
        value={target}
        ref={input}
        type="text"
        placeholder="Search product"
        className="placeholder:text-zinc-400 border-none outline-none tracking-wider"
      />
      <HiMagnifyingGlass
        onClick={() => handleSubmit()}
        className="text-zinc-500 font-bold cursor-pointer"
      />
    </div>
  );
}
