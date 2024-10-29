const bases = {
  user: "users",
  role: "roles",
  auth: "auth",
};

const user = {
  base: bases.user,
  // activateAccount: `${bases.user}/activateAccount`,
  // sendEmailVerification: `${bases.user}/sendEmailVerification`,
  // sendPasswordReset: `${bases.user}/sendPasswordReset`,
  // resetPassword: `${bases.user}/resetPassword`,
  // account: `${bases.user}/account`,
  searchUser: `${bases.user}/search`,
};

const auth = {
  base: bases.auth,
  signUp: `${bases.auth}/register`,
  login: `${bases.auth}/login`,
  refreshToken: `${bases.auth}/refresh-token`,
};

const role = {
  base: bases.role,
  // grantList: `${bases.role}/grantList`,
};

const apiRoutes = {
  user,
  role,
  auth,
};

export default apiRoutes;
