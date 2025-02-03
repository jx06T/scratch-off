import FooterG from "@/components/FooterG";
import UploadFileArea from "@/components/UploadFileArea";
import StepsSidebar from "@/components/StepsSidebar";
import Image from "next/image";

export default function DesignHome() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen mt-20 px-[4%] sm:px-[min(2rem,8%)]">
        <div className=" fixed w-48 h-full pointer-events-none z-10">
          <StepsSidebar />
        </div>
        <div className=" md:ml-48 z-10">
          <div className=" prose mx-auto w-full">
            <div className="scroll-mt-20 min-h-96" id="upload-image">
              <h2>圖片上傳區</h2>
              <UploadFileArea></UploadFileArea>
            </div>
            <div className="scroll-mt-20 min-h-96" id="layout">
              <h2>布局設定區</h2>
              <div className="relative min-h-96 w-full overflow-hidden rounded-md" >
                <Image
                  className="rounded-md "
                  objectFit="cover"
                  priority
                  layout="fill"
                  src={`https://picsum.photos/seed/picsum404/900/600`}
                  alt="佔位圖片"
                />
              </div>
              <div className="mt-10  px-4">
                <div className=" prose">
                  <h3>標題：</h3>
                  <h3>發行者：</h3>
                  <h3>描述：</h3>
                </div>
              </div>
            </div>
            <div className="scroll-mt-20 min-h-96" id="area">
              <h2>刮除區域設定區</h2>
              <div className="relative min-h-96 w-full overflow-hidden rounded-md" >
                <Image
                  className="rounded-md "
                  objectFit="cover"
                  priority
                  layout="fill"
                  src={`https://picsum.photos/seed/picsum44/900/600`}
                  alt="佔位圖片"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-10 px-4">
                <button className={` pointer-events-auto duration-500 transition-all  text-left block py-2 px-6 ml-0 border-red-500 border-2 rounded-full bg-red-100`}>橢圓工具</button>
                <button className={` pointer-events-auto duration-500 transition-all  text-left block py-2 px-6 ml-0 border-red-500 border-2 rounded-full bg-red-100`}>矩形工具</button>
                <button className={` pointer-events-auto duration-500 transition-all  text-left block py-2 px-6 ml-0 border-red-500 border-2 rounded-full bg-red-100`}>貝茲曲線工具</button>
                <button className={` pointer-events-auto duration-500 transition-all  text-left block py-2 px-6 ml-0 border-red-500 border-2 rounded-full bg-red-100`}>反轉工具</button>
              </div>
            </div>
            <div className="scroll-mt-20 min-h-96" id="game">
              <h2>遊戲選擇區</h2>
            </div>
          </div>
        </div>
      </main >
      <FooterG />
    </div >
  );
}
