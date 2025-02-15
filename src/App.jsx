import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-image-lightbox/style.css';
import router from './router/route';
import { RouterProvider } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
