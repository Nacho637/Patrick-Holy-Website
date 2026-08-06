// Vercel Express entry: must literally import "express" (detection regex)
// and stay plain JS so @vercel/node does not TypeScript-emit src/.
import express from "express";
import app from "./dist/create-app.mjs";

if (typeof express !== "function") {
  throw new Error("express failed to load");
}

export default app;
