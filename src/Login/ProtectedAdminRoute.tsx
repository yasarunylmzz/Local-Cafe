import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function ProtectedAdminRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user?.email === "localscafe@admin.com") {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    };
    checkAccess();
  }, []);

  if (isAllowed === null) return <div>Kontrol ediliyor...</div>;

  return isAllowed ? children : <Navigate to="/" replace />;
}
