import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputGroup({ label, id, type, placeholder, htmlFor }) {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required
          className="border border-gray-300"
        />
      </div>
    </>
  );
}
