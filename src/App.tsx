import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Facilities from "@/pages/Facilities";
import Rooms from "@/pages/Rooms";
import Gallery from "@/pages/Gallery";
import Dining from "@/pages/Dining";
import Deals from "@/pages/Deals";
import Overview from "@/pages/Overview";
import NotFound from "@/pages/NotFound";
import WhatsAppButton from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
