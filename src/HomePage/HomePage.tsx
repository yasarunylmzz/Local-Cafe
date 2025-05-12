import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleQrMenuClick = () => {
    navigate("/qr-menu");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-10 drop-shadow-lg">
          Locals Cafe
        </h1>
        <button
          className="bg-purple-700 text-white py-3 px-6 text-lg rounded transition duration-300 ease-in-out hover:bg-pink-600"
          onClick={handleQrMenuClick}
        >
          QR Menu
        </button>
      </div>
    </div>
  );
}

export default HomePage;
