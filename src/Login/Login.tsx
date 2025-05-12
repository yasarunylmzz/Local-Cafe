import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient"; // Adjust the import path as necessary

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        // If there's a session, redirect based on the user authentication logic
        const userEmail = data.session.user.email;
        if (userEmail === "localscafe@admin.com") {
          navigate("/admin/panel");
        } else {
          navigate("/");
        }
      }
    };

    checkUserSession();
  }, [navigate]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Giriş başarısız: " + error.message);
      return;
    }

    if (data?.user?.email === "localscafe@admin.com") {
      console.log("Admin giriş yapıldı");
      navigate("/admin/panel");
    } else {
      console.log("Kullanıcı giriş yapıldı");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-white py-4 border-b">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Local's Cafe
          </h2>
          <p className="text-center text-gray-500 italic">
            Kahvenin en güzel hali
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Giriş Yap
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="ornek@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Şifre
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
              >
                Giriş Yap
              </button>
            </div>
          </form>

          <div className="text-center text-gray-600 text-sm mt-6">
            <p>Local's Cafe © 2023</p>
            <p className="mt-1 italic text-xs">En iyi kahve deneyimi için</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
