import { response, request } from "express";

const usersGet = (req, res) => {
	const { q, name="Default", apikey } = req.query;
	res.json({
		msg: "get Api - controller",
		q,
		name,
		apikey,
	});
};

const usersPost = (req, res) => {
	const { name, age } = req.body;

	res.json({
		msg: "Post Api - controller",
		name,
		age,
	});
};

const usersPut = (req, res) => {
	const id = req.params.id;
	res.json({
		msg: "Put Api - controller",
		id,
	});
};

const usersPatch = (req, res) => {
	res.json({
		msg: "Patch Api - controller",
	});
};

const usersDelete = (req, res) => {
	res.json({
		msg: "Delete Api - controller",
	});
};

export { usersGet, usersPut, usersPost, usersPatch, usersDelete };
