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
import HeaderSection from "./parts/HeaderSection";
import { useEffect, useState } from "react";
import { FormSection } from "./parts/FormSection";
import { InputGroup } from "./parts/InputGroup";
import axios from "axios";
import Error from "./components/ui/Error";

export default function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [modeForm, setModeForm] = useState("");
  const [error, setError] = useState("");

  function handleOpenFormTambah() {
    setOpenForm(!openForm);
    setModeForm("tambah");
  }

  function handleCloseForm() {
    setOpenForm(false);
    setModeForm("");
  }

  function handleOpenFormEdit() {
    setOpenForm(!openForm);
    setModeForm("edit");
  }

  // AMBIL DATA
  useEffect(function () {
    async function ambilDataMahasiswa() {
      try {
        const res = await axios.get("http://localhost:8000/users");
        setMahasiswa(res.data);
      } catch (error) {
        setError(error.msg);
      }
    }

    ambilDataMahasiswa();
  }, []);

  return (
    <>
      <div className="bg-[#f5f6f8] min-h-screen">
        <AppLayout className="p-5 grid grid-cols-[1fr_1fr] gap-5 justify-between">
          <div>
            <div className="flex justify-between items-center">
              <HeaderSection judul="Student Management" />

              <Button onClick={handleOpenFormTambah} className="cursor-pointer">
                + Tambah Mahasiswa
              </Button>
            </div>

            <div className="mt-10">
              <Card className="px-5">
                {error && <Error error={error} />}
                <Table className="border border-gray-200 ">
                  <TableHeader className="text-[13px] bg-gray-200">
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
                        Email Outlook
                      </TableHead>
                      <TableHead className="font-bold text-gray-400">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mahasiswa.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{data.nim}</TableCell>
                        <TableCell>{data.nama}</TableCell>
                        <TableCell>{data.jurusan}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell className="flex gap-2">
                          <Button
                            className="bg-orange-400 hover:bg-gray-400 cursor-pointer"
                            onClick={handleOpenFormEdit}
                          >
                            <FaUserEdit />
                          </Button>
                          <Button className="bg-red-500 hover:bg-gray-400 cursor-pointer">
                            <MdDelete />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
          <div>
            {openForm && modeForm === "tambah" && (
              <FormSection
                judul="Tambah Data Mahasiswa"
                textBtn="Tambah"
                onClose={handleCloseForm}
              >
                <InputGroup
                  label="Nim Mahasiswa"
                  htmlFor="nim"
                  id="nim"
                  type="teks"
                  placeholder="masukkan nim anda"
                />
                <InputGroup
                  label="Nama Mahasiswa"
                  htmlFor="nama"
                  id="nama"
                  type="teks"
                  placeholder="masukkan nama anda"
                />
                <InputGroup
                  label="Jurusan"
                  htmlFor="jurusan"
                  id="jurusan"
                  type="teks"
                  placeholder="masukkan jurusan anda"
                />
                <InputGroup
                  label="Kelas"
                  htmlFor="kelas"
                  id="kelas"
                  type="teks"
                  placeholder="masukkan Kelas anda"
                />
                <InputGroup
                  label="Email Outlook"
                  htmlFor="email"
                  id="email"
                  type="teks"
                  placeholder="masukkan email anda"
                />
              </FormSection>
            )}
            {openForm && modeForm === "edit" && (
              <FormSection
                judul="Edit Data Mahasiswa"
                textBtn="Simpan"
                onClose={handleCloseForm}
              >
                <InputGroup
                  label="Nim Mahasiswa"
                  htmlFor="nim"
                  id="nim"
                  type="teks"
                  placeholder="masukkan nim anda"
                />
                <InputGroup
                  label="Nama Mahasiswa"
                  htmlFor="nama"
                  id="nama"
                  type="teks"
                  placeholder="masukkan nama anda"
                />
                <InputGroup
                  label="Jurusan"
                  htmlFor="jurusan"
                  id="jurusan"
                  type="teks"
                  placeholder="masukkan jurusan anda"
                />
                <InputGroup
                  label="Kelas"
                  htmlFor="kelas"
                  id="kelas"
                  type="teks"
                  placeholder="masukkan Kelas anda"
                />
                <InputGroup
                  label="Email Outlook"
                  htmlFor="email"
                  id="email"
                  type="teks"
                  placeholder="masukkan email anda"
                />
              </FormSection>
            )}
          </div>
        </AppLayout>
      </div>
    </>
  );
}
