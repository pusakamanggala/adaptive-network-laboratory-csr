export const VideoProfile = () => {
  return (
    <section className="container p-5 mx-auto space-y-10">
      <div className="space-y-2 text-center md:text-start">
        <h2 className="text-2xl font-medium text-blue-3">
          Adaptive Network Laboratory
        </h2>
        <h1 className="text-4xl font-semibold text-blue-main">Video Profile</h1>
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
