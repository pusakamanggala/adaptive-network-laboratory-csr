export const VisionAndMission = () => {
  return (
    <section className="p-10 mx-5 bg-blue-main rounded-2xl md:p-14">
      <div className="container grid p-5 mx-auto text-white md:grid-cols-2 gap-y-14 md:gap-y-28">
        <hgroup className="space-y-2 text-center md:text-start">
          <h1 className="text-2xl font-semibold md:text-4xl">Visi</h1>
          <h3>Adaptive Netwok Laboratory</h3>
        </hgroup>
        <p className="text-justify">
          Menciptakan Laboratorium Adaptive Network sebagai laboratorium yang
          unggul dan berprestasi dalam hal riset, publikasi, dan kompetisi baik
          di dalam kampus maupun luar kampus serta menjadi wadah dalam
          meningkatkan kemampuan, baik hard skill maupun soft skill untuk
          menciptakan sumber daya manusia yang unggul dan berprestasi dalam
          menghadapi era revolusi industri yang terus berkembang.
        </p>
        <hgroup className="space-y-2 text-center md:order-4 md:text-end">
          <h1 className="text-2xl font-semibold md:text-4xl">Misi</h1>
          <h3>Adaptive Netwok Laboratory</h3>
        </hgroup>
        <ul className="text-justify list-disc md:order-3">
          <li>
            Menumbuhkan dan meningkatkan rasa kekeluargaan, kepedulian,
            kenyamanan dan kepemilikan setiap asisten terhadap Laboratorium
            Adaptive Network
          </li>
          <li>
            Meningkatkan sarana, prasarana, dan kemampuan asisten Laboratorium
            Adaptive Network baik hard skill maupun soft skill
          </li>
          <li>
            Menjalin hubungan baik antara asisten, pembina, komunitas, industri,
            dan laboratorium lain di dalam maupun di luar kampus
          </li>
        </ul>
      </div>
    </section>
  );
};
