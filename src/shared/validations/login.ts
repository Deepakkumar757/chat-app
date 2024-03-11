// import ajv from '../ajv'
// import type { JSONSchemaType } from 'ajv'
// interface TLogin {
//   userName: string
//   passWord: string
// }
// export const login: JSONSchemaType<TLogin> = {
//   type: 'object',
//   properties: {
//     userName: {
//       type: 'string',
//       nullable: false,
//       minLength: 1
//     },
//     passWord: { type: 'string', format: 'password' }
//   },
//   required: ['passWord', 'userName'],
//   errorMessage: {
//     properties: {
//       userName: 'Please Enter Valid UserName',
//       passWord: 'Please Enter Valid Password'
//     }
//   },
//   additionalProperties: false
// }

// const Login = (data: object, schema: JSONSchemaType<TLogin> = login): any => {
//   const validate = ajv.compile(schema)
//   const isValid = validate(data)
//   return { isValid, error: validate.errors }
// }
// export default Login
