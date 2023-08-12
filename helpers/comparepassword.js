const bcrypt = require('bcrypt');
const comparepasswordfunction = async (password, hashpassword) => {
    try {
        const comparepassword = await bcrypt.compare(password, hashpassword);

        return comparepassword;
    }
    catch (error) {
        console.log('Some technical issue')
    }

}

module.exports = comparepasswordfunction;