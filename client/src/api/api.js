import request from "@/utils/request";

export const login = (username: string, password: string) =>
  request({
    url: "/user/login",
    method: "post",
    data: {
      username,
      password
    }
  });
