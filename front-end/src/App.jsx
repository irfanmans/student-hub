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
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import FormDialog from "./parts/FormDialog";
import HeaderSection from "./parts/HeaderSection";

export default function App() {
  return (
    <>
      <div className="bg-[#f5f6f8] min-h-screen">
        <AppLayout>
          <div className="flex justify-between">
            <HeaderSection
              judul="Student Management"
              deskripsi="Kelola catatan mahasiswa anda secara efisien"
            />

            <FormDialog
              judulBtn="+ Tambah Mahasiswa"
              judulForm="Tambah Mahasiswa"
              deskripsi="Ubah profil Anda di sini. Klik simpan setelah selesai."
            >
              <div className="grid gap-3">
                <Label htmlFor="name">Nim Mahasiswa</Label>
                <Input
                  id="nim"
                  name="nim"
                  defaultValue=""
                  type="teks"
                  className="border border-gray-300 rounded-lg px-3 py-5 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Nama Mahasiswa</Label>
                <Input
                  id="mahasiswa"
                  name="mahasiswa"
                  defaultValue=""
                  type="teks"
                  className="border border-gray-300 rounded-lg px-3 py-5 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Jurusan Mahasiswa</Label>
                <Input
                  id="mahasiswa"
                  name="mahasiswa"
                  defaultValue=""
                  type="teks"
                  className="border border-gray-300 rounded-lg px-3 py-5 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Kelas Mahasiswa</Label>
                <Input
                  id="mahasiswa"
                  name="mahasiswa"
                  defaultValue=""
                  type="teks"
                  className="border border-gray-300 rounded-lg px-3 py-5 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Email Mahasiswa</Label>
                <Input
                  id="mahasiswa"
                  name="mahasiswa"
                  defaultValue=""
                  type="teks"
                  className="border border-gray-300 rounded-lg px-3 py-5 focus:outline-none focus:border-blue-500"
                />
              </div>
            </FormDialog>
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
