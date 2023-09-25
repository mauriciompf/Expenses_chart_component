export default function BalanceValue({ amount }) {
  return (
    <p className="text-white">
      <span className="block">My balance</span>
      <span className="block font-bold text-2xl">${amount.toFixed(2)}</span>
    </p>
  );
}
