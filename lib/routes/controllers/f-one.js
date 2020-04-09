const basic = async(req, res, next) => {
  try {
    console.log('FIRES');
    return res.status(200).json({ data: 'GOOD REQUEST' });
  }
  catch(e) {
    next(e);
  }

};

exports.default = {
  basic
};
