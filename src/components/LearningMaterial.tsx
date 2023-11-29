import NetSchoolIcon from "../icons/Graph.svg";
import { Article } from "../pages/HomePage";

type LearningMaterialProps = {
  learningMaterialData: Article;
};

export const LearningMaterial = ({
  learningMaterialData,
}: LearningMaterialProps) => {
  return (
    <section className="mx-5 md:mx-16 lg:mx-32 xl:mx-44 space-y-10">
      <div className="flex gap-3 flex-row-reverse flex-wrap justify-center">
        <div className="space-y-3 text-center md:text-end flex flex-col justify-center w-80 2xl:w-96 h-60">
          <h2 className="text-blue-3 text-2xl font-medium">Our</h2>
          <h1 className="text-blue-main text-4xl font-semibold">
            Learning Material
          </h1>
          <p className="text-gray-500 text-lg">
            Temukan topik bacaan sesuai yang kamu suka.
          </p>
        </div>
        {learningMaterialData.map((learningMaterial, index) => (
          <div
            key={index}
            className={`p-5 bg-black/5 rounded-lg space-y-5 md:w-80 h-60 2xl:w-96 flex flex-col justify-between`}
          >
            <div className="space-y-2">
              <img
                src={NetSchoolIcon}
                alt={learningMaterial.judul + "_icon"}
                className="w-14 aspect-square"
              />
              <h1 className="text-blue-main text-xl font-medium">
                {learningMaterial.judul}
              </h1>
            </div>
            <div>
              <p className="text-gray-500 line-clamp-3">
                {learningMaterial.caption}
              </p>
              <a
                className="text-blue-3 hover:underline"
                href={learningMaterial.hyperlink}
                target="_blank"
              >
                Lanjut baca
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
