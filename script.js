document.getElementById("draw").addEventListener("click", function () {
  document.getElementById("result").innerHTML =
  `${judgeRank(total())} `;
  document.getElementById("text").innerHTML =
  `${ichigyoumeText()} <br> ${nigyoumeText()} <br> ${sangyoumeText()} <br> ${yongyoumeText()} <br>`;
  document.getElementById("comment").innerHTML =
  `判決：${hanketsuText()} <br> 作詞：${sakushiText()} <br> 海運：${kaiunText()} <br>
  調剤：${chozaiText()} <br> 陶芸：${togeiText()} <br> 離陸：${ririkuText()} <br>
  逃亡：${toboText()} <br> 展示：${tenjiText()} <br> 査読：${sadokuText()} <br>
  会見：${kaikenText()} <br> 実装：${jissoText()} <br> 割烹：${kappoText()} <br>`;
});
//定義
const a = hanketsu();
const b = sakushi();
const c = kaiun();
const d = chozai();
const e = togei();
const f = ririku();
const g = tobo();
const h = tenji();
const i = sadoku();
const j = kaiken();
const k = jisso();
const l = kappo();
const m = ichigyoume();
const n = nigyoume();
const o = sangyoume();
const p = yongyoume();
//各関数
function hanketsu() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function sakushi() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function kaiun() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function chozai() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function togei() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function ririku() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function tobo() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function tenji() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function sadoku() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function kaiken() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function jisso() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
function kappo() {
  // 0〜7 の乱数（8択）
  const r = Math.floor(Math.random() * 8);

  if (r === 0) {
    return 200;       // ラッキー
  } else if (r === 1) {
    return -200;      // アンラッキー
  } else {
    // 普通（0〜5）
    return Math.floor(Math.random() * 6);
  }
}
//合計点計算
function total() {
  return a + b + c + d + e + f + g + h + i + j + k + l;
}
//ランク判定
function judgeRank(total) {
  if (total >= 600) return "大吉";
  if (total >= 400) return "吉";
  if (total >= 0)   return "中吉";
  if (total >= -200) return "小吉";
  if (total >= -400) return "末吉";
  return "凶";
}
//文章抽選
function textLot(rank) {
    if (rank === "大吉") return 0;
    if (rank === "吉") return 4;
    if (rank === "中吉") return 8;
    if (rank === "小吉") return 12;
    if (rank === "末吉") return 16;
    return 20;
}
function ichigyoume() {
    const r = Math.floor(Math.random() * 4);
    return r + textLot(judgeRank(total()));
}
function nigyoume() {
    const r = Math.floor(Math.random() * 4);
    return r + textLot(judgeRank(total()));
}
function sangyoume() {
    const r = Math.floor(Math.random() * 4);
    return r + textLot(judgeRank(total()));
}
function yongyoume() {
    const r = Math.floor(Math.random() * 4);
    return r + textLot(judgeRank(total()));
}
//ひとことコメント
function hanketsuText() {
    if (a === -200) {
        return "迷う";
    }
    if (a === 0) {
        return "基本に忠実に";
    }
    if (a === 1) {
        return "判例に向き合え";
    }
    if (a === 2) {
        return "時勢を意識せよ";
    }
    if (a === 3) {
        return "直感が当たる";
    }
    if (a === 4) {
        return "慎重な判断を";
    }
    if (a === 5) {
        return "懸念が多い";
    }
    if (a === 200) {
        return "下しやすい";
    }
}
function sakushiText() {
    if (b === -200) {
        return "依頼せよ";
    }
    if (b === 0) {
        return "思いを込めよ";
    }
    if (b === 1) {
        return "韻にこだわれ";
    }
    if (b === 2) {
        return "字数が合わない";
    }
    if (b === 3) {
        return "語彙を増やせ";
    }
    if (b === 4) {
        return "悩んだ末に出る";
    }
    if (b === 5) {
        return "語呂が気に入る";
    }
    if (b === 200) {
        return "降りてくる";
    }
}
function kaiunText() {
    if (c === -200) {
        return "なるべく陸路で";
    }
    if (c === 0) {
        return "ゆとりを持て";
    }
    if (c === 1) {
        return "待てば日和あり";
    }
    if (c === 2) {
        return "波が高い";
    }
    if (c === 3) {
        return "夜は注意せよ";
    }
    if (c === 4) {
        return "風を読むべし";
    }
    if (c === 5) {
        return "協力せよ";
    }
    if (c === 200) {
        return "無事届く";
    }
}
function chozaiText() {
    if (d === -200) {
        return "精彩を欠く";
    }
    if (d === 0) {
        return "確認を怠るな";
    }
    if (d === 1) {
        return "患者に寄り添え";
    }
    if (d === 2) {
        return "毅然と対応せよ";
    }
    if (d === 3) {
        return "話し合え";
    }
    if (d === 4) {
        return "後発品が良い";
    }
    if (d === 5) {
        return "数字に注意を";
    }
    if (d === 200) {
        return "滞りなし";
    }
}
function togeiText() {
    if (e === -200) {
        return "割る";
    }
    if (e === 0) {
        return "火に注意";
    }
    if (e === 1) {
        return "集中できない";
    }
    if (e === 2) {
        return "先人を敬え";
    }
    if (e === 3) {
        return "土を見るべし";
    }
    if (e === 4) {
        return "目が先に肥える";
    }
    if (e === 5) {
        return "変化を恐れるな";
    }
    if (e === 200) {
        return "上出来";
    }
}
function ririkuText() {
    if (f === -200) {
        return "幸先悪し";
    }
    if (f === 0) {
        return "滑走が大事";
    }
    if (f === 1) {
        return "気を引き締めよ";
    }
    if (f === 2) {
        return "安全第一";
    }
    if (f === 3) {
        return "空の上が本番";
    }
    if (f === 4) {
        return "着陸を見据えよ";
    }
    if (f === 5) {
        return "時間がかかる";
    }
    if (f === 200) {
        return "飛躍の年となる";
    }
}
function toboText() {
    if (g === -200) {
        return "包囲されている";
    }
    if (g === 0) {
        return "近場は避けよ";
    }
    if (g === 1) {
        return "肝が冷える";
    }
    if (g === 2) {
        return "ひたすら行け";
    }
    if (g === 3) {
        return "転々とする";
    }
    if (g === 4) {
        return "意表を突くべし";
    }
    if (g === 5) {
        return "道は狭まる";
    }
    if (g === 200) {
        return "見つからない";
    }
}
function tenjiText() {
    if (h === -200) {
        return "見送るが無難";
    }
    if (h === 0) {
        return "時期を見よ";
    }
    if (h === 1) {
        return "準備次第";
    }
    if (h === 2) {
        return "末広がり";
    }
    if (h === 3) {
        return "厳重に管理せよ";
    }
    if (h === 4) {
        return "惜しむべからず";
    }
    if (h === 5) {
        return "工夫を凝らせ";
    }
    if (h === 200) {
        return "好評を博す";
    }
}
function sadokuText() {
    if (i === -200) {
        return "破綻が見つかる";
    }
    if (i === 0) {
        return "素直に受け取れ";
    }
    if (i === 1) {
        return "独自性がない";
    }
    if (i === 2) {
        return "読み手意識";
    }
    if (i === 3) {
        return "軸をぶらすな";
    }
    if (i === 4) {
        return "丁寧な校正を";
    }
    if (i === 5) {
        return "不安に過ごす";
    }
    if (i === 200) {
        return "安し";
    }
}
function kaikenText() {
    if (j === -200) {
        return "炎上する";
    }
    if (j === 0) {
        return "誤解を招く";
    }
    if (j === 1) {
        return "所作に心掛けよ";
    }
    if (j === 2) {
        return "手短に";
    }
    if (j === 3) {
        return "冷静に";
    }
    if (j === 4) {
        return "機転を利かせよ";
    }
    if (j === 5) {
        return "誠意が重要";
    }
    if (j === 200) {
        return "正しく伝わる";
    }
}
function jissoText() {
    if (k === -200) {
        return "残業が続く";
    }
    if (k === 0) {
        return "休息が重要";
    }
    if (k === 1) {
        return "試行錯誤せよ";
    }
    if (k === 2) {
        return "仕様とせよ";
    }
    if (k === 3) {
        return "遅れる";
    }
    if (k === 4) {
        return "人事を尽くせ";
    }
    if (k === 5) {
        return "難産";
    }
    if (k === 200) {
        return "障りなし";
    }
} 
function kappoText() {
    if (l === -200) {
        return "舌が鈍る";
    }
    if (l === 0) {
        return "道具を大切に";
    }
    if (l === 1) {
        return "火加減を見よ";
    }
    if (l === 2) {
        return "良縁は残る";
    }
    if (l === 3) {
        return "伝統に倣うべし";
    }
    if (l === 4) {
        return "時流に合わせよ";
    }
    if (l === 5) {
        return "神は細部に宿る";
    }
    if (l === 200) {
        return "神髄を垣間見る";
    }
}
//おみくじ文章
function ichigyoumeText() {
    if (m === 0) {
        return "愛知に転職して以来の夢叶う。";
    }
    if (m === 1) {
        return "野菜ソムリエの勉強が実る。";
    }
    if (m === 2) {
        return "猫カフェで運命の相手に出会う。";
    }
    if (m === 3) {
        return "写真の公募でギフトが当たる。";
    }
    if (m === 4) {
        return "たらいまわしに好転の兆し。";
    }
    if (m === 5) {
        return "二項定理の解説が腑に落ちる。";
    }
    if (m === 6) {
        return "食事制限の効果が出始める頃。";
    }
    if (m === 7) {
        return "良い除雪機と巡り会う。";
    }
    if (m === 8) {
        return "トランペットを黙々と続けよ。";
    }
    if (m === 9) {
        return "映画化の鍵はニーチェが握る。";
    }
    if (m === 10) {
        return "ハンモックから恋の予感。";
    }
    if (m === 11) {
        return "温泉街で柿を食うとよい。";
    }
    if (m === 12) {
        return "スカートを変えて心機一転。";
    }
    if (m === 13) {
        return "マークシートでミスが起きやすい。";
    }
    if (m === 14) {
        return "展望台では喧嘩をしやすい。";
    }
    if (m === 15) {
        return "チケット購入に影が潜む。";
    }
    if (m === 16) {
        return "漁の結果を受け入れよ。";
    }
    if (m === 17) {
        return "光合成細菌が難関となる。";
    }
    if (m === 18) {
        return "妻の機嫌は打牌に表れる。";
    }
    if (m === 19) {
        return "かぼちゃの値上げに苦しむ。";
    }
    if (m === 20) {
        return "三年前の骨折を思い出す。";
    }
    if (m === 21) {
        return "基礎語を覚え直すべし。";
    }
    if (m === 22) {
        return "本当に一人暮らしか見極めよ。";
    }
    if (m === 23) {
        return "新しい枕はよく試してから。";
    }
}
function nigyoumeText() {
    if (n === 0) {
        return "礼服で海沿いをドライブしても、";
    }
    if (n === 1) {
        return "朝からマトンカレーを食べても、";
    }
    if (n === 2) {
        return "隣人に木工用ボンドを借りても、";
    }
    if (n === 3) {
        return "平成最初期の株価を分析しても、";
    }
    if (n === 4) {
        return "光の三原色のハンガーがあれば、";
    }
    if (n === 5) {
        return "バス停までの坂を歩いたならば、";
    }
    if (n === 6) {
        return "雨上がりに本屋に行ったならば、";
    }
    if (n === 7) {
        return "ガイドに従ってトイレを使えば、";
    }
    if (n === 8) {
        return "ペットの兎を甘やかし過ぎれば、";
    }
    if (n === 9) {
        return "峠の友人を家族と訪ねたならば、";
    }
    if (n === 10) {
        return "左手の箸で豆腐を刺したならば、";
    }
    if (n === 11) {
        return "政治家を三つ編みにしたならば、";
    }
    if (n === 12) {
        return "夢でけん玉を成功させたならば、";
    }
    if (n === 13) {
        return "手羽先を酢醤油で食べたならば、";
    }
    if (n === 14) {
        return "旅先で腕立て伏せをしたならば、";
    }
    if (n === 15) {
        return "年下と商店街で合流したならば、";
    }
    if (n === 16) {
        return "アライグマを裸眼で見たならば、";
    }
    if (n === 17) {
        return "半袖でバリウムを飲んだならば、";
    }
    if (n === 18) {
        return "碧眼のキャラを曇らせたならば、";
    }
    if (n === 19) {
        return "エスカレーターで歩いたならば、";
    }
    if (n === 20) {
        return "実家の屏風にチワワを描いても、";
    }
    if (n === 21) {
        return "職場の給湯室に名前を付けても、";
    }
    if (n === 22) {
        return "結婚情報誌に夕日を浴びせても、";
    }
    if (n === 23) {
        return "引っ越す頻度で雨戸を閉じても、";
    }
}
function sangyoumeText() {
    if (o === 0) {
        return "雲間から日が差す。";
    }
    if (o === 1) {
        return "誤字を見逃さない。";
    }
    if (o === 2) {
        return "べた塗りがはみ出ない。";
    }
    if (o === 3) {
        return "桂馬では詰まない。";
    }
    if (o === 4) {
        return "切手をなくさない。";
    }
    if (o === 5) {
        return "風呂場で寝落ちない。";
    }
    if (o === 6) {
        return "眼鏡が曇らない。";
    }
    if (o === 7) {
        return "爪先を濡らさない。";
    }
    if (o === 8) {
        return "三日坊主に終わる。";
    }
    if (o === 9) {
        return "地下室が暗くなる。";
    }
    if (o === 10) {
        return "ダブルドリブルをする。";
    }
    if (o === 11) {
        return "首都高で間違える。";
    }
    if (o === 12) {
        return "コードが絡まない。";
    }
    if (o === 13) {
        return "水槽が濁らない。";
    }
    if (o === 14) {
        return "喫茶店で争わない。";
    }
    if (o === 15) {
        return "ボタンが外れない。";
    }
    if (o === 16) {
        return "喫煙所が見つからない。";
    }
    if (o === 17) {
        return "グミを食べ損ねる。";
    }
    if (o === 18) {
        return "受付で待たされる。";
    }
    if (o === 19) {
        return "左肩が気にかかる。";
    }
    if (o === 20) {
        return "フロア案内図で躓く。";
    }
    if (o === 21) {
        return "孫は容姿を顧みない。";
    }
    if (o === 22) {
        return "記念日を忘れられる。";
    }
    if (o === 23) {
        return "ブレーカーが落ちる。";
    }
}
function yongyoumeText() {
    if (p === 0) {
        return "木魚の手入れをせよ。";
    }
    if (p === 1) {
        return "石鹸に良縁あり。";
    }
    if (p === 2) {
        return "星間距離を意識せよ。";
    }
    if (p === 3) {
        return "ぬか床も好転する。";
    }
    if (p === 4) {
        return "盗塁は慎重にやれ。";
    }
    if (p === 5) {
        return "ミシンを買い替えよ。";
    }
    if (p === 6) {
        return "涙袋を意識せよ。";
    }
    if (p === 7) {
        return "目薬は要注意。";
    }
    if (p === 8) {
        return "和三盆を常備せよ。";
    }
    if (p === 9) {
        return "画鋲を活用せよ。";
    }
    if (p === 10) {
        return "ヒーラーを見直せ。";
    }
    if (p === 11) {
        return "カクテルに新しい風。";
    }
    if (p === 12) {
        return "数独は控えよ。";
    }
    if (p === 13) {
        return "茶室を片付けよ。";
    }
    if (p === 14) {
        return "標識をよく見よ。";
    }
    if (p === 15) {
        return "フリスビーに注意。";
    }
    if (p === 16) {
        return "離島をよく見よ。";
    }
    if (p === 17) {
        return "松明に良縁あり。";
    }
    if (p === 18) {
        return "パターを買い替えよ。";
    }
    if (p === 19) {
        return "肥料の残りに注意。";
    }
    if (p === 20) {
        return "天体観測をせよ。";
    }
    if (p === 21) {
        return "土鍋を大事にせよ。";
    }
    if (p === 22) {
        return "風水は程々に。";
    }
    if (p === 23) {
        return "椿を愛でよ。";
    }
}
//おわり