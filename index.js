function introduction(string) {
    const hello = "Hi, my name is";
    const name = string;
    let fullIntroduction = `${hello} ${name}.`;
    return fullIntroduction;
  }
  
function introductionWithLanguage(name, language) {
  const hello = "Hi, my name is";
  const learn = "and I am learning to program in"
  let fullIntroduction1 = `${hello} ${name} ${learn} ${language}.`
  return fullIntroduction1;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  const hello = "Hi, my name is";
  const learn = "and I am learning to program in"
  let fullIntroduction1 = `${hello} ${name} ${learn} ${language}.`
  return fullIntroduction1;
}