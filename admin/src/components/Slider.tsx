import { For } from "solid-js";
import { iterator } from "../utls/utilityFuncs";
import { DataSetFormMap } from "../types/types";

interface SliderProps {
  max: number;
  value: number;
  type: string;
  onclick: (event: MouseEvent, item: number) => void;
  oninput: (event: { target: HTMLInputElement }) => void;
}

const Slider = (slider: SliderProps) => {
  return (
    <div>
      <input
        type="range"
        name={DataSetFormMap[slider.type]}
        class="w-full accent-main"
        max={slider.max}
        value={slider.value}
        oninput={(event: { target: HTMLInputElement }) => slider.oninput(event)}
      />
      <div class={`grid grid-cols-${slider.max} place-items-end`}>
        <For each={iterator(slider.max)}>
          {(item) => (
            <button
              type="button"
              class={`rounded-full w-8 h-8 flex items-center justify-center ${
                item + 1 == slider.value
                  ? "text-white bg-main"
                  : "text-black bg-white border-2 border-main"
              }`}
              data-type={slider.type}
              onclick={(event: MouseEvent): void =>
                slider.onclick(event, item + 1)
              }
            >
              {item + 1}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

export default Slider;
