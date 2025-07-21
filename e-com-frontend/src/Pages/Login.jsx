import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const passwordPattern = /^[A-Z][a-zA-Z]*[!@#$%^&*0-9]+$/;

    if (!password) {
      setPasswordError("Password is required");
      return;
    } else if (!passwordPattern.test(password)) {
      setPasswordError("Start with uppercase, end with symbol/number");
      return;
    }

    setPasswordError(""); // Clear error if valid
    alert(`${currentState} Successful`);
    // Submit logic here
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-95 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Full Name for Sign Up only */}
      {currentState === 'Login' ? null : (
        <input
          type="text"
          className="w-full px-3 py-3 border border-gray-800"
          placeholder="Full Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-3 border border-gray-800"
        placeholder="Email"
        required
      />

      {/* Password Field with Toggle + Live Validation */}
      <div className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            const value = e.target.value;
            setPassword(value);

            const pattern = /^[A-Z][a-zA-Z]*[!@#$%^&*0-9]+$/;
            if (!value) {
              setPasswordError("Password is required");
            } else if (!pattern.test(value)) {
              setPasswordError("Apply a generic password format");
            } else {
              setPasswordError("");
            }
          }}
          className="w-full px-3 py-3 border border-gray-800 pr-16"
          placeholder="Password"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-sm cursor-pointer text-gray-600"
        >
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>

      {/* Error Message */}
      {passwordError && (
        <p className="text-red-600 text-sm w-full mt-[-6px]">{passwordError}</p>
      )}

      {/* Footer Links */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget password</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="py-2 px-8 mt-4 bg-black text-white font-light">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
