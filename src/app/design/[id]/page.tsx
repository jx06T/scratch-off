"use client"
import { useParams } from "next/navigation";
import FooterG from "@/components/FooterG";

export default function DesignHome() {
  const params = useParams(); // 取得動態參數
  const userId = params.id; // `id` 對應 URL 的參數

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen mt-36 px-[10%] sm:px-[20%]">
        <div className=" prose">
          <h1>此設計（{userId}）已不存在</h1>
          <h2>可能原因</h2>
          <ul>
            <li>此設計已被擁有者刪除：請聯繫擁有者</li>
            <li>此設計違反服務條款</li>
            <li>伺服器錯誤：請稍後再試若問題仍存在請聯繫開發人員</li>
          </ul>
        </div>
      </main>
     <FooterG/>
    </div>
  );
}
