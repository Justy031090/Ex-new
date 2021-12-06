

// Notice that if each step is not populated by a step it should 
// consist an empty space. For example if n = 3:
// steps(3)
//! n=3
//! ‘# ‘ ←-- 2 empty spaces
//! ‘## ‘ ←-- 1 empty space
//! ‘###’
//! Ninja:



// steps = (n) => {
//     let step = [];
//     for(let i=0; i<n; i++){                       
//         step.push(' ');
//         for(let j=0; j<n; j++){
//             if (i>j){
//                 step.unshift('#')
//                 step.pop()
//             }
//         }
//     }console.log(step.join(''))
// }

// steps(3)


steps = (n) => {
    for(let i=0; i<n; i++){
        let test = ''
            for(let j=0; j<n; j++){
                if (i>=j){
                    test += '#'
                }
                else { test += ' '
            }
            } console.log(test)
        }
        
    }
steps(3)