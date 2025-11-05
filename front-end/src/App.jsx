import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import AppLayout from "./layout/AppLayout";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <>
      <div className="bg-[#f5f6f8] min-h-screen">
        <AppLayout>
          <div className="flex justify-between">
            <div className="leading-loose">
              <h1 className="text-5xl font-bold text-orange-400">
                Student Management
              </h1>
              <p className="text-base">
                Kelola catatan mahasiswa anda secara efisien
              </p>
            </div>

            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button>+ Tambah Mahasiswa</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Ubah profil Anda di sini. Klik simpan setelah selesai.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" defaultValue="" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        defaultValue=""
                        className="border"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>

          <div className="mt-10">
            <Card className="px-5">
              <Table className="border border-gray-200 ">
                <TableHeader className="text-[15px] bg-gray-200">
                  <TableRow>
                    <TableHead className="font-bold text-gray-400">
                      Nomor
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Nim Mahasiswa
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Nama Mahasiswa
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Jurusan
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Kelas
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Email Outlook
                    </TableHead>
                    <TableHead className="font-bold text-gray-400">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>01</TableCell>
                    <TableCell>221113751</TableCell>
                    <TableCell>Irfan Mulya</TableCell>
                    <TableCell>Teknik Informatika</TableCell>
                    <TableCell>IF C Sore</TableCell>
                    <TableCell>221113751@students.mikroskil.ac.id</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="bg-orange-400 hover:bg-gray-400 cursor-pointer">
                        <FaUserEdit />
                      </Button>
                      <Button className="bg-red-500 hover:bg-gray-400 cursor-pointer">
                        <MdDelete />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </AppLayout>
      </div>
    </>
  );
}
