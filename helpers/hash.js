const bcrypt = require('bcrypt');
const hashingfunction = async (password) => {
    try {
        const salt=12;
        const hashpassword = await bcrypt.hash(password,salt);
        return hashpassword;
    }
    catch (error) {
        console.log('Some technical issue')
    }

}

module.exports = hashingfunction;