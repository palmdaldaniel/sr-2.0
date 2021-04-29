const convertToDateObject = (SRTimeString) => {
    return new Date(
      parseInt(SRTimeString.replace(/[\/\(\)date]/gi, ""))
    ).toLocaleString();
  };

  // See the following link to an excellent regex site: https://regex101.com/
  
  
  const passwordValidator = (password) => {
    let passwordIsValid;
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    // (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,})	The string must be eight characters or longer
    const strongPasword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      passwordIsValid = strongPasword.test(password)
      
      // returns either true or falls depending on if meets the requerirement.
      return  passwordIsValid;  
    }

    const emailValidator = (email) => {

      const emaiIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      return emaiIsValid
    }



    module.exports = {
      convertToDateObject,
      passwordValidator,
      emailValidator
    };
  