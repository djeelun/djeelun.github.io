
// Alternate colors for christmas garlands!
const garland = ".:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.";
const containers = document.getElementsByClassName("xmas-garlands");
for (var i = 0; i < containers.length; i++) {
  containers[i].innerHTML = [...garland].map((c, i) =>
    `<span class="char${i % 3}">${c}</span>`).join("");
}

// const asciiTree = `
//              * \n
//             /.\\ \n
//            /..'\\ \n
//            /'.'\\ \n
//           /.''.'\\ \n
//           /.'.'.\\ \n
//    "'""""/'.''.'.\""'"'"\n
//      jgs ^^^[_]^^^\n
// `

const asciiTree = `
               * \n
              /.\\ \n
             / . \\ \n
            / ' . \\ \n
           / . . ' \\ \n
          / '  .  ' \\            Merry Christmas Everyone!!\n
         / . ' ' . ' \\ \n
        /  . '  . ' . \\ \n
       / ' . ' ' . ' . \\ \n
        ^^^[_]^^^\n
`
console.log(asciiTree);
const treeElem = document.getElementById("xmas-tree");
treeElem.innerText = asciiTree;
