import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FormSection({ judul, textBtn, children }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-cyan-500">
          {judul}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">{children}</div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="mt-2 w-full cursor-pointer">
          {textBtn}
        </Button>
      </CardFooter>
    </Card>
  );
}
