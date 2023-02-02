import * as Routers from "../components";

const routes = [
	["user", Routers.userRouter],
	["pet", Routers.petRouter],
];

export const router = (app:any) => {
	routes.forEach(([path, controller]) => {
		app.use(`/api/v1/${path}`, controller)});
};