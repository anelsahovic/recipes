import Navbar from './navbar';
import SessionController from './sessionController';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm border-amber-300 text-lg">
      <Navbar />

      <SessionController />
    </header>
  );
}
