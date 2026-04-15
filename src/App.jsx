import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// These are placeholder imports. We will create the actual files in the next step.
const Dashboard = () => <div className="p-8"><h2 className="text-2xl font-display text-primary font-bold">Tableau de Bord</h2><p>Vue d'ensemble de l'établissement</p></div>;
const RH = () => <div className="p-8"><h2 className="text-2xl font-display text-primary font-bold">Ressources Humaines</h2><p>Gestion des demandes</p></div>;
const Finance = () => <div className="p-8"><h2 className="text-2xl font-display text-primary font-bold">Gestion Financière</h2><p>Suivi des revenus</p></div>;
const VieScolaire = () => <div className="p-8"><h2 className="text-2xl font-display text-primary font-bold">Vie Scolaire</h2><p>Gestion des élèves</p></div>;
const Documents = () => <div className="p-8"><h2 className="text-2xl font-display text-primary font-bold">Documents Scolaires</h2><p>Certificats et résultats</p></div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* The index route redirects automatically to the dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rh" element={<RH />} />
        <Route path="finance" element={<Finance />} />
        <Route path="vie-scolaire" element={<VieScolaire />} />
        <Route path="documents" element={<Documents />} />
      </Route>
    </Routes>
  );
}

export default App;
