import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { ComputerIcon as Microsoft } from 'lucide-react';
import { NBoldIcon } from '../../components/Icons/nBoldIcon';

const LoginPage: React.FC = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { instance } = useMsal();

  const handleMicrosoftLogin = () => {
    setIsLoading(true);
    instance
      .loginRedirect({ scopes: ['User.Read'] })
      .catch(() => {
        setError('Microsoft login failed. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-1.5 mb-8">
          <NBoldIcon className="w-8 h-auto" />
          <span className="font-semibold text-gray-900 dark:text-white text-xl leading-none">Bold</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Docs</span>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-950">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
            Sign in to nBold
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
            Use your Microsoft account to access the dashboard.
          </p>

          <button
            onClick={handleMicrosoftLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc035a] focus-visible:ring-offset-2"
          >
            <Microsoft className="h-4 w-4 text-[#00a4ef]" />
            {isLoading ? 'Signing in...' : 'Continue with Microsoft'}
          </button>

          {error && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
          )}
        </div>

        <p className="mt-6 text-xs text-gray-400 dark:text-gray-600 text-center">
          Copyright © {new Date().getFullYear()} SalesTim SAS.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
