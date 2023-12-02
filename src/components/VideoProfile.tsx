export const VideoProfile = () => {
  return (
    <section className="container p-5 pb-0 mx-auto space-y-10">
      <div className="space-y-1 text-center md:space-y-2 md:text-start">
        <h2 className="text-xl font-medium md:text-2xl text-blue-3">
          Adaptive Network Laboratory
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl text-blue-main">
          Video Profile
        </h1>
        <p className="text-lg text-gray-500">
          Mau kenal lebih jauh? Tonton video dibawah ini yuk
        </p>
      </div>
      <iframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/xbQWlYBBHWQ`}
        allowFullScreen
        className="w-full mx-auto md:w-3/4 2xl:w-3/5 aspect-video rounded-2xl"
      ></iframe>
    </section>
  );
};
