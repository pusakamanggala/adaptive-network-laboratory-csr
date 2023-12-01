import NetSchoolIcon from "../icons/Graph.svg";
import { Article } from "../hooks/useGetLandingPage";

type LearningMaterialProps = {
  learningMaterialData: Article;
};

export const LearningMaterial = ({
  learningMaterialData,
}: LearningMaterialProps) => {
  return (
    <section className="container p-5 pt-0 mx-auto space-y-10 md:p-0">
      <div className="flex flex-row-reverse flex-wrap justify-center gap-3">
        <div className="flex flex-col justify-center space-y-3 text-center md:text-end w-72 lg:w-96 h-60">
          <h2 className="text-xl font-medium md:text-2xl text-blue-3">Our</h2>
          <h1 className="text-3xl font-semibold md:text-4xl text-blue-main">
            Learning Material
          </h1>
          <p className="text-lg text-gray-500">
            Temukan topik bacaan sesuai yang kamu suka.
          </p>
        </div>
        {learningMaterialData.map((learningMaterial, index) => (
          <div
            key={index}
            className={`p-5 bg-black/5 rounded-lg space-y-5 w-72 lg:w-96 h-60 flex flex-col justify-between`}
          >
            <div className="space-y-2">
              <img
                src={NetSchoolIcon}
                alt={learningMaterial.judul + "_icon"}
                className="w-14 aspect-square"
              />
              <h1 className="text-xl font-medium text-blue-main">
                {learningMaterial.judul}
              </h1>
            </div>
            <div>
              <p className="text-gray-500 line-clamp-2 lg:line-clamp-3">
                {learningMaterial.caption}...
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
