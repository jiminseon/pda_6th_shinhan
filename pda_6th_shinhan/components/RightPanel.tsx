import Image from "next/image";

export default function RightPanel() {
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-6 mt-[160px]"
      style={{ width: 250, height: 310 }}
    >
      <div className="bg-[#0e131dcc] shadow p-4 text-white h-full flex flex-col justify-between">
        <div>
          <div className="text-2xl mb-2 pt-[15px] pl-[15px]">
            새로운
            <br />
            웹트레이딩 시스템
          </div>
          <div className="text-xs mb-4 text-gray-300 pl-[15px]">
            (크롬, Edge, IE100이상)
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center cursor-pointer hover:underline">
              <Image src="/book.png" alt="WTS 신버전" width={48} height={48} />
              <div className="mt-2 text-base">WTS 신버전</div>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:underline">
              <Image src="/out.png" alt="WTS 소개" width={48} height={48} />
              <div className="mt-2 text-base">WTS 소개</div>
            </div>
          </div>
        </div>
        <div className="text-xs opacity-80 border-t border-white/20 pt-2 mt-2 text-center">
          <span className="hover:underline cursor-pointer">
            신한 SOL증권 소개
          </span>{" "}
          |{" "}
          <span className="hover:underline cursor-pointer">
            신한 SOL(HTS) 소개
          </span>
        </div>
      </div>
    </div>
  );
}
