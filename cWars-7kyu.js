// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.


const initials = (n) => {
    let nameArr = n.split(' ')
    let initialsName = []

    for (let i = 0; i < nameArr.length - 1; i++) {
        initialsName.push(nameArr[i][0].toUpperCase())
        initialsName.push('.')
    }

    let lastName = nameArr[nameArr.length - 1].split('')
    lastName.splice(0, 1, lastName[0].toUpperCase())
    let finalLastName = lastName.join('')

    initialsName.push(finalLastName)

    return initialsName.join('')
}


console.log(initials('Barack hussain obama')) //'B.H.Obama'