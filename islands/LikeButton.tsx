import { type Signal, signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("コンポーネントがレンダリングされました");
  }, []);

  useEffect(() => {
    console.log(`カウント回数：${count}`);
  }, [count]);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <button
      onClick={handleClick}
      class="bg-[#ef4444] text-white rounded-xl p-3 hover:bg-[#dc2626]"
    >
      ♡{count}
    </button>
  );
}
