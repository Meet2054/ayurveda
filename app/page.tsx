import Image from "next/image";
import Dashboard from "./dashboard/page";
import PaymentSuccess from "./payment/success";
import PaymentFailed from "./payment/failure";


export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
