import React from "react";
import Button from "./Button";
import {
  FaKey,
  FaMicrochip,
  FaThermometerFull,
  FaExclamationCircle,
} from "react-icons/fa";
import Dialog from "./Dialog";
import Input from "./Input";
import { GPT_MODEL_NAMES, GPT_4 } from "../utils/constants";
import Accordion from "./Accordion";

export default function SettingsDialog({
  show,
  close,
  customApiKey,
  setCustomApiKey,
  customModelName,
  setCustomModelName,
  customTemperature,
  setCustomTemperature,
}: {
  show: boolean;
  close: () => void;
  customApiKey: string;
  setCustomApiKey: (key: string) => void;
  customModelName: string;
  setCustomModelName: (key: string) => void;
  customTemperature: number;
  setCustomTemperature: (temperature: number) => void;
}) {
  const [key, setKey] = React.useState<string>(customApiKey);

  const handleClose = () => {
    setKey(customApiKey);
    close();
  };

  const handleSave = () => {
    setCustomApiKey(key);
    close();
  };

  const advancedSettings = (
    <Input
      left={
        <>
          <FaThermometerFull />
          <span className="ml-2">Temp: </span>
        </>
      }
      value={customTemperature}
      onChange={(e) => setCustomTemperature(parseFloat(e.target.value))}
      type="range"
      toolTipProperties={{
        message: "Higher temperature will make output more random",
        disabled: false,
      }}
      attributes={{
        min: 0,
        max: 1,
        step: 0.01,
      }}
    />
  );

  return (
    <Dialog
      header="Settings ⚙"
      isShown={show}
      close={handleClose}
      footerButton={<Button onClick={handleSave}>Save</Button>}
    >
      <p>
        Here you can add your OpenAI API key. This will require you to pay for
        your own OpenAI usage but give you greater access to HopesoftGPT! You can
        additionally select any model OpenAI offers.
      </p>
      <br />
      <p
        className={
          customModelName === GPT_4
            ? "rounded-md border-[2px] border-white/10 bg-yellow-300 text-black"
            : ""
        }
      >
        <FaExclamationCircle className="inline-block" />
        &nbsp;
        <b>
          To use the GPT-4 model, you need to also provide the API key for
          GPT-4. You can request for it&nbsp;
          <a
            href="https://openai.com/waitlist/gpt-4-api"
            className="text-blue-500"
          >
            here
          </a>
          . (ChatGPT Plus subscription will not work)
        </b>
      </p>
      <br />
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <Input
          left={
            <>
              <FaMicrochip />
              <span className="ml-2">Model:</span>
            </>
          }
          type="combobox"
          value={customModelName}
          onChange={() => null}
          setValue={setCustomModelName}
          attributes={{ options: GPT_MODEL_NAMES }}
        />
        <br className="hidden md:inline" />
        <Input
          left={
            <>
              <FaKey />
              <span className="ml-2">Key: </span>
            </>
          }
          placeholder={"sk-..."}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <br className="md:inline" />
        <Accordion
          child={advancedSettings}
          name="Advanced Settings"
        ></Accordion>
        <br />
        <strong className="mt-10">
          NOTE: To get a key, sign up for an OpenAI account and visit the
          following{" "}
          <a
            href="https://platform.openai.com/account/api-keys"
            className="text-blue-500"
          >
            link.
          </a>{" "}
          This key is only used in the current browser session
        </strong>
      </div>
    </Dialog>
  );
}
