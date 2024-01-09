export function CalculateAge(birthDate: Date){

  const dateAtual = new Date();
  const differenceTime = dateAtual.getTime() - birthDate.getTime();
  const age = Math.floor(differenceTime / (365.25 * 24 * 60 * 60 * 1000));
  return age

}
