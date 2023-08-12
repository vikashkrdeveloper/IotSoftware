const database = require('../modules/registerschema');
const conformpasswordfunction = require('../helpers/comparepassword');
const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findemail = await database.findOne({ email });
        if (email, password) {
            if (findemail) {
                const conformpassword = await conformpasswordfunction(password, findemail.password);
                if (conformpassword) {
                    const token = await findemail.generatetoken();
                    res.cookie('jwttokens', token)
                    res.status(200).send('Login Sucessfully');

                }
                else {
                    res.status(403).send('Invalid login details');

                }

            }
            else {
                res.status(402).send('Invalid login details');
            }

        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('Some technical issue' + error);
    }
}
module.exports = logincontroller