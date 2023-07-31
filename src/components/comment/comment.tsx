import { FunctionComponent, useRef, useState } from 'react';
import styles from './styles.module.scss';

export const Comment: FunctionComponent = () => {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const $textarea = useRef<HTMLTextAreaElement>(null);

  const handlerOnChange = () => {
    if (!$textarea.current) {
      return;
    }

    const validationText =
      /(愛撫|アクメ|アナル|ペニス|おっぱい|ちんこ|レイプ|SEX|セックス|巨乳|貧乳|爆乳|ちっぱい|巨根|イク|イラマチオ|淫乱|エクスタシー|オナニー|黄金|仮性包茎|ガマン汁|顔面騎乗|亀頭|亀甲縛り|くぱぁ|クンニリングス|コンドーム|サド|ザーメン|Gスポット|四十八手|真性包茎|スカトロ|スパンキング|スワッピング|前戯|センズリ|潜望鏡|前立腺|早漏|祖チン|だいしゅきホールド|ダッチワイフ|ちんぐり返し|ディルド|デブ専|電マ|童貞|土手|ドライオーガズム|中折れ|繩師|尿道プレイ|ヌーディスト|寝取られ|パイパン|ェラ|バラ鞭|ぶっかけ|筆下ろし|ペッティング|ペニス|ポルチオ|マゾ|マラ|みこすり半|夢精|ムラムラ|名器|悶える|ヤリチン|ヤリマン|夜這い|ラブジュース|ローション|陰毛|射精|顔射|死ね|死|しね|シネ|ﾀﾋﾈ|タヒネ|タヒね|クズ|くず|きもい|キモい|キモイ|アホ|あほ|ボケ|ぼけ|カス|かす|ハゲ|はげ|デブ|でぶ|チビ|ちび|クソ|くそ|きえろ|キエロ|消えろ)/;

    if ($textarea.current.value.length < 1) {
      setDisabled(true);
      return;
    }

    if (new RegExp(validationText).test($textarea.current.value)) {
      setError(true);
      setDisabled(true);
      return;
    }

    setDisabled(false);
    setError(false);
  };

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>コメント</h2>

      <textarea
        ref={$textarea}
        cols={30}
        rows={10}
        className={styles.textarea}
        onChange={handlerOnChange}
      ></textarea>

      {error && <span className={styles.error}>投稿できない内容が含まれています。</span>}

      <button type="submit" className={`${styles.button} ${disabled && styles.disabled}`}>
        投稿
      </button>

      <div className={styles.notice}>
        <p className={styles.text}>※匿名でコメントすることができます。</p>
        <p className={styles.text}>
          ※皆様の安全と快適なコミュニケーションを保つため、他のユーザーに対する誹謗中傷や不適切な発言は厳禁とします。（当アプリの利用規約に違反する行為は、アカウントの停止措置を含む適切な対応を取らせていただきます。）
        </p>
        <p className={styles.text}>
          ※個人情報の公開や共有は、自身や他人の安全を確保するため、住所、電話番号、メールアドレスなどの個人情報は絶対に公開しないでください。
        </p>
      </div>
    </form>
  );
};
