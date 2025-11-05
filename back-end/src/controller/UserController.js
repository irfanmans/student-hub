export const tambahUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Data mahasiswa berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const editUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data mahasiswa berhasil diedit" });
  } catch (error) {
    console.log(error.message);
  }
};

export const hapusUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data mahasiswa berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
