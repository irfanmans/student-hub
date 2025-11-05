export default function HeaderSection({ judul, deskripsi }) {
  return (
    <>
      <div className="leading-loose">
        <h1 className="text-5xl font-bold text-orange-400">{judul}</h1>
        <p className="text-base">{deskripsi}</p>
      </div>
    </>
  );
}
