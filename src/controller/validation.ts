import validator from "validator";

class Validation {
  static isInputEmpty = (input: string) => {
     console.log(input,  validator.isEmpty(input))
   return validator.isEmpty(input)
  }

  static validEmail = (email: string) => {
     console.log("valid", validator.isEmail(email));
     return validator.isEmail(email)
  }

  static vailidName = (name :string) => {
   return name.length > 2 
  }

  static validPhone = (input: string) => {
     // eslint-disable-next-line no-useless-escape
   let pattern = new RegExp(/^\+[0-9]{9}$/);
     
     // eslint-disable-next-line no-useless-escape
    return validator.matches( input, pattern)
  }
}

export default Validation