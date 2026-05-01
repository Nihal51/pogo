export default function PressableButton({ children, onClick }) {
  return (
    <button className='db-button' onClick={onClick}>
      {children}
    </button>
  );
}
