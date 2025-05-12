import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">My Application</div>
      <div className="space-x-4">
        <Link
          to={"/admin/panel/categories"}
          className="px-4 py-2 rounded transition-transform transform hover:scale-105 "
        >
          📂 Kategoriler
        </Link>
      </div>
    </div>
  );
}
