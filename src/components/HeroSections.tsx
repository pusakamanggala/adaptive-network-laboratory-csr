import AxoHaloImg from "../img/axo-halo.svg";
import DocumentIcon from "../icons/document.svg";
import TimeIcon from "../icons/time-circle.svg";
import TeamIcon from "../icons/three-user.svg";

export const HeroSection = () => {
  return (
    <section className="hero-section 2xl:mx-72 xl:mx-48 lg:mx-32 mx-16 space-y-14">
      <div className="grid md:grid-cols-2 items-center gap-7 md:py-40 pt-32">
        <div className="flex justify-center items-center">
          <img src={AxoHaloImg} alt="" className="w-[406px] h-auto" />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="md:text-5xl text-3xl font-semibold text-blue-1">
            Adaptive Network Laboratory
          </h1>
          <p className="text-lg">
            Laboratorium yang melakukan eksplorasi di bidang Core Network dan
            memfasilitasi kegiatan Praktikum Jaringan Komputer dan Data.
          </p>
          <button className="bg-blue-main py-2 px-4 text-white rounded-md">
            Lanjut baca
          </button>
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-3xl">Our Values</h4>
          <p className="text-gray-400">
            Kami berkomitmen untuk menerapkan nilai-nilai di samping dalam
            setiap pekerjaan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-4 gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <img src={TimeIcon} alt="" className="h-12" />
            <h4>Dedication</h4>
            <p className="text-gray-400">
              Mendukung dan berpartisipasi secara penuh.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img src={TeamIcon} alt="" className="h-12" />
            <h4>Dedication</h4>
            <p className="text-gray-400">Bersama-sama untuk mencapai tujuan.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
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
