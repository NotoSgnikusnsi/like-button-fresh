import { type Signal, signal } from "@preact/signals";

interface Count {
  count: Signal<number>;
}

export default function LikeButton(props: Count) {
  const handleClick = () => {
    props.count.value += 1;
  };
  return (
    <button
      onClick={handleClick}
      class="bg-[#ef4444] text-white rounded-xl p-3 hover:bg-[#dc2626]"
    >
      ♡{props.count.value}
    </button>
  );
}
