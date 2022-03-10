const { request, response } = require('express');

const getUser = (req = request, res = response) => {

  const { name } = req.query;

  res.json({
    msg: 'get API controlador',
  });
}

const postUser = (req = request, res = response) => {

  const body = req.body;
  res.json({
    msg: 'post API controlador',
    body
  });
}

const putUser = (req = request, res = response) => {
  const id = req.params.id;
  
  res.json({
    msg: 'put API controlador',
    id
  });
}

const deleteUser = (req, res = response) => {
  res.json({
    msg: 'delete API controlador'
  });
}






module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
}