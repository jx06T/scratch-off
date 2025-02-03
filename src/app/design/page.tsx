import AnimatedButton from "@/components/AnimatedButton";
import FooterG from "@/components/FooterG";
import Link from "next/link";
export default function DesignHome() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen mt-36 px-[10%] sm:px-[20%] flex">
        <StepsSidebar />
        <div className=" prose">
          <h1>此設計已不存在</h1>
          <h2>可能原因</h2>
          <ul>
            <li>此設計已被擁有者刪除：請聯繫擁有者</li>
            <li>此設計違反服務條款</li>
            <li>伺服器錯誤：請稍後再試若問題仍存在請聯繫開發人員</li>
          </ul>
        </div>
        <AnimatedButton cls=" mt-10" url="/" text="返回首頁"></AnimatedButton>
      </main>
      <FooterG />
    </div>
  );
}

interface StepT { text: string, hash: string }

function AStep({ hash, text }: StepT) {
  return (
    <div className=" py-2 px-6 border-red-500 border-2 rounded-full bg-red-100">
      <Link href={hash} >{text}</Link>
    </div>
  )
}
function StepsSidebar() {
  const stepsList: StepT[] = [
    { text: "上傳圖片", hash: "upload-image" },
    { text: "布局設定", hash: "layout" },
    { text: "刮除區域設定", hash: "area" },
    { text: "遊戲選擇", hash: "game" },
  ]
  return (
    <div className=" space-y-4">
      {stepsList.map((e) => (
        <AStep {...e} />
      ))}
    </div>
  )
}