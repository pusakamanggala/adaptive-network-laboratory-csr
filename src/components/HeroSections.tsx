import AxoHaloImg from "../img/axo-halo.svg";
import DocumentIcon from "../icons/document.svg";
import TimeIcon from "../icons/time-circle.svg";
import TeamIcon from "../icons/three-user.svg";

export const HeroSection = () => {
  return (
    <section className="mx-16 hero-section 2xl:mx-72 xl:mx-48 lg:mx-32 space-y-14">
      <div className="grid items-center pt-32 md:grid-cols-2 gap-7 md:py-40 h-[100dvh] 2xl:h-auto">
        <div className="flex items-center justify-center">
          <img src={AxoHaloImg} alt="" className="w-[550px] h-auto" />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl font-semibold md:text-5xl text-blue-1">
            Adaptive Network Laboratory
          </h1>
          <p className="text-lg">
            Laboratorium yang melakukan eksplorasi di bidang Core Network dan
            memfasilitasi kegiatan Praktikum Jaringan Komputer dan Data.
          </p>
          <button
            type="button"
            title="read more"
            className="px-4 py-2 text-white rounded-md bg-blue-main"
          >
            Lanjut baca
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <h4 className="text-3xl font-semibold">Our Values</h4>
          <p className="text-gray-400">
            Kami berkomitmen untuk menerapkan nilai-nilai di samping dalam
            setiap pekerjaan.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <img src={TimeIcon} alt="" className="h-12" />
            <h4>Dedication</h4>
            <p className="text-gray-400">
              Mendukung dan berpartisipasi secara penuh.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <img src={TeamIcon} alt="" className="h-12" />
            <h4>Dedication</h4>
            <p className="text-gray-400">Bersama-sama untuk mencapai tujuan.</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <img src={DocumentIcon} alt="" className="h-12" />
            <h4>Learning</h4>
            <p className="text-gray-400">
              Menjadikan belajar sebagai proses untuk berkembang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
