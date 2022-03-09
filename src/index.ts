//Sistema que devuelve cantidad de cada caractér ingresado en un prompt
//y no admite caracteres con acentos.
//Calcula probabilidad de aparicion de cada letra

//Variables globales
let textoIngresado:string = String(prompt("Ingrese un texto"));
let letras = "ñáéíóú´";
let calculoProbabilidad:string;

//Funcion que pasa texto a minuscula y verifica caracteres no validos.
function analizarCaracteres(textoIngresado) {
  //textoIngresado = String(prompt("Ingresar texto"));
  textoIngresado = textoIngresado.toLowerCase();
  for (let i = 0; i < textoIngresado.length; i++) {
    if (letras.indexOf(textoIngresado.charAt(i), 0) !== -1) {
      console.log("ERROR - Caractér no valido en el texto.");
      return 1;
    }
  }
  console.log(`${textoIngresado}`);
  return 0;
}

//Bucles que cuentan caracteres en el string ingresado.
let indiceA = [],indiceB = [],indiceC = [],indiceD = [],indiceE = [],indiceF = [],
indiceG = [],indiceH = [],indiceI = [],indiceJ = [],indiceK = [],indiceL = [],indiceM = [],
indiceN = [],indiceO = [],indiceP = [],indiceQ = [],indiceR = [],indiceS = [],indiceT = [],
indiceU = [],indiceV = [],indiceW = [],indiceX = [],indiceY = [],indiceZ = [];
for (let i = 0; i < textoIngresado.length; i++) {
  if (textoIngresado[i].toLowerCase() === "a") indiceA.push(i);
  if (textoIngresado[i].toLowerCase() === "b") indiceB.push(i);
  if (textoIngresado[i].toLowerCase() === "c") indiceC.push(i);
  if (textoIngresado[i].toLowerCase() === "d") indiceD.push(i);
  if (textoIngresado[i].toLowerCase() === "e") indiceE.push(i);
  if (textoIngresado[i].toLowerCase() === "f") indiceF.push(i);
  if (textoIngresado[i].toLowerCase() === "g") indiceG.push(i);
  if (textoIngresado[i].toLowerCase() === "h") indiceH.push(i);
  if (textoIngresado[i].toLowerCase() === "i") indiceI.push(i);
  if (textoIngresado[i].toLowerCase() === "j") indiceJ.push(i);
  if (textoIngresado[i].toLowerCase() === "k") indiceK.push(i);
  if (textoIngresado[i].toLowerCase() === "l") indiceL.push(i);
  if (textoIngresado[i].toLowerCase() === "m") indiceM.push(i);
  if (textoIngresado[i].toLowerCase() === "n") indiceN.push(i);
  if (textoIngresado[i].toLowerCase() === "o") indiceO.push(i);
  if (textoIngresado[i].toLowerCase() === "p") indiceP.push(i);
  if (textoIngresado[i].toLowerCase() === "q") indiceQ.push(i);
  if (textoIngresado[i].toLowerCase() === "r") indiceR.push(i);
  if (textoIngresado[i].toLowerCase() === "s") indiceS.push(i);
  if (textoIngresado[i].toLowerCase() === "t") indiceT.push(i);
  if (textoIngresado[i].toLowerCase() === "u") indiceU.push(i);
  if (textoIngresado[i].toLowerCase() === "v") indiceV.push(i);
  if (textoIngresado[i].toLowerCase() === "w") indiceW.push(i);
  if (textoIngresado[i].toLowerCase() === "x") indiceX.push(i);
  if (textoIngresado[i].toLowerCase() === "y") indiceY.push(i);
  if (textoIngresado[i].toLowerCase() === "z") indiceZ.push(i);
}

//Llamado de arreglo analizaCaracteres
analizarCaracteres(textoIngresado);

//Muentra en consola las apariciones de letras.
console.log(`Letra A aparece ${indiceA.length} veces`);
console.log(`Letra B aparece ${indiceB.length} veces`);
console.log(`Letra C aparece ${indiceC.length} veces`);
console.log(`Letra D aparece ${indiceD.length} veces`);
console.log(`Letra E aparece ${indiceE.length} veces`);
console.log(`Letra F aparece ${indiceF.length} veces`);
console.log(`Letra G aparece ${indiceG.length} veces`);
console.log(`Letra H aparece ${indiceH.length} veces`);
console.log(`Letra I aparece ${indiceI.length} veces`);
console.log(`Letra J aparece ${indiceJ.length} veces`);
console.log(`Letra K aparece ${indiceK.length} veces`);
console.log(`Letra L aparece ${indiceL.length} veces`);
console.log(`Letra M aparece ${indiceM.length} veces`);
console.log(`Letra N aparece ${indiceN.length} veces`);
console.log(`Letra O aparece ${indiceO.length} veces`);
console.log(`Letra P aparece ${indiceP.length} veces`);
console.log(`Letra Q aparece ${indiceQ.length} veces`);
console.log(`Letra R aparece ${indiceR.length} veces`);
console.log(`Letra S aparece ${indiceS.length} veces`);
console.log(`Letra T aparece ${indiceT.length} veces`);
console.log(`Letra U aparece ${indiceU.length} veces`);
console.log(`Letra V aparece ${indiceV.length} veces`);
console.log(`Letra W aparece ${indiceW.length} veces`);
console.log(`Letra X aparece ${indiceX.length} veces`);
console.log(`Letra Y aparece ${indiceY.length} veces`);
console.log(`Letra Z aparece ${indiceZ.length} veces`);

//Calcula probabilidad de aparicion de cada letra.
if (textoIngresado.length => 0) {
  let calculoA,calculoB,calculoC,calculoD,calculoE,calculoF,calculoG,calculoH,calculoI,calculoJ,
  calculoK,calculoL,calculoM,calculoN,calculoO,calculoP,calculoQ,calculoR,calculoS,calculoT,
  calculoU,calculoV,calculoW,calculoX,calculoY,calculoZ;
  calculoA = textoIngresado.length * indiceA.length / 100;
  calculoB = textoIngresado.length * indiceB.length / 100;
  calculoC = textoIngresado.length * indiceC.length / 100;
  calculoD = textoIngresado.length * indiceD.length / 100;
  calculoE = textoIngresado.length * indiceE.length / 100;
  calculoF = textoIngresado.length * indiceF.length / 100;
  calculoG = textoIngresado.length * indiceG.length / 100;
  calculoH = textoIngresado.length * indiceH.length / 100;
  calculoI = textoIngresado.length * indiceI.length / 100;
  calculoJ = textoIngresado.length * indiceJ.length / 100;
  calculoK = textoIngresado.length * indiceK.length / 100;
  calculoL = textoIngresado.length * indiceL.length / 100;
  calculoM = textoIngresado.length * indiceM.length / 100;
  calculoN = textoIngresado.length * indiceN.length / 100;
  calculoO = textoIngresado.length * indiceO.length / 100;
  calculoP = textoIngresado.length * indiceP.length / 100;
  calculoQ = textoIngresado.length * indiceQ.length / 100;
  calculoR = textoIngresado.length * indiceR.length / 100;
  calculoS = textoIngresado.length * indiceS.length / 100;
  calculoT = textoIngresado.length * indiceT.length / 100;
  calculoU = textoIngresado.length * indiceU.length / 100;
  calculoV = textoIngresado.length * indiceV.length / 100;
  calculoW = textoIngresado.length * indiceW.length / 100;
  calculoX = textoIngresado.length * indiceX.length / 100;
  calculoY = textoIngresado.length * indiceY.length / 100;
  calculoZ = textoIngresado.length * indiceZ.length / 100;

//Muestra en consola la probabilidad de aparicion de cada letra.
console.log(`Probabilidad letra A ${calculoA}%`);
console.log(`Probabilidad letra B ${calculoB}%`);
console.log(`Probabilidad letra C ${calculoC}%`);
console.log(`Probabilidad letra D ${calculoD}%`);
console.log(`Probabilidad letra E ${calculoE}%`);
console.log(`Probabilidad letra F ${calculoF}%`);
console.log(`Probabilidad letra G ${calculoG}%`);
console.log(`Probabilidad letra H ${calculoH}%`);
console.log(`Probabilidad letra I ${calculoI}%`);
console.log(`Probabilidad letra J ${calculoJ}%`);
console.log(`Probabilidad letra K ${calculoK}%`);
console.log(`Probabilidad letra L ${calculoL}%`);
console.log(`Probabilidad letra M ${calculoM}%`);
console.log(`Probabilidad letra N ${calculoN}%`);
console.log(`Probabilidad letra O ${calculoO}%`);
console.log(`Probabilidad letra P ${calculoP}%`);
console.log(`Probabilidad letra Q ${calculoQ}%`);
console.log(`Probabilidad letra R ${calculoR}%`);
console.log(`Probabilidad letra S ${calculoS}%`);
console.log(`Probabilidad letra T ${calculoT}%`);
console.log(`Probabilidad letra U ${calculoU}%`);
console.log(`Probabilidad letra V ${calculoV}%`);
console.log(`Probabilidad letra W ${calculoW}%`);
console.log(`Probabilidad letra X ${calculoX}%`);
console.log(`Probabilidad letra Y ${calculoY}%`);
console.log(`Probabilidad letra Z ${calculoZ}%`);
}

console.log(`Total caracteres contabilizados en el texto = ${textoIngresado.length}`);
