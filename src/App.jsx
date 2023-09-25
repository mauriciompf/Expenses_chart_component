import Balance from "./components/balance/Balance";
import Data from "./components/data/Data";

export default function App() {
  return (
    <main className="mt-8 grid gap-4 w-[85%] mx-auto font-dm-sans">
      <Balance />
      <Data />
    </main>
  );
}
