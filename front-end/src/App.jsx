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
import { useEffect, useState, useCallback } from "react";
import { FormSection } from "./parts/FormSection";
import { InputGroup } from "./parts/InputGroup";
import axios from "axios";
import Error from "./components/ui/Error";

export default function App() {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [email, setEmail] = useState("");

  const [mahasiswa, setMahasiswa] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [modeForm, setModeForm] = useState("");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // AMBIL DATA
  const ambilDataMahasiswa = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:8000/users");
      setMahasiswa(res.data);
      setError("");
    } catch (error) {
      setError(error.message || "Gagal mengambil data mahasiswa");
    }
  }, []);

  useEffect(() => {
    ambilDataMahasiswa();
  }, [ambilDataMahasiswa]);

  function clearFormState() {
    setNim("");
    setNama("");
    setJurusan("");
    setEmail("");
    setEditId(null);
  }

  function handleOpenFormTambah() {
    clearFormState();
    setModeForm("tambah");
    setOpenForm(true);
  }

  function handleOpenFormEdit(data) {
    setNim(data.nim);
    setNama(data.nama);
    setJurusan(data.jurusan);
    setEmail(data.email);
    setEditId(data.id);
    setModeForm("edit");
    setOpenForm(true);
  }

  function handleCloseForm() {
    setOpenForm(false);
    setModeForm("");
    clearFormState();
  }

  // TAMBAH DATA
  async function handleSubmitFormTambah(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users", {
        nim,
        nama,
        jurusan,
        email,
      });
      await ambilDataMahasiswa();
      handleCloseForm();
    } catch (error) {
      setError(error.message || "Gagal menambah data");
    }
  }

  // EDIT DATA
  async function handleSubmitFormEdit(e) {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/users/${editId}`, {
        nim,
        nama,
        jurusan,
        email,
      });
      await ambilDataMahasiswa();
      handleCloseForm();
    } catch (error) {
      setError(error.message || "Gagal mengedit data");
    }
  }

  // HAPUS DATA
  async function handleHapusMahasiswa(id) {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`http://localhost:8000/users/${id}`);
        await ambilDataMahasiswa();
      } catch (error) {
        setError(error.message || "Gagal menghapus data");
      }
    }
  }

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
                      <TableRow key={data.id || index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{data.nim}</TableCell>
                        <TableCell>{data.nama}</TableCell>
                        <TableCell>{data.jurusan}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell className="flex gap-2">
                          <Button
                            className="bg-orange-400 hover:bg-gray-400 cursor-pointer"
                            onClick={() => handleOpenFormEdit(data)}
                          >
                            <FaUserEdit />
                          </Button>
                          <Button
                            className="bg-red-500 hover:bg-gray-400 cursor-pointer"
                            onClick={() => handleHapusMahasiswa(data.id)}
                          >
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
                onSubmit={handleSubmitFormTambah}
              >
                <InputGroup
                  label="Nim Mahasiswa"
                  htmlFor="nim"
                  id="nim"
                  type="text"
                  placeholder="masukkan nim anda"
                  onChange={(e) => setNim(e.target.value)}
                  value={nim}
                />
                <InputGroup
                  label="Nama Mahasiswa"
                  htmlFor="nama"
                  id="nama"
                  type="text"
                  placeholder="masukkan nama anda"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                />
                <InputGroup
                  label="Jurusan"
                  htmlFor="jurusan"
                  id="jurusan"
                  type="text"
                  placeholder="masukkan jurusan anda"
                  onChange={(e) => setJurusan(e.target.value)}
                  value={jurusan}
                />
                <InputGroup
                  label="Email Outlook"
                  htmlFor="email"
                  id="email"
                  type="text"
                  placeholder="masukkan email anda"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormSection>
            )}
            {openForm && modeForm === "edit" && (
              <FormSection
                judul="Edit Data Mahasiswa"
                textBtn="Simpan"
                onClose={handleCloseForm}
                onSubmit={handleSubmitFormEdit} // Gunakan handler edit
              >
                <InputGroup
                  label="Nim Mahasiswa"
                  htmlFor="nim"
                  id="nim"
                  type="text"
                  placeholder="masukkan nim anda"
                  onChange={(e) => setNim(e.target.value)}
                  value={nim}
                />
                <InputGroup
                  label="Nama Mahasiswa"
                  htmlFor="nama"
                  id="nama"
                  type="text"
                  placeholder="masukkan nama anda"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                />
                <InputGroup
                  label="Jurusan"
                  htmlFor="jurusan"
                  id="jurusan"
                  type="text"
                  placeholder="masukkan jurusan anda"
                  onChange={(e) => setJurusan(e.target.value)}
                  value={jurusan}
                />
                <InputGroup
                  label="Email Outlook"
                  htmlFor="email"
                  id="email"
                  type="text"
                  placeholder="masukkan email anda"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormSection>
            )}
          </div>
        </AppLayout>
      </div>
    </>
  );
}
