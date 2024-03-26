// import React, {
//   type ChangeEventHandler,
//   useState,
//   useCallback,
// } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { TRecord, post } from "@/shared/api";

// const Form = (): JSX.Element => {
//   const path = usePathname();
//   const router = useRouter();
//   const handleSubmit = useCallback(async (path: string, payload: TRecord) => {
//     try {
//       await post(path, payload);
//       router.push("/");
//     } catch (err) {
//       console.error(err);
//     }
//   }, []);
//   const [formData, setFormData] = useState({});

//   const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
//     (event) => {
//       const { name, value } = event.target;
//       setFormData((prev: any) => ({ ...prev, [name]: value }));
//     },
//     []
//   );
//   return (
//     <div
//       id="container"
//       className={`container ${path === "/register" ? "sign-up" : "sign-in"}`}
//     >
//       <div className="row">
//         <div className="col align-items-center flex-col sign-up">
//           <div className="form-wrapper align-items-center">
//             <div className="form sign-up">
//               <div className="input-group">
//                 <i className="bx bxs-user"></i>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   name="userName"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-group">
//                 <i className="bx bx-mail-send"></i>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-group">
//                 <i className="bx bxs-lock-alt"></i>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="passWord"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-group">
//                 <i className="bx bxs-lock-alt"></i>
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   name="confirmPassWord"
//                   onChange={handleChange}
//                 />
//               </div>
//               <button
//                 onClick={() => {
//                   handleSubmit(path, formData);
//                 }}
//               >
//                 Sign up
//               </button>
//               <p>
//                 <span>Already have an account?</span>
//                 <b
//                   onClick={() => {
//                     router.push("/login");
//                   }}
//                   className="pointer"
//                 >
//                   Sign in here
//                 </b>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col align-items-center flex-col sign-in">
//           <div className="form-wrapper align-items-center">
//             <div className="form sign-in">
//               <div className="input-group">
//                 <i className="bx bxs-user"></i>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   name="userName"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-group">
//                 <i className="bx bxs-lock-alt"></i>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="passWord"
//                   onChange={handleChange}
//                 />
//               </div>
//               <button
//                 onClick={() => {
//                   handleSubmit(path, formData);
//                 }}
//               >
//                 Sign in
//               </button>
//               <p>
//                 <b>Forgot password?</b>
//               </p>
//               <p>
//                 <span>Dont have an account?</span>
//                 <b
//                   onClick={() => {
//                     router.push("/register");
//                   }}
//                   className="pointer"
//                 >
//                   Sign up here
//                 </b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useContext } from 'react'
import {
  // BackgroundImage,
  Space,
  Card,
  Center,
  Container,
  TextInput,
  Button, PasswordInput
} from '@mantine/core'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IconUser, IconLock, IconMail } from '@tabler/icons-react'
import Class from './style.module.scss'
import { SocketContext } from '@/context/socketContext'

const SignUpIn = (): JSX.Element => {
  const path = usePathname()
  const router = useRouter()
  const { connect } = useContext(SocketContext)
  return (
    <Container p={0} m={0} h={'100vh'} miw={'100vw'}>
      <Center h={'100%'}>
        <Card
          w={{ sm: '40%', md: '40%', lg: '400px', xs: '80%' }}
          bg={'transparent'}
          p={'3%'}
        >
          {path === '/login'
            ? <>
              <h3 style={{ fontSize: '23px', fontWeight: '700' }}>Login</h3>
              <Space h={'md'} />
              <TextInput
                radius={'md'}
                className={Class.input}
                placeholder="Name"
                leftSection={<IconUser width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <PasswordInput
                className={Class.input}
                radius={'md'}
                placeholder="Password"
                leftSection={<IconLock width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <Link
                href={'/forgot'}
                className={Class.forgot}
                style={{
                  alignSelf: 'end',
                  fontSize: '14px',
                  color: '#076BB3',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Forgot your password
              </Link>
              <Space h={'md'} />
              <Center miw={'280px'}>
                <Button
                  bg={'#fff'}
                  w={'50%'}
                  opacity={0.9}
                  className={Class.btn}
                  radius={'md'}
                  onClick={() => {
                    router.push('/')
                    connect()
                  }}>
                  Login
                </Button>
              </Center>
              <Center opacity={0.5}>or</Center>
              <Center>Don't have an Account
                <Link
                  href={'/register'}
                  className={Class.forgot}
                  style={{
                    paddingLeft: '5px',
                    color: '#076BB3',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                > Sign-up
                </Link></Center>
            </>
            : <>
              <h3 style={{ fontSize: '23px', fontWeight: '700' }}>Sign Up</h3>
              <Space h={'md'} />
              <TextInput
                type='email'
                radius={'md'}
                className={Class.input}
                placeholder="Email"
                leftSection={<IconMail width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <TextInput
                radius={'md'}
                className={Class.input}
                placeholder="User"
                leftSection={<IconUser width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <PasswordInput
                className={Class.input}
                radius={'md'}
                placeholder="Password"
                leftSection={<IconLock width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <PasswordInput
                className={Class.input}
                radius={'md'}
                placeholder="Confirm password"
                leftSection={<IconLock width={'60%'} height={'60%'} />}
              />
              <Space h={'md'} />
              <Center miw={'280px'}>
                <Button bg={'#fff'} w='50%' opacity={0.9} className={Class.btn} radius={'md'}>
                  Sign up
                </Button>
              </Center>
              <Center opacity={0.5}>or</Center>
              <Center>Already have an Account
                <Link
                  href={'/login'}
                  className={Class.forgot}
                  style={{
                    paddingLeft: '5px',
                    // fontSize: '14px',
                    color: '#076BB3',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                > Sign-in
                </Link></Center>
            </>
          }
        </Card>
      </Center>
      {/* </BackgroundImage> */}
    </Container>
  )
}

export default SignUpIn
