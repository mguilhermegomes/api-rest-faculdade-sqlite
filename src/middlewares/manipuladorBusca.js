const { Op } = require("sequelize");

module.exports = (camposPermitidos, camposParcias = []) => {
  return (req, res, next) => {
    const busca = {};

    camposPermitidos.forEach((campo) => {
      const campoQuery = req.query[campo];
      
      if (campoQuery === undefined || campoQuery === "") return;

      if (!isNaN(Number(campoQuery))) {
        busca[campo] = Number(campoQuery);
        return;
      }

      if (camposParcias.includes(campo)) {
        busca[campo] = {
          [Op.like]: `%${campoQuery}%`,
        };
        return;
      }

      busca[campo] = campoQuery;
    }); 

    req.busca = busca;
    next();
  };
};