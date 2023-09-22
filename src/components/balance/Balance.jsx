import BalanceValue from "./BalanceValue";
import BalanceLogo from "./BalanceLogo";

export default function Balance() {
  return (
    <section>
      <BalanceValue amount={921.48} />
      <BalanceLogo />
    </section>
  );
}
