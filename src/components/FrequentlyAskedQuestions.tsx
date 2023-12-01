import { FAQ } from "../pages/HomePage";

type FrequentlyAskedQuestionsData = {
  frequentlyAskedQuestionsData: FAQ;
};

type AccordionProps = {
  uid: string;
  question: string;
  answer: string;
};

export const FrequentlyAskedQuestions = ({
  frequentlyAskedQuestionsData,
}: FrequentlyAskedQuestionsData) => {
  const accordion = ({ uid, question, answer }: AccordionProps) => {
    return (
      <div key={uid} className="relative overflow-hidden border-2 rounded-xl">
        <input
          type="checkbox"
          className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          id={uid}
          name={uid}
        />
        <div className="flex items-center w-full h-12 pl-5">
          <h1 className="font-bold">{question}</h1>
        </div>
        <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
        <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
          <div className="px-5 pb-5 text-gray-600">{answer}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="container p-5 pb-10 mx-auto space-y-9">
      <div className="space-y-2 text-center md:text-start">
        <h2 className="text-xl font-medium md:text-2xl text-blue-3">
          Frequently Asked Questions
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl text-blue-main">
          Adaptive Network Laboratory
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2 md:col-span-2">
          {frequentlyAskedQuestionsData.map((faq) => (
            <div key={faq.uid} className="your-container-class">
              {accordion({
                uid: faq.uid,
                question: faq.judul,
                answer: faq.isi,
              })}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between text-center bg-gray-300 rounded-xl p-9 text-blue-main h-72 md:h-auto">
          <hgroup>
            <h2 className="mb-5 text-lg font-medium">Ada pertanyaan?</h2>
            <p>Kirimkan pertanyaanmu lewat email</p>
          </hgroup>
          <button
            type="button"
            title="Send Email"
            className="flex items-center gap-3 px-5 py-2 text-white rounded-md shadow-md bg-blue-main w-fit"
          >
            <a
              href="mailto:adaptivenetlab@telkomuniversity.ac.id"
              className="pr-3 border-r-2 border-white/50"
            >
              Kirim email
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
