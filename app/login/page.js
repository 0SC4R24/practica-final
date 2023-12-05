// ./app/login/page.js
const LoginPage = () => {
  // Removed useClient since it might not be necessary
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
