import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoClose } from "react-icons/io5";

export function FormSection({ judul, textBtn, children, onClose, onSubmit }) {
  return (
    <Card className="w-full">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-2xl font-bold text-cyan-500">
            {judul}
            <IoClose
              className="bg-red-600 text-white rounded-full p-1 w-7 h-7 cursor-pointer"
              onClick={onClose}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">{children}</div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="mt-7 w-full cursor-pointer">
            {textBtn}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
