
proverbsOriginal = [
    "Ум хорошо, а два лучше.",
    "Ум — горячая штука.",
    "Ум всё голова.",
    "Умом Россию не понять.",
    "Ум бережет, а глупость губит.",
    "Ум в голову приходит.",
    "Ум от ума не горит.",
    "Умом нагружен, а волосы развеваются.",
    "Умом обдумал, а ногами пошел.",
    "Ум — сокровище, не пропадет без него и копье на ветру.",
    "Ум — грех, а бес — мера.",
    "Ум есть богатство.",
    "Ум роднит народы.",
    "Ум краток, да забот — бездна.",
    "Ум не камень, взял и положил.",
    "Ум не велит, а наставляет.",
    "Ум с мерой, а глупость без меры.",
    "Ум — сокол, глаз его — телескоп.",
    "Ум — не конская морда, не разобьешь.",
    "Ум — семь пядей во лбу.",
    "Ум — не барсук, в нору не залезет.",
    "Ум в голове, а не на ветру.",
    "Ум греет душу, а глупость терпение.",
    "Ум служит человеку, а глупость — хозяином.",
    "Ум мил, да безумству хозяин.",
    "Ум в труде, да наслаждение в праздности.",
    "Ум глаза исправляет.",
    "Ум человека не обманешь.",
    "Ум на подобии огня — без сна не останешься.",
    "Ум к уму приходит.",
    "Ум с пользой тратит время.",
    "Ум желание творит.",
    "Ум общего дела дело.",
    "Ум — друг, а воля — враг.",
    "Ум — бесценное сокровище.",
    "Ум тонок, да разум невелик.",
    "Ум — враг бедности.",
    "Ум — теремок, да не на прокол.",
    "Ум силен, да не камень.",
    "Ум рассудит, что сердце не посоветует.",
    "Ум — подкова, а топор — ось.",
    "Ум легче камня, да весомей золота.",
    "Ум не вешать на гроздья.",
    "Ум — не мешок, на плечи не вешай.",
    "Ум — лучшая победа.",
    "Ум — в суде велик, а в деле своем мал.",
    "Ум голове краса.",
    "Ум — сокровище, а глупость — нищета.",
    "Ум человека — огонь, а глаза — масло.",
    "Ум — путь, а дорога — конец.",
    "Ум стоит денег.",
    "Ум от смеха бьет в ладоши.",
    "Ум — коза, к барскому плечу привыкает.",
    "Ум — лезвие, а лень — ржавчина.",
    "Ум на вершине — мир в руках.",
]

variantsOriginal = [
			'кот',
			'шеф',
			'мозг',
			'лес',
			'фолк',
			'код',
			'рот',
			'мёд',
			'лук',
			'лес',
			'год',
			'час',
			'друг',
			'муж',
			'айфон',
			'труд',
]

// count = [];

function generateProverb(variants, proverbs) {
    
    const randomProverbIndex = Math.floor(Math.random() * proverbs.length);
    const randomProverb = proverbs[randomProverbIndex];
    proverbs.splice(randomProverbIndex, 1);
    
    const randomVariantIndex = Math.floor(Math.random() * variants.length);
       
    return randomProverb.replace("Ум", variants[randomVariantIndex]);
    variants.splice(randomVariantIndex, 1);
  }


function generateMultipleProverbs(count, variants, proverbs) {
  const results = [];
  for (let i = 0; i < count; i++) {
  const newProverd2 = generateProverb(variants, proverbs);

  if (newProverd2) results.push(newProverd2)
  else break;
}
  return results;
}


function displayProverbs(proverbsList) {
  const ulElement = document.getElementById("result");

  ulElement.innerHTML = " ";
 
  for (const proverb of proverbsList) {
  const liElement = document.createElement("li");
  liElement.textContent = proverb;
  ulElement.appendChild(liElement);
  }
}

function getProverds() {
  let proverbs = proverbsOriginal.slice();
  let variants = variantsOriginal.slice();

  const count = parseInt(prompt("Введите количество пословиц: "));

  if (isNaN(count) || count <= 0) {
    alert("Введите корректное количество пословиц.");
    return count;
  }
  const newListPoslovis = generateMultipleProverbs(count, variants, proverbs);
  displayProverbs(newListPoslovis);
}
  
 
  
  


