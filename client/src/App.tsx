/** Application shell follows the "طقوس العناية الهادئة" design system defined in index.css. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Booking from "./pages/Booking";
import DoctorDetail from "./pages/DoctorDetail";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

function AppRoutes() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/booking" component={Booking} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/doctors/:slug" component={DoctorDetail} />
        <Route path="/404" component={NotFound} />
        {/* GitHub Pages serves the application shell for static fallback paths. */}
        <Route component={Home} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
