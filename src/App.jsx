import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";

import('./style/reset.css')
import('./style/App.css')
import('./style/sidestyle.css')
import('./style/profile.css')

export default function App() {
  return (
    <Layout>
        <Home />
    </Layout>
  )
}
