import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { login } from '../redux/actions/authActions';
import { login_bg2 } from '../assets/admin/adminicon';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { user, error } = useSelector((state: any) => state.auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (user) {
      if (user.user.role === 'sup-admin') {
        router.push('/super-admin/dashboard');
      } else if (user.user.role === 'admin') {
        router.push('/admin/admin-dashboard');
      }
    }
  }, [user, router]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Image
        src={login_bg2.src} // replace with your background image path
        alt="Background"
        layout="fill"
        className="absolute inset-0 object-cover opacity-100"
      />
      <div className="relative w-full max-w-md p-8 backdrop-blur-md rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <TextField
              label="UserName"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={username}
              onChange={handleUsernameChange}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white', borderColor: 'white' },
                classes: {
                  root: 'bg-transparent border-white rounded-lg focus:outline-none focus:border-blue-500',
                },
              }}
            />
          </div>
          <div className="relative">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white', borderColor: 'white' },
                classes: {
                  root: 'bg-transparent border-white rounded-lg focus:outline-none focus:border-blue-500',
                },
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <FormControlLabel
              control={<Checkbox className="text-blue-500" />}
              label="Remember me"
              className="text-white"
            />
            <Link href="#">
              <span className="text-blue-500 hover:underline">Forgot password?</span>
            </Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </Button>
          <div className="text-center text-white">
            <p>
              Don't have an account?{' '}
              <Link href="/SignUp">
                <span className="text-blue-500 hover:underline">Register</span>
              </Link>
            </p>
          </div>
        </form>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
