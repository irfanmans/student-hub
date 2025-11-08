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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormSection({judul, textBtn}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-cyan-500">Tambah Data Mahasiswa</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nim">Nim Mahasiswa</Label>
              <Input
                id="nim"
                type="nim"
                placeholder="masukkan nim mahasiswa"
                required
                className="py-6 border border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nim">Nama Mahasiswa</Label>
              <Input
                id="nim"
                type="nim"
                placeholder="masukkan nim mahasiswa"
                required
                className="py-6 border border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nim">Jurusan</Label>
              <Input
                id="nim"
                type="nim"
                placeholder="masukkan nim mahasiswa"
                required
                className="py-6 border border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nim">Kelas</Label>
              <Input
                id="nim"
                type="nim"
                placeholder="masukkan nim mahasiswa"
                required
                className="py-6 border border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nim">Email Outlook</Label>
              <Input
                id="nim"
                type="nim"
                placeholder="masukkan nim mahasiswa"
                required
                className="py-6 border border-gray-300"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="mt-5 w-full cursor-pointer py-6">
          {/* {textBtn} */}
          Tambah
        </Button>
      </CardFooter>
    </Card>
  );
}
