import Image from "next/image";
import BigTitle from "@/components/BigTitle";
import { GravityUiCircleChevronsDown } from "@/components/Icons";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedButton from "@/components/AnimatedButton";
import FooterG from "@/components/FooterG";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <div className=" relative w-full h-screen overflow-hidden">
          <div className=" absolute w-full bottom-20 flex justify-center">
            <AnimatedButton cls=" mt-10" url="/design" text="開始製作！"></AnimatedButton>
          </div>
          <Image src={"/home_bg.jpg"} alt="Homepage background -- scratch off" layout="fill" objectFit="cover" priority></Image>
          <div className=" top-0 left-0 w-full h-full flex justify-center items-center">
            <div className=" flex flex-col space-y-4 text text-5xl sm:text-6xl md:text-6xl text-center px-6 sm:px-10 md:px-24 py-10 font-extrabold w-full h-fit bg-white/30 backdrop-blur-sm shadow-lg">
              <span className="a">賽博</span>
              <BigTitle className=" w-auto h-auto max-h-36"></BigTitle>
              <span className="b">產生器</span>
            </div>
          </div>
        </div>
        <div className="px-[10%] sm:px-[20%] w-full mt-14 md:mt-28 ">
          <div className=" prose">
            <h1>簡介</h1>
            <p>
              線上刮刮樂製作工具，僅需要一張圖片就可以製作高度自訂的線上刮刮樂。製作完成後更可以透過四種模式線上發行。並且針對驗證碼模式提供開發者 api 接口，可將驗證碼獲取邏輯接入其他應用中，每張刮刮樂刮開後會有QR碼可掃描兌獎。
            </p>
            <h1>特色</h1>
            <ul>
              <li>高度可自訂性設計</li>
              <li>可靠驗證邏輯</li>
              <li>QR code 兌獎確認</li>
              <li>開發者 api 接口</li>
            </ul>
            <h1>設計步驟</h1>
            <ol>
              <li>上傳自訂圖片</li>
              <li>設定標題等布局</li>
              <li>框選刮刮樂區域</li>
              <li>設定遊戲區域與種類</li>
              <li>發行</li>
            </ol>
            <h1>發行</h1>
            <ul>
              <li>純遊戲模式：任何人皆可無限次數遊玩</li>
              <li>瀏覽器驗證模式：每個瀏覽器限遊玩一次</li>
              <li>驗證碼模式：每張刮刮樂皆對應到唯一驗證碼，需輸入才可遊玩</li>
              <li>哈希產生模式：依照規則輸入指定字串（例如：生日、姓名等）後依據輸入內容產生刮刮樂</li>
            </ul>
          </div>
          <div className="text-3xl mt-20">
            <h1 className=" w-full text-center"><span>向下滑動查看範例</span><GravityUiCircleChevronsDown className=" inline-block ml-2 mb-4 mt-2 " /></h1>
          </div>
        </div>
        <div className=" h-80 -mt-20 bg-w-to-b">
        </div>
        <div className="bg-black">
          <ImageCarousel></ImageCarousel>
        </div>
      </main>
      <FooterG />
    </div>
  );
}
