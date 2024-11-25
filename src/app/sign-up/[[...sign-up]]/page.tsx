// import { SignUp } from "@clerk/nextjs";

// export default function Page() {
//     return (
//         <>

//             <div className="flex justify-center p-5">
//                 <SignUp />
//             </div>

//         </>
//     )
// }

import AuthModal from '../../components/common/AuthModal';

export default function SignUpPage() {
    return <AuthModal />;
}