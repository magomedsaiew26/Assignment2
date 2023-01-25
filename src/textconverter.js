import letterA from "./LostInTranslation_Resources/individial_signs/a.png"
import letterB from "./LostInTranslation_Resources/individial_signs/b.png"
import letterC from "./LostInTranslation_Resources/individial_signs/c.png"
import letterD from "./LostInTranslation_Resources/individial_signs/d.png"
import letterE from "./LostInTranslation_Resources/individial_signs/e.png"
import letterF from "./LostInTranslation_Resources/individial_signs/f.png"
import letterG from "./LostInTranslation_Resources/individial_signs/g.png"
import letterH from "./LostInTranslation_Resources/individial_signs/h.png"
import letterI from "./LostInTranslation_Resources/individial_signs/i.png"
import letterJ from "./LostInTranslation_Resources/individial_signs/j.png"
import letterK from "./LostInTranslation_Resources/individial_signs/k.png"
import letterL from "./LostInTranslation_Resources/individial_signs/l.png"
import letterM from "./LostInTranslation_Resources/individial_signs/m.png"
import letterN from "./LostInTranslation_Resources/individial_signs/n.png"
import letterO from "./LostInTranslation_Resources/individial_signs/o.png"
import letterP from "./LostInTranslation_Resources/individial_signs/p.png"
import letterQ from "./LostInTranslation_Resources/individial_signs/q.png"
import letterR from "./LostInTranslation_Resources/individial_signs/r.png"
import letterS from "./LostInTranslation_Resources/individial_signs/s.png"
import letterT from "./LostInTranslation_Resources/individial_signs/t.png"
import letterU from "./LostInTranslation_Resources/individial_signs/u.png"
import letterV from "./LostInTranslation_Resources/individial_signs/v.png"
import letterW from "./LostInTranslation_Resources/individial_signs/w.png"
import letterX from "./LostInTranslation_Resources/individial_signs/x.png"
import letterY from "./LostInTranslation_Resources/individial_signs/y.png"
import letterZ from "./LostInTranslation_Resources/individial_signs/z.png"



const dataset = {
a:
    letterA,
b:
  letterB,
c:
  letterC,
d:
  letterD,
e:
  letterE,
f:
  letterF,
g:
  letterG,
h:
  letterH,
i:
  letterI,
j:
  letterJ,
k:
  letterK,
l:
  letterL,
m:
  letterM,
n:
  letterN,
o:
  letterO,
p:
  letterP,
q:
  letterQ,
r:
  letterR,
s:
  letterS,
t:
  letterT,
u:
  letterU,
v: 
  letterV,
w:
  letterW,
x:
  letterX,
y:  
  letterY,
z:
  letterZ

  };

export function convertText(text) {
    let urlArray = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i].toLowerCase()>= "a"&& text [i].toLowerCase()<="z"){ 
        urlArray.push(dataset[text[i].toLowerCase()]);
      }
      else {
        urlArray.push ("https://wallpapercave.com/wp/wp7632525.jpg")
      }

    }
    return urlArray;
  }