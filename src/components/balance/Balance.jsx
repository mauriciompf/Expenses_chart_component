import BalanceValue from "./BalanceValue";
import BalanceLogo from "./BalanceLogo";

export default function Balance() {
  return (
    <section className="flex items-center justify-between rounded-2xl bg-pri-soft-red p-6">
      <BalanceValue amount={921.48} />
      <BalanceLogo />
    </section>
  );
}
