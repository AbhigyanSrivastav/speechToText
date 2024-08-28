import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ButtonWrapper from "./ButtonWrapper";
import commands from "@/utils/commands";
import { useToast } from "@/components/ui/use-toast";
import { showToast } from "@/lib/showToast";
import { TextAreaWrapper } from "./TextAreaWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dictator = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ commands });
  const { toast } = useToast();

  if (!browserSupportsSpeechRecognition) {
    showToast("Browser doesn't support speech recognintion");
  }

  if (!isMicrophoneAvailable) {
    showToast(toast, "Microphone Not Available");
  }
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(transcript);
    let msg = transcript === "" ? "Nothing to copy" : "copied to clipboard!";
    showToast(toast, msg);
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Speech To Text</CardTitle>
          <CardDescription>Convert your speech to text!</CardDescription>
        </CardHeader>
        <CardContent>
          <TextAreaWrapper label="Text Box" text={transcript} />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <p>Microphone: {listening ? "on" : "off"}</p>
          </div>
          <div className="flex space-x-3">
            <ButtonWrapper onClickFunc={startListening} text={"Start"} />
            <ButtonWrapper onClickFunc={stopListening} text={"Stop"} />
            <ButtonWrapper
              onClickFunc={copyToClipBoard}
              text={"Copy To Clipboard"}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Dictator;
