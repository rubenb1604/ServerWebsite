import Grindmad from "@/components/Grindmad";
import Header from "@/components/header2";

const mods = () => {
	return (
		<div>
			<Header />
			<div className="mt-16 ml-24 mr-24">
				<div className="p-8 flex flex-col gap-2">
					<div className="flex flex-col gap-2">
						<span className="text-white text-4xl font-extrabold">
							Allowed Mods:
						</span>
						<p className="font-bold text-gray-400 text-xl">
							Diese Fabric Mods sind auf dem SMP3 Server erlaubt. Fragen auf dem
							Discord.
						</p>
					</div>
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">Basic:</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/FabricAPI.webp"
									title="Fabric API"
									sub="Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain."
									link="https://modrinth.com/mod/fabric-api"
								/>
								<Grindmad
									img="img/ClothConfig.webp"
									title="Cloth Config API"
									sub="Configuration Library for Minecraft Mods"
									link="https://modrinth.com/mod/cloth-config"
								/>
								<Grindmad
									img="img/TextAPI.webp"
									title="Text Placeholder API"
									sub="Placeholder and Text manipulation library for your Minecraft mods."
									link="https://modrinth.com/mod/placeholder-api"
								/>
							</div>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/YACL.webp"
									title="YetAnotherConfigLib (YACL)"
									sub="A builder-based configuration library for Minecraft."
									link="https://modrinth.com/mod/yacl"
								/>
								<Grindmad
									img="img/Menu.webp"
									title="Mod Menu"
									sub="Adds a mod menu to view the list of mods you have installed."
									link="https://modrinth.com/mod/modmenu"
								/>
								<div className="w-1/3"></div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">
								Performance:
							</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Sodium.webp"
									title="Sodium"
									sub="The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!"
									link="https://modrinth.com/mod/sodium"
								/>
								<Grindmad
									img="img/Lithium.webp"
									title="Lithium"
									sub="No-compromises game logic/server optimization mod"
									link="https://modrinth.com/mod/distanthorizons"
								/>
								<Grindmad
									img="img/Entity Culling.webp"
									title="Entity Culling"
									sub="Using async path-tracing to hide Block-/Entities that are not visible"
									link="https://modrinth.com/mod/entityculling"
								/>
							</div>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Extra.webp"
									title="Sodium Extra"
									sub="A Sodium addon that adds features that shouldn't be in Sodium."
									link="https://modrinth.com/mod/sodium-extra"
								/>
								<Grindmad
									img="img/Iris.webp"
									title="Iris Shaders"
									sub="A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs"
									link="https://modrinth.com/mod/iris"
								/>
								<div className="w-1/3"></div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">
								Better Render Distance:
							</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Nvidium.webp"
									title="Nvidium"
									sub="Fast nvidia only rendering engine for sodium!"
									link="https://modrinth.com/mod/nvidium"
								/>
								<Grindmad
									img="img/Bobby.webp"
									title="Bobby"
									sub="Allows for render distances greater than the server's view-distance"
									link="https://modrinth.com/mod/bobby"
								/>
								<Grindmad
									img="img/DistantHorizons.webp"
									title="Distant Horizons"
									sub="See farther without turning your game into a slide show"
									link="https://modrinth.com/mod/distanthorizons"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">
								Minimap:
							</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Minimap.webp"
									title="Xaero's Minimap"
									sub="Displays a map of the nearby world terrain, players, mobs, entities in the corner of your screen. Lets you create waypoints which help you find the locations you've "
									link="https://modrinth.com/mod/xaeros-minimap"
								/>
								<Grindmad
									img="img/Worldmap.webp"
									title="Xaero's World Map"
									sub="Adds a full screen world map which shows you what you have explored in the world. Works great together with Xaero's Minimap."
									link="https://modrinth.com/mod/xaeros-world-map"
								/>
								<div className="w-1/3"></div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">
								Helpful:
							</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Tooltip.webp"
									title="Shulker Box Tooltip"
									sub="View the contents of shulker boxes from your inventory"
									link="https://modrinth.com/mod/shulkerboxtooltip"
								/>
								<Grindmad
									img="img/Zoom.webp"
									title="Zoomify"
									sub="A zoom mod with infinite customizability."
									link="https://modrinth.com/mod/zoomify"
								/>
								<Grindmad
									img="img/Gamma.webp"
									title="Gamma Utils (Fullbright)"
									sub="Gamma / Brightness / Night Vision mod, making it easy to see in the dark. Basically Fullbright for Fabric."
									link="https://modrinth.com/mod/gamma-utils"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-white text-2xl font-extrabold">Other:</span>
							<div className="flex justify-between w-full gap-4">
								<Grindmad
									img="img/Flashback.webp"
									title="Flashback"
									sub="Record your Minecraft gameplay, play it back and create stunning cinematic shots"
									link="https://modrinth.com/mod/flashback"
								/>
								<Grindmad
									img="img/Patches.webp"
									title="Euphoria Patches"
									sub="Euphoria Patches is an add-on for Complementary Shaders, extending it with more optional features and settings."
									link="https://modrinth.com/mod/euphoria-patches"
								/>
								<div className="w-1/3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default mods;

/*
<Grindmad
						img="img/DistantHorizons.webg"
						title="Distant Horizons"
						sub="See farther without turning your game into a slide show"
						link="https://modrinth.com/mod/distanthorizons"
					/>
*/
