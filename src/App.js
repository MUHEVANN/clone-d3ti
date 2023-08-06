import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ProfilePage from "./Pages/Profile/index";
import Footer from "./components/Footer";
import KonsenPage from "./Pages/Konsentrasi/index";
import AkademikPage from "./Pages/Akademik/index";
function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/sejarah" element={<ProfilePage.Sejarah />} />
        <Route path="/profile/visi-misi" element={<ProfilePage.VisiMisi />} />
        <Route
          path="/profile/pengelola-prodi"
          element={<ProfilePage.PengelolaProdi />}
        />
        <Route
          path="/profile/kompetensi-kelulusan"
          element={<ProfilePage.Kompetensi />}
        />
        <Route
          path="/profile/deskripsi-prodi"
          element={<ProfilePage.DeskripsiProdi />}
        />
        <Route
          path="/profile/contact-prodi"
          element={<ProfilePage.ContactProdi />}
        />
        <Route
          path="/konsentrasi/networking"
          element={<KonsenPage.Jaringan />}
        />
        <Route
          path="/konsentrasi/web-development"
          element={<KonsenPage.Web />}
        />
        <Route path="/konsentrasi/animation" element={<KonsenPage.Animasi />} />
        <Route
          path="/akademik/kalender-akademik"
          element={<AkademikPage.Kalender />}
        />
        <Route path="/akademik/krs" element={<AkademikPage.Krs />} />
        <Route
          path="/akademik/kurikulum"
          element={<AkademikPage.Kurikulum />}
        />
        <Route
          path="/akademik/buku-panduan"
          element={<AkademikPage.BukuPanduan />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
