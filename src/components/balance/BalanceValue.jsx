export default function BalanceValue({ amount }) {
  return (
    <p className="text-white">
      <span className="block text-sm text-neu-very-pale-orange">
        My balance
      </span>
      <span className="block text-2xl font-bold">${amount.toFixed(2)}</span>
    </p>
  );
}
