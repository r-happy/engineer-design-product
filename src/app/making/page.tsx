import { PageTitle } from "@/components/PageTitle/PageTitle";
import clsx from "clsx";

import * as s from "./page.css";
import * as w from "@/styles/whole.css";
import { MakingVideo } from "@/components/MakingVideo/MakingVideo";
import { TextLink } from "@/components/TextLink/TextLink";
import Image from "next/image";

export default function Making() {
  return (
    <div className={clsx(w.container)}>
      <PageTitle title="制作過程" />
      <div className={clsx(s.about_body)}>
        <div>
          <h2>パズル本体</h2>
          <div className={clsx(w.paddingSpaceSm)}>
            <p>パズル本体は3dプリンタを用い作成しました。</p>
          </div>
          <MakingVideo />
        </div>
        <div>
          <h2>Webアプリ</h2>
          <div className={clsx(w.paddingSpaceSm)}>
            <p>このWebアプリは下記の二人によって制作されています。</p>
            <TextLink href="https://github.com/r-happy" blank={true}>
              rhappy,{" "}
            </TextLink>
            <TextLink href="https://github.com/96haru" blank={true}>
              96haru
            </TextLink>
            <p>
              このWebアプリのフロントエンドはNextjsを使用しておりバックエンド（データベース）はmicroCMSを使用しています。
              CSSを書く際には vanilla-extractを使用しています。
            </p>
          </div>
        </div>
        <div>
          <h2>QRコード</h2>
          <div className={clsx(w.paddingSpaceSm)}>
            <p>パズルには以下のようなQRコードを貼り付ける予定である。</p>
            <div className={clsx(s.image_wrapper)}>
              <Image
                alt="japan"
                src="/img/flags/japan.png"
                width={320}
                height={320}
                className={clsx(s.image)}
              />
              <Image
                alt="america"
                src="/img/flags/america.png"
                width={320}
                height={320}
                className={clsx(s.image)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
