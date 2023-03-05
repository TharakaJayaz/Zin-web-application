import * as React from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <Link to="/admin/temp_reps">
        <button>Admin</button>
      </Link>
      <Link to="/stock_keeper">
        <button>Stock keeper</button>
      </Link>
    </div>
  );
};

export default SignInPage;
