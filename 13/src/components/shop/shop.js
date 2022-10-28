import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === '/shop') {
      navigate('products');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default Shop;