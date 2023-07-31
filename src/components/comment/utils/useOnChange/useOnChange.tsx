import { useSetAtom } from 'jotai';
import { disabledStore, errorStore } from '../../store';

export const useOnChange: Function = (refElement: React.RefObject<HTMLTextAreaElement>) => {
  const $textarea = refElement;
  const setDisabled = useSetAtom(disabledStore);
  const setError = useSetAtom(errorStore);

  const onChange = () => {
    if (!$textarea.current) {
      return;
    }

    const validationText =
      /(愛撫|アクメ|アナル|ペニス|おっぱい|ちんこ|レイプ|SEX|セックス|巨乳|貧乳|爆乳|ちっぱい|巨根|イク|イラマチオ|淫乱|エクスタシー|オナニー|黄金|仮性包茎|ガマン汁|顔面騎乗|亀頭|亀甲縛り|くぱぁ|クンニリングス|コンドーム|サド|ザーメン|Gスポット|四十八手|真性包茎|スカトロ|スパンキング|スワッピング|前戯|センズリ|潜望鏡|前立腺|早漏|祖チン|だいしゅきホールド|ダッチワイフ|ちんぐり返し|ディルド|デブ専|電マ|童貞|土手|ドライオーガズム|中折れ|繩師|尿道プレイ|ヌーディスト|寝取られ|パイパン|ェラ|バラ鞭|ぶっかけ|筆下ろし|ペッティング|ペニス|ポルチオ|マゾ|マラ|みこすり半|夢精|ムラムラ|名器|悶える|ヤリチン|ヤリマン|夜這い|ラブジュース|ローション|陰毛|射精|顔射|死ね|死|しね|シネ|ﾀﾋﾈ|タヒネ|クズ|くず|きもい|キモい|キモイ|アホ|あほ|ボケ|ぼけ|カス|かす|ハゲ|はげ|デブ|でぶ|チビ|ちび|クソ|くそ|きえろ|キエロ|消えろ)/;

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

  return onChange;
};
