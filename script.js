const players = [
"macropolice","Килирон","LampA","Asmon","КИСЛЫЙй","Helltrap","Аид","Its","Paparazi",
"GhostOFF","Чебурек","Caesar","Parasite","Пончики","VladdieShnow","тык","Fizdek",
"macropenice","Техницей","Sirocco","TCT","Malina","PaperAkeno","Щещевна","Tiipi",
"Ivy","Samsa","Буги","ХочуТебяЮзать","ash","saypink","Неотвратимость","ЛинСяо",
"ОйВсё","MrBarsik","Ересь","Bonvechio","Зедакуве","Яуджа","Агрон","Elemental",
"Люсильда","эногорд","Dalek","matrix","Купитман","Санторини","ВикаНочь","tears",
"Aggressive","Зорк","Безымянный1","пэпэ","Gunna","Lissania","Mataimp","tvarinka",
"МусорЪ","РУС","DeadEnd","ЗаговорНаПонос","СилаЭтила","МоросЬ","УпалНамоченный",
"ХРАЗ","амПыхнем","Баттерс","БОГ","ВанекСпецБоец","Makson","ХотьКтоТо","Рони",
"Принцип","Matanda","Holo","nikiavi","НеПал","Gilticus","Мурный","Laymoon",
"Овсянкин","ВанильнаяМята","ТукТукКтоТам","mianhua","Аминэлька","Шизофрения",
"ЭтикаМелодии","ЧумоваЯ","Атаман","августина","Вырезан","SORROW","чиф","Marilyn",
"Пятисотый","Рысь","Нулявой","Бубон","Хассельхофф","SOMNIA","Грин","Ингвар",
"Донатэр","Игуаныч","Профилактика","Дурачьё","Питон","Парфюмер","Такахиро",
"FiveSeven","Шутник","НиКиТкА","Амбрера","Рексар","Striix","Вишня",
"МаргареТТетчер","Жэка","bebriks","Шишка","МерсорР","АбортМозгА","Ineo","Иша",
"Страйкер","КузнецСмерти","АльПачин","Windmark","ПрофиМэн","Катрина","СтарыйМаг",
"Ёрш","Энни","Тойра","PresidenteLULA","Nice","Эскейт","Хаузер","ReDiskaa",
"Krodar","Стэтхэм","НоТерДамДеПари","MENDES","Mef","Orti"
];

document.getElementById("count").textContent = players.length;

const result = document.getElementById("result");
const btn = document.getElementById("btn");
let rolling = false;

btn.onclick = () => {
  if (rolling) return;
  rolling = true;

  result.classList.add("roll");

  const interval = setInterval(() => {
    result.textContent = players[Math.floor(Math.random() * players.length)];
  }, 70);

  setTimeout(() => {
    clearInterval(interval);
    result.textContent = players[Math.floor(Math.random() * players.length)];
    result.classList.remove("roll");
    rolling = false;
  }, 3000);
};
