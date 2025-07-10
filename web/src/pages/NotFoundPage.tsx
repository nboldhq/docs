import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "@heroui/react";
import { MoveLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="relative flex flex-col h-screen items-center justify-center w-full px-4 bg-neutral-950 antialiased">
        <div className="max-w-3xl mx-auto text-center space-y-8 z-10">
          <h1 className="flex items-center justify-center text-white text-3xl md:text-6xl font-bold">
            <span className="p-2 rounded-md bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000]">
              Page Under Maintenance
            </span>
          </h1>
          <div className="space-y-6 text-neutral-400 text-base md:text-lg min-h-auto">
            <p className="text-neutral-400 text-justify text-base md:text-lg">
              We’re currently working on this page to provide you with a better experience. Please check back later.
            </p>
                <div className="border-gradient rounded-full inline-block">
                    <Button
                        onClick={handleGoHome}
                        className="flex items-center justify-center px-4 py-2 rounded-full bg-neutral-950 text-white transition-all duration-200 hover:border-white hover:bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000]"
                        >
                        <MoveLeft className="w-5 h-5" />
                    </Button>
                </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
