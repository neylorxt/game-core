import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CoreServices from "./components/core-services";
import GameDashboard from "./components/game-dashboard";
import Matchmaking from "./components/matchmaking";
import PlayerManagement from "./components/player-management";
import MultiplayerServers from "./components/multiplayer-servers";
import Sdk from "./components/sdk";
import Api from "./components/api";
import Analytics from "./components/analytics";
import GlobalInfrastructure from "./components/global-infrastructure";
import Security from "./components/security";
import Pricing from "./components/pricing";
import DocsCta from "./components/docs-cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <GameDashboard />
        <Matchmaking />
        <PlayerManagement />
        <MultiplayerServers />
        <Sdk />
        <Api />
        <Analytics />
        <GlobalInfrastructure />
        <Security />
        <Pricing />
        <DocsCta />
      </main>
      <Footer />
    </div>
  );
}
