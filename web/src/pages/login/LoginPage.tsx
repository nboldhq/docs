import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardFooter, CardHeader, Input } from "@heroui/react";
import { useMsal } from '@azure/msal-react';
import { BackgroundBeams } from '../../components/ui/background-beams';
import { NBoldIcon } from '../../components/Icons/nBoldIcon';
import { ComputerIcon as Microsoft } from "lucide-react";
import Layout from '../../components/layout/Layout';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleMicrosoftLogin = () => {
    setIsLoading(true);
    instance
      .loginPopup({
        scopes: ["User.Read"],
      })
      .then((response) => {
        instance.setActiveAccount(response.account);
        navigate('/dashboard/categorytree');
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("Microsoft login failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = () => {
    setError("Please use Microsoft login.");
  };

  return (
    <Layout>
      <div className="relative flex flex-col h-[847px] lg:h-[913px] items-center justify-center w-full px-4 bg-neutral-950 antialiased">
        <div className="border-gradient rounded-md inline-block bg-transparent-80 z-20">
          <Card className="w-full max-w-md shadow-lg bg-neutral-950 rounded-md relative z-20">
            <CardHeader className="space-y-1 text-2xl md:text-4xl font-bold text-center py-10 px-12">
              <h1 className="flex items-center justify-center text-white font-bold">
                <span>Welcome to</span>
                <NBoldIcon className="w-10 h-10 md:w-10 md:h-10 ml-2" />
                <span>Bold</span>
              </h1>
            </CardHeader>
            <div className="px-6 pb-6 space-y-4">
              <Input
                className="w-full pl-2 border border-gray-500 text-white rounded-full"
                label="Email"
                type="email"
                variant='dark'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled
              />
              <Input
                className="w-full pl-2 border border-gray-500 text-white rounded-full"
                label="Password"
                variant='dark'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                className="w-full py-6 text-white border-gradient"
                onClick={handleLogin}
                disabled
              >
                Connexion
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <span className="relative bg-white rounded-full px-2 text-xs text-muted-foreground">OR</span>
            </div>
            <Button
              className="w-64 py-6 mx-24 my-4 text-base"
              onClick={handleMicrosoftLogin}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-2">
                <Microsoft className="h-5 w-5" />
                <span>Continue with Microsoft</span>
              </div>
            </Button>
            <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
              <div>
                <a href="/forgot-password" className="underline underline-offset-4 text-gray-500 hover:text-primary">
                  Mot de passe oublié ?
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