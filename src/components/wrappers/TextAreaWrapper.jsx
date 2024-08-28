import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextAreaWrapper({ label = "message", text = "" }) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">{label}</Label>
      <Textarea placeholder="Type your message here." id="message" value={text} readOnly />
    </div>
  );
}
