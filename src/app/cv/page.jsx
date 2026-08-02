"use client";

import Image from "next/image";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/CV_Bastien_Autem_2026.pdf";
  link.download = "CV-Bastien-Autem-2026.pdf";
  link.click();
};

const Cv = () => {
  return (
    <main className="mx-auto flex w-[min(1100px,calc(100%-32px))] flex-col gap-8 py-[72px_96px] max-sm:py-[48px_72px]">
      <button
        className="min-h-[50px] cursor-pointer self-center border border-[#171817] bg-[#171817] px-[22px] text-xs font-extrabold text-[#f3f1eb] hover:border-[#ff5634] hover:bg-[#ff5634] dark:border-[#f1f0eb] dark:bg-[#f1f0eb] dark:text-[#101211] dark:hover:border-[#ff765b] dark:hover:bg-[#ff765b] dark:hover:text-white"
        onClick={handleDownload}
      >
        Télécharger le CV
      </button>
      <Image
        src="/CV_Bastien_Autem_2026.png"
        className="h-auto w-full border border-black/15 dark:border-white/15"
        alt="CV 2026 de Bastien Autem"
        height={1684}
        width={1191}
        priority
      />
    </main>
  );
};

export default Cv;
