import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FormDialog({
  judulBtn,
  judulForm,
  deskripsi,
  children,
}) {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button>{judulBtn}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-3xl text-cyan-400">
                {judulForm}
              </DialogTitle>
              <DialogDescription>{deskripsi}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 mt-5">{children}</div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Tambahkan</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
