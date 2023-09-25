import BalanceValue from "./BalanceValue";
import BalanceLogo from "./BalanceLogo";

export default function Balance() {
  return (
    <section className="bg-pri-soft-red rounded-xl p-4 flex justify-between items-center">
      <BalanceValue amount={921.48} />
      <BalanceLogo />
    </section>
  );
}
