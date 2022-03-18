const recoverPass = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
      Forgot your password? Don't worry. Click the link below and recover your
      password.
    </p>
    <a href=${frontend_url}/recoverpassword/${link}>Recover Account</a>
</div>`;
};

const activeAccount = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
     Please click the link below and active your account.
    </p>
    <a href=${frontend_url}/active/${link}>Active</a>
</div>`;
};

const adminRecoverPass = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
      Forgot your password? Don't worry. Click the link below and recover your
      password.
    </p>
    <a href=${frontend_url}/admin/recoverpassword/${link}>Recover Account</a>
</div>`;
};

const adminActiveAccount = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
     Please click the link below and active your account.
    </p>
    <a href=${frontend_url}/admin/active/${link}>Active</a>
</div>`;
};

module.exports = {
  recoverPass,
  activeAccount,
  adminRecoverPass,
  adminActiveAccount
};
