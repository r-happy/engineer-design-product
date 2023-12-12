import clsx from "clsx";

// import * as s from "./page.css"
import * as w from "@/styles/whole.css";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function About() {
  return (
    <div className={clsx(w.container)}>
      <PageTitle title="about" />
      <h1>2年5組 F班</h1>
      <br />
      <h2>メンバー</h2>
      <table>
        <ol>IE系：黒崎陽暉 奥原啓太 橋爪黎</ol>
        <ol>MR系：百瀬千宙 割田流星</ol>
      </table>
      <br />
      <h2>チームの紹介</h2>
      <p>
        チーム名は、最近流行りのchatGPTに「名前を考えて」と尋ね、返ってきた名前をひらがなにしました。特に深い理由はないけれど、印象に残るようにしました。
      </p>
      <br />
      <h2>作品の紹介</h2>
      <p>
        「私たちが作成しているのは、楽しく詳しく世界を学べる地図」です。
        <br />
        この作品は、ＳＤＧｓの目標のひとつである「質の高い教育をみんなに」を達成することに貢献できると考える。また、このほかにもその国について知ることによって「働きがいも、経済成長も」の中の経済成長を促進できると考える。
        <br />
      </p>
      <br />
      <h2>作品の特徴</h2>
      <p>
        質の高い教育をみんなには、楽しく国名や、国の位置、国の特徴や文化について知ることができると考えるから。また、パズルという形式をとることで、インプットだけでなくアウトプットもできるため、通常よりも効率よく学習ができると考えるから。そして、働きがいも経済成長もについては、幅広い人に、その国の文化や特徴、遺産などを知ってもらうことによって、知らなかったけど行ってみたい！といったことが期待できると考える。それにより、多少なりとも観光による経済効果が期待できると考える。
      </p>
      <br />
      <h2>作品の制作手順</h2>
      <p>
        主要な世界の地図のパズルを3dプリンタ-で作成する。(イメージはくもんの世界地図パズル)それぞれのパズルの中(または裏面)にQRコードやICチップなどのデータを入出力できるものを取り付ける。そして、国のピースごと、スマホなどにかざすとその国ならではの(ヒントとなる)情報や画像を表示できるようにする。情報、画像の内容は、その国ならではの文化や食事、遺産などを考えている。最初は、長野県の市町村で作成しようと考えていたが、細かすぎるのと単純に数が多かったため世界にした。世界も難しそうであれば日本地図に変更する可能性もある。
      </p><br />
      <h2>制作の取り組み概要</h2>
      <p>
      まず、二手に分かれる。その後片方のグループは3Dプリンターを用いて、実際に世界パズルを制作する。必要な技術として、パズルを作るためのモデリング、3dプリンターを扱う技術などを考えている。これは、専門的な知識が必要だと考えるため、メンターまたはアドバイザーの先生についてもらいたいと考えている。そして、もう片方のグループは、スマートフォンで情報を表示するための簡単なアプリケーションを作成する。それと同時に入出力できるデバイスも同時に作成する。アプリケーションなどを作成している間に、パズルの作成が完了すると考えられるため、終了次第、パズル作成版にはそれぞれの国についての情報収集の作業をしてもらうようにする。
      </p>
    </div>
  );
}
