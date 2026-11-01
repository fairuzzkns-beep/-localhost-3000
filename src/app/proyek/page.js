const proyek = [
  {
    slug: "modul-1",
    nama: "Junior Web Developer Industry Class MODUL 1",
    gambar: "Screenshot (93).png",
    teknologi: ["HTML", "CSS", "CodePen"],
    deskripsi: "Portofolio pertama saya untuk mempelajari dasar-dasar pengembangan website menggunakan HTML dan CSS.",
    link: "https://tugas-1-smkn1kepanjen-umber.vercel.app/",
  },
  {
    slug: "modul-2",
    nama: "Mobile Responsive MODUL 2",
    gambar: "Screenshot (92).png",
    teknologi: ["HTML", "CSS", "Responsive"],
    deskripsi: "Latihan membuat website responsif dengan tampilan desktop maupun smartphone.",
    link: "https://tugas-2-smkn1kepanjen-five.vercel.app/",
  },
  {
    slug: "modul-3",
    nama: "Interactive Digital Profile MODUL 3",
    gambar: "P3.png",
    teknologi: ["HTML", "CSS", "JavaScript"],
    deskripsi: "Profil digital interaktif dengan fitur pergantian tema dan modal kontak.",
    link: "https://tugas-3-smkn1kepanjen-delta.vercel.app/",
  },
];

export default function Proyek() {
  return (
    <main className="min-h-screen bg-[#f0f8ed]">
      <section className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="text-4xl font-bold text-[#203b60]">
          Proyek Saya
        </h1>

        <p className="mt-3 text-lg text-[#405675]">
          Kumpulan hasil belajar saya di Kelas Industri UBIG.
          Klik kartu untuk melihat detailnya.
        </p>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyek.map((item) => (
            <a
              key={item.slug}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.teknologi.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#203b60]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-bold text-[#203b60]">
                  {item.nama}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#405675]">
                  {item.deskripsi}
                </p>
              </div>
            </a>
          ))}
        </div>

      </section>
    </main>
  );
}