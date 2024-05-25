import PayComponent from "@/components/PayComponent";
import WithdrawComponent from "@/components/WithdrawComponent";

export default function PagarYRetirarPage() {
  return (
    <main className="h-screen w-screen">
      <div className="grid grid-cols-2 items-center h-screen w-2/3 justify-center m-auto">
        <PayComponent />
        <WithdrawComponent />
      </div>
    </main>
  );
}
