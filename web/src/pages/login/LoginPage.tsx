// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardFooter, CardHeader } from "@heroui/react";
import { Github, ComputerIcon as Microsoft } from "lucide-react";
import { useAuth } from '../../contexts/AuthContext';
import { BackgroundBeams } from '../../components/ui/background-beams';
import { NBoldIcon } from '../../components/Icons/nBoldIcon';
import Layout from '../../components/layout/Layout';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard/categorytree');
  };

  return (
    <Layout>
        <div className="relative flex flex-col h-[847px] lg:h-[879px] items-center justify-center w-full px-4 bg-neutral-950 antialiased">
            <div className="border-gradient rounded-md inline-block bg-transparent-80 z-20">
                <Card className="w-full max-w-md shadow-lg bg-neutral-950 rounded-md relative z-20">
                    <CardHeader className="space-y-1 text-2xl    md:text-4xl font-bold text-center py-10 px-12">
                        <h1 className="flex items-center justify-center text-white font-bold">
                        <span className=''>Welcome to</span>
                        <NBoldIcon className="w-10 h-10 md:w-10 md:h-10 ml-2" />
                        <span>Bold</span>
                        </h1>
                    </CardHeader>
                    <div className="px-6 pb-6 space-y-4">
                    <Button
                        className="w-full py-6 text-base"
                        onClick={() => handleLogin("microsoft")}
                        disabled={isLoading}
                    >
                        <div className="flex items-center justify-center gap-2">
                        <Microsoft className="h-5 w-5" />
                        <span>Continue with Microsoft</span>
                        </div>
                    </Button>
                    <Button
                        className="w-full py-6 text-base"
                        onClick={() => handleLogin("github")}
                        disabled={isLoading}
                    >
                        <div className="flex items-center justify-center gap-2">
                        <Github className="h-5 w-5" />
                        <span>Continue with GitHub</span>
                        </div>
                    </Button>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"></span>
                        </div>
                        <span className="relative bg-white rounded-full px-2 text-xs text-muted-foreground">OR</span>
                    </div>
                    <div className="space-y-2">
                        <Button
                        className="w-full py-6 text-white border-gradient"
                        onClick={() => handleLogin("email")}
                        disabled={isLoading}
                        >
                        {isLoading ? "Signing in..." : "Sign in with email"}
                        </Button>
                    </div>
                    </div>
                    <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
                    <div>
                        <a href="/forgot-password" className="underline underline-offset-4 text-gray-500 hover:text-primary">
                        Forgot your password?
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </div>  
            <BackgroundBeams className="z-10" />
        </div>
   </Layout>
  );
};

export default LoginPage;
