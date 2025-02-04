import FooterG from "@/components/FooterG";

export default function PrivacyPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">

        <div className="px-[10%] sm:px-[20%] w-full mt-14 md:mt-28 mb-52 ">
          <div className=" prose">
            <h1>隱私權政策</h1>
            <p>
              除下列資訊外，本工具不會蒐集使用者的其他任何資料，而下列搜尋資料不會與使用者真實身分關連也不會用做商業用途。
            </p>
            <ul>
              <li>由使用者設定的作者名稱</li>
              <li>使用者上傳之檔案</li>
            </ul>
          </div>
        </div>

      </main>
      <FooterG />
    </div>
  );
}
