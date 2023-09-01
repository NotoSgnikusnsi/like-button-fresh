import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import LikeButton from "../islands/LikeButton.tsx";

export default function Home() {
  const count = useSignal(0);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Denoはいいぞ</h1>
        <p class="my-4">
          いいねボタン
        </p>
        <LikeButton count={count} />
      </div>
    </div>
  );
}
