import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';

import { Button } from '@/components/ui/Button';
import AuthLayout from '@/components/layout/AuthLayout';
import { AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
             
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
    
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-gray-500">Test accounts:</span>
            <ul className="mt-1 space-y-1">
              <li className="text-blue-600">admin@example.com</li>
              <li className="text-blue-600">vendor@example.com</li>
              <li className="text-blue-600">affiliate@example.com</li>
              <li className="text-gray-500">(password: 123456)</li>
            </ul>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
    
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;