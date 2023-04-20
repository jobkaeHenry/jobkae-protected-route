import { rest } from "msw";

export default [
  rest.post("/user/login", (req, res, ctx) => {
    if (req.body.id && req.body.pw) {
      return res(
        ctx.json({
          accessToken: "오늘도 여러분과 함께 성장하는 잡캐헨리입니다",
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),
];
