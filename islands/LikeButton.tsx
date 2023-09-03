import { type Signal, signal } from "@preact/signals";
import { white } from "https://deno.land/std@0.140.0/fmt/colors.ts";
import { useEffect, useRef, useState } from "preact/hooks";

type Text = string | undefined;

export default function LikeButton() {
  // いいねボタンが押された回数をカウントする変数
  const [count, setCount] = useState(0);
  // inputに入力された文字を読み取るRef
  const inputRef = useRef();
  // inputに入力されたテキストを保持する変数
  const [text, setText] = useState<Text>("");

  useEffect(() => {
    console.log("コンポーネントがレンダリングされました");
  }, []);

  useEffect(() => {
    console.log(`カウント回数：${count}`);
  }, [count]);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onClick = async () => {
    await setText((prev) => prev = inputRef.current.value);
    if (text === "") {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        class="bg-[#ef4444] text-white rounded-xl p-3 hover:bg-[#dc2626]"
      >
        ♡{count}
      </button>
      <div>
        <button
          onClick={onClick}
          class="bg-[#ffffff] text-black rounded-xl p-3 hover:bg-[#f0f0f0]"
        >
          描画
        </button>
        <input
          type="text"
          ref={inputRef}
          class={"text-black m-2 rounded-l p-2"}
        />
        <p>{text}</p>
      </div>
    </div>
  );
}
