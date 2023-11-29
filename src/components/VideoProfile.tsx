export const VideoProfile = () => {
  return (
    <section className="mx-5 md:mx-10 lg:mx-28 xl:mx-32 space-y-10">
      <div className="space-y-2 text-center md:text-start">
        <h2 className="text-blue-3 text-2xl font-medium">
          Adaptive Network Laboratory
        </h2>
        <h1 className="text-blue-main text-4xl font-semibold">Video Profile</h1>
        <p className="text-gray-500 text-lg">
          Mau kenal lebih jauh? Tonton video dibawah ini yuk
        </p>
      </div>
      <iframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/xbQWlYBBHWQ`}
        allowFullScreen
        className="w-full md:w-3/4 2xl:w-3/5 aspect-video mx-auto rounded-2xl"
      ></iframe>
    </section>
  );
};
