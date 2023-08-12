const database = require('../modules/registerschema');
const hashpasswordfunction = require('../helpers/hash');
const registrationcontroller = async (req, res) => {
    try {
        const { name, email, password, username, phone, conformpassword } = req.body;
        const findemail = await database.findOne({ email });
        const findusername = await database.findOne({ username });
        const findphone = await database.findOne({ phone });
        if (name, email, password, username, phone, conformpassword) {

            if (findemail) {
                res.status(400).send('Email id already exist');

            }
            else {
                if (findusername) {
                    res.status(401).send('User name already exist');

                }
                else {
                    if (findphone) {
                        res.status(402).send('Phone number already register');

                    }
                    else {
                        if (password === conformpassword) {
                            const hashpassword = await hashpasswordfunction(password);
                            const insterdata = new database({ name, email, password: hashpassword, username, phone });
                            await insterdata.save();
                           
                            res.status(200).send('Registration Sucessfully');
                        }
                        else {
                            res.status(403).send('Password and conform password are not matched');

                        }

                    }
                }
            }
        }
        else {
            res.status(500).send('All field Require');
        }

    }
    catch (error) {
        res.status(404).send('Some Technical issue');
    }

}
module.exports = registrationcontroller;