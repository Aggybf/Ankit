// AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Fancy from "./Fancy";
import BgminameCreate from "./BgminameCreate";
import NotFound from "./NotFound";
import FortniteNameGenerator from "./FortniteNameGenerator";
import ApexLegendsNameGenerator from "./ApexLegendsNameGenerator";
import DestinyNameGenerator from "./DestinyNameGenerator";
import RocketLeagueNameGenerator from "./RocketLeagueNameGenerator";
import GtaVnamegenerator from "./GtaVnamegenerator";
import AmongUsnamegenerator from "./AmongUsnamegenerator";
import WorldWarcraftnamegenerator from "./WorldWarcraftnamegenerator";
import CODnamegenerator from "./CODnamegenerator";
import Valorantnamegenerator from "./Valorantnamegenerator";
import Robloxnamegenerator from "./Robloxnamegenerator";
import Hearthstonenamegenerator from "./Hearthstonenamegenerator";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Fancy />} />
      <Route path="/bgmi-name-create" element={<BgminameCreate />} />
      <Route
        path="/rocket-leaguename-generator"
        element={<RocketLeagueNameGenerator />}
      />
      <Route path="/GtaV-name-generator" element={<GtaVnamegenerator />} />
      <Route
        path="/among-us-name-generator"
        element={<AmongUsnamegenerator />}
      />
      <Route
        path="/worldwar-craft-name-generator"
        element={<WorldWarcraftnamegenerator />}
      />
      <Route path="/cod-name-generator" element={<CODnamegenerator />} />
      <Route
        path="/valorant-name-generator"
        element={<Valorantnamegenerator />}
      />
      <Route path="/roblox-name-generator" element={<Robloxnamegenerator />} />
      <Route
        path="/hearth-stonename-generator"
        element={<Hearthstonenamegenerator />}
      />
      <Route
        path="/destiny-name-generator"
        element={<DestinyNameGenerator />}
      />
      <Route
        path="/fortnite-name-generator"
        element={<FortniteNameGenerator />}
      />
      <Route
        path="/apex-legends-name-generator"
        element={<ApexLegendsNameGenerator />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
