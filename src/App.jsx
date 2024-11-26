import { Switch } from "@headlessui/react";
import { useState } from "react";
import { IoPowerOutline } from "react-icons/io5";

const SukunApp = () => {
  // Separate state for each switch
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);
  const [enabled5, setEnabled5] = useState(false);
  const [enabled6, setEnabled6] = useState(false);
  const [enabled7, setEnabled7] = useState(false);
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-[450px] w-[325px] overflow-hidden text-white p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-yellow-400">🌙</span> Sukun
        </h1>
        <button className="focus:outline-none">
          <IoPowerOutline className="text-2xl" />
        </button>
      </div>
      <p className="mt-1 text-xs">Your mind, your peace</p>

      {/* Button Group */}
      <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap items-center gap-2">
          {[
            "Google",
            "YouTube",
            "Facebook",
            "LinkedIn",
            "Twitter",
            "Instagram",
            "WhatsApp",
          ].map((name) => (
            <button
              key={name}
              className="px-2 py-1 text-xs rounded-md border hover:bg-white/30 flex-shrink-0"
            >
              {name}
            </button>
          ))}
          <button className="px-2 py-1 text-xs rounded-md bg-red-500/20 hover:bg-red-500/30 flex-shrink-0">
            X
          </button>
        </div>
      </div>

      {/* Toggle Section 1 */}
      <h2 className="mt-6 text-sm text-center font-semibold">
        Enable to hide sections
      </h2>
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 1 */}
          <Switch
            checked={enabled1}
            onChange={setEnabled1}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled1 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled1 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>

      {/* Toggle Section 2 */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 2 */}
          <Switch
            checked={enabled2}
            onChange={setEnabled2}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled2 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled2 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>

      {/* Toggle Section 3 */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 3 */}
          <Switch
            checked={enabled3}
            onChange={setEnabled3}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled3 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled3 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>

      {/* Toggle Section 4 */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 4 */}
          <Switch
            checked={enabled4}
            onChange={setEnabled4}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled4 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled4 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>

      {/* Toggle Section 5 */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 5 */}
          <Switch
            checked={enabled5}
            onChange={setEnabled5}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled5 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled5 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>

      {/* Toggle Section 6 */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 6 */}
          <Switch
            checked={enabled7}
            onChange={setEnabled6}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled6 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled6 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>
      {/* toggle switch 7  */}
      <div className="mt-4 px-4 text-xs">
        <div className="flex justify-between items-center">
          <p>Hide Images</p>
          {/* Toggle Switch 6 */}
          <Switch
            checked={enabled6}
            onChange={setEnabled7}
            className={`relative flex h-5 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
              enabled6 ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                enabled6 ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <hr className="mt-1 border-gray-300/50" />
      </div>
    </div>
  );
};

export default SukunApp;
