export default function useAuth() {
  const admin = localStorage.getItem("admin");
  const password = localStorage.getItem("password");
  let auth = false;
  if (admin === "kodluyoruz" && password === "bootcamp159") auth = true;
  return auth;
}
