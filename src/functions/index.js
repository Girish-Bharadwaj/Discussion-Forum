import jwt from "jwt-simple";
export const logout = () => {
  localStorage.clear();
};

export const decode = () => {
  const token = localStorage.getItem("token");
  const secretKey = "9!(121%#!67126";
  if (token) {
    const decoded = jwt.decode(token, secretKey);
    if (decoded) {
      return decoded;
    }
  }
};
