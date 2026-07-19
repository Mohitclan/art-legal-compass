import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import Index from "./pages/Index";

// Code-split every non-home route so LCP on the homepage stays untouched.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const LegalActsPage = lazy(() => import("./pages/LegalActsPage"));
const AssociatedCentersPage = lazy(() => import("./pages/AssociatedCentersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SurrogacyLawPage = lazy(() => import("./pages/services/SurrogacyLawPage"));
const IvfLegalServicesPage = lazy(() => import("./pages/services/IvfLegalServicesPage"));
const ArtActCompliancePage = lazy(() => import("./pages/services/ArtActCompliancePage"));
const PcPndtCompliancePage = lazy(() => import("./pages/services/PcPndtCompliancePage"));
const ForeignIntendedParentsPage = lazy(
  () => import("./pages/services/ForeignIntendedParentsPage")
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/surrogacy-law" element={<SurrogacyLawPage />} />
              <Route path="/services/ivf-legal-services" element={<IvfLegalServicesPage />} />
              <Route path="/services/art-act-compliance" element={<ArtActCompliancePage />} />
              <Route path="/services/pc-pndt-compliance" element={<PcPndtCompliancePage />} />
              <Route
                path="/services/foreign-intended-parents"
                element={<ForeignIntendedParentsPage />}
              />
              <Route path="/legal-acts" element={<LegalActsPage />} />
              <Route path="/associated-centers" element={<AssociatedCentersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
