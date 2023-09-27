import Balance from "./components/balance/Balance";
import Data from "./components/data/Data";

export default function App() {
  return (
    <main className="mx-auto grid w-[min(85%,_430px)] gap-4 font-dm-sans max-[400px]:w-full">
      <Balance />
      <Data />
    </main>
  );
}
