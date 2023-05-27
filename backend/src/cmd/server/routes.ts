import { DependencyInjector } from "../../internal/app/dependency-injector";
import { PHttpHandler } from "../../internal/core/port/http-handler-port";

const express = require("express");

class Router {
  init(app) {
    const dependencies = DependencyInjector.GetInstance().wireDependencies();

    app.get("v1/trails/:studentId", async (req, res) => {
      await dependencies.httpHandler.getTrails(req, res);
    });

    app.get("v1/trail/:studentId", async (req, res) => {
      await dependencies.httpHandler.getTrail(req, res);
    });
    app.post("v1/trail/:studentId", async (req, res) => {
      await dependencies.httpHandler.createTrail(req, res);
    });
    app.post("v1/trail/progress/:studentId", async (req, res) => {
      await dependencies.httpHandler.getTrailProgress(req, res);
    });
  }
}

export const router = new Router();
