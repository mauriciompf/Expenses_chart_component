export default function BalanceValue({ amount }) {
  return (
    <p>
      <span className="block">My balance</span>
      <span className="block">${amount.toFixed(2)}</span>
    </p>
  );
}
