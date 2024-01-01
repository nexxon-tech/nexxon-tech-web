import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export function GET(request: Request) {
  return Response.json({ name: "Niraj Kumar" });
}